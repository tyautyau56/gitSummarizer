import React from 'react';
import '../style/nav.scss';


// apiから返ってきた情報をpropとして渡す
class Nav extends React.Component<any, any> {
  render() {
    return (
      <div className='nav'>
        <div className='inner'>
          <p>nav1</p>
        </div>
      </div>
    );
  }
}

export default Nav;
