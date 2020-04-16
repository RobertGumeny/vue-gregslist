<template>
  <div class="jobs container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>
          <u>List a job:</u>
        </h5>
        <CreateJob></CreateJob>
      </div>
      <div class="col">
        <h5>
          <u>Jobs for sale:</u>
        </h5>
        <div class="row justify-content-center">
          <job v-for="job in jobs" :jobData="job" :key="job._id"></job>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Job from "../components/Job";
import CreateJob from "../components/CreateJob";
export default {
  name: "jobs",
  data() {
    return {};
  },
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },
  created() {
    this.$store.dispatch("getJobs");
  },
  methods: {},
  components: {
    Job,
    CreateJob
  }
};
</script>


<style scoped>
.jobs {
  height: 100%;
}
</style>