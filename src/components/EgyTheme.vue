<template>
  <div class="hello my-lg-5">
    <div class="container">
      <div class="row mt-5">
        <div class="header">
          <h2 class="mb-3">
            {{header}}
          </h2>
        </div>
        <div class="info-cart">
          <div class="inner-cart m-auto">
            <div class="cart-content">
              <p class="align-self-center" v-if="todayDataInfo != 0">{{todayDataInfo}}</p>
              <p class="align-self-center" v-else>not ubpadtes{{yesterdayDataInfo}}</p>
            </div>

            <div class="upper-border m-auto">
              <div class="left-c"></div>
              <div class="right-c"></div>
            </div>
            <div class="lower-border m-auto">
              <div class="left-c"></div>
              <div class="right-c"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["header", "todayDataInfo", "yesterdayDataInfo"]
};
</script>



<style scoped>
.inner-cart {
  position: relative;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  background-color: white;
  -webkit-box-shadow: -6px 6px 13px 11px rgba(0, 0, 0, 0.83);
  -moz-box-shadow: -6px 6px 13px 11px rgba(0, 0, 0, 0.83);
  box-shadow: -6px 6px 13px 11px rgba(0, 0, 0, 0.83);
}
.upper-border {
  position: absolute;
  top: -12px;
  right: -27px;
  width: 200px;
  height: 105px;
  border: solid 4px #fff;
  border-color: #fff transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
}
.lower-border {
  transform: rotatex(180deg);
  position: absolute;
  bottom: -12px;
  right: -27px;
  width: 200px;
  height: 105px;
  border: solid 4px #fff;
  border-color: #fff transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
}

.right-c {
  position: absolute;
  top: 22px;
  right: 19px;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
}
.left-c {
  position: absolute;
  top: 22px;
  left: 19px;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
}
.cart-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.cart-content p {
  color: #cf1f25;
  font-size: 35px;
  font-weight: 700;
}
.flag {
  max-width: 30px;
  max-height: 30px;
  align-self: center;
  margin-right: 5px;
}
</style>
