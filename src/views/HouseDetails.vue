<template>
  <div class="house-details container-fluid">
    <div class="row">
      <div class="col-6 mx-auto text-center">
        <img :src="house.imgUrl" alt class="img-fluid rounded mb-3" />
        <h3 class="font-italic">{{house.bedrooms}} Bedrooms</h3>
        <h4 class="font-weight-bold">{{house.bathrooms}} Bathrooms</h4>
        <h4 class="font-weight-bold">{{house.levels}} Floors</h4>
        <h5>{{house.year}}</h5>
        <h5 class="price mb-4">${{house.price}}</h5>
        <span id="nav">
          <router-link to="/Houses">
            <button class="btn btn-outline-dark">Back to Houses</button>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "house-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getHouse", this.$route.params.houseId);
  },
  computed: {
    house() {
      return this.$store.state.activeHouse;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.price {
  color: rgb(15, 145, 15);
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #24313f;
}

#nav a.router-link-exact-active {
  color: #4f8ddf;
}
img {
  height: 25%;
}
</style>