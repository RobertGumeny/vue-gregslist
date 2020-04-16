<template>
  <div class="row create-car">
    <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
      <form class="d-inline" @submit.prevent="createCar()">
        <div class="form-group d-inline">
          <label for="make">Make</label>
          <input
            type="text"
            name="make"
            id
            class="form-control"
            v-model="newCar.make"
            placeholder="Enter make..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="model">Model</label>
          <input
            type="text"
            name="model"
            required
            class="form-control"
            v-model="newCar.model"
            placeholder="Enter model..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="year">Year</label>
          <input
            type="number"
            name="year"
            required
            class="form-control"
            v-model="newCar.year"
            placeholder="Enter year..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="price">Price</label>
          <input
            type="number"
            name="price"
            required
            class="form-control"
            v-model="newCar.price"
            placeholder="Enter price..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="img">Image</label>
          <input
            type="text"
            name="img"
            required
            class="form-control"
            v-model="newCar.imgUrl"
            placeholder="Enter image URL..."
          />
        </div>
        <button class="btn btn-primary m-3">List your car</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-car",
  data() {
    return {
      newCar: {}
    };
  },
  computed: {},
  methods: {
    createCar() {
      this.$store.dispatch("createCar", this.newCar);
      this.newCar = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>