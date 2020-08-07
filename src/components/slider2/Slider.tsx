import {BaseProps} from "base/BaseProps";
import Nouislider, {Formatter} from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React from "react";

/** Define min and max value. */
export type Range = {
  min: number;
  max: number;
};

export const defaultFormat: Formatter = {
  // 'to' the formatted value. Receives a number.
  to: function (value) {
    return value.toFixed(0);
  },
  // 'from' the formatted value.
  // Receives a string, should return a number.
  from: function (value) {
    return Number(value);
  },
};

// https://refreshless.com/nouislider/reference/
export interface SliderProps extends BaseProps {
  /** The start value of the slider handle. */
  start: number;
  /** The permitted range of the slider. */
  range: Range;
  /** The stepping interval. */
  step?: number;
  /** Handler to be called when the value changes. */
  onChange?: (value: number) => void;
  /** [Formatter](https://refreshless.com/nouislider/number-formatting/) for the value. */
  format?: Formatter;
}

/**
 * Slider component based on [noUiSlider](https://github.com/algolia/react-nouislider).
 * */
export const Slider = ({
  disabled,
  onChange,
  format = defaultFormat,
  ...sliderProps
}: SliderProps) => {
  return (
      <Nouislider
        disabled={disabled}
        onChange={(values) => onChange && onChange(values[0])}
        connect={[true, false]}
        format={format}
        {...sliderProps}
      />
  );
};
