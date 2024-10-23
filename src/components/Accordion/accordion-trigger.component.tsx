import {
  PrimitiveTrigger,
  PrimitiveTriggerProps,
} from "@components/Primitives/Trigger";
import { useAccordionItemContext } from "./accordion-item.context";
import { useAccordionContext } from "./accordion.context";

type AccodrionTriggerProps = PrimitiveTriggerProps;

export const AccordionTrigger = ({
  children,
  ...rest
}: AccodrionTriggerProps) => {
  const { toggleItemOpenState } = useAccordionContext();
  const { value } = useAccordionItemContext();

  return (
    <PrimitiveTrigger
      isClickable={true}
      onClick={() => toggleItemOpenState(value)}
      fullWidth
      {...rest}
    >
      {children}
    </PrimitiveTrigger>
  );
};
