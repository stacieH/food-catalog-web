import React, { Fragment, ViewTransition, use } from 'react';
import CardItem, { type CardItemProps } from './CardItem';

import '../styles/Card.css';

interface FoodListProps {
  foodsPromise: Promise<Array<CardItemProps>>;
}

function FoodList({ foodsPromise }: FoodListProps) {
  const foods = use(foodsPromise);

  if (foods.length > 0) {
    const content = foods.map((food) => <CardItem key={food.id} {...food} />);

    return (
      <div className="card-container">
        <ViewTransition name="card-transition">{content}</ViewTransition>
      </div>
    );
  }

  return <Fragment></Fragment>;
}

export default FoodList;
