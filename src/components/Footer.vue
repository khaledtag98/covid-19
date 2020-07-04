<template>
  <section id="footer" class="d-none d-sm-block">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content">
              <img src="" alt="">
            <p class="header text-center">
              Livid-
              <span>19</span>
            </p>
            <p class="created-by  text-center">Created by: Khaled Tag</p>
            <p class="hire me  text-center">Hire me</p>
            <div class="icons  text-center">
              <fa-icon :icon="['fab','facebook-square']" />
              <a href=""></a>
              <fa-icon :icon="['fab','linkedin']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#footer
{
    background-color: #fff;
}
.header {
  font-size: 16px;
  color: #ff5e3a;
  font-family: "Noto Sans JP", sans-serif;
}
.header span {
  color: black;
}
</style>
<script>
export default {};
</script>