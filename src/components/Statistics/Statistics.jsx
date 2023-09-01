import PropTypes from 'prop-types';

import {
  Card,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

import { getRandomHexColor } from 'helpers/randomColorSwitcher';

export const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Card>
  );
};

PropTypes.Statistics = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
