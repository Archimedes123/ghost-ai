"use client"

import * as React from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Controlled/uncontrolled contract: either supply both `open` and
 * `onOpenChange`, or neither. `open` without a handler would render a dialog
 * that Esc, the overlay, and the close button cannot dismiss.
 */
type EditorDialogControlProps =
  | {
      /** Controlled open state. */
      open: boolean
      /** Called when the open state should change. */
      onOpenChange: (open: boolean) => void
    }
  | { open?: undefined; onOpenChange?: undefined }

interface EditorDialogBaseProps {
  /** Dialog heading. */
  title: React.ReactNode
  /** Optional supporting copy under the title. */
  description?: React.ReactNode
  /** Body content between the header and footer. */
  children?: React.ReactNode
  /** Footer actions (typically buttons). Rendered in the muted footer bar. */
  footer?: React.ReactNode
  /** Extra classes for the dialog panel. */
  className?: string
}

type EditorDialogProps = EditorDialogBaseProps & EditorDialogControlProps

/**
 * Reusable dialog pattern for the editor. Composes the shadcn Dialog
 * primitives (which already use the globals.css color tokens) into a single
 * title / description / footer-actions shape. Concrete dialogs are built on
 * top of this later — this file only establishes the pattern.
 */
export function EditorDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: EditorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>

        {children}

        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  )
}
