import React from "react";
import Navbar from "../src/lib/components/navbar/Navbar.component";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { hotPink, turquoise, jade } from "../src/lib/style/theme";
import { ThemeProvider } from "styled-components";

const applications = [
  { label: "Hyperdrive UI", onClick: action("Hyperdrive UI clicked") }
];

const help = [
  { label: "About", onClick: action("About clicked") },
  { label: "Documentation", onClick: action("Documentation clicked") },
  { label: "Onboarding", onClick: action("Onboarding clicked") }
];

const user = {
  name: "Charles NGUYEN",
  actions: [{ label: "Log out", onClick: action("Logout clicked") }]
};

storiesOf("Navbar", module)
  .add("Default", () => {
    return (
      <div>
        <h3>Navbar with toggle</h3>
        <Navbar
          onToggleClick={action("toggle clicked")}
          toggleVisible={true}
          productName={"Harware UI"}
          applications={applications}
          help={help}
          user={user}
        />
        <h3>Navbar without toggle</h3>
        <Navbar
          onToggleClick={action("toggle clicked")}
          toggleVisible={false}
          productName={"Harware UI"}
          applications={applications}
          help={help}
          user={user}
        />
        <h3>Navbar with customized logo</h3>
        <Navbar
          onToggleClick={action("toggle clicked")}
          toggleVisible={true}
          productName={"Harware UI"}
          applications={applications}
          help={help}
          user={user}
          logo={<i className="fas fa-ring" />}
        />
      </div>
    );
  })
  .add("ThemeProvider", () => {
    return (
      <div>
        <div style={{ paddingBottom: "15px" }}>
          <ThemeProvider
            theme={{
              brand: {
                primary: hotPink
              }
            }}
          >
            <Navbar
              onToggleClick={action("toggle clicked")}
              toggleVisible={true}
              productName={"Harware UI"}
              applications={applications}
              help={help}
              user={user}
            />
          </ThemeProvider>
        </div>
        <div style={{ paddingBottom: "15px" }}>
          <ThemeProvider
            theme={{
              brand: {
                primary: jade
              }
            }}
          >
            <Navbar
              onToggleClick={action("toggle clicked")}
              toggleVisible={true}
              productName={"Harware UI"}
              applications={applications}
              help={help}
              user={user}
            />
          </ThemeProvider>
        </div>
        <div style={{ paddingBottom: "15px" }}>
          <ThemeProvider
            theme={{
              brand: {
                primary: turquoise
              }
            }}
          >
            <Navbar
              onToggleClick={action("toggle clicked")}
              toggleVisible={true}
              productName={"Harware UI"}
              applications={applications}
              help={help}
              user={user}
            />
          </ThemeProvider>
        </div>
      </div>
    );
  });