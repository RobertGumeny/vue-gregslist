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
    setHouses(state, houses) {
      state.houses = houses;
    },
    setActiveHouse(state, house) {
      state.activeHouse = house;
    },
    // NOTE Job mutations
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setActiveJob(state, job) {
      state.activeJob = job;
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
    async getHouses({ commit, dispatch }) {
      try {
        let res = await _api.get("houses");
        commit("setHouses", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getHouse({ commit, dispatch }, houseId) {
      try {
        let res = await _api.get(`houses/${houseId}`);
        commit("setActiveHouse", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createHouse({ commit, dispatch }, newHouse) {
      try {
        let res = await _api.post("houses", newHouse);
        dispatch("getHouses");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteHouse({ commit, dispatch }, houseId) {
      try {
        await _api.delete("houses/" + houseId);
        dispatch("getHouses");
      } catch (error) {
        console.error(error);
      }
    },

    // NOTE Job actions
    async getJobs({ commit, dispatch }) {
      try {
        let res = await _api.get("jobs");
        commit("setJobs", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getJob({ commit, dispatch }, jobId) {
      try {
        let res = await _api.get(`jobs/${jobId}`);
        commit("setActiveJob", res.data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async createJob({ commit, dispatch }, newJob) {
      try {
        let res = await _api.post("jobs", newJob);
        dispatch("getJobs");
      } catch (error) {
        console.error(error);
      }
    },
    async deleteJob({ commit, dispatch }, jobId) {
      try {
        await _api.delete("jobs/" + jobId);
        dispatch("getJobs");
      } catch (error) {
        console.error(error);
      }
    },
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
