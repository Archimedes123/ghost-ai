"use client"

import * as React from "react"
import { Plus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps extends React.ComponentProps<"aside"> {
  /** Whether the sidebar is slid in and visible. */
  isOpen: boolean
  /** Close the sidebar (header close button). */
  onClose?: () => void
}

/**
 * Base chrome: the project sidebar shell. It floats above the editor canvas
 * and slides in from the left — opening it never pushes page content.
 */
export function ProjectSidebar({
  isOpen,
  onClose,
  className,
  ...props
}: ProjectSidebarProps) {
  return (
    <aside
      data-state={isOpen ? "open" : "closed"}
      aria-hidden={!isOpen}
      className={cn(
        "absolute inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-background shadow-xl",
        "transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border px-3">
        <span className="text-sm font-medium">Projects</span>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close project sidebar"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue="my-projects"
        className="flex min-h-0 flex-1 flex-col gap-0 p-3"
      >
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="mt-3 min-h-0">
          <SidebarEmptyState message="No projects yet" />
        </TabsContent>
        <TabsContent value="shared" className="mt-3 min-h-0">
          <SidebarEmptyState message="Nothing shared with you yet" />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="shrink-0 border-t border-border p-3">
        <Button type="button" className="w-full">
          <Plus />
          New Project
        </Button>
      </div>
    </aside>
  )
}

function SidebarEmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
      {message}
    </div>
  )
}
