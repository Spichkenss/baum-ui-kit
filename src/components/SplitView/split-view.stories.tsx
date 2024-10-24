import { Meta, StoryObj } from "@storybook/react";

import { SplitView } from "./split-view.component";
import { disabledArg } from "@lib/storybook/storybook.consts";
import { Panel } from "@components/Panel";

const meta = {
  title: "Layout/Split View",
  component: SplitView,
  tags: ["autodocs"],
  argTypes: {
    children: disabledArg,
    separated: {
      type: "boolean",
      control: {
        type: "boolean"
      }
    }
  },
} satisfies Meta<typeof SplitView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    separated: true,
    direction: "vertical",
  },
  render: ({ direction, separated }) =>(
    <Panel.Root fullWidth>
      <Panel.Content>
        <SplitView direction={direction} separated={separated}>
          <div style={{ padding: 10 }}>First part</div>
          <div style={{ padding: 10 }}>Second part</div>
        </SplitView>
      </Panel.Content>
    </Panel.Root>
  ),
};
