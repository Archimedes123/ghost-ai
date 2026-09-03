import { cn } from "@/lib/utils"

interface MarqueeProps {
  items: string[]
  className?: string
}

/**
 * Full-bleed scrolling ticker — a gold strip with uppercase items and `//`
 * separators. Two identical tracks slide in lockstep for a seamless loop;
 * the animation is disabled for users who prefer reduced motion.
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden border-y border-primary bg-primary text-primary-foreground",
        className
      )}
    >
      {[0, 1].map((track) => (
        <ul
          key={track}
          aria-hidden={track === 1}
          className="animate-marquee flex shrink-0 items-center py-2.5"
        >
          {items.map((item) => (
            <li key={item} className="flex items-center whitespace-nowrap">
              <span className="px-6 text-xs font-bold uppercase tracking-[0.22em]">
                {item}
              </span>
              <span className="text-xs font-black opacity-30">{"//"}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}
