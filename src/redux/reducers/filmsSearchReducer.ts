import { async } from "q";
import { Dispatch, Reducer } from 'redux';

const FILMSSEARCH_SEARCH = 'FILMSSEARCH_SEARCH';
const HTTP_GET_FILMS = 'HTTP_GET_FILMS';
const HTTP_GET_FILMS_SUCCESS = 'HTTP_GET_FILMS_SUCCESS';

const INITIAL_STATE : any = {
    searchInput: null,
    isLoading: false,
    films: []
}

export default function reducer(state = INITIAL_STATE, action: any){
    switch(action.type) {
    
        case HTTP_GET_FILMS:
            return {
                ...state,
                isLoading: true
            }

        case HTTP_GET_FILMS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                films: action.payload.results
            }
        default:
            return state;
    }
}

export const getFilms = (query: string) => {
    return async (dispatch: Dispatch) => {
      dispatch({ type: HTTP_GET_FILMS, payload: null });
  
      try {

        let inputValue = (<HTMLInputElement>document.getElementById("inputTextSearch")).value; //como faz isso no React/Redux?
        const url = "https://swapi.co/api/films/?search=" + inputValue;
  
        const response = await fetch(url);
        const json = await response.json();
  
        dispatch({ type: HTTP_GET_FILMS_SUCCESS, payload: json });

      } catch (error) {
          console.log(error);
        dispatch({ type: 'TESTE', payload: error });
      }
    };
  };
  
