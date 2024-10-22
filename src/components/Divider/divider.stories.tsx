import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@components/Flex";

import {
  Divider,
  type DividerProps
} from "./divider.component";

const meta = {
  title: "Utilities/Divider",
  component: Divider,
  argTypes: {
    direction: {
      options: ["Vertical", "Horizontal"],
      mapping: {
        Vertical: "vertical",
        Horizontal: "horizontal",
      },
    }
  }
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: DividerProps) => {
  return (
    <Flex.Container
      style={{ gap: 10 }}
      direction={args.direction === "horizontal"
        ? "column"
        : "row"}
    >
      <p>Some text</p>
      <Divider {...args} />
      <p>Some text</p>
    </Flex.Container>
  )
}

export const Vertical: Story = {
  args: {
    direction: "vertical"
  },
  render: (args) => <Template {...args} />
}

export const Horizontal: Story = {
  args: {
    direction: "horizontal"
  },
  render: (args) => <Template {...args} />
}