import type { Metadata } from "next"
import { SignUp } from "@clerk/nextjs"

export const metadata: Metadata = {
  title: "Sign up · ghost AI",
}

export default function SignUpPage() {
  return (
    <div className="w-full max-w-[25rem]">
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        / Sign up
      </p>
      <SignUp />
    </div>
  )
}
