import React from "react";
import { create } from "react-test-renderer";

import Footer from "../Components/Header";

test(`footer matches snapshot`, () => {
  let footer = create(<Footer />);
  expect(footer.toJSON()).toMatchSnapshot();
});
