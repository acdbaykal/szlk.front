import React from 'react';
import styles from './style/MainContainer.styl';

//eslint-disable-next-line react/prefer-stateless-function
export default class MainContainer extends React.Component{
  shouldComponentUpdate(next_props){
    const current_props = this.props;
    const current_path = current_props.location.pathname;
    const next_path = next_props.location.pathname;
    return current_path !== next_path;
  }

  render(){
    return (
      <div className={styles.wrap_all}>
        <div className={styles.main_container}>
          {this.props.top_float}
          {this.props.main}
        </div>
      </div>
    );
  }
}
