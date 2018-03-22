import React from "react";
import renderer from "react-test-renderer";
import { Start } from "../Start";

test("Start renders without crashing", () => {
  const component = renderer.create(<Start />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
