import { ArgTypes } from "@storybook/react";
import styles from "./control.module.scss";
import { ControlComponentProps } from "./control.component.tsx";
import { disabledArg } from "../../lib";
import { primitiveArgs } from "../../lib/consts/storybook.consts.ts";

const controlStatusStyles = {
  default: styles["Status-default"],
  error: styles["Status-error"],
  warning: styles["Status-warning"],
  success: styles["Status-success"],
} as const;

const controlSizeStyles = {
  sm: styles["Size-sm"],
  md: styles["Size-md"],
} as const;

type ControlStatus = keyof typeof controlStatusStyles;
type ControlSize = keyof typeof controlSizeStyles;

export { controlStatusStyles, controlSizeStyles };
export type { ControlStatus, ControlSize };

export const controlComponentArgTypes:
    Partial<ArgTypes<ControlComponentProps>> = {
      ...primitiveArgs,
      status: {
        control: "radio",
        options: Object.keys(controlStatusStyles),
        table: {
          type: {
            summary: "union"
          }
        }
      },
      size: {
        control: "radio",
        options: Object.keys(controlSizeStyles),
        table: {
          type: {
            summary: "union"
          }
        }
      },
      before: disabledArg,
      after: disabledArg,
      label: {
        control: "text",
      },
    }