import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./input.component.tsx";
import { controlComponentArgTypes } from "../ControlComponent";
import {
  FullWidthDecorator
} from "../../lib/decorators/full-width.decorator.tsx";

const meta = {
  title: "UI/Input",
  component: Input,
  decorators: [FullWidthDecorator],
  tags: ["autodocs"],
  argTypes: {
    ...controlComponentArgTypes,
    type: {
      summary: "radio",
    }
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: InputProps = {
  status: "default",
  size: "md",
  placeholder: "Текст",
  fullWidth: false,
}

export const Text: Story = {
  args: {
    ...defaultArgs,
    type: "text"
  }
}

export const Number: Story = {
  args: {
    ...defaultArgs,
    type: "number"
  }
}

export const WithLabel: Story = {
  args: {
    ...defaultArgs,
    label: "Label"
  }
}

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    fullWidth: true,
  }
}