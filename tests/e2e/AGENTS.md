# E2E 自动化测试文档

本文档是 E2E 测试的完整说明，包含每个测试的具体流程、运行方式和扩展指南。

---

## 目录

- [运行方式](#运行方式)
- [测试清理机制](#测试清理机制)
- [测试流程详解](#测试流程详解)
  - [1. 公共页面冒烟测试](#1-公共页面冒烟测试)
  - [2. 认证流程测试](#2-认证流程测试)
  - [3. 权限控制测试](#3-权限控制测试)
  - [4. 仪表盘测试](#4-仪表盘测试)
  - [5. 定价页测试](#5-定价页测试)
  - [6. AI 功能页测试](#6-ai-功能页测试)
  - [7. Stripe 支付流程测试](#7-stripe-支付流程测试)
  - [8. 个人资料更新测试](#8-个人资料更新测试)
  - [9. 修改密码测试](#9-修改密码测试)
  - [10. 语言切换测试](#10-语言切换测试)
  - [11. 上传页测试](#11-上传页测试)
  - [12. 管理员面板测试](#12-管理员面板测试)
- [架构与约定](#架构与约定)
- [待实现的测试](#待实现的测试)
- [如何添加新测试](#如何添加新测试)
- [测试结果追踪](#测试结果追踪)

---

## 运行方式

> 两个应用使用同一端口 7001，**不并行**，先测 Next.js 再测 Nuxt.js。

```bash
# ① 启动开发服务器（选一个）
pnpm dev:next     # Next.js
pnpm dev:nuxt     # Nuxt.js

# ② 如果要跑 Stripe 支付测试，另开终端启动 webhook 转发
stripe listen --forward-to localhost:7001/api/payment/webhook/stripe

# ③ 运行全部 E2E 测试
pnpm test:e2e

# ④ 或使用可视化 UI 模式（调试用）
pnpm test:e2e:ui
```

---

## 测试清理机制

- 所有测试用户的邮箱格式为 `e2e-xxx-{timestamp}@example.com`
- 测试结束后，`global-teardown.ts` 会自动连接数据库，删除 `email LIKE 'e2e-%@example.com'` 的用户
- 由于数据库外键设置了 `ON DELETE CASCADE`，删除用户会自动级联删除：
  - `account` 认证账户
  - `session` 会话
  - `order` 订单
  - `subscription` 订阅
  - `credit_transaction` 积分流水

---

## 测试流程详解

### 1. 公共页面冒烟测试

**文件：** `specs/public-pages.spec.ts` ｜ **优先级：** P0 ｜ **无需登录**

最基础的健全性检查，验证公共页面能正常打开、不报错。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 首页加载 | 打开 `/en` → 验证页面标题不含 error/500/404 → 验证 `<header>` 和 `<nav>` 可见 → 验证首屏 `<h1>` 标题可见 |
| 2 | 登录页加载 | 打开 `/en/signin` → 验证邮箱输入框、密码输入框、提交按钮均可见 |
| 3 | 注册页加载 | 打开 `/en/signup` → 验证姓名输入框（`#name`）、邮箱输入框、密码输入框、提交按钮均可见 |
| 4 | 忘记密码页加载 | 打开 `/en/forgot-password` → 验证邮箱输入框可见 → 验证表单内按钮可见 |
| 5 | 定价页加载 | 打开 `/en/pricing` → 验证标题不含错误 → 验证至少有一个含 ¥ 或 $ 价格的元素可见 |

---

### 2. 认证流程测试

**文件：** `specs/auth-flow.spec.ts` ｜ **优先级：** P0

完整的 注册 → 登录 → 登出 → 重定向 生命周期测试。

#### 注册组

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | UI 表单注册 | 打开注册页 → 填写姓名/邮箱/密码 → 点击提交 → 等待 URL 离开 `/signup`（即注册成功后自动跳转） |
| 2 | API 注册 | 通过 `POST /api/auth/sign-up/email` 直接创建用户 → 验证返回 200 → 验证响应体包含 `user.email` |

#### 登录 / 登出 / 重定向组

> 这组测试共用一个用户账号（在 `beforeAll` 中通过 API 注册一次），避免频繁注册触发限流。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 3 | UI 表单登录 | 打开登录页 → 填写邮箱/密码 → 点击提交 → 等待 URL 离开 `/signin` |
| 4 | API 登录 | 通过 `POST /api/auth/sign-in/email` 登录 → 验证返回 200 |
| 5 | 登出后无法访问仪表盘 | 先 API 登录 → 访问仪表盘确认可进入 → 调用 API 登出 → 再次访问仪表盘 → 验证被重定向到 `/signin` |
| 6 | 已登录用户访问 /signin 重定向到 /dashboard | API 登录 → 访问 `/signin` → 验证被自动重定向到 `/dashboard` |
| 7 | 已登录用户访问 /signup 重定向到 /dashboard | API 登录 → 访问 `/signup` → 验证被自动重定向到 `/dashboard` |

---

### 3. 权限控制测试

**文件：** `specs/access-control.spec.ts` ｜ **优先级：** P0

验证保护页面的访问控制：未登录 → 重定向，无权限 → 403。

#### 未认证访问组

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | /dashboard 重定向 | 未登录访问 `/dashboard` → 验证 URL 包含 `/signin` |
| 2 | /upload 重定向 | 未登录访问 `/upload` → 验证 URL 包含 `/signin` |
| 3 | /admin 重定向 | 未登录访问 `/admin` → 验证 URL 包含 `/signin` |
| 4 | /premium-features 重定向 | 未登录访问 `/premium-features` → 验证 URL 包含 `/signin` |

#### 已认证非管理员访问组

> 共用一个普通用户账号（`beforeAll` 注册）。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 5 | 普通用户访问 /admin 返回 403 | API 登录普通用户 → 访问 `/admin` → 验证返回 HTTP 403 或重定向到 signin |
| 6 | 普通用户可以访问 /dashboard | API 登录普通用户 → 访问 `/dashboard` → 验证停留在仪表盘页面 |

---

### 4. 仪表盘测试

**文件：** `specs/dashboard.spec.ts` ｜ **优先级：** P1

验证仪表盘页面功能，包括用户信息展示和标签页导航。

> 所有测试共用一个浏览器上下文（避免限流），按串行顺序执行。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 仪表盘加载并显示用户信息 | API 注册并登录 → 访问 `/dashboard` → 验证 URL 正确 → 验证 `<h1>` 可见 → 验证用户名显示在页面上 |
| 2 | 个人资料标签页显示邮箱和姓名 | 访问 `/dashboard` → 等待加载完成 → 验证用户姓名和邮箱都显示在页面上 |
| 3 | 可以在标签页之间导航 | 访问 `/dashboard` → 获取所有标签按钮 → 验证数量 > 1 → 点击第二个标签 → 验证未离开 dashboard 页面 |

---

### 5. 定价页测试

**文件：** `specs/pricing.spec.ts` ｜ **优先级：** P1 ｜ **无需登录**

验证定价页的计划卡片渲染和标签切换。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 渲染计划卡片 | 打开定价页 → 验证页面标题可见 → 验证至少有一个含价格符号的元素 |
| 2 | 卡片显示名称、价格和功能 | 打开定价页 → 验证 `<h3>` 计划名称数量 ≥ 1 → 验证 CTA 按钮数量 ≥ 1 |
| 3 | 卡片包含功能列表和勾选图标 | 打开定价页 → 验证功能列表项数量 ≥ 1 |
| 4 | 订阅 / 积分标签切换 | 打开定价页 → 检查是否有标签切换器 → 如果有，点击「积分」标签 → 验证价格仍然可见 → 切回「订阅」标签 → 验证价格可见 |

---

### 6. AI 功能页测试

**文件：** `specs/ai-features.spec.ts` ｜ **优先级：** P2

验证 AI 功能页面能正常加载并显示关键 UI 元素。**不会**实际调用 AI API 生成内容。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | AI 对话页加载 | 打开 `/ai` → 如果未被重定向到登录页，验证文本输入区域（`<textarea>` 或 `contenteditable`）可见 |
| 2 | 图片生成页加载 | 打开 `/image-generate` → 验证提示词输入框可见 → 验证模型选择器（下拉框）存在 |
| 3 | 视频生成页加载 | 打开 `/video-generate` → 验证提示词输入框可见 → 验证模型选择器（下拉框）存在 |
| 4 | 图片生成页有生成按钮 | 打开 `/image-generate` → 验证页面上至少有一个按钮 |
| 5 | 视频生成页有生成按钮 | 打开 `/video-generate` → 验证页面上至少有一个按钮 |

---

### 7. Stripe 支付流程测试

**文件：** `specs/stripe-payment.spec.ts` ｜ **优先级：** P0

> ⚠️ **前置条件：**
> 1. 开发服务器在 7001 端口运行
> 2. `stripe listen --forward-to localhost:7001/api/payment/webhook/stripe` 正在运行
> 3. `.env` 中配置了 Stripe 测试模式的 API Key

完整的 Stripe 支付端到端流程，覆盖**订阅购买**和**积分购买**两个链路。使用测试卡号 `4242 4242 4242 4242` 模拟支付，不产生真实扣款。

> 所有测试共用一个浏览器上下文（`beforeAll` 注册），按串行顺序执行。

#### A) 订阅购买流程

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 点击 Stripe 订阅计划跳转到 Checkout | API 注册用户 → 打开定价页（默认"订阅"标签页） → 等待 plan cards 渲染完成 → 找到 "Stripe Monthly Plan" 标题 → 滚动到可见区域 → 点击对应的 CTA 按钮 → 等待 URL 跳转到 `checkout.stripe.com` |
| 2 | 完成 Stripe 订阅支付 | 重复步骤 1 跳转到 Stripe Checkout → 等待卡号输入框出现 → 填写卡号 `4242 4242 4242 4242` → 填写有效期 `12/30` → 填写 CVC `123` → 填写持卡人姓名 → 点击 "Subscribe" 按钮 → 等待重定向回 `/payment-success` → 验证 URL 包含 `payment-success` 和 `provider=stripe` |
| 3 | 支付成功页显示成功 UI | 重复步骤 2 完成支付 → 验证成功页 `<h1>` 标题可见 → 验证页面上有跳转到 `/dashboard` 的链接 |
| 4 | 支付取消页可正常访问 | 直接访问 `/payment-cancel` → 验证 URL 正确 → 验证页面标题可见 → 验证有返回 `/pricing` 的链接 |
| 5 | 仪表盘订阅标签显示计划详情 | 访问 `/dashboard` → 点击左侧"Subscription Status"导航按钮 → 等待订阅数据加载 → **如果 webhook 已处理**：验证计划名称 "Stripe Monthly Plan" 可见 → 验证 "Active" 状态徽章可见 → 验证 "Start Date" 和 "End Date" 标签可见 → 验证 "Recurring" 付款类型徽章可见 → 验证进度条存在。**如果 webhook 未处理**：验证 "No Active Subscription Found" 提示可见 → 验证 "View Plans" 链接可见 |

#### B) 积分购买流程

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 6 | 点击 Stripe 积分计划跳转到 Checkout | 打开定价页 → 点击「Credits / 积分充值」标签 → 等待积分计划卡片渲染 → 找到 "100 Credits Stripe" 标题 → 点击对应的 CTA 按钮 → 等待 URL 跳转到 `checkout.stripe.com` |
| 7 | 完成 Stripe 积分购买 | 重复步骤 6 跳转到 Stripe Checkout → 填写测试卡信息 → 点击 "Pay" 按钮 → 等待重定向回 `/payment-success` → 验证 URL 包含 `payment-success` 和 `provider=stripe` |
| 8 | 仪表盘积分标签显示余额更新 | 访问 `/dashboard` → 点击左侧"Credits"导航按钮 → 验证 "Credit Balance" 标题可见 → 验证 "Available Credits" 标签可见 → 读取余额数值 → 验证 ≥ 100 → 验证 "Total Purchased" ≥ 100 → 如果 webhook 已处理，验证交易记录中出现 "Purchase" 类型条目 |

#### Stripe 订阅支付完整链路图

```
用户登录
  ↓
打开 /pricing 定价页（"订阅"标签页）
  ↓
点击 "Stripe Monthly Plan" 的 CTA 按钮
  ↓
前端调用 POST /api/payment/initiate { planId: 'monthly', provider: 'stripe' }
  ↓
后端创建 Stripe Checkout Session → 返回 paymentUrl
  ↓
前端 window.location.href = paymentUrl
  ↓
浏览器跳转到 checkout.stripe.com（Stripe 托管页面）
  ↓
用户填写测试卡信息并点击 "Subscribe"
  ↓
Stripe 处理支付 → 重定向到 /payment-success?session_id=xxx&provider=stripe
  ↓
前端调用 GET /api/payment/verify/stripe?session_id=xxx 验证支付状态
  ↓
同时 Stripe 发送 webhook → stripe listen 转发到 /api/payment/webhook/stripe
  ↓
后端更新订单状态 → 创建/更新订阅记录
  ↓
用户在仪表盘"订阅"标签页看到：计划名称、Active 状态、起止日期、进度条
```

#### Stripe 积分购买完整链路图

```
用户登录
  ↓
打开 /pricing 定价页 → 切换到「积分充值」标签页
  ↓
点击 "100 Credits Stripe" 的 CTA 按钮
  ↓
前端调用 POST /api/payment/initiate { planId: 'credits100', provider: 'stripe' }
  ↓
后端创建 Stripe Checkout Session → 返回 paymentUrl
  ↓
浏览器跳转到 checkout.stripe.com
  ↓
用户填写测试卡信息并点击 "Pay"
  ↓
Stripe 处理支付 → 重定向到 /payment-success?session_id=xxx&provider=stripe
  ↓
webhook 触发后端 → 查询 plan 的 credits 字段 (100) → 调用 creditService.addCredits()
  ↓
用户在仪表盘"积分"标签页看到：可用积分 ≥ 100、累计购买 ≥ 100、交易记录
```

---

### 8. 个人资料更新测试

**文件：** `specs/profile-update.spec.ts` ｜ **优先级：** P1

验证仪表盘中编辑个人资料的完整流程：进入编辑模式 → 修改姓名 → 保存 → 验证更新。

> 所有测试共用一个浏览器上下文（`beforeAll` 注册），按串行顺序执行。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 个人资料标签页显示用户名和编辑按钮 | API 注册用户 → 访问 `/dashboard` → 验证用户名可见 → 验证 "Edit" 按钮可见 |
| 2 | 可以进入编辑模式并修改姓名 | 访问 `/dashboard` → 等待用户名加载 → 点击 "Edit" 按钮 → 验证 `#name` 输入框可见 → 清空并填入新姓名 → 点击 "Save" → 等待编辑模式关闭（"Edit" 按钮重新出现） → 验证新姓名显示在页面上 |

---

### 9. 修改密码测试

**文件：** `specs/password-change.spec.ts` ｜ **优先级：** P2

验证仪表盘「账户」标签页的密码修改功能。

> 所有测试共用一个浏览器上下文（`beforeAll` 注册），按串行顺序执行。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 账户标签页显示修改密码区域 | API 注册用户 → 访问 `/dashboard` → 点击 "Account" 标签 → 验证 "Change Password" 文字可见 → 验证修改密码按钮可见 |
| 2 | 可以打开密码修改对话框并提交 | 访问 `/dashboard` → 切换到 "Account" 标签 → 点击 "Change Password" 按钮 → 等待对话框出现 → 填写当前密码 → 填写新密码 → 填写确认密码 → 点击提交 → 等待对话框关闭（表示修改成功） |
| 3 | 可以用新密码登录 | 创建全新浏览器上下文（无 cookie） → 用新密码调用 `signInViaAPI` → 验证返回 200 → 访问 `/dashboard` → 验证用户名可见（确认 session 有效） |

---

### 10. 语言切换测试

**文件：** `specs/i18n-switching.spec.ts` ｜ **优先级：** P2 ｜ **无需登录**

验证页面头部的语言切换功能，确保切换后 URL 更新、内容切换且选择持久化。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 首页使用默认英文语言 | 打开 `/en` → 验证 URL 包含 `/en` |
| 2 | 从英文切换到中文 | 打开 `/en` → 点击语言下拉菜单 → 选择"中文" → 等待页面跳转到 `/zh-CN/` → 验证 URL 包含 `/zh-CN` |
| 3 | 从中文切换回英文 | 打开 `/zh-CN` → 点击语言下拉菜单 → 选择 "English" → 等待页面跳转到 `/en/` → 验证 URL 包含 `/en` |
| 4 | 语言选择跨页面持久化 | 打开 `/zh-CN` → 导航到 `/zh-CN/pricing` → 验证 URL 仍是中文 → 导航到 `/zh-CN/signin` → 验证 URL 仍是中文 |
| 5 | 子页面双语言均可访问 | 访问英文定价页 `/en/pricing` → 验证标题可见 → 访问中文定价页 `/zh-CN/pricing` → 验证标题可见 |

---

### 11. 上传页测试

**文件：** `specs/upload-page.spec.ts` ｜ **优先级：** P2

验证上传页面的 UI 元素加载。实际文件上传需要存储服务配置（OSS/S3/R2/COS），此测试仅验证页面结构。

> 测试共用一个浏览器上下文（`beforeAll` 注册），按串行顺序执行。

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 上传页加载并显示存储服务选择器 | API 注册用户 → 访问 `/upload` → 验证页面标题可见 → 验证存储服务选择下拉框（`[role="combobox"]`）可见 |
| 2 | 上传拖拽区域存在 | 访问 `/upload` → 查找拖拽上传区域或上传按钮 → 验证至少有一个上传相关 UI 元素可见 |

---

### 12. 管理员面板测试

**文件：** `specs/admin-panel.spec.ts` ｜ **优先级：** P3

验证管理员面板的核心功能：Dashboard 统计、子页面数据表、侧边栏导航和权限控制。

> 使用预置管理员账号 `admin@example.com` 登录（非测试创建，不会被 teardown 清理）。

#### 管理员 Dashboard

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 1 | 管理员 Dashboard 加载并显示统计卡片 | 用管理员账号 API 登录 → 访问 `/admin` → 验证 "Admin Dashboard" 标题可见 → 验证至少有 4 个统计卡片 |
| 2 | Dashboard 显示图表和今日数据 | 访问 `/admin` → 验证 "Today" 相关文字可见 → 验证 "Recent Orders" 相关文字可见 |

#### 管理员子页面

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 3 | 用户管理页显示数据表 | 访问 `/admin/users` → 验证 "User Management" 标题可见 → 验证 `<table>` 存在 |
| 4 | 订阅管理页显示数据表 | 访问 `/admin/subscriptions` → 验证 `<table>` 存在 |
| 5 | 订单管理页显示数据表 | 访问 `/admin/orders` → 验证 `<table>` 存在 |
| 6 | 积分管理页显示数据表 | 访问 `/admin/credits` → 验证 `<table>` 存在 |

#### 侧边栏导航

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 7 | 侧边栏导航跨页面跳转 | 访问 `/admin` → 点击侧边栏 "Users" 链接 → 验证 URL 包含 `/admin/users` → 点击 "Orders" 链接 → 验证 URL 包含 `/admin/orders` |

#### 权限控制

| # | 测试名称 | 具体流程 |
|---|---------|---------|
| 8 | 非管理员用户访问管理面板被拒 | 使用全新浏览器上下文（未登录） → 访问 `/admin` → 验证被重定向到 `/signin` 或显示 "Access Denied" |

---

## 架构与约定

### 文件结构

```
tests/e2e/
├── playwright.config.ts          # Playwright 配置（baseURL、浏览器、超时等）
├── global-teardown.ts            # 全局清理脚本（删除测试用户）
├── helpers/
│   ├── constants.ts              # URL 路径、API 端点、超时时间、测试用户数据
│   └── auth.ts                   # 认证辅助函数（注册、登录、登出）
└── specs/
    ├── public-pages.spec.ts      # 公共页面冒烟测试
    ├── auth-flow.spec.ts         # 认证流程测试
    ├── access-control.spec.ts    # 权限控制测试
    ├── dashboard.spec.ts         # 仪表盘测试
    ├── pricing.spec.ts           # 定价页测试
    ├── ai-features.spec.ts       # AI 功能页测试
    ├── stripe-payment.spec.ts    # Stripe 支付流程测试
    ├── profile-update.spec.ts    # 个人资料更新测试
    ├── password-change.spec.ts   # 修改密码测试
    ├── i18n-switching.spec.ts    # 语言切换测试
    ├── upload-page.spec.ts       # 上传页测试
    └── admin-panel.spec.ts       # 管理员面板测试
```

### 选择器优先级

为了尽量与 i18n 无关，选择器按以下优先级选用：

1. `data-testid` 属性（最稳定）
2. HTML 元素 ID（`#email`、`#password`）
3. ARIA 角色（`[role="tab"]`、`[role="combobox"]`）
4. 元素类型 + 属性（`input[type="email"]`、`button[type="submit"]`）
5. CSS 类名（最不稳定，尽量避免）

### 认证策略

- **需要登录状态的测试**：通过 API 调用（`signUpViaAPI` / `signInViaAPI`）直接设置 session cookie，比 UI 登录更快更稳定
- **认证流程本身的测试**：使用 UI 表单交互来验证登录/注册页面功能
- **限流处理**：auth helper 内置了指数退避重试机制（最多 3 次），应对 Better Auth 的 429 限流

### API 辅助 vs E2E 测试的边界

`helpers/auth.ts` 中的 API 调用是**测试前置准备工具**，不是独立的 API 契约测试。
如果需要对 API 做行为断言（状态码、错误格式、边界情况），应放在单独的 `tests/api/` 目录，不要混入 E2E specs。

---

## 待实现的测试

| 优先级 | 流程 | 前置条件 | 备注 |
|--------|------|----------|------|
| P2 | 文件上传（实际上传操作） | 需配置存储服务（OSS/S3/R2/COS） | 当前仅验证页面 UI 加载，实际上传待存储配置后添加 |
| P3 | 第三方登录 | 需 OAuth 配置 | Google/GitHub 登录；微信需扫码暂不实现 |
| P3 | 邮箱验证 | 需邮件服务 | 完整的验证链路 |

---

## 如何添加新测试

1. **创建文件**：在 `tests/e2e/specs/` 下新建 `<流程名>.spec.ts`
2. **引用 helpers**：使用 `constants.ts` 中的 URL 常量和 `auth.ts` 中的认证辅助函数
3. **编写测试**：
   - 遵循上述选择器优先级
   - 需要登录的测试使用 `signUpViaAPI` / `signInViaAPI` 做前置准备
   - 多个测试共享同一账号时，使用 `test.describe.configure({ mode: 'serial' })` + `beforeAll`
4. **更新本文档**：把新测试添加到上方对应章节
5. **运行验证**：分别对 Next.js 和 Nuxt.js 运行 `pnpm test:e2e`

---

## 测试结果追踪

每次运行后在此记录结果：

| 日期 | 应用 | 通过 | 失败 | 跳过 | 备注 |
|------|------|------|------|------|------|
| 2026-02-25 | Next.js | 35 | 0 | 0 | 全部通过（含 Stripe 支付） |
| — | Nuxt.js | — | — | — | 待测试 |

_每次测试运行后更新此表。_
