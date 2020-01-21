import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import { classData } from '../data/classData';
import ListItem from './ListItem';
import { ThemeContext, useTheme } from '../contexts/ThemeContext';

class ListProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }
  renderListItems = () => {
    return classData.map((fitnessClass, i) => {
      const key = uuid();
      const active = i === this.state.activeIndex ? 'active' : '';
      return (
        <ListItem
          {...fitnessClass}
          index={i}
          key={key}
          isActive={active}
          clickHandler={this.clickHandler}
        />
      );
    });
  };

  clickHandler = i => {
    this.setState({
      activeIndex: i
    });
  };
  render() {
    // example one
    //let theme = this.context;
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <h3 className="text-center mt-5">List of Equinox Classes</h3>
          <ul className="list-group">{this.renderListItems()}</ul>
        </div>
      </div>
    );
  }
}

// example one
ListProps.contextType = ThemeContext;

export default ListProps;
