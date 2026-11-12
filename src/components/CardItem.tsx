import React, { Fragment } from 'react';

export type CardItemProps = {
  image: string;
  label: string;
  source: string;
};

function CardItem(props: CardItemProps) {
  const { image, label, source } = props || {
    image: '',
    label: '',
    source: '',
  };

  return (
    <Fragment>
      <div className="card">
        <img
          className="product-image"
          src={image}
          alt="Simple Seafood Platter"
        />
        <div className="product-details">
          <b className="label">{label}</b>
          <br />
          <span className="source">{source}</span>
        </div>
      </div>
    </Fragment>
  );
}

export default CardItem;
