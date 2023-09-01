import PropTypes from 'prop-types';

import {
  Table,
  Title,
  HeadData,
  Body,
  Type,
  Amount,
  Currency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Title>
          <HeadData>Type</HeadData>
          <HeadData>Amount</HeadData>
          <HeadData>Currency</HeadData>
        </Title>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Body key={id}>
              <Type>{type}</Type>
              <Amount>{amount}</Amount>
              <Currency>{currency}</Currency>
            </Body>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    // PropTypes.objectOf(PropTypes.string.isRequired)
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
