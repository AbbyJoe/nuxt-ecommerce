export const state = () => ({
    cart: [],
    allProducts: [],
    singleProduct: '',
    products: [],
    categories: []
});
  
  export const getters = {
    prod: (state) => state.products,
    cartCount: state => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.quantity, 0);
    },
    cartTotal: state => {
      if (!state.cart.length) return 0;
      return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
    },
    cartItems: state => {
      if (!state.cart.length) return [];
      return state.cart.map(item => {
        return {
          id: item.id,
          quantity: item.quantity
        };
      });
    },
  };
  
  export const mutations = {
    SET_ALL_PRODUCTS(state, allProducts) {
        state.allProducts = allProducts
    },
    SET_PRODUCTS(state, singleProduct) {
        state.singleProduct = singleProduct
    },
    GET_PRODUCTS(state, products) {
        state.products = products
    },
    GET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    clearCart: state => {
      //this clears the cart
      (state.cart = [])
    },
    addToCart: (state, payload) => {
      let itemfound = state.cart.find(el => el.id === payload.id);
      itemfound
        ? (itemfound.quantity += payload.quantity)
        : state.cart.push(payload)
    },
    addOneToCart: (state, payload) => {
      let itemfound = state.cart.find(el => el.id === payload.id)
      itemfound ? itemfound.quantity++ : state.cart.push(payload)
    },
    removeOneFromCart: (state, payload) => {
      let index = state.cart.findIndex(el => el.id === payload.id)
      state.cart[index].quantity
        ? state.cart[index].quantity--
        : state.cart.splice(index, 1)
    },
    removeAllFromCart: (state, payload) => {
      state.cart = state.cart.filter(el => el.id !== payload.id)
    }
  };
  
  export const actions = {
    //get all products
    async getAllproducts({ commit }) {
        const response = await this.$axios.$get(`products?limit=6`)
        commit('SET_ALL_PRODUCTS', response)
        return response
    },
    //get products No limit
    async getProducts({ commit }) {
      const response = await this.$axios.$get(`products`)
      commit('GET_PRODUCTS', response)
      return response
  },
    //get single product
    async getSingleProduct({commit}, id) {
        const response = await this.$axios.$get(`products/${id}`)
        commit('SET_PRODUCTS', response)
        return response
    },
    //GET ALL CATEGORIES
    async getCategory({commit}) {
      const response = await this.$axios.$get(`products/categories`)
      commit('GET_CATEGORIES', response)
      return response
  }
  };