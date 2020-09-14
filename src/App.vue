<template>
  <div id="app">
    <Sammary />
    <StaySafe />
    <NavBar />
  </div>
</template>

<script>
import Sammary from "@/components/Sammary.vue";
import NavBar from "@/components/NavBar.vue";
import StaySafe from "@/components/staySafe.vue";
export default {
  name: "App",
  components: {
    Sammary,
    NavBar,
    StaySafe
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

body {
  /* #edf2f6 */
  background-color: #fdf8f5 !important;
  /* background: rgb(0,168,255);
  background: radial-gradient(circle, rgba(0,168,255,1) 2%, rgba(8,51,179,1) 68%, rgba(0,45,176,1) 89%); */
}

body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */

body {
  -ms-overflow-style: none;
}

/* reseting */

p {
  margin-top: initial !important;
  margin-bottom: initial !important;
}

ul {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
}

/* reseting */

.v-dropdown-container {
  height: 400px;
  overflow-y: scroll;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.header {
  font-size: 70px;
  color: #fff;
}

.v-select-toggle {
  height: 50px;
  font-size: 16px !important;
  align-items: center;
  color: #818991 !important;
  outline: none !important;
  background-color: #fff !important;
}

.v-select-toggle:hover {
  box-shadow: 0 0px 1.7px rgba(0, 0, 0, 0.02), 0 0px 4.1px rgba(0, 0, 0, 0.028),
    0 0px 7.8px rgba(0, 0, 0, 0.035), 0 0px 13.8px rgba(0, 0, 0, 0.042),
    0 0px 25.9px rgba(0, 0, 0, 0.05), 0 0px 62px rgba(0, 0, 0, 0.07);
}

.v-select-toggle:focus {
  box-shadow: 0 0px 1.7px rgba(0, 0, 0, 0.02), 0 0px 4.1px rgba(0, 0, 0, 0.028),
    0 0px 7.8px rgba(0, 0, 0, 0.035), 0 0px 13.8px rgba(0, 0, 0, 0.042),
    0 0px 25.9px rgba(0, 0, 0, 0.05), 0 0px 62px rgba(0, 0, 0, 0.07);
}

.v-dropdown-container ul {
  font-size: 14px !important;
}
</style>
