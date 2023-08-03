import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";

describe("Button Component", () => {
  it("GIVEN handleButtonClick is called, WHEN the button is clicked, THEN onClick should be called with the correct text", () => {
    // GIVEN
    const mockOnClick = vi.fn();
    const buttonText = "Click Me";
    const button = Button({ text: buttonText, onClick: mockOnClick });

    // WHEN
    button.props.onClick();

    // THEN
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(buttonText);
  });

  it("GIVEN all required props are provided, WHEN calling the onClick function, THEN it should not throw an error", () => {
    // GIVEN
    const buttonText = "Click Me";
    const onClickFn = () => {};
    const button = Button({ text: buttonText, onClick: onClickFn });

    // WHEN & THEN
    expect(() => button.props.onClick()).not.to.throw();
  });

  it("GIVEN a custom className is provided, WHEN rendering the Button, THEN it should have the correct className applied", () => {
    // GIVEN
    const buttonText = "Click Me";
    const className = "custom-button";
    const button = Button({ text: buttonText, onClick: () => {}, className });

    // WHEN & THEN
    expect(button.props.className).toBe(className);
  });
});
