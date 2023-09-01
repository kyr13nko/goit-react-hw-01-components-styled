import { styled } from 'styled-components';

export const Table = styled.table`
  width: 600px;

  background-color: #ffffff;
  border-radius: 4px;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  margin-bottom: 20px;

  border-collapse: collapse;
`;

export const Title = styled.tr`
  text-transform: uppercase;
  color: #ffffff;
  background-color: rgba(43, 184, 202, 0.767);
`;

export const HeadData = styled.th`
  width: 200px;
  font-size: 12px;
  border-right: 1px solid rgb(255, 255, 255);
  padding: 12px 0;

  &:last-child {
    border-right: none;
  }
`;

export const Body = styled.tr`
  font-size: 12px;

  &:nth-child(2n) {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;

const tableBodyStyles = `
  padding: 10px 0;
  color: rgb(128, 128, 128);
  border-right: 1px solid rgba(128, 128, 128, 0.1);
`;

export const Type = styled.td`
  ${tableBodyStyles}
  padding-left: 60px;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const Amount = styled.td`
  ${tableBodyStyles}
  text-align: right;
  padding-right: 80px;
`;

export const Currency = styled.td`
  ${tableBodyStyles}
  text-align: center;
`;
