<template>
  <section class="hero">
    <p class="hero-head text-center mt-5">
      Livid-<span>19</span>
    </p>
    <p class="hero-slogan text-center mt-1">
      <span>Real Time</span> Update
    </p>
    <p class="hero-info text-center mt-4 text-muted">
      <span v-text="totalCases"></span> person around the
      <span>world</span> have been infected with corona virus.
    </p>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap");
.hero-head {
  font-size: 60px;
  color: #ff5e3a;
  font-family: "Noto Sans JP", sans-serif;
}
.hero-head span {
  color: black;
}
.hero-slogan {
  font-size: 18px;
  color: #6c757d;
}
.hero-slogan span {
  position: relative;
  background-color: rgb(50, 228, 205);
  font-size: 15px;
  color: white;
  padding: 4px 9px;
  border-radius: 20px;
  animation: live 1s infinite;
  cursor: default;
}

@keyframes live {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.15);
  }

  100% {
    box-shadow: 0 0 0 9px rgba(0, 0, 0, 0);
  }
}
.hero-info {
  font-family: "Noto Sans JP", sans-serif;
}
.hero-info span {
  font-family: "Open Sans", sans-serif;
  color: #ff5e3a;
  font-weight: 500;
}
</style>

<script>
export default {
  props: ["totalCases"]
};
</script>