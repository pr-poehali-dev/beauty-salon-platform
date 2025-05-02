
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

export type IconProps = {
  name: keyof typeof LucideIcons | string;
  fallback?: keyof typeof LucideIcons;
  color?: string;
  size?: number;
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ name, fallback = "CircleAlert", color, size = 24, className, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "span";
    const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || 
                          (fallback ? LucideIcons[fallback as keyof typeof LucideIcons] : null);

    if (!IconComponent) {
      return null;
    }

    return (
      <Component
        className={cn("inline-flex", className)}
        ref={ref}
        {...props}
      >
        <IconComponent color={color} size={size} />
      </Component>
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
