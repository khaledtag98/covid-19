<template>
  <div class="col-lg-4 col-md-6 col-12 my-4-mine fade-mine">
    <div class="cart shadow-sm rounded-lg">
      <div class="cart-inner" v-if="dataReceived">
        <div v-if="isEgy">
          <div v-if="TotalCart">
            <div class="head text-center mb-3 text-muted" v-text="header"></div>
            <p
              :class="header == 'Total recovered' ? 'text-recovered' : header == 'Total Deaths' ? 'text-Deaths' : 'new-cases'"
              class="mb-sm-1 text-center"
            >{{todaySelectdCountry}}</p>
          </div>
          <div v-else>
            <div class="head text-muted" v-text="header"></div>
            <div class="info">
              <div class="eeer">
                <p class="new-cases">{{todaySelectdCountry}}</p>
                <!-- :class="{'green':green,'red':red}" -->
                <span :class="{'green':green,'red':red}" :id="divId">
                  <img :id="arrowId" class="arrow" :src="Arrow" alt />
                  <fa-icon :icon="['fas','arrow-up']" size="lg" :rotation="rotate" />
                  {{calc(todaySelectdCountry,yesterdaySelectdCountry)}}
                </span>
              </div>
              <div>
                <p class="yesterday-cases text-muted">
                  Yesterday cases
                  <span class="d-block">{{yesterdaySelectdCountry}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <EgyTheme
          v-else
          :header="header"
          :todayDataInfo="todaySelectdCountry"
          :yesterdayDataInfo="yesterdaySelectdCountry"
        />
      </div>

      <div class="cart-inner" v-if="!dataReceived">
        <div v-if="TotalCart">
          <div class="head text-center text-muted mb-3" v-text="header"></div>
          <p
            class="w-100 text-center mb-sm-1"
            :class="header == 'Total recovered' ? 'text-recovered' : header == 'Total Deaths' ? 'text-Deaths' : 'new-cases'"
          >{{todaydayWorldWidey}}</p>
        </div>
        <div v-else>
          <div class="head text-muted" v-text="header"></div>
          <div class="info">
            <div class="eeer">
              <p class="new-cases">{{todaydayWorldWidey}}</p>
              <span :class="{'green':green,'red':red}" :id="divId">
                <img :id="arrowId" class="arrow" :src="Arrow" alt />
                <span id="arrow" >
                  <!-- :class="{'arrow-down':isDown}" -->
                  <fa-icon :icon="['fas','arrow-up']" size="lg" :rotation="rotate" />
                </span>
                {{calc(todaydayWorldWidey,yesterdayWorldWidey)}}
              </span>
            </div>

            <div>
              <p class="yesterday-cases text-muted">
                Yesterday cases
                <span class="d-block">{{yesterdayWorldWidey}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.green {
  color: #32e4d0;
}
.red {
  color: #ff5e3a;
}
.cart {
  background-color: white;
}
.cart .cart-inner {
  padding: 10px 30px;
}
.cart-inner .head {
  font-size: 14px;
  font-weight: 600;
}
.my-4-mine {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}
.loading {
  position: relative;
  height: 18px;
  margin-bottom: 4px;
  border-radius: 6.5px;
  background-color: #dddddd;
  overflow: hidden;
}
.loading::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0) 0%,
    rgb(236, 236, 236) 50%,
    rgba(230, 134, 0, 0) 100%
  );
  animation: shine-lines 1s infinite linear;
}
@keyframes shine-lines {
  100% {
    transform: translateX(100%);
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.show-data {
  animation: fadein 1s;
}
.cart-inner .info {
  display: flex;
  height: 54px;
  justify-content: space-between;
}
.cart-inner .new-cases {
  display: inline-block;
  color: #d22023;
  font-weight: 500;
  vertical-align: baseline;
  font-size: 25px;
}
.cart-inner .info .yesterday-cases {
  font-size: 13px;
}
.cart-inner .info .yesterday-cases span {
  color: black;
  font-size: 16px;
}
.info span {
  font-size: 12px;
  font-weight: 700;
  vertical-align: baseline;
  margin-left: 5px;
}
.arrow {
  width: 13px;
  height: 13px;
  vertical-align: middle;
}
.eeer {
  display: flex;
  align-items: center;
}
.text-recovered {
  color: #11c019;
  font-weight: 600;
  font-size: 22px;
}
.text-Deaths {
  color: #dc3545;
  font-weight: 600;
  font-size: 22px;
}
/* @media (min-width: 768px) and (max-width: 992px) {
  .cart .cart-inner {
    padding: 10px 10px;
  }
} */
@media (max-width: 768px) {
  .my-4-mine {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }
}
</style>
<script>
import EgyTheme from "@/components/EgyTheme.vue";
import $ from "jquery";
export default {
  components: {
    EgyTheme
  },
  props: [
    "dataReceived",
    "todaySelectdCountry",
    "yesterdaySelectdCountry",
    "todaydayWorldWidey",
    "yesterdayWorldWidey",
    "header",
    "divId",
    "arrowId"
  ],
  data() {
    return {
      Arrow: "",
      green: false,
      red: false,
      rotate:null,
    };
  },
  computed: {
    TotalCart: function() {
      if (this.header == "Total Deaths" || this.header == "Total recovered") {
        return true;
      } else return false;
    },
    isReady() {
      return this.$store.state.isReady;
    },
    isEgy() {
      return this.$store.state.isEgy;
    }
  },
  mounted: function() {
    this.smallCart();
  },
  methods: {
    smallCart: function() {
      if (window.matchMedia("(max-width: 786px)").matches) {
        $(".text-recovered")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("col-6")
          .removeClass("col-12");
        $(".text-Deaths")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("col-6")
          .removeClass("col-12");
      } else {
        $(".text-recovered")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("col-12")
          .removeClass("col-6");
        $(".text-Deaths")
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("col-12")
          .removeClass("col-6");
      }
    },

    calc: function(todayVal, yesterdayVal) {
      
      let res = todayVal - yesterdayVal;
      if (res > 0 && todayVal != 0) {
        this.green = false;
        this.red = true;
        console.log("------------------- red ---------------------");
        return res;
      } else {
        this.green = true;
        this.red = false;
        this.rotate = 180 ;
        console.log("------------------- green ---------------------");
        return res * -1;
      }
    }
  }
};
</script>