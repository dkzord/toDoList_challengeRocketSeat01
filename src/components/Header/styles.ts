/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 200px;

  background: var(--color-gray-700);
`;

export const Title = styled.h1`
  padding-left: 12px;
  font-size: 40px;
  font-weight: 900;

  color: var(--color-blue);

  span {
    color: var(--color-purple);
  }
`;

export const Image = styled.img``;
