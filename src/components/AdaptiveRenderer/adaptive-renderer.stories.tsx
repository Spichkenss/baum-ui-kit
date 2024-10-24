import { Meta, StoryObj } from "@storybook/react/*";
import { AdaptiveRenderer } from "./adaptive-renderer.component";
import { disabledArg } from "@lib/storybook/storybook.consts";

const meta = {
  title: "Utilities/Adaptive",
  component: AdaptiveRenderer,
  tags: ["autodocs"],
  argTypes: {
    desktop: disabledArg,
    phone: disabledArg,
    tablet: disabledArg,
    wide: disabledArg
  }
} satisfies Meta<typeof AdaptiveRenderer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phone: <div>Phone</div>,
    desktop: <div>Desktop</div>,
    tablet: <div>Tablet</div>,
    wide: <div>Wide</div>
  },
  parameters: {
    docs: {
      description: {
        story: "Измените ширину экрана для демонстраици работы компонента"
      }
    }
  }
}

export const Secondary: Story = {
  args: {
    phone: <div>Phone</div>,
    desktop: <div>Desktop</div>,
    useMinBreakpoint: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Если параметр `useMinBreakpoint === true`, " +
        "в случае отсутствия варианата отображения компонента на " +
        "текущем броейкпоинте будет браться компонент ближайшего " +
        "меньшего брейкпоинта."
      }
    }
  }
}