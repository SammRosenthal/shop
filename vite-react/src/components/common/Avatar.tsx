import cn from "classnames";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export interface AvatarProps {
  src: string;
  fallback?: string;
  circle?: boolean;
}

const AvatarRoot = AvatarPrimitive.Root;
function AvatarImage({ src, circle }: { src?: string; circle?: boolean }) {
  return (
    <AvatarPrimitive.Image
      className={cn("h-10 w-10", {
        "rounded-full": circle,
      })}
      src={src}
    />
  );
}

function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <AvatarPrimitive.Fallback className="flex flex-center items-center h-10 w-10">
      {children}
    </AvatarPrimitive.Fallback>
  );
}

function Avatar({ src, fallback, circle = true }: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage src={src} circle={circle} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarRoot>
  );
}

export { Avatar };
