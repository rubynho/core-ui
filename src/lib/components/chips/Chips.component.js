//@flow
import * as defaultTheme from "../../style/theme";
import type { Variant, LoaderSize } from "../constants";
import type { Node } from "react";
import styled, { css } from "styled-components";

import React from "react";
import { lighten } from "polished";
import { mergeTheme } from "../../utils";

type Props = {
  text: string,
  color?: string,
  variant?: Variant,
  icon?: Node,
  buttonIcon?: Node,
  onClick?: any => void,
  onRemove?: any => void,
  size?: LoaderSize
};

const ChipsContainer = styled.div`
  display: inline-flex;
  background-color: ${defaultTheme.grayLighter};
  border-radius: 15px;

  ${props => {
    const brandingTheme = mergeTheme(props.theme, defaultTheme);
    const defaultStyle = `
      background-color: ${brandingTheme[props.variant]};
      color: ${props.color};
    `

    switch (props.size) {
      case "smaller":
        return css`
          font-size: ${defaultTheme.fontSize.smaller};
          ${defaultStyle}
          height: 27px;
        `;
      case "small":
        return css`
          font-size: ${defaultTheme.fontSize.small};
          ${defaultStyle}
          height: 30px;
        `;
      case "large":
        return css`
          font-size: ${defaultTheme.fontSize.larger};
          ${defaultStyle}
          height: 35px;
          width: 200px;
        `;
      case "larger":
        return css`
          font-size: ${defaultTheme.fontSize.huge};
          ${defaultStyle}
          height: 40px;
          width: 210px;
        `;
      default:
        return css`
          font-size: ${defaultTheme.fontSize.base};
          ${defaultStyle}
          height: 30px;
        `;
    }
  }}

  ${props => {
    const brandingTheme = mergeTheme(props.theme, defaultTheme);

    const brandLight = lighten(0.1, brandingTheme[props.variant]).toString();

    return (
      props.onClick &&
      css`
        &:hover {
          cursor: pointer;
          background-color: ${brandLight};
          color: ${props.color};
        }

        &:active {
          background-color: ${brandingTheme[props.variant]};
          color: ${props.color};
        }
      `
    );
  }}
`;

export const ChipsIcon = styled.span`
  ${props =>
    props.text &&
    css`
      padding-right: ${defaultTheme.padding.smaller};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: ${lighten(
        0.15,
        mergeTheme(props.theme, defaultTheme)[props.variant]
      ).toString()};
      border-radius: 15px;
      padding: 7px 8px;
    `}
`;

export const ChipsButton = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 7px;
  border-radius: 15px;
  padding: 2px ${defaultTheme.padding.smaller};

  ${props => {
    const brandingTheme = mergeTheme(props.theme, defaultTheme);

    const brandLight = lighten(0.1, brandingTheme[props.variant]).toString();

    return (
      props.onClick &&
      css`
        &:hover {
          background-color: ${brandLight};
          color: ${props.color};
          cursor: pointer;
        }

        &:active {
          background-color: ${brandingTheme[props.variant]};
          color: ${props.color};
        }
      `
    );
  }}
`;

export const ChipsText = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 7px 14px;
`;

function Chips({
  text = "",
  variant = defaultTheme.brand.base,
  icon = null,
  buttonIcon = null,
  onClick,
  onRemove,
  size,
  color = defaultTheme.white
}: Props) {
  return (
    <ChipsContainer
      className="sc-chips"
      onClick={onClick}
      variant={variant}
      color={color}
      size={size}
    >
      {icon && (
        <ChipsIcon text={text} variant={variant}>
          {icon}
        </ChipsIcon>
      )}
      <ChipsText>
        {text}
        {onRemove && (
          <ChipsButton onClick={onRemove} color={color} variant={variant}>
            {buttonIcon}
          </ChipsButton>
        )}
      </ChipsText>
    </ChipsContainer>
  );
}

export default Chips;
