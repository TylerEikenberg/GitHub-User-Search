import React from "react";
import ReactDOM from "react-dom";
import Avatar from "../Avatar";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/";
import TestRenderer from "react-test-renderer";

import tyleravi from "../../../Assets";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Avatar></Avatar>, div);
});
it("Avatar is visible", () => {
  const { getByTestId } = render(<Avatar image={tyleravi}></Avatar>);
  expect(getByTestId("Avatar")).toBeVisible();
});
it("Avatar has className", () => {
  const { getByTestId } = render(<Avatar image={tyleravi}></Avatar>);
  expect(getByTestId("Avatar")).toHaveClass("Avatar-image-styles");
});
it("matches snapshot, without image src", () => {
  const tree = TestRenderer.create(<Avatar></Avatar>).toJSON();
  expect(tree).toMatchSnapshot();
});
it("matches snapshot, with image src", () => {
  const tree = TestRenderer.create(<Avatar image={tyleravi}></Avatar>).toJSON();
  expect(tree).toMatchSnapshot();
});
