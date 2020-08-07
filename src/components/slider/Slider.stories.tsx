import * as React from "react";
import { Slider, SliderProps } from "./Slider";
import { action } from "@storybook/addon-actions";

// list all props here to maintain the order until prop ordering bug is fixed.
export const argTypes = {
  start: {
    defaultValue: 20,
  },
  range: {
    defaultValue: { min: 0, max: 100 },
    table: {
      control: {
        type: "object",
      },
      type: {
        summary: "Range",
        detail: "{ min: number, max: number }",
      },
    },
  },
  step: {},
  onChange: {
    defaultValue: (value: number) => {
      action("onChange")(value);
    },
    table: {
      type: {
        summary: "Callback",
        detail: "(value: number) => void",
      },
    },
  },
  format: {
    control: { disable: true },
    table: {
      control: {
        type: "object",
      },
      type: {
        summary: "Formatter",
        detail: "Formatter Type",
      },
    },
  },
  disabled: {},
};

export const Standard = (args: SliderProps) => <Slider {...args} />;
