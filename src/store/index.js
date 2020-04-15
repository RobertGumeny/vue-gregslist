import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 10000,
});

export default new Vuex.Store({
  state: {
    location: {},
    activeLocation: {},
    cars: [],
    activeCar: {},
    houses: [],
    activeHouse: {},
    jobs: [],
    activeJob: {},
  },
  mutations: {
    // NOTE Location mutations
    setLocation(state, location) {
      state.location = location;
    },
    // NOTE Car mutations
    setCars(state, cars) {
      state.cars = cars;
    },
  },
  actions: {
    // NOTE Location actions
    setLocation({ commit, dispatch }, location) {
      commit("setLocation", location);
    },
    // NOTE Car actions
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars");
        commit("setCars", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
