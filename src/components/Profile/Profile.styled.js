import { styled } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 300px;
  height: auto;

  text-align: center;

  background-color: #ffffff;
  border-radius: 8px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  margin-top: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
`;

export const Avatar = styled.img`
  width: 100px;

  align-self: center;

  border-radius: 50%;

  margin-bottom: 40px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: grey;

  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: grey;
`;

export const Stats = styled.p`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: calc(100% / 3);

  background-color: #f3f6f9;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);

  padding: 20px 16px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: grey;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
