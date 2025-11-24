import { redirect } from "next/navigation";

// Redirect root path to default locale.
export default function RootRedirect() {
  redirect("/en");
}
