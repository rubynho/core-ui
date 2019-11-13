//@flow
import React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from "../src/lib/components/textarea/TextArea.component";
import { Wrapper, Title } from "./common";
import { action } from "@storybook/addon-actions";

storiesOf("TextArea", module).add("Default", () => {
  return (
    <Wrapper>
      <Title>Text Area without label</Title>
      <TextArea
        rows={10}
        cols={10}
        id={"text"}
        value="Hello"
        onChange={ action("onChange")}
      />

      <Title>Text Area disabled</Title>
      <TextArea rows={10} cols={50} placeholder="Text area input" value="" onChange={ action("onChange") }/>
    </Wrapper>
  );
});
