import React from 'react';
import { Link } from 'react-router-dom' 
import axios from 'axios'

class MovieList extends React.Component {

    constructor(props) {
        super();
        this.state = {
            sortByDate: false,
            showType: 'movie', // movie or series
            details: undefined, // details
            movies: props.movies
        }

        this.handleChangeShowType = this.handleChangeShowType.bind(this);
        this.handleChangeSortByDate = this.handleChangeSortByDate.bind(this);
        this.handleClickFavorite = this.handleClickFavorite.bind(this);
        this.handleClickDetails = this.handleClickDetails.bind(this);
        this.getList = this.getList.bind(this);
    }

    componentDidMount() {
    }

    getList(movie, i) {
        let topMovieUrl = "/details/" + movie.imdbID;
        let details = this.state.details;
        return (
            <li key={movie.imdbID} className="list-group-item">
                <Link to={topMovieUrl}>#{ movie.Position } - {movie.Title}</Link> ({ movie.Year})
                <i className={"fa fa-heart ml-3 " + (movie.Favorite ? 'text-danger' : 'text-secondary')} onClick={(e) => this.handleClickFavorite(movie)}></i>
                <i className={"fa fa-info-circle ml-3 " + (details !== undefined && movie.imdbID === details.imdbID ? 'text-success' : 'text-secondary')} onClick={(e) => this.handleClickDetails(movie)}></i>
            </li>
        );
    }

    setDetails(details) {
        this.setState({details: details});
    }

    fetchInfo(imdbID) {
        let self = this;
        axios.get('http://www.omdbapi.com', {
            params: {
                apikey: 'f978b7fd',
                plot: 'short',
                i: imdbID
            }
          })
          .then(function (response) {
              self.setDetails(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }

    render() {
        let MovieList = this.state.sortByDate ? this.getMovieOrderByDate(this.state.movies) : this.getMovieOrderByPosition(this.state.movies);
        MovieList = MovieList.filter(movie => movie.Type === this.state.showType).map(this.getList);
        
        let MovieDetails = "";
        if(this.state.details !== undefined) {
            MovieDetails = (
                <div>
                    <h2 className="text-info">Movie Details</h2>
                    <h3>{ this.state.details.Title } <small className="text-secondary">({ this.state.details.Type })</small></h3>
                    <div>
                        <h4>Overview</h4>
                        <div>{ this.state.details.Plot }</div>
                        <div><strong>Runtime: </strong>{this.state.details.Runtime }</div>
                        <div><strong>Rating:</strong> {this.state.details.imdbRating }</div>
                    </div>
                </div>
            );
        }

        return (
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
                    { MovieDetails }
                </div>
            </div>
        </section>
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

    handleClickDetails(movieClicked) {
        this.fetchInfo(movieClicked.imdbID);
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

export default MovieList;