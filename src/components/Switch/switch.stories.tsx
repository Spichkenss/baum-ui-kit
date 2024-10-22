import type { Meta, StoryObj } from "@storybook/react";
import { disabledArg } from "@lib/storybook/storybook.consts";

import { Switch } from "./switch.component";

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

export const Default: Story = {
  args: {}
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  }
}

export const WithLabel: Story = {
  args: {
    label: "Label"
  }
}

export const Disabled: Story = {
  args: {
    label: "Label",
    disabled: true,
  }
}