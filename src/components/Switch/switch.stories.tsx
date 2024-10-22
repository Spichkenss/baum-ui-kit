import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch.component";
import { useState } from "react";
import { disabledArg } from "@lib/storybook/storybook.consts";

const meta = {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    defaultChecked: disabledArg,
    label: {
      type: "string",
      control: {
        type: "text",
      },
      description: "Лейбл переклчюателя",
      table: {
        defaultValue: {
          summary: "undefined",
        }
      }
    },
    disabled: {
      type: "boolean",
      description: "Состояние включен / выключен",
      table: {
        defaultValue: {
          summary: "false",
        }
      }
    }
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  args: {}
}

export const Controlled = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={(event) => setIsChecked(event.currentTarget.checked)}
    />
  )
}

export const Label: Story = {
  args: {
    label: "Label"
  }
}