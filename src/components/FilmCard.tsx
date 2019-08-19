import React from 'react';

interface IFilm {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
}

export default class FilmCard extends React.Component<IFilm> {

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.director}</h6>
                    
                </div>
                <div className="card-footer text-muted">
                    <a href="#" className="card-link">Saiba mais...</a>
                </div>
            </div>
        );
    }

}