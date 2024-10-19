import type { Meta, StoryObj } from "@storybook/react";

import { FullWidthDecorator } from "@lib/storybook/decorators/full-width";
import { disabledArg, primitiveArgs } from "@lib/storybook/storybook.consts";

import { Button, type ButtonProps } from "./button.component";
import { buttonAppearenceStyles, buttonSizeStyles } from "./button.consts";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [FullWidthDecorator],
  argTypes: {
    ...primitiveArgs,
    negative: {
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      }
    },
    before: disabledArg,
    after: disabledArg,
    children: {
      control: "text",
    },
    isLoading: {
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      }
    },
    disabled: {
      control: "boolean",
      table: {
        type: {
          summary: "boolean",
        },
      }
    },
    size: {
      control: "radio",
      description: "Максимальная высота кнопки",
      options: Object.keys(buttonSizeStyles),
      table: {
        type: {
          summary: "union",
        },
        defaultValue: {
          summary: "md"
        },
      }
    },
    appearance: {
      control: "radio",
      description: "Внешний вид кнопки",
      options: Object.keys(buttonAppearenceStyles),
      table: {
        type: {
          summary: "union",
        },
        defaultValue: {
          summary: "primary"
        },
      }
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: ButtonProps = {
  children: "Button",
  size: "md",
  appearance: "primary",
  disabled: false,
  isLoading: false,
  negative: false,
  fullWidth: false,
}

export const Primary: Story = {
  args: defaultArgs,
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    appearance: "secondary",
  },
};

export const Outline: Story = {
  args: {
    ...defaultArgs,
    appearance: "outline",
  },
};

export const Ghost: Story = {
  args: {
    ...defaultArgs,
    appearance: "ghost",
  },
};

export const Uncontained: Story = {
  args: {
    ...defaultArgs,
    appearance: "uncontained",
  },
};

export const PrimaryNegative: Story = {
  args: {
    ...defaultArgs,
    negative: true,
  }
};

export const GhostNegative: Story = {
  args: {
    ...defaultArgs,
    appearance: "ghost",
    negative: true,
  },
};

export const UncontainedNegative: Story = {
  args: {
    ...defaultArgs,
    appearance: "uncontained",
    negative: true,
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    fullWidth: true,
  },
};

export const AsLink: Story = {
  args: {
    ...defaultArgs,
    href: "https://google.com"
  }
}