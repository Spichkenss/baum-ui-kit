import { Meta, type StoryObj } from "@storybook/react";
import { Flex } from "@components/Flex/flex.component";

export default {
  title: "Layout/Flex",
  tags: ["autodocs"],
  component: Flex.Container,
} as Meta;

type Story = StoryObj<typeof Flex.Container>;

export const Vertical: Story = {
  storyName: "Vertical (" +
    "Вериткальное расположение элементов flex-контейнера)",
  render: () => (
    <Flex.Container
      direction='row'
      style={theme => ({ gap: theme.spacing.xl })}
    >
      <Flex.Item>Item 1</Flex.Item>
      <Flex.Item>Item 3</Flex.Item>
      <Flex.Item>Item 2</Flex.Item>
    </Flex.Container>
  )
}

export const Horizontal: Story = {
  storyName: "Horizontal (" +
    "Горизонатльное расположение элементов flex-контейнера)",
  render: () => (
    <Flex.Container
      direction='row'
      style={theme => ({ gap: theme.spacing.xl })}
    >
      <Flex.Item>Item 1</Flex.Item>
      <Flex.Item>Item 3</Flex.Item>
      <Flex.Item>Item 2</Flex.Item>
    </Flex.Container>
  )
}

export const Spacing: Story = {
  storyName: "Spacing (Использование объекта `theme` в стилях)",
  render: () => (
    <Flex.Container
      direction='row'
      style={theme => ({ gap: theme.spacing.xl })}
    >
      <Flex.Item>Item 1</Flex.Item>
      <Flex.Item>Item 3</Flex.Item>
      <Flex.Item>Item 2</Flex.Item>
    </Flex.Container>
  )
}


export const Grow: Story = {
  storyName: "Basis (Доля занимаемой ширины flex-элемента)",
  render: () => (
    <Flex.Container
      direction='row'
    >
      <Flex.Item grow={1}>Item 1</Flex.Item>
      <Flex.Item grow={2}>Item 3</Flex.Item>
      <Flex.Item grow={3}>Item 2</Flex.Item>
    </Flex.Container>
  )
}

export const Basis: Story = {
  storyName: "Basis (Процентное соотношение ширин flex-элементов)",
  render: () => (
    <Flex.Container
      direction='row'
    >
      <Flex.Item basis={"10%"}>Item 1</Flex.Item>
      <Flex.Item basis={"30%"}>Item 3</Flex.Item>
      <Flex.Item basis={"60%"}>Item 2</Flex.Item>
    </Flex.Container>
  )
}