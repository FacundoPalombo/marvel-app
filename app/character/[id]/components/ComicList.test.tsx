import { render } from "@testing-library/react";
import ComicList from "./ComicList";
import comicsFixture from "@/app/fixtures/comicsById.json";

describe("ComicList unit tests", () => {
  it("should match to snapshot", () => {
    const props = { comics: comicsFixture.data.results };

    const { asFragment } = render(<ComicList {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render ok", () => {
    const props = { comics: comicsFixture.data.results };

    const { getByRole } = render(<ComicList {...props} />);

    expect(getByRole("heading", { name: "Comics" })).toBeInTheDocument();
    expect(
      getByRole("heading", { name: "Spider-Society (2024) #2" })
    ).toBeInTheDocument();
  });
});
