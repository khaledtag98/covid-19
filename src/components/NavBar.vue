<template>
  <nav class="navbar shadow-lg navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="d-flex justify-content-between w-100">
        <a class="navbar-brand" href="">Navbar</a>
        <div class="live">
          <div class="live-circle d-inline-block"></div><span> Live</span>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.live
{
  display: flex;
  align-items: center;
}
.live-circle
{
  background-color: green;
  width: 10px;
  height: 10px;
  border-radius:50% ;
}
</style>