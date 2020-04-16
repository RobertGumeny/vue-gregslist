<template>
  <div class="car-details container-fluid">
    <div class="row">
      <div class="col-6 mx-auto text-center">
        <img :src="car.imgUrl" alt class="img-fluid rounded mb-3" />
        <h3 class="font-italic">{{car.make}}</h3>
        <h4 class="font-weight-bold">{{car.model}}</h4>
        <h5>{{car.year}}</h5>
        <h5 class="price mb-4">${{car.price}}</h5>
        <span id="nav">
          <router-link to="/Cars">
            <button class="btn btn-outline-dark">Back to Cars</button>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "car-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getCar", this.$route.params.carId);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
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
</style>