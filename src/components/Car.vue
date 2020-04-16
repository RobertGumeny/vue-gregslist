<template>
  <div class="car col-2 m-1 d-flex flex-column justify-content-between align-items-center">
    <div>
      <h5 class="make mb-0 font-italic">{{carData.make}}</h5>
      <h6 class="model font-weight-bold">{{carData.model}}</h6>
      <h6 class="price font-weight-bold">${{carData.price}}</h6>
    </div>
    <div class="div">
      <button class="btn btn-sm btn-primary text-white mb-1 mr-1" @click="getDetails()">More Info</button>
      <button class="btn btn-sm btn-danger text-white mb-1" @click="deleteCar()">Delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "car",
  props: ["carData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    getDetails() {
      this.$store.commit("setActiveCar", {});
      this.$router.push({
        name: "CarDetails",
        params: { carId: this.carData._id }
      });
    },
    deleteCar() {
      this.$store.dispatch("deleteCar", this.carData._id);
    }
  },
  components: {}
};
</script>


<style scoped>
.car {
  background-color: #fff;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 12.5rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.car:hover {
  box-shadow: 4px 4px 10px 5px rgba(0, 27, 77, 0.5);
}
.price {
  font-size: small;
  color: rgb(15, 145, 15);
}
</style>