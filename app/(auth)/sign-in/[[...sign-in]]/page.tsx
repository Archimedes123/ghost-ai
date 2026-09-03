import type { Metadata } from "next"
import { SignIn } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Sign in · ghost AI",
}

export default function SignInPage() {
  return (
    <div className="w-full max-w-[25rem]">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        / Sign in
      </p>
      <SignIn />
    </div>
  )
}
