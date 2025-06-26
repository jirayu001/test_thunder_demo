// This file provides simple navigation helpers for the app.
import { useRouter } from "next/navigation";

export function useAppRouter() {
  const router = useRouter();

  return {
    goToHome: () => router.push("/"),
    goToLogin: () => router.push("/login"),
    goToSignup: () => router.push("/signup"),
    goToUserDetail: () => router.push("/user_detail"),
    goToEditUserDetail: () => router.push("/user_detail/edit_user_detail"),
    goToEditUserDetailWithParams: (userId: string) => router.push(`/user_detail/edit_user_detail?userId=${userId}`),
    goToUserDetailWithParams: (userId: string) => router.push(`/user_detail?userId=${userId}`),
    goToUserDetailWithQuery: (query: string) => router.push(`/user_detail?${query}`),
    goToLoginWithQuery: (query: string) => router.push(`/login?${query}`),
    goToSignupWithQuery: (query: string) => router.push(`/signup?${query}`),
    goToUserDetailWithQueryAndParams: (query: string, userId: string) => 
      router.push(`/user_detail?${query}&userId=${userId}`),
    goToLoginWithQueryAndParams: (query: string, userId: string) => 
      router.push(`/login?${query}&userId=${userId}`),
    goToSignupWithQueryAndParams: (query: string, userId: string) => 
      router.push(`/signup?${query}&userId=${userId}`),
    goToEditUserDetailWithQueryAndParams: (query: string, userId: string) => 
      router.push(`/user_detail/edit_user_detail?${query}&userId=${userId}`),
    goToEditUserDetailWithQuery: (query: string) => 
      router.push(`/user_detail/edit_user_detail?${query}`),
    goToEditUserDetailWithParamsAndQuery: (userId: string, query: string) => 
      router.push(`/user_detail/edit_user_detail?userId=${userId}&${query}`),
    goToUserDetailWithParamsAndQuery: (userId: string, query: string) => 
      router.push(`/user_detail?userId=${userId}&${query}`),
    goToLoginWithParamsAndQuery: (userId: string, query: string) => 
      router.push(`/login?userId=${userId}&${query}`),
    goToSignupWithParamsAndQuery: (userId: string, query: string) => 
      router.push(`/signup?userId=${userId}&${query}`),   
    goBack: () => router.back(),
    push: (path: string) => router.push(path),
    replace: (path: string) => router.replace(path),
  };
}
