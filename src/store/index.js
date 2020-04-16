import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 10000,
});

let store = new Vuex.Store({
  state: {
    location: "",
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
      localStorage.setItem("location", location);
    },
    // NOTE Car mutations
    setCars(state, cars) {
      state.cars = cars;
    },
    setActiveCar(state, car) {
      state.activeCar = car;
    },
    //NOTE House mutations
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
    async getCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.get(`cars/${carId}`);
        commit("setActiveCar", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createCar({ commit, dispatch }, newCar) {
      try {
        let res = await _api.post("cars", newCar);
        dispatch("getCars");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch }, carId) {
      try {
        await _api.delete("cars/" + carId);
        dispatch("getCars");
      } catch (error) {
        console.error(error);
      }
    },
    // NOTE House actions
  },
  modules: {},
});

function loadLocation() {
  let location = localStorage.getItem("location");
  store.commit("setLocation", location || "Please select a city...");
}
loadLocation();

export default store;

window.navigator.geolocation.getCurrentPosition((position) =>
  console.log(position)
);
