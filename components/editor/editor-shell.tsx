"use client"

import * as React from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

interface EditorShellProps {
  children: React.ReactNode
}

/**
 * Base chrome layout: owns the project-sidebar open/close state and frames
 * every editor screen with the navbar on top and the sliding sidebar over
 * the canvas. Page content is rendered into the canvas area.
 */
export function EditorShell({ children }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
      />

      {/* Canvas — the sidebar floats above this without pushing it. */}
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <ProjectSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex min-h-0 flex-1 flex-col overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
