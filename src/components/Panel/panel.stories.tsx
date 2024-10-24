import { Meta, StoryObj } from "@storybook/react/*";
import { Panel } from "./panel.component";

const meta = {
  title: "Layout/Panel",
  component: Panel.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof Panel.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Panel.Root>
        <Panel.Content>
          <div>Content</div>
        </Panel.Content>
      </Panel.Root>
    );
  },
};

export const Header: Story = {
  render: () => {
    return (
      <Panel.Root>
        <Panel.Header>Header</Panel.Header>
        <Panel.Content>
          <div>Content</div>
        </Panel.Content>
      </Panel.Root>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <Panel.Root fullWidth>
        <Panel.Header>Header</Panel.Header>
        <Panel.Content>
          <div>Content</div>
        </Panel.Content>
      </Panel.Root>
    );
  },
};
