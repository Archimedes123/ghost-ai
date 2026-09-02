"use client"

import * as React from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface EditorNavbarProps extends React.ComponentProps<"header"> {
  /** Whether the project sidebar is currently open. */
  isSidebarOpen: boolean
  /** Toggle the project sidebar open/closed. */
  onToggleSidebar: () => void
}

/**
 * Base chrome: the fixed-height top navbar that frames every editor screen.
 * Left section holds the sidebar toggle; centre and right are reserved for
 * chapters that follow.
 */
export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  className,
  ...props
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      className={cn(
        "flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background px-3",
        className
      )}
      {...props}
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          aria-pressed={isSidebarOpen}
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          onClick={onToggleSidebar}
        >
          <ToggleIcon />
        </Button>
      </div>

      {/* Centre */}
      <div className="flex flex-1 items-center justify-center" />

      {/* Right — reserved for later chapters */}
      <div className="flex items-center gap-2" />
    </header>
  )
}
