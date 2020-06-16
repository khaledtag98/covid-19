<template>
  <nav class="navbar shadow-lg test navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="d-flex justify-content-between w-100">
        <a class="navbar-brand" href="">Co-Veed</a>
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
.test{
  border-bottom-right-radius:80% ;
  border-bottom-left-radius:80% ;
  height: 90px;
}
</style>