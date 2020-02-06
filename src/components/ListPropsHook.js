import React, { useState, useContext } from 'react';
import { uuid } from 'uuidv4';
import { classData } from '../data/classData';
import ListItem from './ListItem';
import { AuthContext } from '../contexts/AuthContext';

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

  const authContext = useContext(AuthContext);
  if (!authContext.isLoggedIn) {
    return <h1>Please Login!</h1>;
  }

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
