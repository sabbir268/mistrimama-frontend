<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout wrap align-center class="top-gapper">
              <v-flex grow class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>room_service</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          CURRENT ORDER
                          <br />
                          <span class="b">
                            <span>{{currentOrderCount}}</span> Service is runnig
                          </span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <v-layout wrap class>
                      <v-flex
                        md12
                        style="height: 100%; padding-left: 10px; padding-right: 10px; padding-top: 6px;"
                      >
                        <v-btn
                          style="font-size: 12px !important; min-width: 10px; width: 92%;"
                          to="/view-order"
                        >VIEW DETAILS</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex
                md3
                sm12
                xs12
                class="total-box"
                v-if="userInfo.client_type != 'client' || userInfo.client_type != 'agnet'"
              >
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>emoji_events</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          OUTSTANDING BALANCE
                          <br />
                          <span class="a">BDT {{userInfo.balance}}/-</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <v-flex
                      md12
                      style="height: 100%; padding-left: 10px; padding-right: 10px; padding-top: 6px;"
                    >
                      <v-btn
                        style="font-size: 12px !important; min-width: 10px; width: 92%;"
                        to="/view-order"
                      >PAY NOW</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 class="total-box" v-if="userInfo.client_type == 'agent'">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>emoji_events</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          REWARD POINT
                          <br />
                          <span class="a">17</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <v-flex
                      md6
                      style="height: 100%; padding-left: 10px; padding-right: 6px; padding-top: 6px;"
                    >
                      <v-btn
                        style="font-size: 12px !important; min-width: 10px; width: 82% "
                      >ADJUST BILL</v-btn>
                    </v-flex>
                    <v-flex
                      md6
                      style="height: 100%; padding-left: 6px; padding-right: 10px; padding-top: 6px;"
                    >
                      <v-btn
                        style="font-size: 12px !important; min-width: 10px; width: 82%"
                      >CASH OUT</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md6 sm12 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout
                    style="background-color: var(--primary); padding: 8px; border-bottom: 1px solid rgb(189, 189, 189)"
                  >
                    <v-icon style="color: white; margin-right: 7px;">create</v-icon>
                    <p style="font-size: 20px; margin: 0px !important; color: white;">
                      <b>QUICK ORDER</b>
                    </p>
                  </v-layout>
                  <v-layout wrap style="text-align: center !important;">
                    <!-- <router-link :to="{path: '/service/air-conditionar'}">
                      <v-flex md4 sm4 xs4>
                        <div class="electrical_service">
                          <img
                            src="http://mistrimama.com/dashboard/img/icons/electricity_g.png"
                            alt="electrical_service"
                            class="electrical_service"
                          />
                          <h4>Electrical Service</h4>
                        </div>
                      </v-flex>
                    </router-link>

                    <v-flex md4 sm4 xs4>
                      <div class="plumbing_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/plumbing_g.png"
                          alt="plumbing_service"
                          class="plumbing_service"
                        />
                        <h4>Plumbing Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="ac_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/ac_g.png"
                          alt="ac_service"
                          class="ac_service"
                        />
                        <h4>AC Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="generator_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/genarator_g.png"
                          alt="generator_service"
                          class="generator_service"
                        />
                        <h4>Generator Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="it_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/it_g.png"
                          alt="it_service"
                          class="it_service"
                        />
                        <h4>IT Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="cctv_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/cctv_g.png"
                          alt="cctv_service"
                          class="cctv_service"
                        />
                        <h4>CCTV Service</h4>
                      </div>
                    </v-flex>-->
                    <div class="col-md-12">
                      <div class="form-group m-0">
                        <input
                          type="text"
                          class="form-control form-control my-2 mt-2"
                          placeholder="Required Service"
                        />
                        <input
                          type="text"
                          class="form-control form-control mt-2"
                          placeholder="Location/Address"
                        />
                      </div>
                      <v-btn class="float-right">Order Now</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout
              wrap
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <!-- <v-flex md6 sm12 xs12>
                <v-card flat style="padding: 10px;">
                  <h3 class="custom-title" style="padding: 8px; margin: 5px;">
                    <v-icon class="custom-icon">info</v-icon>HOW IT WORKS
                  </h3>
                  <div class="procedures">
                    <h4>Tell us what to do</h4>
                    <p>Order any service of Mistri Mama is a quick and easy task with few clicks. Select a service category, select sub services, select service quantity, select date & time then confirm the order by providing contact number and address.</p>
                    <p>
                      If you want to do it more quicker, just call to
                      <b>09610-222-111</b> and tell how can we help.
                    </p>
                    <h4>Confirm & Agree</h4>
                    <p>Once you are done with order a service, our customer manager instantly calls you and asks a few questions to collect more details about the service. Upon the consent, customer manager confirms and schedules the service accordingly.</p>
                    <h4>Relax</h4>
                    <p>What next? Nothing! Now, relax and enjoy Mistri Mama Services.</p>
                  </div>
                </v-card>
              </v-flex>-->
              <!-- <v-flex md6 sm12 xs12 align-center>
                <v-card class="v-card-padding-pic" flat>
                  <img
                    style="width: 100%;"
                    src="http://mistrimama.com/images/Product-Promo-Banner.png"
                    alt
                  />
                </v-card>
              </v-flex>-->
              <div class="row">
                <div v-for="category in categorys" :key="category.id" class="col-md-2">
                  <router-link :to="{path: `/service/${category.slug}`}">
                    <div class="shadow-sm p-2 my-3 bg-white rounded border">
                      <img :src="category.thumb" alt="ac_service" class="w-100" />
                    </div>
                  </router-link>
                </div>
              </div>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        :bottom="'bottom'"
        :right="'right'"
        :timeout="6000"
        :vertical="'vertical'"
        style="text-align: left !important"
      >
        {{ alertMessage }}
        <v-btn color="primaryButton" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import BarChart from "../../chart.js";
import Mulmenu_Lenden from "../mulmenu/Mulmenu_Lenden";
import Mulmenu_NotunKaaj from "../mulmenu/Mulmenu_NotunKaaj";
import axios from "../../axios_instance.js";
import { localStorageService } from "../../helper";

export default {
  components: {
    Mulmenu_Lenden,
    Mulmenu_NotunKaaj
    // BarChart
  },
  data() {
    return {
      currentOrderCount: 0,
      userInfo: [],
      categorys: [],
      rating: 4,
      dataLoaded: true,
      pageCount: 1,
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
      link: "/user",
      headersLenden: [
        {
          text: "তারিখ",
          align: "left",
          // sortable: false,
          value: "name"
        },
        { text: "বিস্তারিত", value: "calories" },
        { text: "TXN ID", value: "fat" },
        { text: "পরিমান", value: "carbs" }
      ],
      desserts: [],
      sideData: [],
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  methods: {
    async getCurrentOrderCount() {
      var countOrder = await axios.get("/user-order-count");
      this.currentOrderCount = countOrder.data;
    },
    getCatgory() {
      this.categorys = localStorageService.getItem("categorys");
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getCurrentOrderCount();
    this.getCatgory();
  },
  async mounted() {
    await this.$store.commit("setUserInfo", {
      afterLoginUserData: localStorageService.getItem("currentUserData"),
      d_token: localStorageService.getItem("d_token")
    });
    this.userInfo = this.$store.getters.getCurrentUserData;
  }
};
</script>
<style lang="scss" scoped>
.card-height {
  height: 180px !important;
}
.empty-box {
  margin: 10px;
  height: 80px;
  text-align: right !important;
  float: right;
}
.icon-box {
  background-color: var(--primary);
  margin-left: 10px;
  height: 70%;
  width: 100%;
  margin-top: -22px;
  border-radius: 5px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.212);
  transition: 0.2s;
}

.custom-height {
  height: 75px;
}
.v-card-padding {
  padding: 8px;
  margin: 15px;
}
.v-card-padding-pic {
  padding: 0px;
  margin: 15px;
}
.procedures {
  padding: 15px;
}
.procedures > h4 {
  font-size: 20px;
}
.procedures > p {
  font-size: 13px;
}

.electrical_service,
.plumbing_service,
.ac_service,
.generator_service,
.it_service,
.cctv_service {
  font-size: 11px !important;
  padding: 5px;
  transition: 0.2s;
}
.electrical_service > img,
.plumbing_service > img,
.ac_service > img,
.generator_service > img,
.it_service > img,
.cctv_service > img {
  width: 32px;
  transition: 0.2s;
}

// SERVICES ICON CHANGE ON HOVER
.electrical_service:hover,
.plumbing_service:hover,
.ac_service:hover,
.generator_service:hover,
.it_service:hover,
.cctv_service:hover {
  cursor: pointer;
  transition: 0.2s;
  font-size: 0px !important;
  img {
    width: 45px;
    transition: 0.2s;
  }
}

.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
