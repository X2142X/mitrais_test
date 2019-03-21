import React, { PureComponent } from 'react';
import '../App.css';
import profile from '../asset/profileLogo.png'

class ProfileContainer extends PureComponent{
    render(){
        return(
            <div >
                <div className="profileContainer1">
                  <img className="avatar halfWidth" src={profile} />
                  <div className="nameContainer halfWidth">
                    John Smith
                  </div>
              </div>
              <div className="profileContainer2">
                  <div className="halfWidth">
                    Balance 
                  </div>
                  <div className="halfWidth">
                    100.000.000
                  </div>
              </div>
            </div>
        );
    }
}

export default ProfileContainer;