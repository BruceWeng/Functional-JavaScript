// Write a function combineTwoReducers with two reducers with arguments objects state, action and returns an object combining the result of two reducers.
// var state = {name: 'John', age: 26, balance: 500};
// var action = {type: 'BUY PS3': payload: {product: 'PS3', price: 250}}
// combineReducers({addProduct, balanceChange}) // state = {name: 'John', age: 26, balance: 250, products:{PS3: 'PS3'}, addProduct: 'PS3', , balanceChange: '-250'}
function print(input) {
  console.log(input);
}

function addProduct(state, action) {
  let products = {};
  const {product} = action.payload;
  products[product] = product;
  const addProduct = `${product}`;
  return {
    ...state,
    products,
    addProduct
  }
}

function balanceChange(state, action) {
  const balance = state.balance - action.payload.price;
  const balanceChange = `-${balance}`;
  return {
    ...state,
    balance,
    balanceChange
  }
}

function combineReducers(reducers) {
  return function (state, action) {
    return Object.keys(reducers).reduce(function (newState, key) {
      newState = {...newState, ...reducers[key](state, action)};
      return newState;
    }, {});
  };
}

var state = {name: 'John', age: 26, balance: 500};
var action = {type: 'BUY PS3', payload: {product: 'PS3', price: 250}};
// print(addProducts(state, action)); // {name: 'John', age: 26, balance: 500, products:{PS3: 'PS3'}, addProducts: 'PS3'}
// print(balanceChange(state, action)); // {name: 'John', age: 26, balance: 250, balanceChange: '-250'}
const shopping = combineReducers({addProduct, balanceChange});
print(shopping(state, action)); // {name: 'John', age: 26, balance: 250, products:{PS3: 'PS3'}, addProduct: 'PS3', , balanceChange: '-250'}
