import React, { Fragment } from 'react';
import CardItem, { type CardItemProps } from './CardItem';

import '../styles/Card.css';

interface CardProps {
  foods: Array<CardItemProps>;
}

function Card(props: CardProps) {
  const foods = props?.foods || [];

  if (foods.length > 0) {
    const content = foods.map((food, index) => (
      <CardItem key={index} {...food} />
    ));

    return <Fragment>{content}</Fragment>;
  }

  return <Fragment></Fragment>;
}

export default Card;
