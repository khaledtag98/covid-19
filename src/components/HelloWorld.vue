<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>country name : Egypt</h1>
          <h2>cases : 1980</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted:function(){
    // https://corona.lmao.ninja/v2/countries?yesterday&sort
    

    axios.get('https://2019ncov.asia/api/country_region')
    .then(Response => console.log(Response));
  }
};
</script>

<style scoped></style>
