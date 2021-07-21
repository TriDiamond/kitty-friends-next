import React from 'react';
import { Card } from './Card';
import { Kitty } from '../../containers/home/kittySlice';

const CardList = ({ data }: { data: Array<Kitty> }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      {data.map(({ id, name, description, image }) => {
        return (
          <Card
            id={id}
            name={name}
            description={description}
            image={image}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
