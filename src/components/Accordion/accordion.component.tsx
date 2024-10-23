import { AccodrionContent } from "./accordion-content.component";
import { AccordionItem } from "./accordion-item.component";
import { AccordionRoot } from "./accordion-root.component";
import { AccordionTrigger } from "./accordion-trigger.component";

export const Accordion = Object.assign({}, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccodrionContent,
});