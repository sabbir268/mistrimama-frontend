<template>
  <v-layout class="div-image">
    <div class="landing-margin">
      <v-flex md12 class="caller-info">
        <h4 class="animated flipInX">CALL FOR SERVICE</h4>
        <h3 class="animated flipInX delay-1s">
          <v-icon class="animated infinite flipInX delay-10s">phone_in_talk</v-icon>09610 222 111
        </h3>
      </v-flex>
      <!-- <v-flex hidden-md-and-up class="caller-info-two">
        <h4>CALL FOR SERVICE</h4>
        <h3>
          <v-icon>phone_in_talk</v-icon>09610 222 111
        </h3>
      </v-flex>-->
      <v-footer class="custom-footer animated bounceInUp" height="18vh" v-if="showFooter">
        <v-flex md2 class="grabber">
          <v-container justify-center>
            <v-row>
              <img class="footer-icons" src="../../../assets/bulb.png" alt="elecrical service">
            </v-row>
            <br>
            <v-row>
              <label class="cust-label">
                ELECTRICAL
                <br>SERVICES
              </label>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex md2 class="grabber">
          <v-container justify-center>
            <v-row>
              <img class="footer-icons" src="../../../assets/cal.png" alt="plumbing service">
            </v-row>
            <br>
            <v-row>
              <label class="cust-label">
                PLUMBING
                <br>SERVICES
              </label>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex md2 class="grabber">
          <v-container justify-center>
            <v-row>
              <img class="footer-icons" src="../../../assets/ac.png" alt="ac service">
            </v-row>
            <br>
            <v-row>
              <label class="cust-label">
                AC
                <br>SERVICES
              </label>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex md2 class="grabber">
          <v-container justify-center>
            <v-row>
              <img class="footer-icons" src="../../../assets/it.png" alt="it service">
            </v-row>
            <br>
            <v-row>
              <label class="cust-label">
                IT
                <br>SERVICES
              </label>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex md2 class="grabber">
          <v-container justify-center>
            <v-row>
              <img class="footer-icons" src="../../../assets/cctv.png" alt="cctv service">
            </v-row>
            <br>
            <v-row>
              <label class="cust-label">
                CCTV
                <br>SERVICES
              </label>
            </v-row>
          </v-container>
        </v-flex>
        <v-flex md2 class="grabber">
          <v-container justify-center>
            <v-row>
              <img
                class="footer-icons"
                src="../../../assets/generator-service.png"
                alt="generator service"
              >
            </v-row>
            <br>
            <v-row>
              <label class="cust-label">
                GENERATOR
                <br>SERVICES
              </label>
            </v-row>
          </v-container>
        </v-flex>
      </v-footer>
    </div>
  </v-layout>
</template>

<script>
// import axios from "../../axios_instance.js";

export default {
  name: "HOME",
  data() {
    return {
      showFooter: false,
      snackbar: false,
      tabs: 0
    };
  },
  methods: {
    async login() {
      //
    }
  },
  mounted() {
    setTimeout(() => {
      this.showFooter = true;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
.v-tabs__slider-wrapper > .v-tabs__slider {
  background-color: var(--accent) !important;
}
.div-image {
  width: 100%;
  height: 100vh;
  background-image: url("wallpaper.jpg") !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.landing-margin {
  position: relative;
  width: 100% !important;
  text-align: center !important;
  margin-left: 10% !important;
  margin-right: 10% !important;
}
.caller-info {
  margin-top: 29vh;
}
.caller-info > h4 {
  color: white;
  margin-right: 50px;
  font-size: 34px;
  text-shadow: 2px 2px 4px #2e2e2e;
}
.caller-info > h3 {
  margin-top: -20px;
  color: white;
  font-size: 42px;
  text-shadow: 2px 2px 4px #2e2e2e;
}
.caller-info > h3 > .v-icon {
  color: var(--primary);
  font-size: 45px;
  text-shadow: 2px 2px 4px #2e2e2e;
}
.caller-info-two {
  margin-top: 22vh;
}
.caller-info-two > h4 {
  color: white;
  margin-right: 100px;
  font-size: 23px;
  text-shadow: 2px 2px 4px #2e2e2e;
}
.caller-info-two > h3 {
  margin-top: -15px;
  color: white;
  font-size: 30px;
  text-shadow: 2px 2px 4px #2e2e2e;
}
.caller-info-two > h3 > .v-icon {
  color: var(--primary);
  font-size: 33px;
  text-shadow: 2px 2px 4px #2e2e2e;
}
.custom-footer {
  position: absolute;
  width: 100%;
  bottom: 0px;
  border-radius: 20px 20px 0px 0px;
  background: rgba(20, 20, 20, 0.9);
}
.custom-footer > .v-flex > .v-layout > img {
  width: 20px !important;
}
.footer-icons {
  width: 60px;
  transition: 0.2s;
}
.grabber:hover {
  cursor: pointer;
  .footer-icons {
    width: 80px;
    transition: 0.2s;
  }
  .cust-label {
    color: var(--primary);
  }
}
.cust-label {
  color: white;
}
</style>
