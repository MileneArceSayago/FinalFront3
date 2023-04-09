import { useState, useEffect, useReducer } from "react";
import { createContext } from "react";

export const initialState = { 
  theme: localStorage.getItem('tema'), 
  favorites: [] 
  
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

  const getFavs = () => {
    const localData = localStorage.getItem('favs');
    console.log(localStorage.getItem('favs'))
    console.log(localData)
    return localData ? JSON.parse(localData) : [];
  };

  const saveFavs = (fav) => {
    localStorage.setItem("favs", JSON.stringify(fav));
    console.log(fav)
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add_fav': {
        const existsDentist = state.favorites.find((dentist) => dentist.id === action.dentist.id);
        if (existsDentist) {
          return state;
        }
        const newFavsDentists = [...state.favorites, action.dentist];
        saveFavs(newFavsDentists)
        return { ...state, favsDentists: newFavsDentists };
      }
      case 'show_favs': {
        return { ...state, favsDentists: getFavs() };
      }
      case 'change_theme': {
        localStorage.setItem('tema', action.theme);
        return { ...state, theme: action.theme };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [dentists, setDentists] = useState([]);
  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data)
  };

  useEffect(() => {
    getDentists();
    dispatch({ type: "show_favs" });
  }, [])


  return (
    <ContextGlobal.Provider value={{ dentists, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};