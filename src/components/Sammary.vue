<template>
  <section>
    <Hero :totalCases="WorldWideToday.cases" v-if="WorldWideToday" />
    <div class="header-loading" v-else>
      <div class="inner-loading"></div>
    </div>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-4 col-sm-6 col-12 m-auto">
          <v-select v-model="select" :searchable="true" :options="list" :labelTitle="labelTitle" />
        </div>
      </div>

      <button
        v-if="selectedCountryToday && selectedCountryToday.country == 'Egypt'"
        class="btn btn-primary"
        @click="toggleyisEgy()"
      >Egypt theme</button>
      <cartContainer v-if="isReady" />

      <div v-else class="row">
        <div v-for="index in 6" :key="index" class="col-md-4 col-sm-6 col-12 my-4 fade-mine">
          <div class="cart shadow-sm rounded-lg">
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
  </section>
</template>

<script>
import Hero from "@/components/Hero.vue";
import cartContainer from "@/components/cartContainer.vue";
import VSelect from "@alfsnd/vue-bootstrap-select";
import axios from "axios";
export default {
  name: "Sammary",
  components: {
    VSelect,
    Hero,
    cartContainer
  },
  data() {
    return {
      select: null,
      list: [],
      labelTitle: "search ...",
      todayResponse: [],
      selectedCountryToday: "",
      selectedCountryYesterday: "",
      WorldWideToday: "",
      WorldWideYesterday: "",
      yesterdayResponse: "",
      flag: null
    };
  },
  computed: {
    isReady() {
      return this.$store.state.isReady;
    },
    isEgy() {
      return this.$store.state.isEgy;
    }
  },
  methods: {
    toggleyisEgy:function(){
      this.$store.commit('toggleyisEgy');
    },
    displayCountryToday: function() {
      let obj = this.todayResponse.find(o => o.country === this.select);
      return obj;
    },
    displayCountryYesterday: function() {
      let obj = this.yesterdayResponse.find(o => o.country === this.select);
      return obj;
    },
    query: function() {
      let vm = this;
      vm.$store.state.isReady = false;
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
                  vm.WorldWideToday = Response.data;

                  axios
                    .get("https://disease.sh/v2/all?yesterday=true")
                    .then(Response => {
                      vm.WorldWideYesterday = Response.data;

                      vm.$store.state.isReady = true;
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
    setInterval(function() {
      vm.query()
    }, 600000);
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


<style scoped>
.cart {
  background-color: white;
}
.cart .cart-inner {
  padding: 10px 30px;
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
.header-loading {
  height: 218px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-loading {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  animation: loading 2s infinite;
}
@keyframes loading {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.13);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.05);
  }
  80% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.05);
  }
  100% {
    box-shadow: 0 0 0 40px rgba(0, 0, 0, 0);
  }
}
</style>