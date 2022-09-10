import React from 'react'
import { Link } from 'react-router-dom';
import './CentredItemsCard.scss';

type CentredItemsCardProps = {
  imageSrc: string,
  name: string,
  price: string,
};

export const CentredItemsCard = (props: CentredItemsCardProps) => {
  return (
    <Link  className="centred-card" to=''> {/* //todo */}
      <img src={props.imageSrc} alt={props.name} />
      <div className="text-blue">
        {props.name}
      </div>
      <div className="text-gold">
        {props.price}
      </div>
    </Link>
  )
};
