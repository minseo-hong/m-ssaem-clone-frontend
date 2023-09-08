import styled, { css } from 'styled-components';

import { getGradeBadgeColor, getMBTIBadgeColor } from '../../libs/getBadgeColor';

interface BadgeProps {
  type: string,
  value: string,
  children: React.ReactNode
}

interface BadgeBlockProps {
  type: string,
  value: string
}

const BadgeBlock = styled.div<BadgeBlockProps>`
  color: #FFFFFF;
  font-size: 0.75rem;
  border-radius: 20px;
  padding: 0.25rem 0.5rem;

  ${({ type, value }) => {
    const badgeColor = type === 'mbti' ? 
      getMBTIBadgeColor(value) : getGradeBadgeColor(value);
    return css`
      background-color: ${badgeColor};
    `
    }
  }
`;

const Badge = ({ type, value, children, ...rest }: BadgeProps) => {
  return (
    <BadgeBlock type={ type } value={ value } {...rest}>{ children }</BadgeBlock>
  );
}

export default Badge;
