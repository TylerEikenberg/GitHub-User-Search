import RepoBox from "../RepoBox";
import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import "@testing-library/jest-dom/";

afterEach(cleanup);

it("RepoBox renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RepoBox></RepoBox>, div);
});
it("RepoBox has className RepoBox-container", () => {
  const { getByTestId } = render(<RepoBox></RepoBox>);
  expect(getByTestId("RepoBox-div")).toHaveClass("RepoBox-container");
});
it("RepoBox has className RepoBox-repo-link", () => {
  const { getByTestId } = render(<RepoBox></RepoBox>);
  expect(getByTestId("RepoBox-a")).toHaveClass("RepoBox-repo-link");
});
it("RepoBox has className RepoBox-stats-container", () => {
  const { getByTestId } = render(<RepoBox></RepoBox>);
  expect(getByTestId("RepoBox-span")).toHaveClass("RepoBox-stats-container");
});
it("RepoBox, matches snapshot", () => {
  const tree = TestRenderer.create(<RepoBox></RepoBox>).toJSON();
  expect(tree).toMatchSnapshot();
});
