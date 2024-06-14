import { createStore } from "redux";


function demoReducer(state, action) {
    if (action.type == "add_item") {
        return {
            item: action.item,
            quantity: action.quantity
        };
    }
    return state;
}

let initialState = { item: 10 };

const store = createStore(demoReducer, initialState);
store.subscribe(()=> console.log("funcatiion actiion triiggered"));


const addItem = (quantity, item) => ({
    type: "add_item",
    item: item,
    quantity: quantity ? quantity : 10
})

store.dispatch({
    type: "add_item",
    item: 5,
})
store.dispatch(addItem(10, 5))

console.log(store.getState());
