import { render } from "@testing-library/react";
import CharactersList from "./CharactersList";
import characterFixture from "../fixtures/characters.json";

describe("CharactersList Unit tests", () => {
  it("should match snapshot", () => {
    const charactersListProps = {
      characters: characterFixture.data.results,
    };

    const { asFragment } = render(<CharactersList {...charactersListProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render ok with props", () => {
    const charactersListProps = {
      characters: characterFixture.data.results,
    };

    const { getByText } = render(<CharactersList {...charactersListProps} />);
    expect(getByText("Spider-Girl (Anya Corazon)")).toBeInTheDocument();
  });
});
