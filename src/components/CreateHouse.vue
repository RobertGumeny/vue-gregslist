<template>
  <div class="row create-house">
    <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
      <form class="d-inline" @submit.prevent="createHouse()">
        <div class="form-group d-inline">
          <label for="make">Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            id
            class="form-control"
            v-model="newHouse.bedrooms"
            placeholder="Enter make..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="bathrooms">Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            required
            class="form-control"
            v-model="newHouse.bathrooms"
            placeholder="Enter bathrooms..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="levels">Floors</label>
          <input
            type="levels"
            name="bathrooms"
            required
            class="form-control"
            v-model="newHouse.levels"
            placeholder="Enter floors..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="year">Year</label>
          <input
            type="number"
            name="year"
            required
            class="form-control"
            v-model="newHouse.year"
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
            v-model="newHouse.price"
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
            v-model="newHouse.imgUrl"
            placeholder="Enter image URL..."
          />
        </div>
        <button class="btn btn-primary m-3">List your house</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-house",
  data() {
    return {
      newHouse: {}
    };
  },
  computed: {},
  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
      this.newHouse = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>