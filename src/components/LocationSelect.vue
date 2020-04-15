<template>
  <div class="location container-fluid">
    <div class="row">
      <!-- Location select -->
      <div class="col-3 mx-auto">
        <div class="form" @submit.prevent="setLocation()">
          <div class="form-group">
            <div class="input-group">
              <select name id="location-select" class="custom-select" v-model="location">
                <option selected>Choose a city...</option>
                <option value="boise">Boise, ID</option>
                <option value="meridian">Meridian, ID</option>
                <option value="mccall">McCall, ID</option>
                <option value="twinfalls">Twin Falls, ID</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "LocationSelect",
  data() {
    return {
      location: {}
    };
  },
  computed: {},
  methods: {
    setLocation() {
      console.log(this.location);
      this.$store.dispatch("setLocation", this.location);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>