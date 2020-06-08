<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <select name id="countryID" @change="changedCountry()">
            <option v-for="Data in todayResponse" :key="Data.id" value>{{Data.country}}</option>
          </select>
        </div>
        <div class="col-6">
          <h3>Country Name: {{countryName}}</h3>
          <h3 >Today Cases: {{todayCases}} <span v-html="title"></span></h3>
          <h3>Cases: {{cases}}</h3>
          <h3>Recovered: {{recovered}}</h3>
          <h3>Deaths: {{deaths}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      todayResponse: null,
      yesterdayResponse:null,
      countryName: null,
      todayCases: '',
      yesterdayCases:'',
      cases: '',
      recovered: '',
      deaths: '',
      title:``,
    };
  },
  methods: {
    changedCountry: function() {
      let ID = document.getElementById("countryID").selectedIndex;
      this.countryName = this.todayResponse[ID].country;
      if (this.todayResponse[ID].todayCases == 0) {
        this.todayCases = this.yesterdayResponse[ID].todayCases;
        this.title = `<span class="badge badge-secondary">Not updated</span>`;
      } else {
        this.todayCases = this.todayResponse[ID].todayCases;
        this.title = ``;
      }
      this.cases = this.todayResponse[ID].cases;
      this.recovered = this.todayResponse[ID].recovered;
      this.deaths = this.todayResponse[ID].deaths;
    }
  },
  mounted: function() {
    axios
      .get("https://disease.sh/v2/countries?")
      .then(Response => (this.todayResponse = Response.data))
      .catch(function(error) {
        alert(error);
      });
      axios
      .get("https://disease.sh/v2/countries?yesterday=true")
      .then(Response => (this.yesterdayResponse = Response.data ))
      .catch(function(error) {
        alert(error);
      });
  }
};
</script>

<style scoped>
.khaled {
  height: 50px;
  width: 50px;
  background-color: red;
}
</style>
