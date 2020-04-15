<template>
  <div class="container-fluid" id="nav">
    <div class="row mb-0">
      <div class="col-12 text-center">
        <h2>Greg's List</h2>
        <h4>{{ location.location }}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <router-link to="/">Home</router-link>
        <span class="mx-1">|</span>
        <router-link to="/Cars">Cars</router-link>
        <span class="mx-1">|</span>
        <router-link to="/Houses">Houses</router-link>
        <span class="mx-1">|</span>
        <router-link to="/Jobs">Jobs</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {
    location() {
      return this.$store.state.location;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
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