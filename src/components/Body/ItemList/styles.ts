/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: 46.875rem;
  background: var(--color-gray-500);
  margin-top: 2.5rem;
  border-radius: 0.5rem;

  border: 1px solid var(--color-gray-300);
  color: var(--color-white);
  font-size: 14px;
  font-weight: 400;
`;

export const ContainerWidth = styled.div`
  display: flex;
  width: 100vw;
  margin: 1rem 0;
`;

export const TextContent = styled.span`
  size: 0.875rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  color: var(--color-gray-300);

  background-color: transparent;
  border: none;
  margin: 0 1rem;
  border-radius: 2px;
  cursor: pointer;
`;

export const InputCheckbox = styled.input`
  margin: 0 1rem;
  transform: scale(1.6);
  border: 1px solid #000;
  border-radius: 50%;
  cursor: pointer;

  &.input:focus {
    outline: var(--color-blue);
  }
`;
