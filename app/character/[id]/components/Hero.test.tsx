import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero unit tests", () => {
  it("should match to snapshot", () => {
    const props = {
      img: "image",
      name: "Tremendo Hero",
      issueDate: "2024",
      description: "lorem ipsum",
      favorite: true,
    };

    const { asFragment } = render(<Hero {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render ok", () => {
    const props = {
      img: "image",
      name: "Tremendo Hero",
      issueDate: "2024",
      description: "lorem ipsum",
      favorite: true,
    };

    const { getByRole } = render(<Hero {...props} />);

    expect(getByRole("heading", { name: "Tremendo Hero" })).toBeInTheDocument();
  });
});
