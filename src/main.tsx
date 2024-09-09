import { StrictMode as ReactStrictMode } from "react";
import { createRoot } from "react-dom/client";

import { WidgetView } from "./Widget.view";

const containerId = "widget-container";
const container = document.getElementById(containerId);
if (container) {
  const root = createRoot(container);
  root.render(
    <ReactStrictMode>
      <WidgetView />
    </ReactStrictMode>
  );
} else {
  // eslint-disable-next-line no-console
  console.error(`Could not find the container element with ID '${containerId}'.`);
}
