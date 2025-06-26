// This file provides simple navigation helpers for the app.
import { useRouter } from "next/navigation";

export function useAppRouter() {
  const router = useRouter();

  return {
    goToHome: () => router.push("/"),
    goToLogin: () => router.push("/login"),
    goToSignup: () => router.push("/signup"),
    goBack: () => router.back(),
    push: (path: string) => router.push(path),
    replace: (path: string) => router.replace(path),
  };
}
