import { Meta } from "@storybook/react";
import { GridLayout } from "./grid-layout.component";
import { Fragment, useState } from "react";
import { Panel } from "@components/Panel";
import type { Spacing as TSpacing } from "@lib/consts/spacings";
import { Spacing } from "@components/Spacing";

const meta = {
  title: "Layout/Grid Layout",
  component: GridLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof GridLayout>;

export default meta;

export const Showcase = () => {
  const [items, setItems] = useState(2);
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState<TSpacing>("md");
  const [align, setAlign] = useState("stretch");

  const Slider = ({
    count,
    label,
    setCount,
  }: {
    count: number;
    label: string;
    setCount: (v: number) => void;
  }) => {
    return (
      <div>
        <label>
          {label}: {count}
          <input
            type="range"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            min={0}
            max={10}
          />
        </label>
      </div>
    );
  };

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Fragment>
      <Slider count={items} setCount={setItems} label="Items count"/>
      <Slider count={columns} setCount={setColumns} label="Columns count"/>
      <label>
        Gap
        <select
          value={gap}
          onChange={(e) => setGap(e.target.value as TSpacing)}
        >
          <option value="2xs">2xs</option>
          <option value="xs">xs</option>
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
          <option value="xl">xl</option>
          <option value="2xl">2xl</option>
          <option value="3xl">3xl</option>
          <option value="4xl">4xl</option>
        </select>
      </label>
      <label>
        Align
        <select
          value={align}
          onChange={(e) => setAlign(e.target.value)}
        >
          <option value="start">start</option>
          <option value="end">end</option>
          <option value="center">center</option>
          <option value="stretch">stretch</option>
          <option value="baseline">baseline</option>
        </select>
      </label>
      <Spacing size={"4xl"}/>
      <GridLayout columns={columns} gap={gap} align={align}>
        {[...Array(items).keys()].map((_, index) => (
          <Panel.Root key={index}>
            <Panel.Content>
              {Array(getRandomInt(1, 30)).fill("Content").join(" ")}
            </Panel.Content>
          </Panel.Root>
        ))}
      </GridLayout>
    </Fragment>
  );
};
