import * as Redux from 'redux';
import * as ReduxDevtools from 'redux-devtools-extension';
import filmsSearchReducer from './reducers/filmsSearchReducer';
import thunk from 'redux-thunk';


// Gera nosso state através de nossos reducers
const state = Redux.combineReducers({
    filmsSearchReducer: filmsSearchReducer //serve pra exportar para poder utilizar nos demais modulos!
});

export type IAppState = ReturnType<typeof state>;

// Gera nossa store
const store = Redux.createStore(
  state,
  ReduxDevtools.composeWithDevTools(Redux.applyMiddleware(thunk)) // enhancers // para usar no navegador
);

// exporta nossa store para ser utilizado no arquivo Root.tsx
export default store;