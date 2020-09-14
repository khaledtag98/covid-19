<template>
  <section id="staySafe" class="mb-5">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <div class="header">
            <h1 class="w-100">
              Stay home,
              <br />Stay safe
            </h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 my-3">
          <div class="content">
            <div class="card d-inline-block">
              <div>
                <img src="/img/spreads.png" class="mt-spreads" alt />
              </div>
              <div class="content-header my-3">
                <h4>Know how it spreads</h4>
              </div>
              <div class="description">
                <p>
                  Between people who are in close contact with one another
                  Through respiratory droplets produced when an infected person
                  coughs, sneezes or talks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 my-3">
          <div class="content">
            <div class="card d-inline-block">
              <ul>
                <li>
                  <img src="/img/keepdes.svg" alt />
                </li>
                <li class="content-header my-3">
                  <h4>Avoid close contact</h4>
                </li>
                <li class="description">
                  <p>
                    Avoid close contact with people who are sick, even inside
                    your home. If possible, maintain 6 feet between the person
                    who is sick and other household members.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 my-3">
          <div class="content">
            <div class="card d-inline-block">
              <ul>
                <li>
                  <img src="/img/wash.svg" alt />
                </li>
                <li class="content-header my-3">
                  <h4>Wash your hands often</h4>
                </li>
                <li class="description">
                  <p>
                    Wash your hands often with soap and water for at least 20
                    seconds especially after you have been in a public place, or
                    after blowing your nose, coughing, or sneezing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 my-3">
          <div class="content">
            <div class="card d-inline-block">
              <ul>
                <li>
                  <img src="/img/clean1.svg" class="mt-mine" alt />
                </li>
                <li class="content-header my-3">
                  <h4>Clean and disinfect</h4>
                </li>
                <li class="description">
                  <p>
                    Clean AND disinfect frequently touched surfaces daily. This
                    includes tables, doorknobs, light switches, countertops,
                    handles, desks, phones, keyboards, toilets, faucets, and
                    sinks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 my-3">
          <div class="content">
            <div class="card d-inline-block">
              <ul>
                <li>
                  <img src="/img/coverm.svg" alt />
                </li>
                <li class="content-header my-3">
                  <h4>Cover coughs and sneezes</h4>
                </li>
                <li class="description">
                  <p>
                    If you are around others and do not have on your cloth face
                    covering, remember to always cover your mouth and nose with
                    a tissue when you cough or sneeze or use the inside of your
                    elbow and do not spit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#staySafe h1 {
  font-family: "Roboto", "Noto Sans JP", sans-serif;
  display: flex;
  justify-content: center;
  color: #172345;
  font-size: 55px;
  font-weight: 600;
}
#staySafe p {
  color: #848484;
  font-size: 22px;
}
.mt-mine {
  margin-top: 1.35rem !important;
  margin-bottom: 1.35rem !important;
}
.mt-spreads {
  margin-top: 0.35rem !important;
  margin-bottom: 0.35rem !important;
}
#staySafe .content img {
  max-width: 25%;
  max-height: 110px;
}

/* #848484 */

#staySafe .content .content-header h4 {
  color: #4c616b;
  font-size: 20px;
  font-weight: 600;
  cursor: default;
}

#staySafe .content p {
  color: #848484;
  font-size: 16px;
  cursor: default;
}

#staySafe .card {
  padding: 1rem;
  border-radius: 15px;
  border-style: none;
  background-color: #fdf8f5;
}

#staySafe .card {
  height: 300px;
  moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #fff;
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
}

#staySafe .card:hover {
  box-shadow: 0 0px 1.7px rgba(0, 0, 0, 0.02), 0 0px 4.1px rgba(0, 0, 0, 0.028),
    0 0px 7.8px rgba(0, 0, 0, 0.035), 0 0px 13.8px rgba(0, 0, 0, 0.042),
    0 0px 25.9px rgba(0, 0, 0, 0.05), 0 0px 62px rgba(0, 0, 0, 0.07);

  moz-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  color: #fff;
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
}

@media (min-width: 768px) and (max-width: 992px) {
  #staySafe .card {
    height: 320px;
  }
  #staySafe .card img {
    max-width: 28%;
  }
}

@media (max-width: 768px) {
  #staySafe h1 {
    font-size: 40px !important;
  }
  #staySafe p {
    font-size: 16px;
  }
}
</style>

<script>
export default {};
</script>
