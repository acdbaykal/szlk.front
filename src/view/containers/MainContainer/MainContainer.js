import React from 'react';
import Logo from 'view/components/LogoComponent/LogoComponent'
import styles from './style/MainContainer.styl'

export default class MainContainer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
      return (
      <div className={styles.wrap_all}>
        <div className={styles.main_container}>
          <Logo/>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}
