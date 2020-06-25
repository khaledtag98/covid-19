<template>
  <section>
    <nav v-if="!isMobile()" id="act" class="d-flex justify-content-between NavBar-top">
      <div
        @click="checkSearch()"
        :class="{'active-top':searchAcitve}"
        class="nb search-right-top w-50 d-flex justify-content-center align-items-center"
      >
        <div class="content">Search</div>
      </div>
      <div
        @click="checkInfo()"
        :class="{'active-top':infoAcitve}"
        class="nb info-left-top w-50 d-flex justify-content-center align-items-center"
      >
        <div class="content">Info</div>
      </div>
    </nav>
    <div v-else id="act" class="d-flex justify-content-between NavBar-bottom">
      <div
        @click="checkSearch()"
        :class="{'active':searchAcitve}"
        class="nb search-right w-50 d-flex justify-content-center align-items-center"
      >
        <div class="content">Search</div>
      </div>
      <div
        @click="checkInfo()"
        :class="{'active':infoAcitve}"
        class="nb info-left w-50 d-flex justify-content-center align-items-center"
      >
        <div class="content text-center"><fa-icon :icon="['fas','info']" /><span class="d-block">info</span></div>
      </div>
    </div>
  </section>
</template>

<script>
// import $ from "jquery";
export default {
  name: "NavBar",
  data() {
    return {

    };
  },
  computed:{
    searchAcitve(){
      return this.$store.state.searchAcitve;
    },
    infoAcitve(){
     return this.$store.state.infoAcitve;
    }
  },
  mounted: function() {},
  methods: {
    checkSearch:function(){
      this.$store.commit('checkSearch')
    },
    checkInfo:function(){
      this.$store.commit('checkInfo')
    },
    isMobile:function(){
      if(window.matchMedia("(max-width: 786px)").matches)
      {
        return true;
      }
      else return false;
    },
    
    // checkSearch: function() {
    //   this.searchAcitve = true;
    //   this.infoAcitve = false;
    // },
    // checkInfo: function() {
    //   this.searchAcitve = false;
    //   this.infoAcitve = true;
    // }
  }
};
</script>

<style scoped>
.live {
  display: flex;
  align-items: center;
}
.live span {
  font-size: 16px;
  font-weight: 500;
}
.live-circle {
  background-color: rgb(50, 228, 205);
  width: 10px;
  height: 10px;

  border-radius: 50%;
}
.NavBar-top {
  /* border-bottom-right-radius: 80%;
  border-bottom-left-radius: 80%; */
  background-color: #fff;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10000;
}
.content {
  cursor: pointer;
}
.NavBar-bottom {
  cursor: pointer;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10000;
  background-color: #fff;
}
.search-right {
  border-top: solid 3px white;
  background-color: #fff;
}

.info-left {
  border-top: solid 3px white;
  background-color: #fff;
}
.nb.active {
  transition: all 0.3s linear;
  border-top: solid 3px #ff5e3a;
}
.search-right-top {
  border-bottom: solid 3px white;
  background-color: #fff;
}
.info-left-top {
  border-bottom: solid 3px white;
  background-color: #fff;
}
.nb.active-top {
  transition: all 0.3s linear;
  border-bottom: solid 3px #ff5e3a;
}
.img-fluid-mine {
  width: 55px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
p {
  font-size: 13px;
  font-weight: 600;
  color: #ff5e3a;
}
</style>