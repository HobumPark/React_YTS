
import React, { Component } from 'react';
import '../../css/common/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faUser } from "@fortawesome/free-solid-svg-icons";
import $ from 'jquery';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    
    componentDidMount(){
        this.HeaderDetach()
    }

      // 화면 크기 변경 시 상태 업데이트
    handleResize = () => {
        this.setState({
        windowWidth: window.innerWidth,
        });
    };

    // 컴포넌트가 마운트될 때 이벤트 리스너 추가
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }


    HeaderDetach=()=>{
        $(window).on('scroll',function(){
            console.log('scroll!')

            var sc_top=$(this).scrollTop()
            console.log(sc_top)
            if(sc_top>=100){
                $("#header").addClass("fixed")
            }else{
                $("#header").removeClass("fixed")
            }
        })
    }

    loginPage=()=>{
        alert('로그인!')
        this.props.openPopUp()
    }

    registerPage=()=>{
        alert('회원가입!')
        this.props.openPopUp()
    }

    render(){
        const { windowWidth } = this.state;
        return(
            <div id="header">
                <div id="header-inner">
                    <div id='logo'>
                        <a href="/">
                            <img src="/logo-YTS.svg" alt='로고'/>
                        </a>
                        <span>
                            HD movies at the smallest size
                        </span>
                    </div>
                    <div id='search-nav-wrap'>
                        {
                        windowWidth > 1000 ? 
                        <div id='search'>
                                <img src='/images/icon-search.svg'/>
                                <input type='text' placeholder='Quick search'/>
                        </div>:''
                        }
                        <div id='nav'>
                            {windowWidth > 1000 ? (
                            <ul>
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        4K
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Trending
                                    </a>
                                </li>
                                <li>
                                    <a href="/browse-movies">
                                        Browse Movies
                                    </a>
                                </li>
                                <li id='login'>
                                    <a href="#" onClick={this.loginPage}>
                                        Login
                                    </a>
                                </li>
                                <li id='register'>
                                    <a href="#" onClick={this.registerPage}>
                                        Register
                                    </a>
                                </li>
                            </ul>
                            ) : (
                            <ul>
                                <li>
                                    <a href="/browse-movies">
                                        <FontAwesomeIcon icon={faSearch} color='white' size="3x" id='search-icon'/> 
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        4K
                                    </a>
                                </li>
                                <li id='login'>
                                    <a href="#" onClick={this.loginPage}>
                                        <FontAwesomeIcon icon={faUser} color='white' size="3x" id='user-icon'/> 
                                    </a>
                                </li>
                            </ul>
                            )}
                        </div>  
                    </div>
                </div> 
            </div>
        );
    }
}

export default Header;
