import React, { Component } from 'react';
import './App.css';
import Head from './component/head' 
import ProfileContainer from './component/profileContainer'
import Menu from './component/menu'

import {  Form, FormGroup, Input } from 'reactstrap';
import search from './asset/search.png'
import profile from './asset/profileLogo.png'
import money from './asset/money.png'

class App extends Component {

  constructor(){
    super()

    this.state={
        listRecipient:[
            "Jane Doe",
            "Lucy Liu",
            "Sandra James",
            "Eric Jones",
            "Rosela",
            "Rony",
            "Ben",
            "James Watt",
            "Eric Clapton",
            "Benjamin Franklin"
        ],
        filterKey:'',
        dataRecipient:[
          "Jane Doe",
          "Lucy Liu",
          "Sandra James",
          "Eric Jones",
          "Rosela",
          "Rony",
          "Ben",
          "James Watt",
          "Eric Clapton",
          "Benjamin Franklin"
      ]
    }

    this.renderListRecipient=this.renderListRecipient.bind(this)
    this.filter=this.filter.bind(this)
    this.onChange=this.onChange.bind(this)
  }

  renderListRecipient(){
    const{listRecipient}=this.state
    
    return listRecipient.map((item,index)=>(
          <div key={index} className="itemRecipient">
                <img className="avatar-small profileLogoContainerSmall" src={profile} />
                <div className="nameContainerSmall">{item}</div>
                <img className="avatar-small profileLogoContainerSmall" src={money} />
            </div>
      ) 
    )
  }

  filter(){
      const {listRecipient,filterKey,dataRecipient}=this.state

      if(filterKey!=""){
        this.setState({
          listRecipient:listRecipient.filter(item=>item.toUpperCase().match(filterKey.toUpperCase()))
        })
      }else{
        this.setState({
          listRecipient:dataRecipient
        })
      }
      
  }

  onChange(input){
      this.setState({
        filterKey:input
      })
  }

  render() {
    return (
      <div className="App">
        
        <Head />
        <div className="mainBody">
          <div className="leftContainer">
              <ProfileContainer />
              <div className="divider"></div>
              <Menu />
          </div>
          <div className="centerContainer">
              <div className="titleContainer">
                  search recipient
              </div>
              <div className="searchBarContainer">
              <Form>
              <FormGroup>
                <Input onChange={(e) => this.onChange(`${e.target.value}`)} className="searchInput" type="email" name="email" id="exampleEmail" placeholder="Recipient Name (e.g. Jane Doe)" />
                <img onClick={this.filter} className="searchButton" src={search}/>
              </FormGroup>
              </Form>
              </div>
              <div className="listRecipientContainer">
                  {this.renderListRecipient()}
              </div>
          </div>
        </div>
         
      </div>
    );
  }
}

export default App;
