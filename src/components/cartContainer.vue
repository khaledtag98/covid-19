<template>
  <div class="row">
    <Cart
      :divId="divId1"
      :arrowId="arrowId1"
      :header="Header1"
      :todaySelectdCountry="this.$parent.selectedCountryToday.todayDeaths"
      :yesterdaySelectdCountry="this.$parent.selectedCountryYesterday.todayDeaths"
      :WorldWidey="this.$parent.WorldWideToday"
      :todaydayWorldWidey="this.$parent.WorldWideToday.todayDeaths"
      :yesterdayWorldWidey="this.$parent.WorldWideYesterday.todayDeaths"
      :dataReceived="this.$parent.selectedCountryToday"
    />
    <Cart
      :divId="divId2"
      :arrowId="arrowId2"
      :header="Header2"
      :todaySelectdCountry="this.$parent.selectedCountryToday.todayRecovered"
      :yesterdaySelectdCountry="this.$parent.selectedCountryYesterday.todayRecovered"
      :WorldWidey="this.$parent.WorldWideToday"
      :todaydayWorldWidey="this.$parent.WorldWideToday.todayRecovered"
      :yesterdayWorldWidey="this.$parent.WorldWideYesterday.todayRecovered"
      :dataReceived="this.$parent.selectedCountryToday"
    />
    <Cart
      :divId="divId3"
      :arrowId="arrowId3"
      :header="Header3"
      :todaySelectdCountry="this.$parent.selectedCountryToday.todayCases"
      :yesterdaySelectdCountry="this.$parent.selectedCountryYesterday.todayCases"
      :WorldWidey="this.$parent.WorldWideToday"
      :todaydayWorldWidey="this.$parent.WorldWideToday.todayCases"
      :yesterdayWorldWidey="this.$parent.WorldWideYesterday.todayCases"
      :dataReceived="this.$parent.selectedCountryToday"
    />

    <Cart
      :divId="divId6"
      :arrowId="arrowId6"
      :header="Header6"
      :todaySelectdCountry="this.$parent.selectedCountryToday.cases"
      :yesterdaySelectdCountry="this.$parent.selectedCountryYesterday.cases"
      :WorldWidey="this.$parent.WorldWideToday"
      :todaydayWorldWidey="this.$parent.WorldWideToday.cases"
      :yesterdayWorldWidey="this.$parent.WorldWideYesterday.cases"
      :dataReceived="this.$parent.selectedCountryToday"
    />
    <Cart
      :divId="divId4"
      :arrowId="arrowId4"
      :header="Header4"
      :todaySelectdCountry="this.$parent.selectedCountryToday.deaths"
      :yesterdaySelectdCountry="this.$parent.selectedCountryYesterday.deaths"
      :WorldWidey="this.$parent.WorldWideToday"
      :todaydayWorldWidey="this.$parent.WorldWideToday.deaths"
      :yesterdayWorldWidey="this.$parent.WorldWideYesterday.deaths"
      :dataReceived="this.$parent.selectedCountryToday"
    />
    <Cart
      :divId="divId5"
      :arrowId="arrowId5"
      :header="Header5"
      :todaySelectdCountry="this.$parent.selectedCountryToday.recovered"
      :yesterdaySelectdCountry="this.$parent.selectedCountryYesterday.recovered"
      :WorldWidey="this.$parent.WorldWideToday"
      :todaydayWorldWidey="this.$parent.WorldWideToday.recovered"
      :yesterdayWorldWidey="this.$parent.WorldWideYesterday.recovered"
      :dataReceived="this.$parent.selectedCountryToday"
    />
  </div>
</template>

<script>
import Cart from "@/components/cart.vue";
export default {
  components: {
    Cart
  },
  data: function() {
    return {
      Header1: "Today Deaths",
      Header2: "Today recovered",
      Header3: "New Cases",
      Header4: "Total Deaths",
      Header5: "Total recovered",
      Header6: "Total infected",
      divId1: "div1",
      arrowId1: "arrow1",
      divId2: "div2",
      arrowId2: "arrow2",
      divId3: "div3",
      arrowId3: "arrow3",
      divId4: "div4",
      arrowId4: "arrow4",
      divId5: "div5",
      arrowId5: "arrow5",
      divId6: "div6",
      arrowId6: "arrow6"
    };
  }
};
</script>