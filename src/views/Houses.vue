<template>
  <div class="houses container-fluid">
    <div class="row">
      <div class="col-12">
        <h5>
          <u>List a house:</u>
        </h5>
        <CreateHouse></CreateHouse>
      </div>
      <div class="col">
        <h5>
          <u>Houses for sale:</u>
        </h5>
        <div class="row justify-content-center">
          <house v-for="house in houses" :houseData="house" :key="house._id"></house>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import House from "../components/House";
import CreateHouse from "../components/CreateHouse";
export default {
  name: "houses",
  data() {
    return {};
  },
  computed: {
    houses() {
      return this.$store.state.houses;
    }
  },
  created() {
    this.$store.dispatch("getHouses");
  },
  methods: {},
  components: {
    House,
    CreateHouse
  }
};
</script>


<style scoped>
.houses {
  height: 100%;
}
</style>