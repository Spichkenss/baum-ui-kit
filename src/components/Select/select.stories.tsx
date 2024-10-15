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
  { label: "Sasha B.", value: "Senior" },
  { label: "Vova K.", value: "Middle" },
  { label: "Oleg J.", value: "Junior" },
  { label: "Alexey Y.", value: "Lead" },
  { label: "Alexey R.", value: "Middle+" },
]

const defaultArgs: SelectProps = {
  options,
  placeholder: "Пользователь",
  prefix: "Выбрано:"
}

export const Default: Story = {
  args: {
    ...defaultArgs,
  }
}

export const Searchable: Story = {
  args: {
    ...defaultArgs,
    searchable: true,
  }
}