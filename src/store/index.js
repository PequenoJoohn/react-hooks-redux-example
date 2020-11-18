import { createStore } from 'redux';

// Valores iniciais do estado
const INITIAL_STATE = {
    data: [
        'React Native',
        'React JS',
        'React'
    ],
}

// Ações que são disponibilizadas para todo o projeto
function courses(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_COURSE': 
        return {...state, data: [...state.data, action.title]}; // Retorna todo estado inicial e adiciona o novo estado
        default:
            return state;
    }
}

const store = createStore(courses);

export default store;