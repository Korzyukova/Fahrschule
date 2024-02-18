"use client";
import { useRouter } from "next/navigation";

export default function RedirectHome() {
  const router = useRouter();
  router.push("/de");
}
