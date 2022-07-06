import { render, screen } from "@testing-library/react";
import Articles from "./components/Articles";

describe("Test the article component", () => {
  test("The component renders", async () => {
    render(<Articles />);
    const button = await screen.getAllByRole("img");
    console.log(button);
  });
});
