import { Meta, StoryObj } from "@storybook/react";
import { Flex } from "@components/Flex";

import { Badge } from "./badge.component";
import { BadgeAppearance } from "./badge.consts";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    appearence: {
      description: "Базовый внешний вид. Задает цвет фона и текста.",
      table: {
        type: {
          summary: "union"
        }
      },
      control: "radio",
      options: ["Neutral", "Error", "Info", "Success", "Warning"],
      mapping: {
        Neutral: "neutral",
        Error: "error",
        Info: "info",
        Success: "success",
        Warning: "warning",
      },
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const content: Record<BadgeAppearance, string> = {
  neutral: "Нейтральный",
  error: "Ошибка",
  info: "Инфо",
  success: "Норма",
  warning: "Предупреждение"
}

export const Default: Story = {
  render: ({
    appearence = "neutral"
  }) => (
    <Badge
      appearence={appearence}
    >
      {content[appearence]}
    </Badge>
  )
}

export const Showcase: Story = {
  parameters: {
    docs: {
      description: {
        story: "Здесь показаны все возможные стандартные варианты " +
        "отображения компонента `Badge`"
      }
    }
  },
  render: () => {
    return (
      <Flex.Container
        direction="column"
        style={theme => ({ gap: theme.spacing.xl })}
      >
        {Object.entries(content).map(([appearence, text]) => (
          <Badge appearence={appearence as BadgeAppearance}>
            {text}
          </Badge>
        ))}
      </Flex.Container>
    )
  }
}

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Компонент `Badge` имеет пропсы `before` и `after`, "
        + "которые принимают любой ReactNode"
      }
    }
  },
  render: () => {
    return (
      <Flex.Container
        direction="column"
        style={theme => ({ gap: theme.spacing.xl })}
      >
        <Badge
          appearence="success"
          after={<span>❤️</span>}
        >
          После текста
        </Badge>
        <Badge
          appearence="success"
          before={<span>❤️</span>}
        >
          До текста
        </Badge>
        <Badge
          appearence="success"
          after={<span>❤️</span>}
          before={<span>❤️</span>}
        >
          По обе стороны
        </Badge>
      </Flex.Container>
    )
  }
}