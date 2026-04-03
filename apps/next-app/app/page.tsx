import { redirect } from "next/navigation";

import { config } from "@config";

export default function RootPage() {
  redirect(`/${config.app.i18n.defaultLocale}`);
}
