<template>
  <section>
    <div>
      <!-- <Footer /> -->
    </div>
    <div
      id="act"
      class="d-flex justify-content-between NavBar-bottom d-sm-none d-block"
    >
      <div
        @click="checkSearch()"
        :class="{ active: searchAcitve }"
        class="nb search-right w-50 d-flex justify-content-center align-items-center"
      >
        <div class="content text-center">
          <fa-icon :icon="['fas', 'search']" />
          <div class="content">Search</div>
        </div>
      </div>
      <div
        @click="checkInfo()"
        :class="{ active: infoAcitve }"
        class="nb info-left w-50 d-flex justify-content-center align-items-center"
      >
        <div class="content text-center">
          <fa-icon :icon="['fas', 'info']" />
          <span class="d-block">info</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Footer from '@/components/Footer.vue';
export default {
  name: "NavBar",
  components: {
    // Footer
  },
  data() {
    return {};
  },
  computed: {
    searchAcitve() {
      return this.$store.state.searchAcitve;
    },
    infoAcitve() {
      return this.$store.state.infoAcitve;
    }
  },
  mounted: function() {},
  methods: {
    checkSearch: function() {
      this.$store.commit("checkSearch");
    },
    checkInfo: function() {
      this.$store.commit("checkInfo");
    }
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
  transform: scaleX(-1);
}

p {
  font-size: 13px;
  font-weight: 600;
  color: #ff5e3a;
}
</style>
