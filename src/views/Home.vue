<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <h4>Welcome to Greg's List!</h4>
        <p>Please let us know where you are browsing:</p>
        <LocationSelect></LocationSelect>
      </div>
    </div>
  </div>
</template>

<script>
import LocationSelect from "../components/LocationSelect";
export default {
  name: "Home",
  components: {
    LocationSelect
  }
};
</script>

<style scoped>
</style>
