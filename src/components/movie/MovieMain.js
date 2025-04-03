import '../../css/movie/MovieMain.css';
import React, { Component } from 'react';
import Pagination from './Pagination.js';
import MovieList from './MovieList.js';
import Header from '../common/Header.js';
import Footer from '../common/Footer.js';

import axios from 'axios';
import SearchFilter from './SearchFilter.js';

class MovieMain extends Component {

  constructor(props){
    super(props);

    this.state={
            movieList:[

            ],
            queryString:'',
            filter:false,
            search:null,
            loading:false,
            currentPage:1,
            moviePerPage:20,
            movieCount:0,
        }
  }

  getMovies = async(page)=>{
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}&sort_by=latest`);
    //= await axios.get(`/api/v2/list_movies.json?limit=3&page=${page}`);
    
    console.log(axios_movies);
    this.setState({movieList:axios_movies.data.data.movies});
    this.setState({movieCount:axios_movies.data.data.movie_count})
  }

  getMoviesFilter = async(page,queryString)=>{
    console.log('getMoviesFilter')
    console.log(queryString)
    console.log(`https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}&${queryString}`)

    let url=''
    if(queryString != ''){
      url=`https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}&${queryString}`
    }else{
      url=`https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}`
    }
    
    const axios_movies 
    = await axios.get(url);

    console.log(axios_movies);
    this.setState({movieList:axios_movies.data.data.movies});
    this.setState({movieCount:axios_movies.data.data.movie_count})
  }

  componentDidMount(){
    this.getMovies(1);
  }

  setCurrentPage=(page)=>{
    //alert(page);
    const {filter,queryString}=this.state
    this.setState({currentPage:page})
    if(filter===true){
      this.getMoviesFilter(page,queryString)
    }else if(filter===false){
      this.getMovies(page)
    }
  }

  filterChange=(queryString)=>{
    console.log('MovieMain Filter')
    console.log(queryString)
    this.getMoviesFilter(1,queryString)
    this.setState({filter:true})
    this.setState({queryString:queryString})
    this.setState({currentPage:1})
  }

  render(){

    const {movieList,moviePerPage,currentPage,movieCount}=this.state;

      return (
        <div id="movie-main">
          <div id="movie-main-inner">
            <SearchFilter filterChange={this.filterChange} getMoviesFilter={this.getMoviesFilter}/>
            <Pagination moviePerPage={moviePerPage} movieLen={movieCount} 
            setCurrentPage={this.setCurrentPage} currentPage={currentPage}></Pagination>
            <MovieList movieList={movieList || []}></MovieList>
            <Pagination moviePerPage={moviePerPage} movieLen={movieCount} 
            setCurrentPage={this.setCurrentPage} currentPage={currentPage}></Pagination>
            <Footer/>
          </div>
        </div>
      );

  }
  
}

export default MovieMain;
