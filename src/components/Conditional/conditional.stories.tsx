import type { Meta, StoryObj } from "@storybook/react";
import { Conditional } from "./conditional.component";
import type { CSSProperties } from "react";

const meta = {
  title: "Utilities/Conditional",
  component: Conditional,
  tags: ["autodocs"]
} satisfies Meta<typeof Conditional>;

export default meta;

type Story = StoryObj<typeof meta>;

const exampleStyle = {
  textAlign: "center",
  marginTop: "16px"
} satisfies CSSProperties;

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
} satisfies CSSProperties;

export const Example: Story = {
  args: {
    fallback: (
      <p style={exampleStyle}>
        It renders when condition is <u><b>false</b></u>
      </p>
    ),
    children: (
      <p style={exampleStyle}>
        It renders when condition is <u><b>true</b></u>
      </p>
    ),
    condition: false,
  },
  decorators: [(Story) => {
    return (
      <div>
        <p
          style={headingStyle}
        >
          Переключи condition, чтобы увидеть магию
        </p>
        <Story />
      </div>
    )
  }
  ]
}