import { styled } from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 200px;
  height: auto;

  text-align: center;

  background-color: #ffffff;
  border-radius: 4px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  padding: 8px 12px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;

  background-color: ${({ $isOnline }) => ($isOnline ? '#008000' : '#ff0000')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 64px;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 24px;
`;
