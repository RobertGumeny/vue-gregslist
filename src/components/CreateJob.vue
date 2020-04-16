<template>
  <div class="row create-job">
    <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
      <form class="d-inline" @submit.prevent="createJob()">
        <div class="form-group d-inline">
          <label for="company">Company</label>
          <input
            type="text"
            name="company"
            id
            class="form-control"
            v-model="newJob.company"
            placeholder="Enter company..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="jobTitle">Model</label>
          <input
            type="text"
            name="jobTitle"
            required
            class="form-control"
            v-model="newJob.jobTitle"
            placeholder="Enter jobTitle..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="hours">Hours per week</label>
          <input
            type="number"
            name="hours"
            required
            class="form-control"
            v-model="newJob.hours"
            placeholder="Enter hours per week..."
          />
        </div>
        <div class="form-group d-inline">
          <label for="rate">Hourly Rate</label>
          <input
            type="number"
            name="rate"
            required
            class="form-control"
            v-model="newJob.rate"
            placeholder="Enter rate..."
          />
        </div>
        <button class="btn btn-primary m-3">List your job</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "create-job",
  data() {
    return {
      newJob: {}
    };
  },
  computed: {},
  methods: {
    createJob() {
      this.$store.dispatch("createJob", this.newJob);
      this.newJob = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>