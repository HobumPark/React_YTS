import './App.css';
import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/movie/Home.js';
import MovieMain from './components/movie/MovieMain.js';
import MovieView from './components/movie/MovieView.js';
import MemberWrap from './components/util/MemberWrap.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      isPopUp:false
    }
  }

  openPopUp=()=>{
    this.setState({
      isPopUp:true
    })
  }

  closePopUp=()=>{
    this.setState({
      isPopUp:false
    })
  }

  render(){
      const {isPopUp}=this.state
      return (
        <div className="App">
          <BrowserRouter>
              {
                isPopUp===true? 
                <MemberWrap closePopUp={this.closePopUp}/>:''
              }
              <Header openPopUp={this.openPopUp}/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/browse-movies' element={<MovieMain/>}/>
                  <Route path='/movies' element={<MovieView/>}/>
              </Routes>
              <Footer/>
          </BrowserRouter>
        </div>
      );

  }
  
}

export default App;
