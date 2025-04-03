import '../../css/movie/MovieView.css';
import {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDownload, faStar,faMessage } from "@fortawesome/free-solid-svg-icons";

class MovieView extends Component{

  constructor(props){
    super(props)
    this.state={
        movieDetail:'',
        movieSuggest:[],
        movieComments:'',
        movieReviews:'',
        defaultAvatar:'https://yts.mx/assets/images/actors/thumb/default_avatar.jpg',
        tech_menu:1,
    }
  }

  componentDidMount(){
      console.log('Movie View ComponentDidMount')
      console.log(window.location)
      console.log(window.location.href)
      console.log(window.location.search)
      const queryObj = queryString.parse(window.location.search)
      const id = queryObj.id

      this.getMovieDetail(id)
      this.getMoviesSuggest(id)
      //this.getMovieComment(id)
      //this.getMovieReview(id)
      
  }

  getMovieDetail=async(id)=>{
    console.log('getMovieDetail:'+id)
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true&with_description=true`);
    console.log(axios_movies);
    this.setState({
      movieDetail:axios_movies.data.data.movie
    })
  }
  
  getMoviesSuggest=async(id)=>{
    console.log('getMoviesSuggest:'+id)
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`);
    console.log(axios_movies);
    this.setState({
      movieSuggest:axios_movies.data.data.movies
    })
  }
  
  /*
  getMovieComment=async(id)=>{
    console.log('getMovieComment:'+id)
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/movie_comments.json?movie_id=${10}`);
    console.log(axios_movies);
    console.log(axios_movies.data);
  }
  */
 /*
  getMovieReview=async(id)=>{
    console.log('getMovieReview:'+id)
    const axios_movies 
    = await axios.get(`https://yts.mx/api/v2/movie_reviews.json?movie_id=${10}`);
    console.log(axios_movies);
    console.log(axios_movies.data);
  }
*/
  downloadSubtitle=()=>{
    window.open('https://yifysubtitles.ch/movie-imdb/tt10640346')
  }

  moveSimmilarMovie=(url)=>{
    window.location.href=url
  }

  setMenu=(num)=>{
    this.setState({
      tech_menu:num
    })
  }

  render(){

    const {movieDetail,movieSuggest,defaultAvatar,tech_menu}=this.state
    console.log('movieDetail')
    console.log(movieDetail)

    /*유사영화*/
    let simliarMovieList=''
    if ( movieSuggest !== ''){
      simliarMovieList = movieSuggest.map(
        (data)=>(
          <div onClick={()=>this.moveSimmilarMovie(data.url)}>
            <a>
              <img src={data.medium_cover_image}/>
            </a>
          </div>)
      )
    }

    /*장르목록*/
    let  genreList=''
    if ( movieDetail !== ''){
      genreList = movieDetail.genres.map(
        (genre)=>(<span>{genre}</span>)
      )
    }

    /*캐스팅 목록*/
    let castList=''
    if ( movieDetail !== '' && movieDetail.hasOwnProperty('cast') === true){
      castList = movieDetail.cast.map(
        (data)=>(
          <div>
            {
              data.url_small_image ==null? 
              <img src={defaultAvatar} alt='default avatar'/>:
              <img src={data.url_small_image} alt='profile'/>
            }
          <span className='actor-name'>{data.name}</span>
          <b className="as"> as </b>
          <span className='character-name'>{data.character_name}</span>
          </div>)
      )
    }

    /*가능리스트*/
    let available_list=''
    if ( movieDetail !== '' && movieDetail.hasOwnProperty('torrents') === true){
      available_list = movieDetail.torrents.map(
        (data)=>(
          <a href={data.url} id='available-btn'>
              {data.quality}.{data.type}
          </a>)
      )
    }


    return(
      <div id='movie-view'>
        <div id='movie-view-inner'>
          <div id='movie-info'> 
                  <div id='movie-cover'>
                      <div id='movie-cover-image'>
                          <img src={movieDetail.medium_cover_image}/>
                      </div>
                      <button id='down-btn'>
                        <FontAwesomeIcon icon={faDownload} color='green'/> Download
                      </button>
                      <button id='watch-btn'>
                        Watch Now
                      </button>
                  </div>
                  <div id='movie-desc'>
                      <div id='title'>
                        {movieDetail.title}
                      </div>
                      <div id='year'>
                        {movieDetail.year}
                      </div>
                      <div id='genre'>
                        {genreList}
                      </div>
                      <div id='available'>
                        <span>Available in:</span>
                        {available_list} 
                      </div>
                      <div id='download-subtitle'>
                          <button onClick={this.downloadSubtitle}>
                            <FontAwesomeIcon icon={faDownload} color='#6ac045'/> Download Subtitles
                          </button>
                      </div>
                      <div id='like-count'>
                           <FontAwesomeIcon icon={faHeart} color='#6ac045' id='like-icon'/>{movieDetail.like_count}
                      </div>
                      <div id='tomato-meter'>
                           <img src='images/rt-rotten.svg'/>
                           <span>TOMATOMETER</span>
                      </div>
                      <div id='audience'>
                           <img src='images/rt-upright.svg'/>
                           <span>AUDIENCE</span>
                      </div>
                      <div id='rating'>
                          <img src={'https://yts.mx/assets/images/website/logo-imdb.svg'}/>{movieDetail.rating}/10
                          <FontAwesomeIcon icon={faStar} color='#6ac045' id='star-icon'/>
                      </div>
                  </div>
                  <div id='movie-suggest'>
                      <h1>Similar movies</h1>
                      <div id='similar-movies'>
                          <div id='similar-movies-inner'>
                            {simliarMovieList}
                          </div>  
                      </div>
                  </div>
          </div>
          <div id='movie-screen-shot'> 
                  <div> 
                    <a href="#">
                      <img src={movieDetail.medium_screenshot_image1}/> 
                      <a href="#" id="play-btn">
                        <img src={"/images/play-trailer.svg"}/>
                      </a> 
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={movieDetail.medium_screenshot_image2}/>  
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={movieDetail.medium_screenshot_image3}/>  
                    </a>
                  </div>
          </div>
          <div id='movie-summary-cast'> 
                  <div id='summary'>
                      <h1>Plot summary</h1>
                      <div id='summary-inner'>
                          {movieDetail.description_full}
                      </div>
                      <div id='uploaded-date'>
                          {movieDetail.date_uploaded}
                      </div>
                  </div>
                  <div id='cast'>
                      <h1>Top cast</h1>
                      {castList}
                  </div>
          </div>
          <div id='tech-specs'> 
              <div id='tech-specs-title'>
                  <span>Tech Specs</span>
                  <button className={tech_menu==1? 'active-tech-specs' :''} onClick={()=>this.setMenu(1)}>720p</button>
                  <button className={tech_menu==2? 'active-tech-specs' :''} onClick={()=>this.setMenu(2)}>1080p</button>
              </div>
              <div id='tech-specs-contents'>
                {
                  tech_menu==1? 
                  <div id='spec-720'>
                      720p
                  </div>:''
                }
                {
                  tech_menu==2? 
                  <div id='spec-1080'>
                      1080p
                  </div>:''
                }
              </div>
          </div>
          <div id='comments-and-review'>
              <div id='comments-area'>
                  <h1>
                    <FontAwesomeIcon icon={faMessage} color='#6ac045'/>
                    Comments
                  </h1>
              </div>
              <div id='review-area'>
                  <h1>
                    <FontAwesomeIcon icon={faStar} color='#6ac045'/>
                    Movie Reviews
                  </h1>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MovieView;