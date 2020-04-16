<template>
  <div class="location container-fluid">
    <div class="row">
      <div class="col-3 mx-auto">
        <form @submit.prevent="setLocation()">
          <div class="form-group">
            <div class="input-group">
              <select name id="location-select" class="custom-select" v-model="location">
                <option selected>Choose a city...</option>
                <option value="Boise, ID">Boise, ID</option>
                <option value="Meridian, ID">Meridian, ID</option>
                <option value="McCall, ID">McCall, ID</option>
                <option value="Twin Falls, ID">Twin Falls, ID</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">+</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "LocationSelect",
  data() {
    return {
      location: "Choose a city..."
    };
  },
  computed: {},
  methods: {
    setLocation() {
      this.$store.commit("setLocation", this.location);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>