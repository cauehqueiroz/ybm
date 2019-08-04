import React from 'react';
import { Link } from 'react-router-dom' 
// import axios from 'axios'

class Home extends React.Component {

    bannerMovies = [];

    constructor() {
        super();
        this.state = {
            sortByDate: false,
            showType: 'movie', // movie or series
            movies: [
                {
                    "Position": 1,
                    "Title": "Spider-Man: Far from Home",
                    "Year": "2019",
                    "imdbID": "tt6320628",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
                },
                {
                    "Position": 2,
                    "Title": "Avengers: Endgame",
                    "Year": "2019",
                    "imdbID": "tt4154796",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 3,
                    "Title": "Star Wars: Episode IV - A New Hope",
                    "Year": "1977",
                    "imdbID": "tt0076759",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 4,
                    "Title": "John Wick",
                    "Year": "2014",
                    "imdbID": "tt2911666",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
                },
                {
                    "Position": 5,
                    "Title": "Toy Story",
                    "Year": "1995",
                    "imdbID": "tt0114709",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
                },
                {
                    "Position": 6,
                    "Title": "The Lord of the Rings: The Fellowship of the Ring",
                    "Year": "2001",
                    "imdbID": "tt0120737",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
                },
                {
                    "Position": 7,
                    "Title": "The Lord of the Rings: The Return of the King",
                    "Year": "2003",
                    "imdbID": "tt0167260",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 8,
                    "Title": "The Lord of the Rings: The Two Towers",
                    "Year": "2002",
                    "imdbID": "tt0167261",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                },
                {
                    "Position": 9,
                    "Title": "The Simpsons",
                    "Year": "1989",
                    "imdbID": "tt0096697",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
                },
                {
                    "Position": 10,
                    "Title": "Spider-Man: Into the Spider-Verse",
                    "Year": "2018",
                    "imdbID": "tt4633694",
                    "Type": "movie",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
                },
                {
                    "Position": 11,
                    "Title": "The Office",
                    "Year": "2005",
                    "imdbID": "tt0386676",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_SX300.jpg"
                },
                {
                    "Position": 12,
                    "Title": "How I Met Your Mother",
                    "Year": "2005",
                    "imdbID": "tt0460649",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
                },
                {
                    "Position": 13,
                    "Title": "The Flash",
                    "Year": "2014",
                    "imdbID": "tt3107288",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI1MDAwNDM4OV5BMl5BanBnXkFtZTgwNjUwNDIxNjM@._V1_SX300.jpg"
                },
                {
                    "Position": 14,
                    "Title": "Dark",
                    "Year": "2017",
                    "imdbID": "tt5753856",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMmIyZjA3NGUtYjlhNS00ZDlkLWI0MDgtMDc2YWNjNGMwYWZhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
                },
                {
                    "Position": 15,
                    "Title": "Daredevil",
                    "Year": "2015",
                    "imdbID": "tt3322312",
                    "Type": "series",
                    "Favorite": false,
                    "Poster": "https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_SX300.jpg"
                },
            ]
        }

        this.handleChangeShowType = this.handleChangeShowType.bind(this);
        this.handleChangeSortByDate = this.handleChangeSortByDate.bind(this);
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
        this.getList = this.getList.bind(this);

        this.bannerMovies = [];
        let topMovie = this.getTop('movie');
        if(topMovie) {
            this.bannerMovies.push(topMovie);
        }
        let topSeries = this.getTop('series');
        if(topSeries) {
            this.bannerMovies.push(topSeries);
        }
    }

    componentDidMount() {
    }

    getTop(type = 'series'){
        return this.state.movies.find(movie => movie.Type === type);
    }

    getBannerMovie(topMovie, i) {
        let topMovieUrl = "/details/" + topMovie.imdbID;
        return (
            <div key={topMovie.imdbID} className={"carousel-item " + (i === 0 ? "active" : "") }>
            <Link className="nav-link" to={topMovieUrl}>
                <h5>#1 { topMovie.Type } - { topMovie.Title }</h5>
                <img className="img-responsive " src={topMovie.Poster} alt="First slide"/>
            </Link>
        </div>);
    }

    getList(movie, i) {
        let topMovieUrl = "/details/" + movie.imdbID;
        return (
            <li key={movie.imdbID} className="list-group-item">
                <Link to={topMovieUrl}>#{ movie.Position } - {movie.Title}</Link> ({ movie.Year})
                <i className={"fa fa-heart ml-3 " + (movie.Favorite ? 'text-danger' : 'text-secondary')} onClick={(e) => this.handleClickFavorite(movie)}></i>
            </li>
        );
    }

    render() {
                
        let banner = "";
        if(this.bannerMovies.length > 0) {
            banner = (
                <section className="jumbotron text-center bg-dark">
                    <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">
                            { this.bannerMovies.map(this.getBannerMovie)}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </section>
            );
        }

        let MovieList = this.state.sortByDate ? this.getMovieOrderByDate(this.state.movies) : this.getMovieOrderByPosition(this.state.movies);
        MovieList = MovieList.filter(movie => movie.Type === this.state.showType).map(this.getList);

        return (
        <div>
        { banner }
        <section>
            <div className="row">
                <div className="col">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="sortByDate"
                        checked={this.state.sortByDate}
                        onChange={this.handleChangeSortByDate}
                        />
                        <label className="form-check-label" htmlFor="sortByDate">Sort by Date</label>
                    </div>
                </div>
                <div className="col">
                    <div className="">
                        <label className="label">
                            Show: 
                        </label>
                        <br/>
                        <div className="">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="showType" id="radioMovies" value="movie"
                                checked={this.state.showType === "movie"}
                                onChange={this.handleChangeShowType}
                                />
                                <label className="form-check-label" htmlFor="radioMovies">Movies</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="showType" id="radioSeries" value="series" 
                                checked={this.state.showType === "series"}
                                onChange={this.handleChangeShowType}
                                />
                                <label className="form-check-label" htmlFor="radioSeries">Series</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Top {this.state.showType === 'movie' ? 'Movies' : 'Series'}</h2>
                    <ul className="list-group">
                    { MovieList}
                    </ul>
                </div>
                <div className="col">
                    
                </div>
            </div>
        </section>
        </div>
        )
    }

    getMovieOrderByDate(movies) {
        movies.sort(function (a, b) {
            if (a.Year > b.Year) {
              return 1;
            }
            if (a.Year < b.Year) {
              return -1;
            }
            // a must be equal to b
            return 0;
        });
        return movies;
    }

    getMovieOrderByPosition(movies) {
        movies.sort(function (a, b) {
            if (a.Position > b.Position) {
              return 1;
            }
            if (a.Position < b.Position) {
              return -1;
            }
            // a must be equal to b
            return 0;
        });
        return movies;
    }

    handleClickFavorite(movieClicked) {
        let moviesState = this.state.movies;
        let movieFound = moviesState.find(movie => movie.imdbID === movieClicked.imdbID);
        if(movieFound !== undefined) {
            movieFound.Favorite = !movieFound.Favorite;
            this.setState(
                state => ({
                    movies: moviesState
                  })
            );
        }
    }

    handleChangeShowType(event) {
        this.setState({
            showType: event.target.value
        });
    }

    handleChangeSortByDate(event) {
        this.setState({
            sortByDate: event.target.checked
        });
    }
}

export default Home;