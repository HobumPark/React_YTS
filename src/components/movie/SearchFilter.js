import '../../css/movie/SearchFilter.css';
import { Component } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            quality_filter: 'all',  // 기본값 'all'
            genre_filter: 'all',    // 기본값 'all'
            order_by_filter: 'latest', // 기본값 'latest'
            rating_filter: 'all',  // 기본값 'all'
            queryString: ''
        };
    }

    // 퀄리티 필터 변경
    qualityFilterChange = (e) => {
        this.setState({ quality_filter: e.target.value }, () => {
            this.searchTermClick();
        });
    };

    // 장르 필터 변경
    genreFilterChange = (e) => {
        this.setState({ genre_filter: e.target.value }, () => {
            this.searchTermClick();
        });
    };

    // 평점 필터 변경
    ratingFilterChange = (e) => {
        this.setState({ rating_filter: e.target.value }, () => {
            this.searchTermClick();
        });
    };

    // 정렬기준 변경
    orderByfilterChange = (e) => {
        this.setState({ order_by_filter: e.target.value }, () => {
            this.searchTermClick();
        });
    };

    // 필터값을 사용하여 쿼리 문자열 생성
    searchTermClick = () => {
        const { searchTerm, quality_filter, genre_filter, order_by_filter, rating_filter } = this.state;
        let tempQueryString = '';

        if (searchTerm !== '') {
            tempQueryString = `query_term=${searchTerm}`;
        }

        if (quality_filter !== 'all') {
            tempQueryString += `&quality=${quality_filter}`;
        }

        if (order_by_filter !== 'latest') {
            tempQueryString += `&sort_by=${order_by_filter}`;
        }

        if (genre_filter !== 'all') {
            tempQueryString += `&genre=${genre_filter}`;
        }

        if (rating_filter !== 'all') {
            tempQueryString += `&minimum_rating=${rating_filter}`;
        }

        this.setState({ queryString: tempQueryString });

        this.props.filterChange(tempQueryString);
    };

    // 검색어 입력 변경
    searchTermChange = (e) => {
        const trimVal = (e.target.value).trim();
        this.setState({ searchTerm: trimVal });
    };

    // 엔터키로 검색
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.searchTermClick();
        }
    };

    // 리셋 버튼 클릭 시 모든 필터를 'all'로 초기화
    resetFilters = () => {
        this.setState(
            {
                searchTerm: '',
                quality_filter: 'all',
                genre_filter: 'all',
                order_by_filter: 'latest',
                rating_filter: 'all',
                queryString: ''
            },
            () => {
                this.searchTermClick();  // 모든 필터가 초기화된 후 쿼리 실행
            }
        );
    };

    render() {
        return (
            <div id="search-filter-wrap">
                <div id="search-filter-wrap-inner">
                    <div id="search-input-wrap">
                        <b>Search Term:</b>
                        <input
                            type="text"
                            onChange={this.searchTermChange}
                            onKeyDown={this.handleKeyDown}
                        />
                        <button onClick={this.searchTermClick}>Search</button>
                        <button onClick={this.resetFilters}>Reset</button>
                    </div>
                    <div id="filter-wrap">
                        <div id="quality-filter">
                            <b>Quality:</b>
                            <select onChange={this.qualityFilterChange} value={this.state.quality_filter}>
                                <option value="all">All</option>
                                <option value="480p">480p</option>
                                <option value="720p">720p</option>
                                <option value="1080p">1080p</option>
                                <option value="2160p">2160p</option>
                                <option value="3D">3D</option>
                            </select>
                        </div>
                        <div id="genre-filter">
                            <b>Genre:</b>
                            <select onChange={this.genreFilterChange} value={this.state.genre_filter}>
                                <option value="all">All</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="animation">Animation</option>
                                <option value="biography">Biography</option>
                                <option value="comedy">Comedy</option>
                                <option value="crime">Crime</option>
                            </select>
                        </div>
                        <div id="rating-filter">
                            <b>Rating:</b>
                            <select onChange={this.ratingFilterChange} value={this.state.rating_filter}>
                                <option value="all">All</option>
                                <option value="9">9+</option>
                                <option value="8">8+</option>
                                <option value="7">7+</option>
                                <option value="6">6+</option>
                                <option value="5">5+</option>
                                <option value="4">4+</option>
                                <option value="3">3+</option>
                                <option value="2">2+</option>
                                <option value="1">1+</option>
                            </select>
                        </div>
                        <div id="year-filter">
                            <b>Year:</b>
                            <select value="all">
                                <option value="all">All</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <div id="language-filter">
                            <b>Language:</b>
                            <select>
                                <option value="all">All</option>
                                <option value="english">English</option>
                                <option value="foreign">Foreign</option>
                                <option value="french">French</option>
                                <option value="japanese">Japanese</option>
                            </select>
                        </div>
                        <div id="order-by-filter">
                            <b>Order by:</b>
                            <select onChange={this.orderByfilterChange} value={this.state.order_by_filter}>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="featured">Featured</option>
                                <option value="seeds">Seeds</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchFilter;
