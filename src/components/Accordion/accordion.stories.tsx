import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion.component";

const meta = {
  title: "UI/Accordion",
  tags: ["autodocs"],
  component: Accordion.Root,
} satisfies Meta<typeof Accordion.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => (
    <Accordion.Root>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Trigger</Accordion.Trigger>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Trigger 2</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion.Root multiple>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Trigger</Accordion.Trigger>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Trigger 2</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const CustomTrigger = () => {
  return (
    <Accordion.Root>
      <Accordion.Item value="item-1">
        <Accordion.Trigger asChild>
          <div style={{ background: "red", padding: 10 }}>Custom trigger</div>
        </Accordion.Trigger>
        <Accordion.Content>Content</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
