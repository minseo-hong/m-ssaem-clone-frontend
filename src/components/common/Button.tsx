import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string,
  cancel?: boolean,
  submit?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}

interface ButtonBlockProps {
  cancel?: boolean
}

const buttonGlobalStyle = css`
  background-color: #AC71EA;
  color: #FFFFFF;
  font-size: 0.875rem;
  font-weight: 900;
  border: none;
  border-radius: 5rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  cursor: pointer;
`

const ButtonBlock = styled.button<ButtonBlockProps>`
  ${buttonGlobalStyle}
  ${(props) => {
    if (props.cancel) {
      return css`
        background-color: #a0a0a0;
      `
    }}
  }
`;

const ButtonLinkBlock = styled(Link)`
  ${buttonGlobalStyle}
  text-decoration: none;
`;

const Button = (props: ButtonProps) => {
  let rest = {};

  if (props.hasOwnProperty('onClick')) {
    rest = { ...rest, onClick: props.onClick }
  }

  if (props.hasOwnProperty('cancel')) {
    rest = { ...rest, cancel: "true" }
  }

  if (props.hasOwnProperty('submit')) {
    rest = { ...rest, type: "submit" }
  } else {
    rest = { ...rest, type: "button" }
  }

  if (props.hasOwnProperty('to')) {
    return <ButtonLinkBlock to={ props.to as string } { ...rest }>{ props.children }</ButtonLinkBlock>
  }

  return <ButtonBlock { ...rest }>{ props.children }</ButtonBlock>
}

export default Button;
