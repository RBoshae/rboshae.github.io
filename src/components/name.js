import React from "react";
import styled, { css } from "styled-components"

const Base = styled.a`
  front-size: 20pt;
  font-family: 'Pacifico', cursive;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  tansition-property: tansform;
  transition-duration: 0.8s;

  &:hover {
    curser: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(https://media.giphy.com/media/5uHVQE9VfUFNK/giphy.gif);
    test-decoration: none;
    -webkit-transform: rotate(354deg);
  }

  ${props =>
  props.dark &&
  css`
    color: #444;
  `}

  ${props =>
  props.dark &&
  css`
    color: #444;
  `}

  ${props =>
    props.block &&
    css`
      display: block;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 1em;
    `}

  ${props =>
    props.big &&
    css`
      font-size: 2em;
    `}
`;

class Name extends React.Component {
  render() {
    return (
      <Base {...this.props} href="/">
        Rick Boshae
      </Base>
    );
  }
}

export default Name;
