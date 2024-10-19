import type { Meta, StoryObj } from "@storybook/react";

import { FullWidthDecorator } from "@lib/storybook/decorators/full-width";
import { UnstyledInput } from "@components/UnstyledInput";

import {
  ControlComponent,
  type ControlComponentProps
} from "./control.component";
import { controlComponentArgTypes } from "./control.consts";

const meta = {
  title: "Primitives/ControlComponent",
  component: ControlComponent,
  decorators: [FullWidthDecorator],
  tags: ["autodocs"],
  argTypes: {
    ...controlComponentArgTypes,
    children: {
      control: "select",
      options: ["Text input"],
      mapping: {
        "Text input": <UnstyledInput placeholder="Текст"/>
      },
    }
  },
} satisfies Meta<typeof ControlComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: ControlComponentProps = {
  status: "default",
  size: "md",
  children: <UnstyledInput type='text' placeholder="Текст"/>,
  fullWidth: false,
}

export const Input: Story = {
  args: {
    ...defaultArgs,
    status: "default",
  }
}

export const Date: Story = {
  args: {
    ...defaultArgs,
    status: "default",
    children: <UnstyledInput type={"date"} placeholder='Текст'/>
  }
}


export const Error: Story = {
  args: {
    ...defaultArgs,
    status: "error",
  }
}

export const Warning: Story = {
  args: {
    ...defaultArgs,
    status: "warning",
  }
}

export const Success: Story = {
  args: {
    ...defaultArgs,
    status: "success",
  }
}
