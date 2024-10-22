import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./checkbox.component";
import { disabledArg } from "@lib/storybook/storybook.consts";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "radio"
      },
      options: ["Small", "Medium"],
      mapping: {
        Small: "sm",
        Medium: "md"
      },
      description: "Размер компонента",
      table: {
        type: {
          summary: "sm | md",
        },
        defaultValue: {
          summary: "false"
        },
      },
    },
    defaultChecked: disabledArg,
    label: {
      type: "string",
    },
    indeterminate: {
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false"
        },
      },
      description:
        "Отображать линию или галочку в зависимости от состояния `checked`",
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true
  }
}

export const Indeterminate: Story = {
  args: {
    defaultChecked: true,
    indeterminate: true
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