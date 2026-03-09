import { db, blogPost, user } from "../libs/database";
import { eq } from "drizzle-orm";
import * as crypto from "crypto";

async function seed() {
  const adminUsers = await db.select().from(user).where(eq(user.email, "admin@example.com"));
  const admin = adminUsers[0];
  if (!admin) {
    console.error("Admin user not found");
    process.exit(1);
  }
  console.log("Admin user:", admin.id, admin.name);

  const publishedId = crypto.randomUUID();
  await db.insert(blogPost).values({
    id: publishedId,
    title: "Getting Started with TinyShip",
    slug: "getting-started-with-tinyship",
    content: "# Getting Started\n\nWelcome to **TinyShip**! This is a modern SaaS starter kit.\n\n## Features\n\n- Next.js & Nuxt.js support\n- Authentication\n- Payment integration\n\n```javascript\nconsole.log(\"Hello TinyShip!\");\n```\n\nEnjoy building your SaaS!",
    excerpt: "Learn how to get started with TinyShip, the modern SaaS development platform.",
    authorId: admin.id,
    status: "published",
    publishedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log("Created published post:", publishedId);

  const draftId = crypto.randomUUID();
  await db.insert(blogPost).values({
    id: draftId,
    title: "Draft Post - Coming Soon",
    slug: "draft-post-coming-soon",
    content: "# Coming Soon\n\nThis post is still being written.",
    excerpt: "This is a draft post that should not appear on the public blog.",
    authorId: admin.id,
    status: "draft",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log("Created draft post:", draftId);

  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
