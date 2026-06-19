import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/content";

export default function Home() {
  redirect(`/${defaultLocale}`);
}
