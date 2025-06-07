import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary border-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:border-primary/90",
        destructive:
          "bg-destructive text-white border-destructive hover:bg-destructive/90 hover:border-destructive/90",
        outline:
          "bg-background text-foreground border-border hover:bg-muted hover:border-muted-foreground/20",
        secondary:
          "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80 hover:border-secondary/80",
        ghost:
          "bg-transparent text-foreground border-transparent hover:bg-muted hover:border-muted-foreground/20",
        link: 
          "bg-transparent text-primary border-transparent hover:bg-transparent hover:border-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 px-4 py-1.5 text-xs has-[>svg]:px-3",
        lg: "h-12 px-8 py-3 text-base has-[>svg]:px-6",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
