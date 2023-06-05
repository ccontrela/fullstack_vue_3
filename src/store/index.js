import Vuex from 'vuex';
import product from './modules/product';
import cart from './modules/cart';

export default new Vuex.Store({
  modules: {
    product,
    cart
  }
});
