<template>
  <nav class="navbar shadow-lg w-25 test navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="d-flex justify-content-between w-100">
        <div class="d-flex">
          <img src="/img/logo-corona.svg" class="img-fluid-mine" alt />
          <p class="align-self-center ml-1">Stay_Safe</p>
        </div>

        <div class="live">
          <div class="live-circle d-inline-block mr-1"></div>
          <span class="text-muted">Live</span>
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
.live {
  display: flex;
  align-items: center;
}
.live span {
  font-size: 16px;
  font-weight: 500;
}
.live-circle {
  background-color: rgb(50, 228, 205);
  width: 10px;
  height: 10px;

  border-radius: 50%;
}
.test {
  /* border-bottom-right-radius: 80%;
  border-bottom-left-radius: 80%; */
  height: 60px;
  
  z-index: 10000;
}
.img-fluid-mine {
  width: 55px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1)
}
p{
  font-size: 13px;
  font-weight: 600;
  color:#ff5e3a;
}
</style>