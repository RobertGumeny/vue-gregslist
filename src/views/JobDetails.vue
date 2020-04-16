<template>
  <div class="job-details container-fluid">
    <div class="row">
      <div class="col-6 mx-auto text-center">
        <h3 class="font-italic">{{job.company}}</h3>
        <h4 class="font-weight-bold">{{job.jobTitle}}</h4>
        <h5>{{job.hours}}</h5>
        <h5 class="price mb-4">${{job.rate}}</h5>
        <span id="nav">
          <router-link to="/Jobs">
            <button class="btn btn-outline-dark">Back to Jobs</button>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "job-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getJob", this.$route.params.jobId);
  },
  computed: {
    job() {
      return this.$store.state.activeJob;
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