export default function EditorPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        / Canvas
      </p>
      <p className="headline text-stroke text-primary text-[clamp(2rem,6vw,3.5rem)]">
        Empty Canvas
      </p>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Toggle the sidebar from the navbar to start
      </p>
    </div>
  )
}
