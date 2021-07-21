import React from 'react';
import Image from 'next/image';
import { Kitty } from '../../containers/home/kittySlice';
import styles from './Card.module.css';

export const Card = ({ id, name, description, image }: Kitty) => {
  return (
    <div
      className={`flex flex-col items-center p-5 rounded-lg shadow-lg transition-transform hover:scale-110 text-gray-400 ${styles.card}`}
      data-testid="kitty-card"
    >
      <div
        className="rounded-md relative overflow-hidden"
        style={{ width: '200px', height: '200px' }}
      >
        <Image
          objectFit="cover"
          layout="fill"
          src={image.url}
          alt="kitty-avatar"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="pt-2 font-bold text-xl">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
