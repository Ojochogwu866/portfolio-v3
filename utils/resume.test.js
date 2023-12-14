import { render, screen } from "@testing-library/react";
import AllExperiencesProjects from '../components/All-Experiences-projects'

describe("AllExperiencesProjects", () => {
  it("renders AllExperiencesProjects component", () => {
    render(<AllExperiencesProjects />);
    expect(screen.getByText("Download Resume above")).toBeInTheDocument();
  });

  it("renders Experience component for each experience", () => {
    render(<AllExperiencesProjects />);
    experiences.forEach((experience) => {
      expect(screen.getByText(experience.organization)).toBeInTheDocument();
      expect(screen.getByText(experience.title)).toBeInTheDocument();
    });
  });
});
