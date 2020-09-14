<template>
  <div class="تيحا مصر ">
    <div class="container">
      <div class="row flex align-items-center justify-content-center">
        <div class="col-4">
          <div class="row my-5 align-items-center justify-content-center">
            <div class="col-12  header">
              <h2 class="mb-3 text-center">
                الوفيات <br />
                الجديدة
              </h2>
            </div>
            <div class="col-12 info-card">
              <div class="inner-card m-auto">
                <div class="card-content">
                  <p class="align-self-center">
                    {{
                      calc(
                        todaySelectdCountry.todayDeaths,
                        yesterdaySelectdCountry.todayDeaths
                      )
                    }}
                  </p>
                </div>
                <div class="rotator">
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
          <div class="row my-5 align-items-center justify-content-center">
            <div class="col-12  header">
              <h2 class="mb-3 text-center">
                اجمالي <br />
                عدد الوفيات
              </h2>
            </div>
            <div class="col-12 info-card">
              <div class="inner-card m-auto">
                <div class="card-content">
                  <p class="align-self-center">
                    {{
                      calc(
                        todaySelectdCountry.deaths,
                        yesterdaySelectdCountry.deaths
                      )
                    }}
                  </p>
                </div>
                <div class="rotator">
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
        <div class="col-4 flex align-items-center justify-content-center">
          <div class="row ">
            <div class="col-12  header">
              <h2 class="mb-3 text-center">
                عدد حالات الشفاء<br />
                (الخروج حتى الان)
              </h2>
            </div>
            <div class="col-12  info-card">
              <div class="inner-card m-auto">
                <div class="card-content">
                  <p class="align-self-center">
                    {{
                      calc(
                        todaySelectdCountry.recovered,
                        yesterdaySelectdCountry.recovered
                      )
                    }}
                  </p>
                </div>
                <div class="rotator">
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
        <div class="col-4">
          <div class="row my-5 align-items-center justify-content-center">
            <div class="col-12  header">
              <h2 class="mb-3 text-center">
                الحالات <br />
                الجديدة
              </h2>
            </div>
            <div class="col-12 info-card">
              <div class="inner-card m-auto">
                <div class="card-content">
                  <p class="align-self-center">
                    {{
                      calc(
                        todaySelectdCountry.todayCases,
                        yesterdaySelectdCountry.todayCases
                      )
                    }}
                  </p>
                </div>
                <div class="rotator">
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
          <div class="row my-5 align-items-center justify-content-center">
            <div class="col-12  header">
              <h2 class="mb-3 text-center">
                اجمالي <br />
                عدد المصابين
              </h2>
            </div>
            <div class="col-12 info-card">
              <div class="inner-card m-auto">
                <div class="card-content">
                  <p class="align-self-center">
                    {{
                      calc(
                        todaySelectdCountry.cases,
                        yesterdaySelectdCountry.cases
                      )
                    }}
                  </p>
                </div>
                <div class="rotator ">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todaySelectdCountry", "yesterdaySelectdCountry"],
  mounted: function() {
    console.log(this.todaySelectdCountry);
    console.log(this.yesterdaySelectdCountry);
  },
  methods: {
    calc: function(todayVal, yesterdayVal) {
      if (todayVal != 0) {
        return todayVal;
      } else {
        return yesterdayVal;
      }
    },
  },
};
</script>

<style scoped>
.rotator {
  top: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  transform:rotate(0deg);
transition: transform 1.5s ease;
}
.rotator:hover {
transform:rotate(360deg);
transition: transform 3s ease;
}

.inner-card {
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
.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.card-content p {
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
