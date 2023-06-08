import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";


let initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload],
            }
        case REMOVE_FAV:
            let id = parseInt(payload);
            let rest = state.myFavorites.filter((char) => char.id !== id);
            return {
                ...state,
                myFavorites: rest
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((fav) => fav.gender === payload),
            }
        case ORDER:
            let copiaChars = [...state.allCharacters];
            if (payload === 'A') {
                copiaChars.sort((a, b) => a.id - b.id);
            } else if (payload === 'D') {
                copiaChars.sort((a, b) => b.id - a.id);
            }

            return {
                ...state,
                myFavorites: copiaChars,
            }
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters,
            }
        default: return state;
    }
}

export default reducer;