import React from 'react';
import * as ReactRedux from 'react-redux';
import * as filmsSearchActions from '../redux/reducers/filmsSearchReducer';

import FilmCard from './FilmCard';

const FilmsSearch = (props : any) => {
    if(props.isLoading) {
        console.log("aew");
    }

    return (
        <>
        <div className="row">
             <div className="col-sm-6 offset-sm-3 text-center">
                <h1 className="display-4 text-center mt-2">Guia de Filmes</h1>
                <form className="form-inline justify-content-center mt-2" onSubmit={(e) => {e.preventDefault()}}>
                    <input id="inputTextSearch" className="form-control mr-sm-2" type="search" placeholder="Digite o filme que deseja buscar.." aria-label="Search"/>
                    <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={props.dispatchGetFilms}>Pesquisar</button>
                </form>
            </div>
        </div>
        
        {props.filmsSearchReducer.isLoading ? (
            <div className="progress mt-4">
                <div className="progress-bar progress-bar-striped progress-bar-animated" 
                aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: "100%"}}></div>
            </div>
            ) : null} 
        
        <div className="row mt-4">
            <div className="col-sm-12 card-deck">
                {props.filmsSearchReducer.films.map((film : any, i: number) => {
                    return  <FilmCard 
                        key={i}
                        title={film.title} 
                        episode_id={film.episode_id} 
                        opening_crawl={film.opening_crawl}
                        director={film.director}/>
                })}
            </div>
        </div>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        filmsSearchReducer: state.filmsSearchReducer
    }
  }
  
  const mapDispatchToProps = {
      dispatchGetFilms: filmsSearchActions.getFilms,
  }
  
const connectTo = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectTo(FilmsSearch);

