
import React, { Component } from 'react';

import Movie from './Movie';
import '../../css/movie/MovieList.css';

class MovieList extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieList:this.props.movieList,
        }
    }

    render(){
    
      const {movieList}=this.props;
      const result = movieList.map(movie=>(
        <Movie key={movie.id}
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
        title={movie.title}
        year={movie.year}
        genres={movie.genres}
        runtime={movie.runtime}
        rating={movie.rating}
        summary={movie.summary}
        url={movie.url}/>)
      )

  return (
    <div className="MovieList">
      <div id='movie-list'> 
        {result}
      </div>
    </div>
    );
  }
}

export default MovieList;
