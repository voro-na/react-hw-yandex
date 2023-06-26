import {createSlice} from "@reduxjs/toolkit";
type stateType ={
    sum: number,
    tickets: any
}
type incrementPayload = {
    id:string,
    title: string,
    posterUrl: string,
    genre: string
}
type payloadType ={payload : incrementPayload}
const initialState = {sum: 0, tickets: {}};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state: stateType, {payload}: payloadType) => {
            const {id, title, posterUrl, genre} = {...payload}
            const count = state.tickets[id]?.count || 0;
            state.sum ++;
            state.tickets[id] = {title, posterUrl, genre, count: count + 1};
        },
        decrement: (state: stateType, {payload}) => {
            const count = state.tickets[payload]?.count;


            if (!count) {
                return;
            }
            state.sum --;
            if (state.tickets[payload]?.count === 1) {
                delete state.tickets[payload];
                return;
            }

            state.tickets[payload].count = count - 1;
        },
        reset: (state:stateType, {payload}) => {
            state.sum -= state.tickets[payload].count
            delete state.tickets[payload]
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
