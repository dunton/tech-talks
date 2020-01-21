import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { classData } from '../data/classData';
import ListItem from './ListItem';

const ListPropsHook = () => {
  const [activeIndex, setActiveIndex] = useState();
  const clickHandler = i => {
    setActiveIndex(i);
  };
  const renderListItems = () => {
    return classData.map((fitnessClass, i) => {
      const key = uuid();
      const active = i === activeIndex ? 'active' : '';
      return (
        <ListItem
          {...fitnessClass}
          index={i}
          key={key}
          isActive={active}
          clickHandler={clickHandler}
        />
      );
    });
  };

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <h3 className="text-center mt-5">List of Equinox Classes</h3>
        <ul className="list-group">{renderListItems()}</ul>
      </div>
    </div>
  );
};

export default ListPropsHook;
