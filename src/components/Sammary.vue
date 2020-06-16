<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <p>
          <span></span>
        </p>
      </div>
      <div class="row my-5">
        <div class="col-4 m-auto">
          <v-select v-model="select" :searchable="true" :options="list" :labelTitle="labelTitle" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 my-4">
          <div class="cart shadow-sm rounded-lg">
            <div class="cart-inner" v-if="selectedCountryToday">
              <div class="head text-muted">New cases</div>
              <div class="info">
                <div class="eeer">
                  <p class="new-cases">{{selectedCountryToday.todayCases}}</p>
                  <span id="dev">
                    <img class="arrow" :src="Arrow" alt />
                    {{changeTracker(selectedCountryToday.todayCases ,selectedCountryYesterday.todayCases)}}
                  </span>
                </div>
                <div>
                  <p class="yesterday-cases text-muted">
                    Yesterday cases
                    <span class="d-block">{{selectedCountryYesterday.todayCases}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="cart-inner" v-else-if="isReady">
              <div class="head text-muted">New cases</div>
              <div class="info">
                <div class="eeer">
                  <p class="new-cases">{{WorldWide.todayCases}}</p>
                  <span id="dev" v-if="WorldWide">
                    <img class="arrow" :src="Arrow" alt />
                    {{changeTracker(WorldWide.todayCases ,WorldWideYesterday.todayCases)}}
                  </span>
                </div>
                <div>
                  <p class="yesterday-cases text-muted">
                    Yesterday cases
                    <span class="d-block">{{WorldWideYesterday.todayCases}}</span>
                  </p>
                </div>
              </div>
            </div>
            <div v-if="!isReady">
              <div class="cart-inner">
                <div class="loading mb-3"></div>
                <div class="mb-2">
                  <div class="loading w-75"></div>
                </div>
                <div class="mb-2">
                  <div class="loading w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.cart-inner .info {
  display: flex;
  height: 54px;
  justify-content: space-between;
}
.cart-inner .info .new-cases {
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
</style>
 <!-- v-if="selectedCountry"> -->
<script>
import VSelect from "@alfsnd/vue-bootstrap-select";
import axios from "axios";
import $ from "jquery";
export default {
  name: "HelloWorld",
  components: {
    VSelect
  },
  data() {
    return {
      select: null,
      list: [],
      labelTitle: "Pick or search",
      isReady: false,
      todayResponse: [],
      selectedCountryToday: null,
      selectedCountryYesterday: null,
      yesterdayResponse: null,
      WorldWide: null,
      flag: null,
      Arrow: ""
      // isUpdated:false,
    };
  },
  methods: {
    displayCountryToday: function() {
      let obj = this.todayResponse.find(o => o.country === this.select);
      return obj;
    },
    displayCountryYesterday: function() {
      let obj = this.yesterdayResponse.find(o => o.country === this.select);
      return obj;
    },
    changeTracker: function(newVal, oldVal) {
      if (newVal > oldVal) {
        $("#dev").removeClass("badge-warning badge");
        $( "img.arrow" ).removeClass("d-none");
        $("#dev").css("color", "#ff5e3a");
        this.Arrow = "/assets/arrowUp.svg";
        return newVal - oldVal;
      } else if (newVal == oldVal) {
        $("#dev").removeClass("badge-warning badge");
        $("#dev").css("color", "#32e4cd");
        $( "img.arrow" ).addClass("d-none");
        return '0' ;
      } else if (newVal == 0 && newVal != oldVal) {
        $("#dev").addClass("badge-warning badge");
        $( "img.arrow" ).addClass("d-none");
        $("#dev").css("color", "#000");
        // $("#dev").css("font-size", "10px");
        let msg = "Not Updated";
        return msg;
      } else {
        $("#dev").removeClass("badge-warning badge");
        $( "img.arrow" ).removeClass("d-none");
        $("#dev").css("color", "#32e4cd");
        this.Arrow = "/assets/arrowDown.svg";
        return oldVal - newVal;
      }
    },
    query: function() {
      let vm = this;
      vm.isReady = false;
      axios
        .get("https://disease.sh/v2/countries?")
        .then(Response => {
          vm.todayResponse = Response.data;
          let length = vm.todayResponse.length;
          for (var i = 0; i < length; i++) {
            vm.list.push(vm.todayResponse[i].country);
          }
          axios
            .get("https://disease.sh/v2/countries?yesterday=true")
            .then(Response => {
              vm.yesterdayResponse = Response.data;
              axios
                .get("https://disease.sh/v2/all")
                .then(Response => {
                  vm.WorldWide = Response.data;
                  axios
                    .get("https://disease.sh/v2/all?yesterday=true")
                    .then(Response => {
                      vm.WorldWideYesterday = Response.data;
                      vm.isReady = true;
                    })
                    .catch(function(error) {
                      alert(error);
                    });
                })
                .catch(function(error) {
                  alert(error);
                });
            })
            .catch(function(error) {
              alert(error);
            });
        })
        .catch(function(error) {
          alert(error);
        });
    }
  },
  mounted: function() {
    let vm = this;
    vm.query();
    // setInterval(function() {
    //   vm.query()
    // }, 5000);
  },
  watch: {
    select: function() {
      this.selectedCountryToday = this.displayCountryToday();
      this.selectedCountryYesterday = this.displayCountryYesterday();
      // this.flag = this.selectedCountry.countryInfo.flag;
    }
  }
};
</script>


// #32e4cd
// #ff5e3a