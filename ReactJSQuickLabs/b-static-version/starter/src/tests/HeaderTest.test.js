import React from "react";
import { create } from "react-test-renderer";

import Header from "../Components/Header";

test(`header matches snapshot`, () => {
  let header = create(<Header />);
  expect(header.toJSON()).toMatchSnapshot();
});
