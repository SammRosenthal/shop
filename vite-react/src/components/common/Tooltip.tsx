import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
const TooltipTrigger = TooltipPrimitive.Trigger;
function TooltipContent({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Content className="bg-white p-4 h-fit shadow mt-2">
      {children}
    </TooltipPrimitive.Content>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent };
