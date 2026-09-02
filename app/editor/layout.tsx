import type { Metadata } from "next"

import { EditorShell } from "@/components/editor/editor-shell"

export const metadata: Metadata = {
  title: "Editor · ghost AI",
}

export default function EditorLayout({ children }: LayoutProps<"/editor">) {
  return <EditorShell>{children}</EditorShell>
}
