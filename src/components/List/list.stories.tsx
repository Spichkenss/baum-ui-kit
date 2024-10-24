import { Meta } from "@storybook/react";
import { List } from "./list.component";

const meta = {
  title: "UI/List",
  component: List,
  tags: ["autodocs"]
} satisfies Meta<typeof List>;

export default meta;

const users: {id: number, name: string}[] = [
  { id: 1, name: "Alexey. Y" },
  { id: 2, name: "Sasha B." },
  { id: 3, name: "Alexey R." }
];

export const Default = () => {
  return (
    <List
      items={users}
      renderItem={(user) => (
        <div>
          <span>{user.id}.</span>
          <span>{user.name}</span>
        </div>
      )}
    />
  )
}

