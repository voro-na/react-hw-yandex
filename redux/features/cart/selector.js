export const selectorStateModule  = (state) => state.cart?.tickets;

export const selectProductAmount = (state, id) => selectorStateModule(state)[id]?.count || 0;

export const selectorStateSum  = (state) => state.cart?.sum;
