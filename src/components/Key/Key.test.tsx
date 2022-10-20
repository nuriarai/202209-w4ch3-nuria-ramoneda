import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a key component", () => {
  describe("when it's rendered with a number 1", () => {
    test("Then it should show a key with a 1", () => {
      const textValue = "1";

      render(<Key text="1" className="key" action={() => {}} />);

      const keyButton = screen.queryByRole("button", { name: textValue });

      expect(keyButton).toBeInTheDocument();
    });
  });
});
