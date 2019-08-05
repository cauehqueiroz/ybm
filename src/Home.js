import React from 'react';
import { Link } from 'react-router-dom' 
import MovieList from './MovieList.js';

class Home extends React.Component {

    bannerMovies = [];

    constructor(props) {
        super();
        this.state = {
            movies: props.movies
        }

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
                <h4 className="text-light">#1 { topMovie.Type } - { topMovie.Title }</h4>
                <img className="img-responsive " src={topMovie.Poster} alt="First slide"/>
            </Link>
        </div>);
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

        let MovieDetails = <MovieList movies={this.state.movies} />;

        return (
        <div>
            { banner }
            { MovieDetails }
        </div>
        )
    }

}

export default Home;