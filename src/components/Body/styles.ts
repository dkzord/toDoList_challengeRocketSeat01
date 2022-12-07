/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerWidth = styled.div``;

export const Search = styled.div`
  display: flex;
  margin-top: -1.6875rem;
  max-width: 46.875rem;

  justify-content: space-between;
`;

export const Input = styled.input`
  background: var(--color-gray-500);
  border: none;
  width: 53.875rem;
  height: 3.375rem;
  border-radius: 8px;
  padding: 1rem;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;

  padding: 1rem;
  border-radius: 8px;
  background: var(--color-blue-dark);
  color: var(--color-white);
  font-size: 700;
  border: none;

  svg {
    margin-left: 0.3rem;
    line-height: 0;
    border: none;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-bottom: 1.875rem;
`;

export const TaskCreate = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-blue);

  span {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    display: inline-block;
    font-weight: 700;
    margin-left: 5px;
    text-align: center;
    width: 25px;

    color: var(--color-gray-100);
    background: var(--color-gray-400);
  }
`;

export const TaskComplete = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-purple);

  span {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    display: initial;
    font-weight: 700;
    margin-left: 0.3125rem;
    text-align: center;
    width: 2.1875rem;
    padding: 8px;

    color: var(--color-gray-100);
    background: var(--color-gray-400);
  }
`;

export const TaskListVoid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  text-align: center;

  height: 15.25rem;

  border-radius: 10px;
  border-top: 2px solid #333333;

  .alignIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
  }

  .settinStyle {
    font-size: 1rem;
  }

  .settinStyle div:nth-child(1) {
    font-weight: 700;
  }
`;

export const Image = styled.img`
  display: block;
`;
