<template>
  <div class="car col-2 m-1 d-flex flex-column justify-content-between align-items-center">
    <div>
      <h5 class="make mb-0 font-italic">{{carData.make}}</h5>
      <h6 class="model font-weight-bold">{{carData.model}}</h6>
      <h6 class="price font-weight-bold">${{carData.price}}</h6>
    </div>
    <div class="div">
      <button class="btn btn-sm btn-primary text-white mb-1">More Info</button>
      <button class="btn btn-sm btn-danger text-white mb-1">Delete</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "car",
  props: ["carData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.car {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 12.5rem;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.3);
}
.car:hover {
  box-shadow: 4px 4px 10px 5px rgba(0, 27, 77, 0.5);
}
.price {
  font-size: small;
  color: rgb(15, 145, 15);
}
</style>