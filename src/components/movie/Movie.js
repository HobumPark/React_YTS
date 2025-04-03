import React, { Component } from 'react';
import '../../css/movie/Movie.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

class Movie extends Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        this.moviePosterHover()
    }
    
    moveDetail=()=>{
        //alert('moveDetail')
        const {id}=this.props
        window.location.href=`/movies?id=${id}`
    }

    moviePosterHover=()=>{
        var idx=0;
        $("#movie-list>div").on(
            {
                "mouseover":function(){
                    idx = $(this).index()
                    console.log('show')
                    console.log(idx)
                    $("#movie-list>div").eq(idx).find("#hidden-info").show()
                    $("#movie-list>div").eq(idx).find("#movie-poster>span").css({
                        "backgroundColor":"#6AC045",
                        "opacity":"0.6"
                    })
                    //$("#movie-list>div").eq(idx).find("#hidden-info>a").animate({"bottom":"20px"},1000)           
                },
                "mouseout":function(){
                    console.log('hide')
                    $("#movie-list>div").eq(idx).find("#hidden-info").hide()
                    $("#movie-list>div").eq(idx).find("#movie-poster>span").css({
                        "backgroundColor":"#fff",
                        "opacity":"1"
                    }) 
                    //$("#movie-list>div").eq(idx).find("#hidden-info>a").css({"bottom":"-20px"})           
                }
            }
        )
    }

    render(){

        const{id,genres,medium_cover_image,url,title,year,runtime,rating,summary}=this.props

        let genre_rend=null;
        if(genres===undefined){
        genre_rend=
        <div id="movie_genre">
            genre:none
        </div>
        }else {
            genre_rend=
        <div id="movie-genre">
            {this.props.genres.map((genre,i)=>{return <span className="genre" key={i}>{genre}</span>})}
        </div>
        }

        return(
            <div key={id} id="movie-posts" onClick={this.moveDetail}>
                <div id='movie-poster'>
                    <span>
                        <a href={`/movies?id=${id}`}>
                            <img src={medium_cover_image} alt='cover'/>
                        </a>
                    </span>
                    
                    <div id='hidden-info'>
                            <div id='star'>
                                <FontAwesomeIcon icon={faStar} color='#6AC045' id='star-icon'/>
                            </div>
                            <div id='rating'>
                                {rating} / 10
                            </div>
                            <div id='genre'>
                                {genre_rend}
                            </div>
                            <a href={`/movies?id=${id}`}>
                                View Details
                            </a>
                    </div>
                </div>
                <div id='movie-info'>
                    <span id='title'>
                        <a href={`/movies?id=${id}`}>
                            {title}
                        </a>
                    </span>
                    <span id='year'>
                        {year}
                    </span>
                </div>
            </div>
        );
    }

}

export default Movie;