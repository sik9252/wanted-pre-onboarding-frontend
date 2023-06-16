import { render, screen } from "@testing-library/react";

import App from "./App";

test("div test", () => {
  render(<App />);
  const divEl = screen.getByTestId("signin-button");
  expect(divEl).toBeVisible();
});
