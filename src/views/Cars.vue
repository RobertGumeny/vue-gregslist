<template>
  <div class="cars container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>
          <u>Cars for sale:</u>
        </h5>
        <div class="row justify-content-center">
          <car v-for="car in cars" :carData="car" :key="car._id"></car>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Car from "../components/Car";
export default {
  name: "cars",
  data() {
    return {};
  },
  computed: {
    cars() {
      return this.$store.state.cars;
    }
  },
  created() {
    this.$store.dispatch("getCars");
  },
  methods: {},
  components: {
    Car
  }
};
</script>


<style scoped>
</style>