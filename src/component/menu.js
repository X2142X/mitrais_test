import React, { PureComponent } from 'react';
import '../App.css';


class Menu extends PureComponent{
    render(){
        return(
            <div className="menu">
                  <div className="upperLevel">
                      my wallet
                  </div>
                  <div className="subLevel subLevel-active">
                      Send Money
                  </div>
                  <div className="subLevel">
                    Transaction History
                  </div>
                  
              </div>
        );
    }
}

export default Menu;