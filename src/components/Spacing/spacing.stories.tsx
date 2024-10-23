import { Meta, StoryObj } from "@storybook/react/*";
import { Spacing } from "./spacing.component";

const meta = {
  title: "Utilities/Spacing",
  component: Spacing,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Принимает в себя ключ объекта `Spacing` или любое число",
      table: {
        type: {
          summary: "Spacing | number",
          detail: "2xs|xs|sm|md|lg|xl|2xl|3xl|4xl|любое число"
        }
      }
    }
  }
} satisfies Meta<typeof Spacing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "2xl",
  },
  render: (args) => {
    return (
      <div>
        <div>Hello</div>
        <Spacing {...args} />
        <div>World</div>
      </div>
    )
  }
}