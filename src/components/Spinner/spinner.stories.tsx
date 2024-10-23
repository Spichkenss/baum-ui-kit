import { Meta, StoryObj } from "@storybook/react/*";
import { Spinner } from "./spinner.component";
import { Flex } from "@components/Flex";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["Small", "Medium", "Large"],
      mapping: {
        Small: "sm",
        Medium: "md",
        Large: "lg"
      }
    }
  }
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { }

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        story: "У первого спиннера задано невалидное значение цвета, " +
        "которое по умолчанию устанавливается в значение `white`"
      }
    },
  },
  render: () => (
    <Flex.Container
      direction="row"
      style={theme => ({ gap: theme.spacing["2xl"] })}
    >
      <Spinner size="sm" color="redslkdjfbng" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </Flex.Container>
  )
}