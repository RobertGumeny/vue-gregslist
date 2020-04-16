<template>
  <div class="job col-2 m-1 d-flex flex-column justify-content-between align-items-center">
    <div>
      <h5 class="company mb-0 font-italic">{{jobData.company}}</h5>
      <h6 class="title font-weight-bold">{{jobData.jobTitle}}</h6>
      <h6 class="rate font-weight-bold">${{jobData.rate}}</h6>
    </div>
    <div class="div">
      <button class="btn btn-sm btn-primary text-white mb-1 mr-1" @click="getDetails()">More Info</button>
      <button class="btn btn-sm btn-danger text-white mb-1" @click="deleteJob()">Delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "job",
  props: ["jobData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    getDetails() {
      this.$store.commit("setActiveJob", {});
      this.$router.push({
        name: "JobDetails",
        params: { jobId: this.jobData._id }
      });
    },
    deleteJob() {
      this.$store.dispatch("deleteJob", this.jobData._id);
    }
  },
  components: {}
};
</script>


<style scoped>
.job {
  background-color: #fff;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 12.5rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.job:hover {
  box-shadow: 4px 4px 10px 5px rgba(0, 27, 77, 0.5);
}
.rate {
  font-size: small;
  color: rgb(15, 145, 15);
}
</style>