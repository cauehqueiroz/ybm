
import React from 'react';
import axios from 'axios'

class Details extends React.Component {
    constructor() {
        super();

        this.state = {
            details: undefined
        };
    }
    
    componentDidMount() {
        this.fetchInfo(this.props.match.params.imdbID);
    }

    renderRating(rating) {
        return <li key={rating.Source} className="list-group-item">{ rating.Value } @ { rating.Source }</li>;
    }
    render() {
        if(this.state.details !== undefined) {
            let ratings = this.state.details.Ratings.length > 0 ? (<div><h3>Ratings</h3><ul className="list-group">{ this.state.details.Ratings.map(this.renderRating)}</ul></div>)
             : [];
            return (
            <div>
                <h1>{ this.state.details.Title } <small className="text-secondary">({ this.state.details.Type })</small></h1>
                <div>
                    <img className="img-responsive float-left mr-3" src={ this.state.details.Poster } alt=""/>
                    <h3>Overview</h3>
                    <div>{ this.state.details.Plot }</div>
                    <div><strong>Runtime: </strong>{this.state.details.Runtime }</div>
                    <div><strong>Cast:</strong> {this.state.details.Actors }</div>
                </div>
                { ratings }
            </div>
            )
        }else {
            return <div>Loading, please wait a sec.</div>
        }
    };

    setDetails(details) {
        this.setState({details: details});
    }

    fetchInfo(imdbID) {
        let self = this;
        axios.get('http://www.omdbapi.com', {
            params: {
                apikey: 'f978b7fd',
                plot: 'full',
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
}

export default Details;