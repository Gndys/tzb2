import type { Locale } from './types'

export const zhCN: Locale = {
  common: {
    welcome: "欢迎使用 TinyShip",
    siteName: "TinyShip",
    login: "登录",
    signup: "注册",
    logout: "退出登录",
    profile: "个人资料",
    settings: "设置",
    and: "和",
    loading: "加载中...",
    unexpectedError: "发生了意外错误",
    notAvailable: "不可用",
    viewPlans: "查看计划",
    yes: "是",
    no: "否",
    theme: {
      light: "浅色主题",
      dark: "深色主题",
      system: "系统主题",
      toggle: "切换主题",
      appearance: "外观设置",
      colorScheme: "配色方案",
      themes: {
        default: "默认主题",
        claude: "Claude主题",
        "cosmic-night": "宇宙之夜",
        "modern-minimal": "现代简约",
        "ocean-breeze": "海洋微风"
      }
    }
  },
  navigation: {
    home: "首页",
    dashboard: "仪表盘",
    orders: "订单",
    shipments: "发货",
    tracking: "追踪",
    admin: {
      dashboard: "仪表盘",
      users: "用户管理",
      subscriptions: "订阅管理",
      orders: "订单管理",
      credits: "积分管理",
      application: "应用程序",
      blog: "博客管理"
    }
  },
  actions: {
    save: "保存",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    edit: "编辑",
    tryAgain: "重试",
    createAccount: "创建账户",
    sendCode: "发送验证码",
    verify: "验证",
    backToList: "返回用户列表",
    saveChanges: "保存更改",
    createUser: "创建用户",
    deleteUser: "删除用户",
    back: "返回",
    resendCode: "重新发送",
    resendVerificationEmail: "重新发送验证邮件",
    upload: "上传",
    previous: "上一页",
    next: "下一页",
    createPost: "新建文章",
    deletePost: "删除文章",
    backToBlog: "返回博客"
  },
  email: {
    verification: {
      subject: "验证您的 TinyShip 账号",
      title: "请验证您的邮箱地址",
      greeting: "您好 {{name}}，",
      message: "感谢您注册 TinyShip。要完成注册，请点击下方按钮验证您的电子邮箱地址。",
      button: "验证邮箱地址",
      alternativeText: "或者，您可以复制并粘贴以下链接到浏览器中：",
      expiry: "此链接将在 {{expiry_hours}} 小时后过期。",
      disclaimer: "如果您没有请求此验证，请忽略此邮件。",
      signature: "祝您使用愉快，TinyShip 团队",
      copyright: "© {{year}} TinyShip. 保留所有权利。"
    },
    resetPassword: {
      subject: "重置您的 TinyShip 密码",
      title: "重置您的密码",
      greeting: "您好 {{name}}，",
      message: "我们收到了重置您密码的请求。请点击下方按钮创建新密码。如果您没有提出此请求，可以安全地忽略此邮件。",
      button: "重置密码",
      alternativeText: "或者，您可以复制并粘贴以下链接到浏览器中：",
      expiry: "此链接将在 {{expiry_hours}} 小时后过期。",
      disclaimer: "如果您没有请求重置密码，无需进行任何操作。",
      signature: "祝您使用愉快，TinyShip 团队",
      copyright: "© {{year}} TinyShip. 保留所有权利。"
    }
  },
  auth: {
    metadata: {
      signin: {
        title: "TinyShip - 登录",
        description: "登录您的 TinyShip 账户，访问仪表板、管理订阅并使用高级功能。",
        keywords: "登录, 账户登录, 身份验证, 访问账户, 仪表板"
      },
      signup: {
        title: "TinyShip - 创建账户",
        description: "创建您的 TinyShip 账户，开始使用我们全面的脚手架构建出色的 SaaS 应用程序。",
        keywords: "注册, 创建账户, 新用户, 开始使用, 账户注册"
      },
      forgotPassword: {
        title: "TinyShip - 重置密码",
        description: "安全地重置您的 TinyShip 账户密码。输入您的邮箱以接收密码重置说明。",
        keywords: "忘记密码, 重置密码, 密码恢复, 账户恢复"
      },
      resetPassword: {
        title: "TinyShip - 创建新密码",
        description: "为您的 TinyShip 账户创建新的安全密码。选择强密码来保护您的账户。",
        keywords: "新密码, 密码重置, 安全密码, 账户安全"
      },
      phone: {
        title: "TinyShip - 手机登录",
        description: "使用手机号登录 TinyShip。通过短信验证进行快速安全的身份验证。",
        keywords: "手机登录, 短信验证, 移动端认证, 手机号码"
      },
      wechat: {
        title: "TinyShip - 微信登录",
        description: "使用微信账户登录 TinyShip。为中国用户提供便捷的身份验证。",
        keywords: "微信登录, WeChat登录, 社交登录, 中国认证"
      }
    },
    signin: {
      title: "登录您的账户",
      welcomeBack: "欢迎回来",
      socialLogin: "使用您喜欢的社交账号登录",
      continueWith: "或继续使用",
      email: "邮箱",
      emailPlaceholder: "请输入邮箱地址",
      password: "密码",
      forgotPassword: "忘记密码？",
      rememberMe: "记住我",
      submit: "登录",
      submitting: "登录中...",
      noAccount: "还没有账户？",
      signupLink: "注册",
      termsNotice: "点击继续即表示您同意我们的",
      termsOfService: "服务条款",
      privacyPolicy: "隐私政策",
      socialProviders: {
        google: "Google",
        github: "GitHub",
        apple: "Apple",
        wechat: "微信",
        phone: "手机号码"
      },
      errors: {
        invalidEmail: "请输入有效的邮箱地址",
        requiredEmail: "请输入邮箱",
        requiredPassword: "请输入密码",
        invalidCredentials: "邮箱或密码错误",
        captchaRequired: "请完成验证码验证",
        emailNotVerified: {
          title: "需要邮箱验证",
          description: "请检查您的邮箱并点击验证链接。如果您没有收到邮件，可以点击下方按钮重新发送。",
          resendSuccess: "验证邮件已重新发送，请检查您的邮箱。",
          resendError: "重发验证邮件失败，请稍后重试。",
          dialogTitle: "重新发送验证邮件",
          dialogDescription: "请完成验证码验证后重新发送验证邮件",
          emailLabel: "邮箱地址",
          sendButton: "发送验证邮件",
          sendingButton: "发送中...",
          waitButton: "等待 {seconds}s"
        }
      }
    },
    signup: {
      title: "注册 TinyShip",
      createAccount: "创建账户",
      socialSignup: "使用您喜欢的社交账号注册",
      continueWith: "或继续使用",
      name: "姓名",
      namePlaceholder: "请输入您的姓名",
      email: "邮箱",
      emailPlaceholder: "请输入邮箱地址",
      password: "密码",
      passwordPlaceholder: "创建密码",
      imageUrl: "头像图片链接",
      imageUrlPlaceholder: "https://example.com/your-image.jpg",
      optional: "可选",
      submit: "创建账户",
      submitting: "创建账户中...",
      haveAccount: "已有账户？",
      signinLink: "登录",
      termsNotice: "点击继续即表示您同意我们的",
      termsOfService: "服务条款",
      privacyPolicy: "隐私政策",
      verification: {
        title: "需要验证",
        sent: "我们已经发送验证邮件到",
        checkSpam: "找不到邮件？请检查垃圾邮件文件夹。",
        spamInstruction: "如果仍然没有收到，"
      },
      errors: {
        invalidName: "请输入有效的姓名",
        requiredName: "请输入姓名",
        invalidEmail: "请输入有效的邮箱地址",
        requiredEmail: "请输入邮箱",
        invalidPassword: "请输入有效的密码",
        requiredPassword: "请输入密码",
        invalidImage: "请输入有效的图片链接",
        captchaRequired: "请完成验证码验证",
        captchaError: "验证码验证失败，请重试",
        captchaExpired: "验证码已过期，请重新验证"
      }
    },
    phone: {
      title: "手机号登录",
      description: "输入您的手机号以接收验证码",
      phoneNumber: "手机号",
      phoneNumberPlaceholder: "请输入您的手机号",
      countryCode: "国家/地区",
      verificationCode: "验证码",
      enterCode: "输入验证码",
      sendingCode: "发送验证码中...",
      verifying: "验证中...",
      codeSentTo: "已发送验证码到",
      resendIn: "重新发送",
      seconds: "秒",
      resendCode: "重新发送",
      resendCountdown: "秒后可重新发送",
      termsNotice: "点击继续即表示您同意我们的",
      termsOfService: "服务条款",
      privacyPolicy: "隐私政策",
      errors: {
        invalidPhone: "请输入有效的手机号",
        requiredPhone: "请输入手机号",
        requiredCountryCode: "请选择国家/地区",
        invalidCode: "请输入有效的验证码",
        requiredCode: "请输入验证码",
        captchaRequired: "请完成验证码验证"
      }
    },
    forgetPassword: {
      title: "忘记密码",
      description: "重置密码并重新获得账户访问权限",
      email: "邮箱",
      emailPlaceholder: "请输入邮箱地址",
      submit: "发送重置链接",
      submitting: "发送中...",
      termsNotice: "点击继续即表示您同意我们的",
      termsOfService: "服务条款",
      privacyPolicy: "隐私政策",
      verification: {
        title: "检查您的邮箱",
        sent: "我们已经发送重置密码链接到",
        checkSpam: "找不到邮件？请检查垃圾邮件文件夹。"
      },
      errors: {
        invalidEmail: "请输入有效的邮箱地址",
        requiredEmail: "请输入邮箱",
        captchaRequired: "请完成验证码验证"
      }
    },
    resetPassword: {
      title: "重置密码",
      description: "为您的账户创建新密码",
      password: "新密码",
      passwordPlaceholder: "请输入新密码",
      confirmPassword: "确认密码",
      confirmPasswordPlaceholder: "请再次输入新密码",
      submit: "重置密码",
      submitting: "重置中...",
      success: {
        title: "密码重置成功",
        description: "您的密码已经成功重置。",
        backToSignin: "返回登录",
        goToSignIn: "返回登录"
      },
      errors: {
        invalidPassword: "密码长度至少为8个字符",
        requiredPassword: "请输入密码",
        passwordsDontMatch: "两次输入的密码不一致",
        invalidToken: "重置链接无效或已过期，请重试。"
      }
    },
    wechat: {
      title: "微信登录",
      description: "使用微信扫码登录",
      scanQRCode: "请使用微信扫描二维码",
      orUseOtherMethods: "或使用其他登录方式",
      loadingQRCode: "加载二维码中...",
      termsNotice: "点击继续即表示您同意我们的",
      termsOfService: "服务条款",
      privacyPolicy: "隐私政策",
      errors: {
        loadingFailed: "微信二维码加载失败",
        networkError: "网络错误，请重试"
      }
    },
    // Better Auth 1.4 错误代码映射
    authErrors: {
      // 用户相关错误
      USER_NOT_FOUND: "未找到该邮箱对应的账户",
      USER_ALREADY_EXISTS: "该邮箱已被注册",
      USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "用户已存在，请使用其他邮箱",
      USER_EMAIL_NOT_FOUND: "未找到用户邮箱",
      FAILED_TO_CREATE_USER: "创建用户失败",
      FAILED_TO_UPDATE_USER: "更新用户失败",
      
      // 认证错误
      INVALID_EMAIL: "邮箱地址无效",
      INVALID_PASSWORD: "密码无效",
      INVALID_EMAIL_OR_PASSWORD: "邮箱或密码错误",
      INVALID_CREDENTIALS: "提供的凭据无效",
      INVALID_TOKEN: "无效或已过期的令牌",
      PASSWORD_TOO_SHORT: "密码过短",
      PASSWORD_TOO_LONG: "密码过长",
      
      // 邮箱验证错误
      EMAIL_NOT_VERIFIED: "请先验证您的邮箱地址",
      EMAIL_ALREADY_VERIFIED: "邮箱已验证",
      EMAIL_MISMATCH: "邮箱不匹配",
      EMAIL_CAN_NOT_BE_UPDATED: "邮箱无法更新",
      VERIFICATION_EMAIL_NOT_ENABLED: "验证邮件功能未启用",
      
      // 会话错误
      SESSION_EXPIRED: "您的会话已过期，请重新登录",
      SESSION_NOT_FRESH: "会话不是最新的，请重新认证",
      FAILED_TO_CREATE_SESSION: "创建会话失败",
      FAILED_TO_GET_SESSION: "获取会话失败",
      
      // 账户错误
      ACCOUNT_NOT_FOUND: "账户未找到",
      ACCOUNT_BLOCKED: "您的账户已被临时冻结",
      CREDENTIAL_ACCOUNT_NOT_FOUND: "凭证账户未找到",
      SOCIAL_ACCOUNT_ALREADY_LINKED: "社交账户已关联",
      LINKED_ACCOUNT_ALREADY_EXISTS: "关联账户已存在",
      FAILED_TO_UNLINK_LAST_ACCOUNT: "无法解除最后一个账户的关联",
      USER_ALREADY_HAS_PASSWORD: "用户已设置密码",
      
      // 手机号错误
      PHONE_NUMBER_ALREADY_EXISTS: "该手机号已被注册",
      INVALID_PHONE_NUMBER: "手机号格式无效",
      OTP_EXPIRED: "验证码已过期",
      INVALID_OTP: "验证码错误",
      OTP_TOO_MANY_ATTEMPTS: "验证尝试次数过多，请重新获取验证码",
      
      // 提供商错误
      PROVIDER_NOT_FOUND: "提供商未找到",
      ID_TOKEN_NOT_SUPPORTED: "不支持 ID Token",
      FAILED_TO_GET_USER_INFO: "获取用户信息失败",
      
      // 安全错误
      CAPTCHA_REQUIRED: "请完成验证码验证",
      CAPTCHA_INVALID: "验证码验证失败",
      TOO_MANY_REQUESTS: "请求过于频繁，请稍后重试",
      CROSS_SITE_NAVIGATION_LOGIN_BLOCKED: "跨站导航登录被阻止",
      INVALID_ORIGIN: "无效的来源",
      MISSING_OR_NULL_ORIGIN: "来源缺失或无效",
      
      // 回调 URL 错误
      INVALID_CALLBACK_URL: "无效的回调 URL",
      INVALID_REDIRECT_URL: "无效的重定向 URL",
      INVALID_ERROR_CALLBACK_URL: "无效的错误回调 URL",
      INVALID_NEW_USER_CALLBACK_URL: "无效的新用户回调 URL",
      CALLBACK_URL_REQUIRED: "需要回调 URL",
      
      // 验证错误
      VALIDATION_ERROR: "验证错误",
      MISSING_FIELD: "缺少必填字段",
      FIELD_NOT_ALLOWED: "不允许的字段",
      ASYNC_VALIDATION_NOT_SUPPORTED: "不支持异步验证",
      
      // 系统错误
      FAILED_TO_CREATE_VERIFICATION: "创建验证失败",
      EMAIL_SEND_FAILED: "邮件发送失败，请稍后重试",
      SMS_SEND_FAILED: "短信发送失败，请稍后重试",
      UNKNOWN_ERROR: "发生未知错误"
    }
  },
  admin: {
    metadata: {
      title: "TinyShip - 管理后台",
      description: "全面的管理仪表板，用于管理用户、订阅、订单和系统分析，为您的SaaS应用提供强大的管理功能。",
      keywords: "管理后台, 仪表板, 管理, SaaS, 分析, 用户, 订阅, 订单"
    },
    dashboard: {
      title: "管理员仪表板",
      accessDenied: "访问被拒绝",
      noPermission: "您没有权限访问管理员仪表板",
      lastUpdated: "最后更新",
      metrics: {
        totalRevenue: "总收入",
        totalRevenueDesc: "历史总收入",
        newCustomers: "本月新客户",
        newCustomersDesc: "本月新增客户数",
        newOrders: "本月新订单",
        newOrdersDesc: "本月新增订单数",
        fromLastMonth: "较上月"
      },
      chart: {
        monthlyRevenueTrend: "月度收入趋势",
        revenue: "收入",
        orders: "订单数"
      },
      todayData: {
        title: "今日数据",
        revenue: "收入",
        newUsers: "新用户",
        orders: "订单数"
      },
      monthData: {
        title: "本月数据",
        revenue: "本月收入",
        newUsers: "本月新用户",
        orders: "本月订单数"
      },
      recentOrders: {
        title: "最近订单",
        orderId: "订单ID",
        customer: "客户",
        plan: "计划",
        amount: "金额",
        provider: "支付方式",
        status: "状态",
        time: "时间",
        total: "总计"
      }
    },
    users: {
      title: "用户管理",
      subtitle: "管理用户、角色和权限",
      createUser: "创建用户",
      editUser: "编辑用户",
      actions: {
        addUser: "添加用户",
        editUser: "编辑用户",
        deleteUser: "删除用户",
        banUser: "封禁用户",
        unbanUser: "解封用户"
      },
      table: {
        columns: {
          id: "ID",
          name: "姓名",
          email: "邮箱",
          role: "角色",
          phoneNumber: "手机号",
          emailVerified: "邮箱验证",
          banned: "封禁状态",
          createdAt: "创建时间",
          updatedAt: "更新时间",
          actions: "操作"
        },
        actions: {
          editUser: "编辑用户",
          deleteUser: "删除用户",
          clickToCopy: "点击复制"
        },
        sort: {
          ascending: "升序排列",
          descending: "降序排列",
          none: "取消排序"
        },
        noResults: "未找到用户",
        search: {
          searchBy: "搜索字段",
          searchPlaceholder: "搜索 {field}...",
          filterByRole: "按角色筛选",
          allRoles: "所有角色",
          banStatus: "封禁状态",
          allUsers: "所有用户",
          bannedUsers: "已封禁",
          notBannedUsers: "未封禁",
          view: "视图",
          toggleColumns: "切换列显示"
        },
        pagination: {
          showing: "显示第 {start} 到 {end} 条，共 {total} 条结果",
          pageInfo: "第 {current} 页，共 {total} 页"
        },
        dialog: {
          banTitle: "封禁用户",
          banDescription: "您确定要封禁此用户吗？他们将无法访问应用程序。",
          banSuccess: "用户封禁成功",
          unbanSuccess: "用户解封成功",
          updateRoleSuccess: "用户角色更新成功",
          updateRoleFailed: "用户角色更新失败"
        }
      },
      banDialog: {
        title: "封禁用户",
        description: "您确定要封禁 {userName} 吗？他们将无法访问应用程序。"
      },
      unbanDialog: {
        title: "解封用户",
        description: "您确定要解封 {userName} 吗？他们将重新获得访问权限。"
      },
      form: {
        title: "用户信息",
        description: "请在下方输入用户详细信息",
        labels: {
          name: "姓名",
          email: "邮箱",
          password: "密码",
          confirmPassword: "确认密码",
          role: "角色",
          image: "头像",
          phoneNumber: "手机号",
          emailVerified: "邮箱已验证",
          phoneVerified: "手机已验证",
          banned: "已封禁",
          banReason: "封禁原因"
        },
        placeholders: {
          name: "请输入用户姓名",
          email: "请输入用户邮箱",
          password: "请输入密码（至少8位）",
          confirmPassword: "请确认密码",
          selectRole: "请选择角色",
          image: "https://example.com/avatar.jpg",
          phoneNumber: "请输入手机号",
          banReason: "封禁原因（可选）"
        },
        validation: {
          nameRequired: "姓名不能为空",
          emailRequired: "邮箱不能为空",
          emailInvalid: "请输入有效的邮箱地址",
          passwordRequired: "密码不能为空",
          passwordMinLength: "密码至少需要8位字符",
          passwordMismatch: "两次输入的密码不一致",
          roleRequired: "请选择角色"
        }
      },
      deleteDialog: {
        title: "删除用户",
        description: "您确定要删除此用户吗？此操作无法撤销，将永久删除用户账户和所有相关数据。"
      },
      messages: {
        createSuccess: "用户创建成功",
        updateSuccess: "用户更新成功",
        deleteSuccess: "用户删除成功",
        fetchError: "获取用户信息失败",
        operationFailed: "操作失败",
        deleteError: "删除用户失败"
      }
    },
    orders: {
      title: "订单管理",
      actions: {
        createOrder: "创建订单"
      },
      messages: {
        fetchError: "加载订单失败，请重试。"
      },
      table: {
        noResults: "未找到订单。",
        search: {
          searchBy: "搜索条件...",
          searchPlaceholder: "按{field}搜索...",
          filterByStatus: "按状态筛选",
          allStatus: "所有状态",
          filterByProvider: "支付方式",
          allProviders: "所有支付方式",
          pending: "待支付",
          paid: "已支付",
          failed: "支付失败",
          refunded: "已退款",
          canceled: "已取消",
          stripe: "Stripe",
          wechat: "微信支付",
          creem: "Creem",
          alipay: "支付宝"
        },
        columns: {
          id: "订单ID",
          user: "用户",
          amount: "金额",
          plan: "计划",
          status: "状态",
          provider: "支付方式",
          providerOrderId: "支付平台订单ID",
          createdAt: "创建时间",
          actions: "操作"
        },
        actions: {
          viewOrder: "查看订单",
          refundOrder: "退款",
          openMenu: "打开菜单",
          actions: "操作",
          clickToCopy: "点击复制"
        },
        sort: {
          ascending: "升序排列",
          descending: "降序排列",
          none: "取消排序"
        }
      },
      status: {
        pending: "待支付",
        paid: "已支付",
        failed: "支付失败",
        refunded: "已退款",
        canceled: "已取消"
      }
    },
    blog: {
      title: "博客管理",
      subtitle: "创建和管理博客文章",
      createPost: "创建文章",
      editPost: "编辑文章",
      actions: {
        newPost: "新建文章"
      },
      messages: {
        fetchError: "加载博客文章失败，请重试。",
        createSuccess: "文章创建成功",
        updateSuccess: "文章更新成功",
        deleteSuccess: "文章删除成功",
        deleteError: "删除文章失败",
        operationFailed: "操作失败",
        uploadSuccess: "上传成功",
        uploadError: "上传失败"
      },
      table: {
        noResults: "未找到文章。",
        search: {
          searchPlaceholder: "按标题搜索...",
          filterByStatus: "按状态筛选",
          allStatus: "所有状态",
          draft: "草稿",
          published: "已发布"
        },
        columns: {
          title: "标题",
          status: "状态",
          author: "作者",
          publishedAt: "发布时间",
          createdAt: "创建时间",
          actions: "操作"
        },
        actions: {
          edit: "编辑",
          delete: "删除"
        },
        sort: {
          ascending: "升序排列",
          descending: "降序排列",
          none: "取消排序"
        }
      },
      form: {
        title: "文章信息",
        description: "请在下方输入文章详情",
        labels: {
          title: "标题",
          slug: "URL 别名",
          excerpt: "摘要",
          coverImage: "封面图",
          status: "状态",
          content: "内容"
        },
        placeholders: {
          title: "请输入文章标题",
          slug: "URL 友好别名（根据标题自动生成）",
          excerpt: "文章简要摘要",
          coverImage: "拖放或点击上传（最大 2MB）",
          content: "使用 Markdown 编写内容..."
        }
      },
      deleteDialog: {
        title: "删除文章",
        description: "您确定要删除此文章吗？此操作无法撤销，将永久删除该文章。"
      }
    },
    credits: {
      title: "积分交易记录",
      subtitle: "查看所有用户的积分收入和消耗记录",
      messages: {
        fetchError: "加载积分交易记录失败，请重试。"
      },
      table: {
        noResults: "未找到积分交易记录。",
        search: {
          searchBy: "搜索条件...",
          searchPlaceholder: "按{field}搜索...",
          filterByType: "按类型筛选",
          allTypes: "所有类型",
          purchase: "购买",
          consumption: "消耗",
          refund: "退款",
          bonus: "奖励",
          adjustment: "调整"
        },
        columns: {
          id: "交易ID",
          user: "用户",
          type: "类型",
          amount: "金额",
          balance: "余额",
          description: "描述",
          createdAt: "创建时间",
          metadata: "元数据"
        },
        actions: {
          clickToCopy: "点击复制",
          viewDetails: "查看详情"
        },
        sort: {
          ascending: "升序排列",
          descending: "降序排列",
          none: "取消排序"
        },
        pagination: {
          showing: "显示第 {start} 到 {end} 条，共 {total} 条结果",
          pageInfo: "第 {current} 页，共 {total} 页"
        }
      },
      type: {
        purchase: "购买",
        consumption: "消耗",
        refund: "退款",
        bonus: "奖励",
        adjustment: "调整"
      }
    },
    subscriptions: {
      title: "订阅管理",
      description: "管理用户订阅和账单",
      actions: {
        createSubscription: "创建订阅"
      },
      messages: {
        fetchError: "加载订阅失败，请重试。"
      },
      table: {
        showing: "显示第 {from} 到 {to} 项，共 {total} 项结果",
        noResults: "未找到订阅。",
        rowsPerPage: "每页行数",
        page: "第",
        of: "页，共",
        view: "查看",
        toggleColumns: "切换列",
        goToFirstPage: "转到第一页",
        goToPreviousPage: "转到上一页", 
        goToNextPage: "转到下一页",
        goToLastPage: "转到最后一页",
        search: {
          searchLabel: "搜索订阅",
          searchField: "搜索字段",
          statusLabel: "状态",
          providerLabel: "提供商",
          search: "搜索",
          clear: "清除",
          allStatuses: "所有状态",
          allProviders: "所有提供商",
          stripe: "Stripe",
          creem: "Creem",
          wechat: "微信支付",
          alipay: "支付宝",
          userEmail: "用户邮箱",
          subscriptionId: "订阅ID",
          userId: "用户ID",
          planId: "计划ID",
          stripeSubscriptionId: "Stripe订阅ID",
          creemSubscriptionId: "Creem订阅ID",
          placeholders: {
            userEmail: "输入用户邮箱...",
            subscriptionId: "输入订阅ID...",
            userId: "输入用户ID...",
            planId: "输入计划ID...",
            stripeSubscriptionId: "输入Stripe订阅ID...",
            creemSubscriptionId: "输入Creem订阅ID...",
            default: "输入搜索词..."
          },
          searchBy: "搜索条件...",
          searchPlaceholder: "按{field}搜索...",
          filterByStatus: "按状态筛选",
          filterByProvider: "按提供商筛选",
          allStatus: "所有状态",
          filterByPaymentType: "支付类型",
          allPaymentTypes: "所有类型",
          active: "活跃",
          canceled: "已取消",
          expired: "已过期",
          trialing: "试用中",
          inactive: "未激活",
          oneTime: "一次性",
          recurring: "循环订阅"
        },
        columns: {
          id: "订阅ID",
          user: "客户",
          plan: "计划",
          status: "状态",
          paymentType: "支付类型",
          provider: "提供商",
          periodStart: "开始时间",
          periodEnd: "结束时间",
          cancelAtPeriodEnd: "将取消",
          createdAt: "创建时间",
          updatedAt: "更新时间",
          metadata: "元数据",
          period: "周期",
          actions: "操作"
        },
        actions: {
          openMenu: "打开菜单",
          actions: "操作",
          viewSubscription: "查看订阅",
          cancelSubscription: "取消订阅",
          clickToCopy: "点击复制"
        },
        sort: {
          ascending: "升序排列",
          descending: "降序排列",
          none: "取消排序"
        }
      },
      status: {
        active: "活跃",
        trialing: "试用中",
        canceled: "已取消",
        cancelled: "已取消",
        expired: "已过期",
        inactive: "未激活"
      },
      paymentType: {
        one_time: "一次性",
        recurring: "循环订阅"
      }
    }
  },
  pricing: {
    metadata: {
      title: "TinyShip - 定价方案",
      description: "选择最适合您需求的完美方案。灵活的定价选项包括月度、年度和终身订阅，享受高级功能。",
              keywords: "定价, 方案, 订阅, 月度, 年度, 终身, 高级, 功能"
    },
    title: "定价",
    subtitle: "选择最适合您的方案",
    description: "支持传统按时间订阅（月付/年付/终身）与 AI 时代流行的积分模式。订阅无限畅享，或充值积分按需消费。",
    cta: "立即开始",
    recommendedBadge: "推荐选择",
    lifetimeBadge: "一次购买，终身使用",
    creditsBadge: "积分包",
    creditsUnit: "积分",
    tabs: {
      subscription: "订阅套餐",
      credits: "积分充值"
    },
    features: {
      securePayment: {
        title: "多渠道安全支付",
        description: "支持微信支付、Stripe、Creem 等多种企业级安全支付方式"
      },
      flexibleSubscription: {
        title: "灵活付费模式",
        description: "传统订阅或 AI 时代积分制，任你选择"
      },
      globalCoverage: {
        title: "全球支付覆盖",
        description: "多币种和地区支付方式，为全球用户提供便捷支付体验"
      }
    },
    plans: {
      monthly: {
        name: "月度订阅",
        description: "灵活管理，按月付费",
        duration: "月",
        features: {
          "所有高级功能": "所有高级功能",
          "优先支持": "优先支持"
        }
      },
      yearly: {
        name: "年度订阅",
        description: "年付更优惠",
        duration: "年",
        features: {
          "所有高级功能": "所有高级功能",
          "优先支持": "优先支持",
          "两个月免费": "两个月免费"
        }
      },
      lifetime: {
        name: "终身会员",
        description: "一次付费，永久使用",
        duration: "终身",
        features: {
          "所有高级功能": "所有高级功能",
          "优先支持": "优先支持",
          "终身免费更新": "终身免费更新"
        }
      }
    }
  },
  payment: {
    metadata: {
      success: {
        title: "TinyShip - 支付成功",
        description: "您的支付已成功处理。感谢您的订阅，欢迎使用我们的高级功能。",
        keywords: "支付, 成功, 订阅, 确认, 高级功能"
      },
      cancel: {
        title: "TinyShip - 支付已取消",
        description: "您的支付已被取消。您可以重新尝试支付或联系我们的客服团队获取帮助。",
        keywords: "支付, 取消, 重试, 客服, 订阅"
      }
    },
    result: {
      success: {
        title: "支付成功",
        description: "您的支付已成功处理。",
        actions: {
          viewSubscription: "查看订阅",
          backToHome: "返回首页"
        }
      },
      cancel: {
        title: "支付已取消",
        description: "您的支付已被取消。",
        actions: {
          tryAgain: "重试",
          contactSupport: "联系客服",
          backToHome: "返回首页"
        }
      },
      failed: "支付失败，请重试"
    },
    steps: {
      initiate: "初始化",
      initiateDesc: "准备支付",
      scan: "扫码",
      scanDesc: "请扫描二维码",
      pay: "支付",
      payDesc: "确认支付"
    },
    scanQrCode: "请使用微信扫描二维码完成支付",
    confirmCancel: "您的支付尚未完成，确定要取消吗？",
    orderCanceled: "您的订单已取消"
  },
  subscription: {
    metadata: {
      title: "TinyShip - 我的订阅",
      description: "在您的订阅仪表板中管理订阅计划、查看账单历史和更新付款方式。",
              keywords: "订阅, 账单, 支付, 计划, 管理, 仪表板"
    },
    title: "我的订阅",
    overview: {
      title: "订阅概览",
      planType: "计划类型",
      status: "状态",
      active: "已激活",
      startDate: "开始日期",
      endDate: "结束日期",
      progress: "订阅进度"
    },
    management: {
      title: "订阅管理",
      description: "通过客户门户管理您的订阅、查看账单历史和更新付款方式。",
      manageSubscription: "管理订阅",
      changePlan: "更改计划",
      redirecting: "正在跳转..."
    },
    noSubscription: {
      title: "未找到有效订阅",
      description: "您当前没有活跃的订阅计划。",
      viewPlans: "查看订阅计划"
    }
  },
  dashboard: {
    metadata: {
      title: "TinyShip - 仪表盘",
      description: "在您的个性化仪表盘中管理账户、订阅和个人资料设置。",
              keywords: "仪表盘, 账户, 个人资料, 订阅, 设置, 管理"
    },
    title: "仪表盘",
    description: "管理您的账户和订阅",
    profile: {
      title: "个人信息",
      noNameSet: "未设置姓名",
      role: "角色:",
      emailVerified: "邮箱已验证",
      editProfile: "编辑个人资料",
      updateProfile: "更新个人资料",
      cancel: "取消",
      form: {
        labels: {
          name: "姓名",
          email: "邮箱地址",
          image: "头像图片链接"
        },
        placeholders: {
          name: "请输入您的姓名",
          email: "邮箱地址",
          image: "https://example.com/your-image.jpg"
        },
        emailReadonly: "邮箱地址无法修改",
        imageDescription: "可选：输入您的头像图片链接"
      },
      updateSuccess: "个人资料更新成功",
      updateError: "更新个人资料失败，请重试"
    },
    subscription: {
      title: "订阅状态",
      status: {
        lifetime: "终身会员",
        active: "有效",
        canceled: "已取消",
        cancelAtPeriodEnd: "期末取消",
        pastDue: "逾期",
        unknown: "未知",
        noSubscription: "无订阅"
      },
      paymentType: {
        recurring: "循环订阅",
        oneTime: "一次性"
      },
      lifetimeAccess: "您拥有终身访问权限",
      expires: "到期时间:",
      cancelingNote: "您的订阅将不会续订，并将在以下时间结束:",
      noActiveSubscription: "您当前没有有效的订阅",
      manageSubscription: "管理订阅",
      viewPlans: "查看套餐"
    },
    credits: {
      title: "积分余额",
      available: "可用积分",
      totalPurchased: "累计获得",
      totalConsumed: "累计消耗",
      recentTransactions: "最近交易",
      buyMore: "购买更多积分",
      types: {
        purchase: "充值",
        bonus: "赠送",
        consumption: "消耗",
        refund: "退款",
        adjustment: "调整"
      },
      descriptions: {
        ai_chat: "AI 对话",
        ai_image_generation: "AI 图像生成",
        ai_video_generation: "AI 视频生成",
        image_generation: "图片生成",
        document_processing: "文档处理",
        purchase: "积分充值",
        bonus: "赠送积分",
        refund: "积分退款",
        adjustment: "管理员调整"
      },
      table: {
        type: "类型",
        description: "描述",
        amount: "数量",
        time: "时间"
      }
    },
    account: {
      title: "账户信息",
      memberSince: "注册时间",
      phoneNumber: "手机号码"
    },
    orders: {
      title: "订单历史",
      status: {
        pending: "待支付",
        paid: "已支付",
        failed: "支付失败",
        refunded: "已退款",
        canceled: "已取消"
      },
      provider: {
        stripe: "Stripe",
        wechat: "微信支付",
        creem: "Creem",
        alipay: "支付宝"
      },
      noOrders: "没有找到订单",
      noOrdersDescription: "您还没有下过任何订单",
      viewAllOrders: "查看所有订单",
      orderDetails: {
        orderId: "订单ID",
        amount: "金额",
        plan: "计划",
        status: "状态",
        provider: "支付方式",
        createdAt: "创建时间"
      },
      recent: {
        title: "最近订单",
        showingRecent: "显示最近 {count} 个订单"
      },
      page: {
        title: "所有订单",
        description: "查看和管理您的所有订单",
        backToDashboard: "返回仪表盘",
        totalOrders: "共 {count} 个订单"
      }
    },
    linkedAccounts: {
      title: "关联账户",
      connected: "已连接",
      connectedAt: "关联时间:",
      noLinkedAccounts: "暂无关联账户",
      providers: {
        credential: "邮箱密码",
        google: "Google",
        github: "GitHub",
        facebook: "Facebook",
        apple: "Apple",
        discord: "Discord",
        wechat: "微信",
        "phone-number": "手机号"
      }
    },
    tabs: {
      profile: {
        title: "个人资料",
        description: "管理您的个人信息和头像"
      },
      account: {
        title: "账户管理",
        description: "密码修改、关联账户和账户安全"
      },
      security: {
        title: "安全设置",
        description: "密码和安全设置"
      },
      subscription: {
        description: "管理您的订阅计划和付费功能"
      },
      credits: {
        title: "积分",
        description: "查看积分余额和交易记录"
      },
      orders: {
        description: "查看您的订单历史和交易记录"
      },
      content: {
        profile: {
          title: "个人资料",
          subtitle: "这是您在网站上向其他人展示的信息。",
          username: {
            label: "用户名",
            value: "shadcn",
            description: "这是您的公开显示名称。可以是您的真实姓名或昵称。您只能每30天更改一次。"
          },
          email: {
            label: "邮箱",
            placeholder: "选择要显示的已验证邮箱",
            description: "您可以在邮箱设置中管理已验证的邮箱地址。"
          }
        },
        account: {
          title: "账户设置",
          subtitle: "管理您的账户设置和偏好。",
          placeholder: "账户设置内容..."
        },
        security: {
          title: "安全设置",
          subtitle: "管理您的密码和安全设置。",
          placeholder: "安全设置内容..."
        }
      }
    },
    quickActions: {
      title: "快速操作",
      editProfile: "编辑资料",
      accountSettings: "账户设置",
      subscriptionDetails: "订阅详情",
      getSupport: "获取帮助",
      viewDocumentation: "查看文档"
    },
    accountManagement: {
      title: "账户管理",
      changePassword: {
        title: "更改密码",
        description: "更新您的账户密码",
        oauthDescription: "社交登录账户无法更改密码",
        button: "更改密码",
        dialogDescription: "请输入您当前的密码并选择新密码",
        form: {
          currentPassword: "当前密码",
          currentPasswordPlaceholder: "请输入当前密码",
          newPassword: "新密码",
          newPasswordPlaceholder: "请输入新密码（至少8个字符）",
          confirmPassword: "确认新密码",
          confirmPasswordPlaceholder: "请再次输入新密码",
          cancel: "取消",
          submit: "更新密码"
        },
        success: "密码更新成功",
        errors: {
          required: "请填写所有必填字段",
          mismatch: "两次输入的新密码不一致",
          minLength: "密码长度至少为8个字符",
          failed: "密码更新失败，请重试"
        }
      },
      deleteAccount: {
        title: "删除账户",
        description: "永久删除您的账户及所有相关数据",
        button: "删除账户",
        confirmTitle: "删除账户",
        confirmDescription: "您确定要删除您的账户吗？",
        warning: "⚠️ 此操作无法撤销",
        consequences: {
          data: "您的所有个人数据将被永久删除",
          subscriptions: "活跃订阅将被取消",
          access: "您将失去所有高级功能的访问权限"
        },
        form: {
          cancel: "取消",
          confirm: "是的，删除我的账户"
        },
        success: "账户删除成功",
        errors: {
          failed: "删除账户失败，请重试"
        }
      }
    },
    roles: {
      admin: "管理员",
      user: "普通用户"
    }
  },
  premiumFeatures: {
    metadata: {
      title: "TinyShip - 高级功能",
      description: "探索您的订阅包含的所有高级功能。访问高级工具、AI 助手和增强功能。",
      keywords: "高级功能, 功能, 高级, 工具, 订阅, 权益, 增强"
    },
    title: "高级功能",
    description: "感谢您的订阅！以下是您现在可以使用的所有高级功能。",
    loading: "加载中...",
    subscription: {
      title: "您的订阅",
      description: "当前订阅状态和详细信息",
      status: "订阅状态",
      type: "订阅类型",
      expiresAt: "到期时间",
      active: "已激活",
      inactive: "未激活",
      lifetime: "终身会员",
      recurring: "周期性订阅"
    },
    badges: {
      lifetime: "终身会员"
    },
    demoNotice: {
      title: "🎯 SaaS 模板演示页面",
      description: "这是一个用于测试路由保护的演示页面。只有付费用户才能访问此页面，展示了如何在您的 SaaS 应用中实现订阅级别的访问控制。"
    },
    features: {
      userManagement: {
        title: "高级用户管理",
        description: "完整的用户档案管理和自定义设置"
      },
      aiAssistant: {
        title: "AI 智能助手",
        description: "先进的人工智能功能，提升工作效率"
      },
      documentProcessing: {
        title: "无限文档处理",
        description: "处理任意数量和大小的文档文件"
      },
      dataAnalytics: {
        title: "详细数据分析",
        description: "深入的数据分析和可视化报表"
      }
    },
    actions: {
      accessFeature: "访问功能"
    }
  },
  ai: {
    metadata: {
      title: "TinyShip - AI 助手",
      description: "与强大的 AI 模型互动，包括 GPT-4、通义千问和 DeepSeek。获得编程、写作和问题解决的 AI 帮助。",
              keywords: "AI, 助手, 聊天机器人, GPT-4, 人工智能, 机器学习, 对话"
    },
    chat: {
      title: "AI 助手",
      description: "一个大模型对话简单实现，可扩展设计，使用了最新的技术 ai-sdk / ai-elements / streamdown 实现非常丝滑的聊天效果，可以按需求扩展为更复杂的功能",
      placeholder: "需要我帮什么忙？",
      sending: "发送中...",
      thinking: "AI 正在思考...",
      noMessages: "开始与 AI 助手对话",
      welcomeMessage: "你好！我是你的 AI 助手。今天我能为你做些什么？",
      toolCall: "工具调用",
      providers: {
        title: "AI 提供商",
        openai: "OpenAI",
        qwen: "通义千问",
        deepseek: "DeepSeek"
      },
      models: {
        "gpt-5": "GPT-5",
        "gpt-5-codex": "GPT-5 Codex",
        "gpt-5-pro": "GPT-5 Pro",
        "qwen-max": "通义千问-Max",
        "qwen-plus": "通义千问-Plus", 
        "qwen-turbo": "通义千问-Turbo",
        "deepseek-chat": "DeepSeek 对话",
        "deepseek-coder": "DeepSeek 编程"
      },
      actions: {
        send: "发送",
        copy: "复制",
        copied: "已复制！",
        retry: "重试",
        dismiss: "关闭",
        newChat: "新对话",
        clearHistory: "清空历史"
      },
      errors: {
        failedToSend: "发送消息失败，请重试。",
        networkError: "网络错误，请检查网络连接。",
        invalidResponse: "AI 响应无效，请重试。",
        rateLimited: "请求过于频繁，请稍后再试。",
        subscriptionRequired: "AI 功能需要有效订阅",
        subscriptionRequiredDescription: "升级到付费计划以使用 AI 聊天功能",
        insufficientCredits: "积分不足",
        insufficientCreditsDescription: "使用 AI 聊天需要积分或订阅，请购买积分以继续使用。"
      },
      history: {
        title: "聊天记录",
        empty: "暂无聊天记录",
        today: "今天",
        yesterday: "昨天",
        thisWeek: "本周",
        older: "更早"
      }
    },
    image: {
      metadata: {
        title: "TinyShip - AI 图像生成",
        description: "使用 AI 生成精美图像。支持通义千问图像、fal.ai Flux、OpenAI DALL-E 和 Google Gemini。",
        keywords: "AI, 图像生成, DALL-E, Flux, 通义千问, Gemini, 文生图, 艺术, 创意"
      },
      title: "AI 图像生成",
      description: "使用多种 AI 提供商从文本提示生成精美图像",
      defaultPrompt: "一只黄色拉布拉多带着黑色金色圆墨镜在成都的场馆和两只黄白猫喝茶",
      prompt: "提示词",
      promptPlaceholder: "描述您想要生成的图像...",
      negativePrompt: "负面提示词",
      negativePromptPlaceholder: "描述您不希望在图像中出现的内容...",
      negativePromptHint: "描述需要避免在生成图像中出现的元素",
      generate: "生成",
      generating: "生成中...",
      generatedSuccessfully: "图像生成成功！",
      download: "下载",
      result: "结果",
      idle: "空闲",
      preview: "预览",
      json: "JSON",
      whatNext: "接下来您想做什么？",
      costInfo: "本次请求将花费",
      perMegapixel: "每百万像素",
      credits: "积分",
      providers: {
        title: "提供商",
        qwen: "阿里云百炼",
        fal: "fal.ai",
        openai: "OpenAI",
        gemini: "Google Gemini"
      },
      models: {
        "qwen-image-plus": "通义千问图像 Plus",
        "qwen-image-max": "通义千问图像 Max",
        "fal-ai/qwen-image-2512/lora": "Qwen Image 2512 Lora",
        "fal-ai/nano-banana-pro": "Nano Banana Pro",
        "fal-ai/flux/dev": "Flux Dev",
        "fal-ai/recraft/v3/text-to-image": "Recraft V3 Text to Image",
        "fal-ai/flux-pro/kontext": "Flux Pro Kontext",
        "fal-ai/bytedance/seedream/v3/text-to-image": "Bytedance Seedream V3 Text to Image",
        "dall-e-3": "DALL-E 3",
        "dall-e-2": "DALL-E 2",
        "gemini-3.1-flash-image-preview": "Nano Banana 2",
        "gemini-3-pro-image-preview": "Nano Banana Pro",
        "gemini-2.5-flash-image": "Nano Banana"
      },
      settings: {
        title: "附加设置",
        showMore: "更多",
        showLess: "收起",
        imageSize: "图像尺寸",
        imageSizeHint: "选择宽高比和分辨率",
        numInferenceSteps: "推理步数",
        numInferenceStepsHint: "步数越多质量越高，但速度越慢",
        guidanceScale: "引导强度",
        guidanceScaleHint: "控制生成图像与提示词的匹配程度",
        seed: "种子",
        seedHint: "使用相同的种子可以复现结果",
        random: "随机",
        randomize: "随机生成",
        promptExtend: "提示词扩展",
        promptExtendHint: "AI 将增强和扩展您的提示词",
        watermark: "水印",
        watermarkHint: "在生成的图像上添加通义千问水印",
        syncMode: "同步模式",
        syncModeHint: "返回 base64 数据而非 URL"
      },
      errors: {
        generationFailed: "图像生成失败",
        invalidPrompt: "请输入有效的提示词",
        insufficientCredits: "积分不足",
        insufficientCreditsDescription: "生成图像需要积分，请购买积分以继续。",
        networkError: "网络错误，请检查您的连接。",
        unknownError: "发生未知错误"
      }
    },
    video: {
      metadata: {
        title: "TinyShip - AI 视频生成",
        description: "使用 AI 生成精彩视频。支持 fal.ai、火山引擎 Seedance 和阿里云万象。",
        keywords: "AI, 视频生成, 文生视频, Seedance, 万象, Luma, 创意"
      },
      title: "AI 视频生成",
      description: "使用多种 AI 提供商从文本提示生成精彩视频",
      defaultPrompt: "猫猫从腿上直接跳跃到沙发上",
      prompt: "提示词",
      model: "模型",
      promptPlaceholder: "描述您想要生成的视频...",
      generate: "生成视频",
      generating: "视频生成中...",
      generatedSuccessfully: "视频生成成功！",
      download: "下载视频",
      result: "结果",
      idle: "输入提示词以生成视频",
      whatNext: "接下来您想做什么？",
      credits: "积分",
      providers: {
        title: "提供商",
        fal: "fal.ai",
        volcengine: "火山引擎",
        aliyun: "阿里云万象"
      },
      models: {
        "kling-video/v2.5-turbo/pro/text-to-video": "Kling 2.5 Turbo Pro 文生视频",
        "kling-video/v2.5-turbo/pro/image-to-video": "Kling 2.5 Turbo Pro 图生视频",
        "doubao-seedance-1-5-pro-251215": "豆包 Seedance 1.5 Pro",
        "doubao-seedance-1-0-pro-250528": "豆包 Seedance 1.0 Pro",
        "wan2.6-t2v": "万象 2.6 文生视频",
        "wan2.5-t2v-turbo": "万象 2.5 文生视频 Turbo",
        "wan2.6-i2v-flash": "万象 2.6 图生视频 Flash"
      },
      inputMode: {
        label: "生成模式",
        text: "文生视频",
        firstFrame: "首帧",
        firstLastFrame: "首尾帧",
        firstLastFrameUnsupported: "当前提供商仅支持首帧"
      },
      frameInput: {
        title: "帧图输入",
        hint: "可直接填写 URL，或上传到 Cloudflare R2。",
        firstFrameUrl: "首帧 URL",
        lastFrameUrl: "尾帧 URL",
        upload: "上传",
        uploadedToR2: "帧图已上传到 R2",
        preview: "图片预览",
        previewAlt: "首帧预览"
      },
      settings: {
        title: "高级设置",
        videoSize: "视频尺寸 / 宽高比",
        videoSizePlaceholder: "选择尺寸",
        videoSizeHint: "选择分辨率或宽高比",
        duration: "时长（秒）",
        durationHint: "生成视频的长度",
        seed: "种子",
        seedHint: "使用相同种子可以复现结果",
        random: "随机",
        loop: "循环",
        loopHint: "视频是否无缝循环播放",
        motionStrength: "运动强度",
        motionStrengthHint: "控制视频中运动的幅度",
        promptExtend: "提示词扩展",
        promptExtendHint: "AI 将自动增强和扩展您的提示词",
        watermark: "水印",
        watermarkHint: "在生成的视频上添加水印"
      },
      errors: {
        generationFailed: "视频生成失败",
        invalidPrompt: "请输入有效的提示词",
        firstFrameRequired: "请先提供首帧 URL",
        lastFrameRequired: "请先提供尾帧 URL",
        unsupportedImageType: "仅支持 JPEG/JPG/PNG/WEBP/BMP 图像",
        imageTooLarge: "图像大小不能超过 10MB",
        uploadFailed: "上传失败",
        unsupportedModeForProvider: "当前提供商不支持此生成模式",
        insufficientCredits: "积分不足",
        insufficientCreditsDescription: "生成视频需要积分，请购买积分以继续。",
        networkError: "网络错误，请检查您的连接。",
        unknownError: "发生未知错误",
        timeout: "视频生成超时，请重试。"
      },
      resultPanel: {
        generatingHint: "视频生成通常需要 1-5 分钟...",
        videoTagUnsupported: "您的浏览器不支持 video 标签。"
      }
    }
  },
  home: {
    metadata: {
      title: "千年舟文旅服务 - 水上体验、活动定制、研学课程与文创零售",
      description: "围绕水上运动体验、节庆与场景定制、教育与课程、商务与会展、文创与零售五大板块，提供统一预约咨询与完整服务展示。",
      keywords: "水上运动, 研学课程, 团建活动, 商务接待, 文创零售, 观光游艇, 皮划艇, 桨板"
    },
    hero: {
      eyebrow: "统一预约与咨询入口",
      titlePrefix: "把",
      titleHighlight: "五大文旅服务",
      titleSuffix: "放到同一个首页，一眼看懂、一步跳转",
      subtitle: "首页先看清服务结构，进入详情页再看人群、套餐、升级款和附加产品。适合个人游客、家庭亲子、情侣活动、企业接待和文创消费。",
      buttons: {
        primary: "查看五大服务",
        secondary: "先看商务与会展"
      },
      tags: [
        "五大服务统一展示",
        "支持套餐与升级款说明",
        "首页可直达详情页",
        "适用人群与报价同时可见"
      ]
    },
    overview: {
      items: [
        {
          title: "五大主题服务并列展示",
          description: "水上运动、活动定制、教育课程、商务会展、文创零售都放在首页显眼区域，用户不需要翻很久就能看明白业务范围。"
        },
        {
          title: "统一预约咨询收口",
          description: "无论用户从哪个服务入口进入，详情页都统一承接到预约与咨询动作，适合后续接表单、电话或微信。"
        },
        {
          title: "活动体验到零售成交闭环",
          description: "从单次体验、套餐、升级款，到文创售卖、直播代播和内容授权，页面结构可以直接承接不同营收入口。"
        }
      ]
    },
    servicesSection: {
      eyebrow: "我们提供什么服务",
      title: "首页先看全局，点击再看细项",
      subtitle: "五个入口分别对应一整页服务说明，每一页直接展开基础服务、套餐报价、升级款和附加产品。"
    },
    bookingSteps: {
      items: [
        {
          title: "先选服务方向",
          description: "用户从首页 5 个功能入口里快速判断自己属于水上体验、活动定制、课程、商务接待还是文创消费。"
        },
        {
          title: "一页看完完整内容",
          description: "进入详情页后直接看到适用人群、服务亮点、价格卡片和升级项，不需要再去其他页面找说明。"
        },
        {
          title: "统一进入咨询与预约",
          description: "页面末尾统一放预约/咨询动作，后续接表单、客服微信、电话或者报价单下载都比较顺手。"
        }
      ]
    },
    finalCta: {
      eyebrow: "继续浏览",
      title: "先从最容易成交的一页开始",
      subtitle: "如果你希望用户快速理解业务并进入咨询，建议先主推水上运动体验或商务与会展两类页面，再把文创与零售作为后续转化页面。",
      buttons: {
        primary: "查看水上运动体验",
        secondary: "查看文创与零售"
      }
    },
    footer: {
      copyright: "© {year} TinyShip. All rights reserved.",
      description: "TinyShip"
    },
    common: {
      viewDetails: "查看详情"
    }
  },
  services: {
    common: {
      metadataTitleSuffix: "千年舟文旅服务",
      backToHome: "返回首页服务区",
      audienceTitle: "适合哪些人",
      primaryCta: "查看完整服务内容",
      secondaryCta: "继续浏览其他服务",
      highlightTitle: "本页重点内容",
      sectionLabel: "服务模块",
      relatedTitle: "继续浏览",
      relatedSubtitle: "其他服务也已经整理成独立页面",
      notFoundTitle: "服务不存在"
    },
    catalog: {
      waterSports: {
        name: "水上运动体验",
        tagline: "轻户外体验",
        cardDescription: "皮划艇、桨板、观光游艇和长期训练组合在同一页，适合个人、朋友、家庭和团队做轻量水上体验。",
        detailIntro: "围绕“先体验、再复购”的路径组织内容，既有单次项目，也有包船、年卡和培训课，适合周末体验、团体活动和长期兴趣培养。",
        audiences: ["个人游客", "朋友结伴", "家庭亲子", "团队客群"],
        highlights: [
          "皮划艇 68 元 / 双人 40 分钟",
          "皮划艇 98 元 / 三人不限时",
          "桨板含指导 98 元 / 30 分钟",
          "观光游艇 58 元 / 人 20 分钟",
          "包船观光 880 元 / 小时"
        ],
        quickFacts: [
          { label: "推荐停留时长", value: "40 - 120 分钟" },
          { label: "适合预订形式", value: "单次体验 / 包船 / 年卡" },
          { label: "内容强度", value: "轻体验到持续训练" },
          { label: "适合场景", value: "周末休闲 / 朋友聚会 / 亲子同行" }
        ],
        sections: [
          {
            slug: "basic",
            title: "基础体验项目",
            description: "适合第一次接触水上项目的游客，页面上直接给出价格和时长，决策成本低。",
            items: [
              { name: "皮划艇双人体验", price: "68 元 / 双人", duration: "40 分钟", description: "适合情侣、朋友和轻松休闲客群，体验门槛低，适合首页主推。" },
              { name: "皮划艇三人体验", price: "98 元 / 三人", duration: "不限时", description: "更适合亲子和三五好友一起上水，具备较强社交属性。" },
              { name: "桨板体验（含指导）", price: "98 元 / 人", duration: "30 分钟", description: "由现场指导带入门，适合想快速尝鲜又担心不会操作的用户。" },
              { name: "观光游艇", price: "58 元 / 人", duration: "20 分钟", description: "节奏轻、出片快，适合游客到店后的即时消费。" },
              { name: "航模体验", price: "20 元 / 人", duration: "20 分钟", description: "可作为轻互动补充项目，提高停留时间和亲子参与感。" }
            ]
          },
          {
            slug: "long-term",
            title: "长期服务与训练",
            description: "为复购用户和青少年培养需求设计，补齐单次体验之外的持续营收。",
            items: [
              { name: "皮划艇 / 桨板年卡", price: "580 元 / 年", duration: "全年有效", description: "适合本地客群复购，形成固定训练与周末活动习惯。" },
              { name: "青少年桨板培训", price: "1380 元 / 12 课", duration: "分阶段课程", description: "面向青少年兴趣培养，便于和研学课程联动。" },
              { name: "包船观光服务", price: "880 元 / 小时", duration: "按小时预约", description: "适合家庭聚会、小团队出游或商务私享场景。" }
            ]
          },
          {
            slug: "custom",
            title: "组合与定制体验",
            description: "把体验和服务包做成更完整的交付，适合有明确活动目的的客户。",
            items: [
              { name: "定制体验服务", price: "198 元 / 2 小时", duration: "2 小时", description: "可加入教学、下午茶和团体互动内容，适合活动型消费。" },
              { name: "专业摄影记录", price: "定制报价", duration: "按活动安排", description: "可与包船、团建、情侣和研学项目联动，提高客单价和纪念价值。" },
              { name: "体验后续纪念册", price: "定制报价", duration: "活动结束后交付", description: "适合把单次体验继续延伸为纪念品和二次传播素材。" }
            ]
          }
        ]
      },
      festivalCustom: {
        name: "节庆与场景定制",
        tagline: "氛围与活动策划",
        cardDescription: "婚恋、生日会、团建和亲子活动都归到这一页，先给场景布置与体验项目，再展示套餐与升级服务。",
        detailIntro: "页面聚焦“场景感”和“整包交付”。用户可以先看单项布置与互动项目，再看双人套餐、亲子团建套餐和升级款服务。",
        audiences: ["情侣 / 婚恋客群", "家庭亲子", "企业团建", "社团活动"],
        highlights: [
          "专属码头布景 300 元 / 场",
          "双人观光游艇 116 元 / 双人 60 分钟",
          "主题场景布置 100 元 / 场",
          "亲子互动游戏 20 元 / 人 50 分钟",
          "团建 / 亲子套餐 158 元 / 人，10 人起订"
        ],
        quickFacts: [
          { label: "推荐停留时长", value: "2 - 2.5 小时" },
          { label: "适合预约方式", value: "双人套餐 / 团建整包 / 生日会升级" },
          { label: "服务重点", value: "布景、体验、影像、互动" },
          { label: "适合场景", value: "约会、生日、团建、家庭聚会" }
        ],
        sections: [
          {
            slug: "scene",
            title: "场景与互动单项",
            description: "适合先做轻量组合报价，也方便把不同需求拆开说明。",
            items: [
              { name: "专属码头布景", price: "300 元 / 场", duration: "按活动档期", description: "适合情侣约会、求婚或纪念日场景拍摄，形成明确视觉记忆点。" },
              { name: "主题场景布置", price: "100 元 / 场", duration: "按活动档期", description: "适合生日会、亲子活动和团体合照区域快速搭建。" },
              { name: "双人观光游艇", price: "116 元 / 双人", duration: "60 分钟", description: "适合婚恋客群、纪念日体验和轻奢约会场景。" },
              { name: "亲子互动游戏", price: "20 元 / 人", duration: "50 分钟", description: "适合拉长亲子停留时间，也可以作为生日会或团建暖场环节。" }
            ]
          },
          {
            slug: "package",
            title: "基础套餐组合",
            description: "把用户最容易理解的服务打成套餐，首页点击后可以很快看到一整套方案。",
            items: [
              { name: "婚恋双人套餐", price: "498 元 / 双人", duration: "约 2 小时", description: "包含专属码头布景、双人观光游艇和纪念短片拍摄，适合情侣纪念日与求婚前置体验。" },
              { name: "团建 / 亲子套餐", price: "158 元 / 人", duration: "2.5 小时", description: "10 人起订，包含主题场景布置、皮划艇 / 桨板体验、生日蛋糕定制与亲子互动游戏。" },
              { name: "主题活动定制", price: "198 元 / 2 小时", duration: "2 小时", description: "适合需要教学、下午茶和轻策划服务的活动场景。" }
            ]
          },
          {
            slug: "upgrade",
            title: "升级款与高客单服务",
            description: "用于承接高预算用户，把影像、礼品和管家式服务一起说清楚。",
            items: [
              { name: "婚恋升级款", price: "3980 元 / 场", duration: "按活动全程", description: "包含主题场景深度定制、专业电影级影像全记录，以及定制婚礼伴手礼和私人管家服务。" },
              { name: "宝宝生日会升级款", price: "880 元 / 场", duration: "按活动全程", description: "以木船下午茶、定制蛋糕和儿童互动游戏为主，附加主持、纪念手册和影像留存。" },
              { name: "纪念影像留存", price: "定制报价", duration: "按需求配置", description: "适合在节庆或家庭场景中提升成交金额和传播效果。" }
            ]
          }
        ]
      },
      educationCourses: {
        name: "教育与课程",
        tagline: "研学与自然课程",
        cardDescription: "把青少年研学、自然科普、水上体验和非遗手作归并到课程页，便于学校、家长和机构快速判断方案深度。",
        detailIntro: "这一页围绕“能学到什么、孩子会体验什么、整套课程时长多久”来组织内容，兼顾基础课程、研学套餐和升级课程。",
        audiences: ["爱好者", "青少年", "学校团体", "企业研学"],
        highlights: [
          "自然科普讲解 55 元 / 人 30 分钟",
          "皮划艇体验 68 元 / 人 60 分钟",
          "水生植物观察手账 89 元 / 人 40 分钟",
          "研学套餐 138 元 / 人 2 小时",
          "升级款 368 元 / 人"
        ],
        quickFacts: [
          { label: "推荐停留时长", value: "2 小时起" },
          { label: "课程结构", value: "讲解 + 观察 + 上水 + 手作" },
          { label: "适合合作对象", value: "学校 / 家长 / 社团 / 企业" },
          { label: "交付亮点", value: "纪念手册与摄影记录" }
        ],
        sections: [
          {
            slug: "basic",
            title: "基础课程单项",
            description: "适合按课时和项目拆开售卖，也便于学校或家长组合安排。",
            items: [
              { name: "自然科普讲解", price: "55 元 / 人", duration: "30 分钟", description: "适合作为研学开场内容，让参与者先建立基础知识背景。" },
              { name: "皮划艇体验", price: "68 元 / 人", duration: "60 分钟", description: "让课程从岸上观察延伸到真实水上体验，增强参与感。" },
              { name: "水生植物观察手账", price: "89 元 / 人", duration: "40 分钟", description: "结合观察和记录，适合青少年形成完整的学习成果。" }
            ]
          },
          {
            slug: "package",
            title: "标准研学套餐",
            description: "适合学校、家庭亲子和青少年社群做一站式安排。",
            items: [
              { name: "青少年研学套餐", price: "138 元 / 人", duration: "2 小时", description: "包含科普讲解、皮划艇体验和全流程指导，是最适合首页直推的基础完整方案。" },
              { name: "企业研学轻定制", price: "定制报价", duration: "按人数与时长安排", description: "适合企业家属日、员工亲子日和教育主题活动延展。" },
              { name: "课程延伸摄影记录", price: "定制报价", duration: "课程全程", description: "便于形成可回传的图文内容，提高研学项目感知价值。" }
            ]
          },
          {
            slug: "upgrade",
            title: "升级课程与增值项",
            description: "用于承接更重体验和更完整交付的研学客户。",
            items: [
              { name: "研学升级款", price: "368 元 / 人", duration: "半日深度体验", description: "加入非遗船模手作工坊和水上文化寻宝挑战，并附带纪念手册与专业摄影记录。" },
              { name: "非遗船模手作工坊", price: "含在升级款中", duration: "按课程安排", description: "强化文化内容，让研学不只停留在体验层面。" },
              { name: "水上文化寻宝挑战", price: "含在升级款中", duration: "按课程安排", description: "更适合团体合作和任务式学习场景。" }
            ]
          }
        ]
      },
      businessExhibition: {
        name: "商务与会展",
        tagline: "接待与展陈服务",
        cardDescription: "将商务接待、国际人文交流、露天展茶歇和定制饮品整合到一个页面，方便企业快速判断接待规格。",
        detailIntro: "该页适合面向企业、机构和高端游客展示服务层次，从基础导览和茶歇，到包船接待、VIP 翻译与露天展会饮品服务都能直接展开说明。",
        audiences: ["企业", "机构", "高端游客", "国际交流团队"],
        highlights: [
          "双语导览讲解 55 元 / 人 30 分钟",
          "商务茶歇 68 元 / 人 不限时",
          "观光游艇包船 89 元 / 人 40 分钟",
          "商务接待套餐 258 元 / 人，4 人起订",
          "围炉煮茶 68 元 / 位"
        ],
        quickFacts: [
          { label: "推荐停留时长", value: "2 小时起" },
          { label: "适合预约形式", value: "商务接待 / 展陈服务 / 定制茶席" },
          { label: "内容重点", value: "接待流程、翻译、茶歇、包船" },
          { label: "适合场景", value: "企业拜访 / 国际交流 / 展会露天活动" }
        ],
        sections: [
          {
            slug: "basic",
            title: "基础接待模块",
            description: "让企业客户先看懂基础单项，再决定是否升级到整包服务。",
            items: [
              { name: "双语导览讲解", price: "55 元 / 人", duration: "30 分钟", description: "适合国际人文交流、企业接待和外地来访客群。" },
              { name: "商务茶歇", price: "68 元 / 人", duration: "不限时", description: "适合作为洽谈前后停留和轻社交环节，提高整体接待完整度。" },
              { name: "观光游艇包船体验", price: "89 元 / 人", duration: "40 分钟", description: "适合作为商务接待的亮点环节，兼具体验感与出片效果。" },
              { name: "文化手册", price: "20 元 / 人", duration: "现场领取", description: "适合作为接待材料或纪念品配套发放。" }
            ]
          },
          {
            slug: "package",
            title: "整包商务接待方案",
            description: "适合首页点击后直接看到可成交的标准商务方案。",
            items: [
              { name: "国际人文交流 / 商务套餐", price: "258 元 / 人", duration: "2 小时", description: "4 人起订，包含双语导览、商务茶歇、观光游艇和文化手册，全流程更完整。" },
              { name: "企业 / 团队定制茶席", price: "368 元 / 桌", duration: "8 人 / 桌", description: "适合展会、团建或企业交流中的围炉茶席接待。" },
              { name: "茶席体验", price: "68 元 / 位", duration: "含茶点 + 讲解", description: "适合作为露天展和文化展示的轻型体验项目。" }
            ]
          },
          {
            slug: "exhibition",
            title: "会展与升级接待",
            description: "用于展示更高规格的接待能力，以及露天展现场的营收内容。",
            items: [
              { name: "VIP 接待流程 + 专属翻译服务", price: "定制报价", duration: "按活动安排", description: "适合涉外、机构和高端商务来访，对服务规格要求更高的客群。" },
              { name: "高级洽谈茶室", price: "定制报价", duration: "按活动安排", description: "适合把商务洽谈从体验区延伸到更安静、更正式的场域。" },
              { name: "移动茶歇车", price: "25 - 45 元 / 杯", duration: "活动期间", description: "适合露天展、会展活动与企业开放日现场。" },
              { name: "定制饮品 / 联名杯", price: "35 - 45 元 / 杯", duration: "活动期间", description: "文创联名杯 38 元 / 杯，适合展陈活动现场售卖与品牌联名传播。" }
            ]
          }
        ]
      },
      culturalRetail: {
        name: "文创与零售",
        tagline: "商品、直播与授权",
        cardDescription: "把常规文创、新品系列、盲盒、直播代播和 AI 内容授权都集中展示，适合做体验后的消费承接页面。",
        detailIntro: "这一页承担体验之后的成交延展，既展示可直接售卖的文创产品，也承接直播、电商、AI 内容制作和授权类服务。",
        audiences: ["所有游客", "粉丝客群", "合作商户", "品牌联名方"],
        highlights: [
          "按动中性笔 12.9 元",
          "线圈笔记本 22.9 元",
          "海洋主题立体相框 89.9 元",
          "AI 定制服务 300 - 1500 元 / 单",
          "代播服务费 500 - 2000 元 / 场"
        ],
        quickFacts: [
          { label: "购买方式", value: "现场零售 / 活动联名 / 直播成交" },
          { label: "内容范围", value: "文创商品 + 数字内容服务" },
          { label: "适合场景", value: "体验后续消费 / 粉丝转化 / 品牌合作" },
          { label: "营收特征", value: "低门槛零售 + 高客单授权" }
        ],
        sections: [
          {
            slug: "retail",
            title: "常规文创矩阵",
            description: "适合先做即买即走型零售，作为体验页之后的自然转化。",
            items: [
              { name: "按动中性笔", price: "12.9 元", duration: "现货", description: "适合作为入门文创产品，单价低、转化快。" },
              { name: "线圈笔记本", price: "22.9 元", duration: "现货", description: "兼具实用性和纪念价值，适合游客与学生客群。" },
              { name: "海洋主题双人冰箱贴", price: "49.9 元", duration: "现货", description: "适合情侣、家庭和异地游客购买留念。" },
              { name: "手机壳（一对）", price: "29.9 元", duration: "现货", description: "适合双人客群和情侣场景，适合作为活动联名小商品。" }
            ]
          },
          {
            slug: "new-products",
            title: "海洋主题新品与盲盒",
            description: "页面中重点展示更强视觉辨识度的新品与 IP 化产品。",
            items: [
              { name: "海洋主题立体相框", price: "89.9 元", duration: "现货", description: "适合和亲子、情侣、纪念影像服务联动销售。" },
              { name: "海洋主题 IP 风铃", price: "69.9 元", duration: "现货", description: "更适合作为节庆活动或展会现场的氛围型文创。" },
              { name: "海洋主题香氛卡", price: "9.9 元", duration: "现货", description: "客单价轻，适合搭售或活动伴手礼。" },
              { name: "海洋主题长条书签 / 装饰条", price: "29.9 元", duration: "现货", description: "适合作为学生与文艺客群的标准化文创商品。" },
              { name: "五舟开运系列盲盒", price: "系列定价", duration: "限量发售", description: "适合制造收藏感和社交传播话题。" }
            ]
          },
          {
            slug: "content",
            title: "数字内容与合作服务",
            description: "除了零售产品，也展示能够带来更高客单的服务型收入。",
            items: [
              { name: "AI 定制内容制作", price: "300 - 1500 元 / 单", duration: "按项目交付", description: "为本地文旅商户提供 AIGC 内容制作与策划案生成。" },
              { name: "直播代播服务", price: "500 - 2000 元 / 场", duration: "按场次", description: "适合体验、文创和活动直播，帮助商家做现场转化。" },
              { name: "内容授权", price: "定制报价", duration: "按授权周期", description: "适合 AI 生成文旅内容和舟船文化素材授权合作。" },
              { name: "数据授权", price: "定制报价", duration: "按合作周期", description: "围绕文旅用户画像和消费趋势数据做企业授权。" }
            ]
          }
        ]
      }
    }
  },
  validators: {
    user: {
      name: {
        minLength: "姓名至少需要{min}个字符",
        maxLength: "姓名不能超过{max}个字符"
      },
      email: {
        invalid: "请输入有效的邮箱地址"
      },
      image: {
        invalidUrl: "请输入有效的链接地址"
      },
      password: {
        minLength: "密码至少需要{min}个字符",
        maxLength: "密码不能超过{max}个字符",
        mismatch: "两次输入的密码不一致"
      },
      countryCode: {
        required: "请选择国家/地区"
      },
      phoneNumber: {
        required: "请输入手机号",
        invalid: "手机号格式不正确"
      },
      verificationCode: {
        invalidLength: "验证码必须是{length}位数字"
      },
      id: {
        required: "用户ID不能为空"
      },
      currentPassword: {
        required: "请输入当前密码"
      },
      confirmPassword: {
        required: "请确认密码"
      },
      deleteAccount: {
        confirmRequired: "您必须确认删除账户"
      }
    },
    blog: {
      title: {
        required: "标题不能为空",
        maxLength: "标题不能超过 {max} 个字符",
      },
      slug: {
        maxLength: "Slug 不能超过 {max} 个字符",
        invalid: "Slug 只能包含小写字母、数字和连字符",
      },
      excerpt: {
        maxLength: "摘要不能超过 {max} 个字符",
      },
      coverImage: {
        invalidUrl: "请输入有效的封面图片 URL",
      },
      status: {
        invalid: "状态必须是草稿或已发布",
      },
    },
  },
  countries: {
    china: "中国",
    usa: "美国", 
    uk: "英国",
    japan: "日本",
    korea: "韩国",
    singapore: "新加坡",
    hongkong: "香港",
    macau: "澳门",
    australia: "澳大利亚",
    france: "法国",
    germany: "德国",
    india: "印度",
    malaysia: "马来西亚",
    thailand: "泰国"
  },
  header: {
    navigation: {
      ai: "AI 功能演示",
      premiumFeatures: "高级会员功能",
      pricing: "定价",
      upload: "文件上传",
      demos: "功能演示",
      demosDescription: "探索示例功能",
      blog: "博客",
      services: "服务"
    },
    demos: {
      ai: {
        title: "AI 对话",
        description: "大模型对话实现，可扩展设计，支持多个 Provider，需要购买积分使用"
      },
      aiImage: {
        title: "AI 图像生成",
        description: "AI 图像生成实现，可扩展设计，支持多个 Provider，需要购买积分使用"
      },
      aiVideo: {
        title: "AI 视频生成",
        description: "AI 视频生成实现，可扩展设计，支持多个 Provider，需要购买积分使用"
      },
      premium: {
        title: "高级会员功能",
        description: "路由保护演示页面，只有订阅付费用户才能访问此页面"
      },
      upload: {
        title: "文件上传",
        description: "文件上传实现，可扩展设计，支持多个 Provider，需要登录访问"
      }
    },
    auth: {
      signIn: "登录",
      getStarted: "开始使用",
      signOut: "退出登录"
    },
    userMenu: {
      dashboard: "控制台",
      profile: "个人资料",
      settings: "设置",
      personalSettings: "个人设置",
      adminPanel: "管理后台"
    },
    language: {
      switchLanguage: "切换语言",
      english: "English",
      chinese: "中文"
    },
    mobile: {
      themeSettings: "主题设置",
      languageSelection: "语言选择"
    }
  },
  docs: {
    home: {
      title: "TinyShip Docs",
      subtitle: "基于 Fumadocs 构建",
      description: "基于 Fumadocs 的静态站点项目，适用于文档、博客和静态页面。",
      cta: {
        docs: "阅读文档",
        blog: "访问博客"
      }
    },
    nav: {
      docs: "文档",
      blog: "博客"
    },
    blog: {
      title: "博客",
      description: "来自 TinyShip 团队的最新文章和动态",
      allPosts: "所有文章",
      previousPage: "← 上一页",
      nextPage: "下一页 →",
      back: "← 返回博客",
      noPosts: "暂无文章"
    }
  },
  upload: {
    title: "上传文件",
    description: "上传图片到云存储",
    providerTitle: "存储服务商",
    providerDescription: "选择您偏好的云存储服务商",
    providers: {
      oss: "阿里云 OSS",
      ossDescription: "国内优化存储",
      s3: "Amazon S3",
      s3Description: "全球云存储",
      r2: "Cloudflare R2",
      r2Description: "零出口费用",
      cos: "腾讯云 COS",
      cosDescription: "国内云存储"
    },
    uploadTitle: "上传图片",
    uploadDescription: "拖拽图片或点击浏览。最大 1MB。",
    dragDrop: "拖拽文件到这里",
    orClick: "或点击浏览（最大 1MB）",
    browseFiles: "浏览文件",
    clearAll: "清除全部",
    uploadedTitle: "已上传文件",
    uploadedDescription: "成功上传 {count} 个文件",
    uploading: "上传中...",
    viewFile: "查看",
    uploaded: "已上传",
    errors: {
      maxFiles: "只能上传 1 个文件",
      imageOnly: "只允许上传图片文件",
      fileTooLarge: "文件大小必须小于 1MB"
    }
  },
  blog: {
    metadata: {
      title: "TinyShip - 博客",
      description: "阅读 TinyShip 团队的最新文章和动态。",
      keywords: "博客, 文章, 动态, TinyShip, SaaS"
    },
    title: "博客",
    subtitle: "最新文章和动态",
    readMore: "阅读更多",
    publishedOn: "发布于",
    by: "作者",
    noPosts: "暂无文章，请稍后再来！",
    backToBlog: "返回博客"
  }
} as const; 
