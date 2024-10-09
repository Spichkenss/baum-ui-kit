import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select.component";
import { FullWidthDecorator } from "../../lib/decorators/full-width.decorator";
import { controlComponentArgTypes } from "../ControlComponent";
import type { SelectOption, SelectProps } from "./select.types";

const meta = {
  title: "UI/Select",
  component: Select,
  decorators: [FullWidthDecorator],
  tags: ["autodocs"],
  argTypes: {
    ...controlComponentArgTypes,
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options: SelectOption[] = [
  { label: "Sasha", value: "Front" },
  { label: "Vova", value: "UI" },
]

const defaultArgs: SelectProps = {
  options,
  placeholder: "Пользователь"
}

export const Default: Story = {
  args: {
    ...defaultArgs,
  }
}