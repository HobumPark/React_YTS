import '../../css/movie/Home.css';
import { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Home extends Component{
  constructor(props){
    super(props)
    this.state={  
      popular_movie_list:[],
      latest_movie_list:[],
      upcoming_movie_list:[],
    }
  }

  componentDidMount(){
    this.getPopularMovies()
    this.getLatestMovies()
    this.getUpcomingMovies()
  }

  getPopularMovies=async()=>{
    console.log('getPopularMovies')
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=4&page=1&sort_by=download_count`);

    console.log(axios_movies);
    this.setState({popular_movie_list:axios_movies.data.data.movies});
  }

  getLatestMovies=async()=>{
    console.log('getLatestMovies')
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=8&page=1`);

    console.log(axios_movies);
    this.setState({latest_movie_list:axios_movies.data.data.movies});
  }

  getUpcomingMovies=async()=>{
    console.log('getUpcomingMovies')
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=4&page=1&sort_by=date_added`);

    console.log(axios_movies);
    this.setState({upcoming_movie_list:axios_movies.data.data.movies});
  }

  render(){
    const {popular_movie_list,latest_movie_list,upcoming_movie_list}=this.state

    const result1 = popular_movie_list.map(movie=>(
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

    const result2 = latest_movie_list.map(movie=>(
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

    const result3 = upcoming_movie_list.map(movie=>(
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

    return(
      <div id='home'>
           <div id='background-image'>
           </div>
          <header id='home-header'>
              <h1>Download YTS YIFY movies: HD smallest size</h1>
              <span>
                Welcome to the official yts.torrentbay.to website. Here you can browse and download YIFY movies in
              </span>
              <span>
                excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
              </span>
              <span>
                Available now: 🔥 CREED III 🥊, 😺Murder Mystery 2, 🐳 AVATAR: The Way of Water ...
              </span>
          </header>
          <div id='popular-list'>
              
              <div id='popular-list-head'>
                <span>
                  <FontAwesomeIcon icon={faStar} color='greenyellow' id='star-icon'/> 
                  Popular Downloads
                </span>
                <span>
                  <img src={"/images/rss-icon.png"}/> 
                  more featured...
                </span>
              </div>
              <div id='popular-list-cont'>
                <div id='popular-list-cont-inner'>
                  {result1}
                </div>
              </div>
          </div>
          <div id='latest-list'>
              <div id='latest-list-head'>
                  <span>Latest YIFY Movies Torrents</span>
                  <span>Browse All</span>
              </div>
              <div id='latest-list-cont'>
                <div id='latest-list-cont-inner'>
                    {result2}
                </div>
              </div>
          </div>
          <div id='upcoming-list'>
              <div id='upcoming-list-head'>
                  <span>Upcoming YIFY Movies</span>
                  <span>Request a Movie</span>
              </div>
              <div id='upcoming-list-cont'>
                <div id='upcoming-list-cont-inner'>
                    {result3}
                </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Home;