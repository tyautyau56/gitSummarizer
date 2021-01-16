import React from 'react';
import '../style/var.scss';
import Nav from './nav';

class Var extends React.Component<any, any> {
  render() {
    return (
      <div className='var'>
        <Nav />
        <Nav />
      </div>
    );
  }
}

export default Var;
