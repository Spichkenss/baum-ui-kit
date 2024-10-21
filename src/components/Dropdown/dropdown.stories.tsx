import type { Meta } from "@storybook/react";
import { Dropdown } from "./dropdown.component";
import { Button } from "@components/Button";

const meta = {
  title: "UI/Dropdown",
  tags: ["autodocs"]
} satisfies Meta;

export default meta;

export const WithDefaultTrigger = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        Open dropdown
      </Dropdown.Trigger>
      <Dropdown.Menu style={{ position: "unset" }}>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Root>
  )
}

export const WithCustomTrigger = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button appearance={"secondary"}>
          Open dropdown
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu style={{ position: "unset" }}>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Root>
  )
}

export const WithExtraElement = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button appearance={"secondary"}>
          Open dropdown
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Menu style={{ position: "unset" }}>
        <Dropdown.Item before={<div>Before</div>}>Item 1</Dropdown.Item>
        <Dropdown.Item after={<div>After</div>}>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Root>
  )
}