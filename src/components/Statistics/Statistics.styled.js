import { styled } from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 400px;
  height: auto;

  text-align: center;

  background-color: #ffffff;
  border-radius: 8px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;

  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
  height: 80px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: calc(100% / 5);

  padding: 14px 16px;
`;

export const Label = styled.span`
  color: #ffffff;
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: #ffffff;
`;
