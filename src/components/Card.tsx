import React, { Fragment, ViewTransition } from 'react';
import CardItem, { type CardItemProps } from './CardItem';

import '../styles/Card.css';

interface CardProps {
  foods: Array<CardItemProps>;
}

function Card(props: CardProps) {
  const foods = props?.foods || [];

  if (foods.length > 0) {
    const content = foods.map((food) => <CardItem key={food.id} {...food} />);

    return <ViewTransition name="card-transition">{content}</ViewTransition>;
  }

  return <Fragment></Fragment>;
}

export default Card;
