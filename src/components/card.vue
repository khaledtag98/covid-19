<template>
  <div class="col-xl-4 col-lg-6 align-self-center col-md-6 col-12 my-4-mine fade-mine">
    <div class="cart shadow-sm rounded-lg">
      <div class="cart-inner" v-if="dataReceived">
        <div>
          <div v-if="TotalCart">
            <div class="head text-center mb-3 text-muted" v-text="header"></div>
            <p
              :class="
                header == 'Total recovered'
                  ? 'text-recovered'
                  : header == 'Total Deaths'
                  ? 'text-Deaths'
                  : 'new-cases'
              "
              class="mb-sm-1 text-center"
            >
              {{ todaySelectdCountry }}
            </p>
          </div>
          <div v-else>
            <div class="head text-muted" v-text="header"></div>
            <div class="info">
              <div class="eeer">
                <p class="new-cases">{{ todaySelectdCountry }}</p>
                <!-- :class="{'green':green,'red':red}" -->
                <span
                  v-if="!IsTodayRecovered"
                  :class="{ green: green, red: red }"
                  :id="divId"
                >
                  <fa-icon
                    :icon="['fas', 'arrow-up']"
                    size="lg"
                    :rotation="rotate"
                  />
                  {{ calc(todaySelectdCountry, yesterdaySelectdCountry) }}
                </span>
                <span v-else :class="{ green: red, red: green }" :id="divId">
                  <fa-icon
                    :icon="['fas', 'arrow-up']"
                    size="lg"
                    :rotation="rotate"
                  />
                  {{ calc(todaySelectdCountry, yesterdaySelectdCountry) }}
                </span>
              </div>
              <div>
                <p class="yesterday-cases text-muted">
                  Yesterday cases
                  <span class="d-block">{{ yesterdaySelectdCountry }}</span>
                </p>
              </div>
            </div>
            <div class="my-2">
              <p v-if="!IsTodayRecovered" class="font-size text-muted">
                {{ header }}
                <span :class="{ green: green, red: red }">{{ status }}</span>
                by
                <span :class="{ green: green, red: red }"
                  >{{
                    PersCalc(todaySelectdCountry, yesterdaySelectdCountry)
                  }}%</span
                >
              </p>
              <p v-else class="font-size text-muted">
                {{ header }}
                <span :class="{ green: red, red: green }">{{ status }}</span>
                by
                <span :class="{ green: red, red: green }"
                  >{{
                    PersCalc(todaySelectdCountry, yesterdaySelectdCountry)
                  }}%</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-inner" v-if="!dataReceived">
        <div v-if="TotalCart">
          <div class="head text-center text-muted mb-3" v-text="header"></div>
          <p
            class="w-100 text-center mb-sm-1"
            :class="
              header == 'Total recovered'
                ? 'text-recovered'
                : header == 'Total Deaths'
                ? 'text-Deaths'
                : 'new-cases'
            "
          >
            {{ todaydayWorldWidey }}
          </p>
        </div>
        <div v-else>
          <div>
            <div class="head text-muted" v-text="header"></div>
            <div class="info">
              <div class="eeer">
                <p class="new-cases">{{ todaydayWorldWidey }}</p>

                <span
                  v-if="!IsTodayRecovered"
                  :class="{ green: green, red: red }"
                  :id="divId"
                >
                  <span id="arrow">
                    <!-- :class="{'arrow-down':isDown}" -->
                    <fa-icon
                      :icon="['fas', 'arrow-up']"
                      size="lg"
                      :rotation="rotate"
                    />
                  </span>
                  {{ calc(todaydayWorldWidey, yesterdayWorldWidey) }}
                </span>
                <span v-else :class="{ green: red, red: green }" :id="divId">
                  <span id="arrow">
                    <!-- :class="{'arrow-down':isDown}" -->
                    <fa-icon
                      :icon="['fas', 'arrow-up']"
                      size="lg"
                      :rotation="rotate"
                    />
                  </span>
                  {{ calc(todaydayWorldWidey, yesterdayWorldWidey) }}
                </span>
              </div>

              <div>
                <p class="yesterday-cases text-muted">
                  Yesterday cases
                  <span class="d-block">{{ yesterdayWorldWidey }}</span>
                </p>
              </div>
            </div>
            <div class="my-2">
              <p v-if="!IsTodayRecovered" class="font-size text-muted">
                {{ header }}
                <span :class="{ green: green, red: red }">{{ status }}</span>
                by
                <span :class="{ green: green, red: red }"
                  >{{
                    PersCalc(todaydayWorldWidey, yesterdayWorldWidey)
                  }}%</span
                >
              </p>
              <p v-else class="font-size text-muted">
                {{ header }}
                <span :class="{ green: red, red: green }">{{ status }}</span>
                by
                <span :class="{ green: red, red: green }"
                  >{{
                    PersCalc(todaydayWorldWidey, yesterdayWorldWidey)
                  }}%</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.font-size {
  font-size: 14px;
  color: #172345;
}
.green {
  color: #2ac1b0;
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
  -webkit-animation: shine-lines 1s infinite linear;
  animation: shine-lines 1s infinite linear;
}

@-webkit-keyframes shine-lines {
  100% {
    transform: translateX(100%);
  }
}

@keyframes shine-lines {
  100% {
    transform: translateX(100%);
  }
}

@-webkit-keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
  -webkit-animation: fadein 1s;
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
  color: #2ac1b0;
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
import $ from "jquery";
export default {
  props: [
    "dataReceived",
    "todaySelectdCountry",
    "yesterdaySelectdCountry",
    "todaydayWorldWidey",
    "yesterdayWorldWidey",
    "header",
    "divId",
    "arrowId",
  ],
  data() {
    return {
      IsTodayRecovered: Boolean,
      green: false,
      red: false,
      rotate: null,
      status: "",
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
  },
  mounted: function() {
    if (this.header !== "Today recovered") {
      this.IsTodayRecovered = false;
    } else {
      this.IsTodayRecovered = true;
    }
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
      // today > yesterday
      if (res > 0 && todayVal != 0) {
        this.green = false;
        this.red = true;
        return res;
      }
      // yesterday > today
      else {
        this.green = true;
        this.red = false;
        this.rotate = 180;
        return res * -1;
      }
    },
    PersCalc: function(todayVal, yesterdayVal) {
      let res = todayVal - yesterdayVal;
      if (res > 0) {
        this.status = "Increased";
        return Math.ceil((res / todayVal) * 100);
      } else {
        this.status = "decreased";
        return Math.ceil((Math.abs(res) / yesterdayVal) * 100);
      }
    },
  },
};
</script>
