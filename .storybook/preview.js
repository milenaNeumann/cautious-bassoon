import { configureActions } from "@storybook/addon-actions";
import { addParameters, addDecorator } from "@storybook/react";
import React from "react";

addParameters({
  options: {
    sortStoriesByKind: true,
    panelPosition: "bottom",
  },
});

configureActions({
  depth: 10,
});

export const parameters = {
  controls: { expanded: true },
};
