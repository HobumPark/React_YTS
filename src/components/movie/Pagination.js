
import React, { Component } from 'react';
import '../../css/movie/Pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft,faAnglesRight } from "@fortawesome/free-solid-svg-icons";

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieLen:this.props.movieLen,
            moviePerPage:this.props.moviePerPage,
            clicked:false,
        }

    }

    setCurrentPage=(page)=>{
        //alert(page);
        this.props.setCurrentPage(page);
    }

    prevPage=()=>{
        const currentPage=this.props.currentPage
        if(currentPage===1){
            //alert("이동불가!")
            return
        }
        this.props.setCurrentPage(currentPage-1);
    }

    nextPage=()=>{
        const currentPage=this.props.currentPage
        const {movieLen,moviePerPage}=this.props;
        const lastPage=Math.ceil(movieLen / moviePerPage)
        if(currentPage===lastPage){
            //alert("이동불가!")
            return
        }
        this.props.setCurrentPage(currentPage+1);
    }

    firstPage = () => {
        this.props.setCurrentPage(1);
    }

    lastPage = () => {
        const {movieLen,moviePerPage}=this.props;
        const lastPage = Math.ceil(movieLen / moviePerPage)
        this.props.setCurrentPage(lastPage);
    }

    render(){
        let pageNumbers = [];
        const {movieLen,moviePerPage,currentPage}=this.props;
        console.log("movieLen:"+movieLen);
        console.log("posts:"+moviePerPage);
        const lastPage = Math.ceil(movieLen / moviePerPage)
        console.log("lastPage:"+lastPage);
        const currentStartPage = (parseInt((currentPage-1)/10))*10+1
        const currentLastPage = (parseInt((currentPage-1)/10))*10+10
        // 1~10, 11~20, 21~30
        // 1/10  -> 0.1  -> 0
        // 2/10  -> 0.2  -> 0
        // 3/10  -> 0.3  -> 0
        // 10/10 -> 1    -> 1
        // 11/10 -> 1.1  -> 1
        if(lastPage <= currentLastPage){
            for (let i = currentStartPage; i <= lastPage; i++) {
                pageNumbers.push(i);
            }
        }else{
            for (let i = currentStartPage; i <= currentLastPage; i++) {
                pageNumbers.push(i);
            }
        }

        console.log(pageNumbers);

        const pageList=pageNumbers.map((page,i)=>(
        <span className={currentPage === page? "active":""} id="page" onClick={()=>this.setCurrentPage(page)} key={i}>
            {page}
        </span>
            )
        );
        
        return (
    <div id="pagination">
        <div id='current-page-info'>
                YIFY Movies - page {currentPage}
        </div>
        <div id="page-list">
            {
                currentPage===1? '':<span id="page" onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faAnglesLeft} />
                                    </span>
            }

            {
                currentPage===1? '':<span id="page" onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </span>
            }
                {pageList}
            {
                currentPage !== lastPage && movieLen !=0? <span id='page'>...</span>:''
            }
            {
                movieLen!=0?
                <span id="page" onClick={this.nextPage}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>:''
            }
            {
                movieLen!=0?
                <span id="page" onClick={this.lastPage}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </span>:''
            }
        </div>
    </div>
        );
    }
}

export default Pagination;
