import React from "react";
import Dropdown from "../src/lib/components/dropdown/Dropdown.component";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import {
  hotPink,
  yellowOrange,
  grayLight,
  turquoise,
  jade,
  mediumOrange
} from "../src/lib/style/theme";

const items = [
  { label: "About", onClick: action("About clicked") },
  {
    label: "Documentation",
    onClick: action("Documentation clicked")
  },
  {
    label: "Onboarding",
    onClick: action("Onboarding clicked")
  }
];

storiesOf("Dropdown", module)
  .add("Default", () => {
    return (
      <div className="storybook-dropdown">
        <h3>Dropdown with text/icon</h3>
        <Dropdown
          text="Charles NGUYEN"
          icon={<i className="fas fa-star" />}
          items={items}
          size="smaller"
        />
        <Dropdown
          text="Charles NGUYEN"
          icon={<i className="fas fa-star" />}
          items={items}
          size="small"
        />
        <Dropdown
          text="Charles NGUYEN"
          icon={<i className="fas fa-star" />}
          items={items}
        />
        <Dropdown
          text="Charles NGUYEN"
          icon={<i className="fas fa-star" />}
          items={items}
          size="large"
        />
        <Dropdown
          text="Charles NGUYEN"
          icon={<i className="fas fa-star" />}
          items={items}
          size="larger"
        />

        <h3>Dropdown with icon</h3>
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          caret={false}
        />

        <h3>Dropdown with text</h3>
        <Dropdown text="Charles NGUYEN" items={items} />

        <h3>Dropdown with variant</h3>
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          variant="primary"
          text="primary"
        />
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          variant="secondary"
          text="secondary"
        />
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          variant="success"
          text="success"
        />
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          variant="info"
          text="info"
        />
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          variant="warning"
          text="warning"
        />
        <Dropdown
          icon={<i className="fas fa-star" />}
          items={items}
          variant="danger"
          text="danger"
        />
      </div>
    );
  })
  .add("ThemeProvider", () => {
    const theme = {
      brand: {
        primary: hotPink,
        secondary: grayLight,
        success: jade,
        info: turquoise,
        warning: yellowOrange,
        danger: mediumOrange,
        base: grayLight
      }
    };

    return (
      <div className="storybook-dropdown">
        <ThemeProvider theme={theme}>
          <div>
            <h3>Dropdown With ThemeProvider</h3>
            <Dropdown
              icon={<i className="fas fa-star" />}
              items={items}
              variant="primary"
              text="primary"
            />
            <Dropdown
              icon={<i className="fas fa-star" />}
              items={items}
              variant="secondary"
              text="secondary"
            />
            <Dropdown
              icon={<i className="fas fa-star" />}
              items={items}
              variant="success"
              text="success"
            />
            <Dropdown
              icon={<i className="fas fa-star" />}
              items={items}
              variant="info"
              text="info"
            />
            <Dropdown
              icon={<i className="fas fa-star" />}
              items={items}
              variant="warning"
              text="warning"
            />
            <Dropdown
              icon={<i className="fas fa-star" />}
              items={items}
              variant="danger"
              text="danger"
            />
          </div>
        </ThemeProvider>
      </div>
    );
  });