const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


const BUY_FOOTBALL = "BUY_FOOTBALL"
const RESTOCK_FOOTBALL = "RESTOCK_FOOTBALL";
const BUY_JERSEY = "BUY_JERSEY";
const RESTOCK_JERSEY = "RESTOCK_JERSEY";

function buyFootball(qty = 1){
    return {
        type: BUY_FOOTBALL,
        quantity: qty,
    }
}

function restockFootball(qty = 1){
    return {
        type: RESTOCK_FOOTBALL,
        quantity: qty,
    }
};

function buyJersey(qty = 1){
    return {
        type: BUY_JERSEY,
        quantity: qty
    }
}


function restockJersey(qty = 1){
    return {
        type: RESTOCK_JERSEY,
        quantity: qty
    }
}

const initialState = {
    numOfFootball: 10,
    numOfJersey: 12,
}

const footballReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_FOOTBALL:
            return {
                ...state,
                numOfFootball: state.numOfFootball - action.quantity,
            }

        case RESTOCK_FOOTBALL:
            return {
                ...state,
                numOfFootball: state.numOfFootball + action.quantity,
            }
        
        default:
            return state;
    }
};



const jerseyReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_JERSEY:
            return {
                ...state,
                numOfJersey: state.numOfJersey - action.quantity,
            }

        case RESTOCK_JERSEY:
            return {
                ...state,
                 numOfJersey: state.numOfJersey + action.quantity,
            }
        
        default:
            return state;
    }
};

const multipleReducers = combineReducers({
    football: footballReducer,
    jersey: jerseyReducer, 
})

const store = createStore(multipleReducers); 

console.log('INITIAL STATE: ', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('UPDATED STATE: ', store.getState());
});

store.dispatch(buyFootball(5));
store.dispatch(restockFootball(100));

store.dispatch(buyJersey(5));
store.dispatch(restockJersey(10));


unsubscribe();





 

