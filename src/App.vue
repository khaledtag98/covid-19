<template>
  <div id="app">
    <NavBar/>
    <Sammary />
  </div>
</template>

<script>
import Sammary from "./components/Sammary.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    Sammary,
    NavBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body{
  background-color: #edf2f6 !important;
/* background: rgb(0,168,255);
background: radial-gradient(circle, rgba(0,168,255,1) 2%, rgba(8,51,179,1) 68%, rgba(0,45,176,1) 89%); */
}
/* reseting */
p {
    margin-top: initial !important;
    margin-bottom: initial !important;
}
/* reseting */
.v-dropdown-container
{
  height: 400px;
  overflow-y: scroll;
}
#app {
  
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.header
{
  font-size: 70px;
  color: #fff;
}
.v-select-toggle
{
  height: 50px ;
  font-size: 16px !important;
  align-items: center;
  color: #818991 !important;
}
.v-dropdown-container ul{
  font-size: 14px !important;
}
</style>
