<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout wrap align-center class="top-gapper">
              <v-flex md3 sm12 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>account_balance_wallet</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          ব্যালান্স
                          <br />
                          <span class="a">৳ {{balance}}/-</span>
                          <br />
                          <span class="b">উত্তোলনযোগ্য ৳ {{balance > 500 ? balance - 500 : 0 }}/-</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="drawerBalance = !drawerBalance;">ক্যাশ আউট করুন</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>group</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          মিস্ত্রি মামার কাজ
                          <br />
                          <!-- <span class="a">25</span>
                          <br>-->
                          <!-- <span class="b" style="font-size: 13px; font-weight: bold">
                            <u>সি.এম</u>
                          </span>
                          <br>-->
                          <span class="b">কাজের সংখ্যা (সি.এম): 18</span>
                          <br />
                          <span class="b">আয় (সি.এম): ৳ 2400/-</span>
                          <!-- <span class="b" style="font-size: 13px; font-weight: bold">
                            <u>সকল</u>
                          </span>-->
                          <br />
                          <span class="b">কাজের সংখ্যা (সকল): 25</span>
                          <br />
                          <span class="b">আয় (সকল): ৳ 3470/-</span>
                          <br />
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="goto('/shohokari')">বিস্তারিত</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>group</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          সহকারীর সংখ্যা
                          <br />
                          <span class="a">13</span>
                          <br />
                          <span class="b">
                            একটিভ - 6
                            <br />একটিভ নয় - 2
                          </span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="goto('/shohokari')">সহকারীর বিস্তারিত</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>speed</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3 style="font-size: 30px !important">
                          রেটিং
                          <br />
                          <!-- <v-rating size="25" dense color="secondary" readonly v-model="rating"></v-rating> -->
                        </h3>
                      </div>
                    </v-flex>
                    <v-flex style="margin-top: -60px;">
                      <!-- <img
                        class="rating-image"
                        :src="require(`../../assets/${rating}star.png`)"
                        alt="rating"
                      /> -->
                      4.7
                      <v-icon style="font-size: 44px">star</v-icon>
                    </v-flex>

                    <!-- <v-flex md12 sm12 xs12>
                      <v-rating
                        style="margin-top: -20px !important;"
                        size="25"
                        color="primary"
                        v-model="rating"
                      ></v-rating>
                    </v-flex>-->
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout wrap align-center class="side-gapper" style="background-color: white;">
              <v-flex md6 sm6 xs12 class="elevation-2">
                <Mulmenu_Lenden />
                <v-devider vertical></v-devider>
              </v-flex>

              <v-flex md6 sm6 xs12 class="elevation-2">
                <Newjob />
              </v-flex>
            </v-layout>
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex md12 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">room_service</v-icon>আপনার সার্ভিস সমূহ
                  </h3>
                  <v-layout wrap style="text-align: center !important; padding-top: 10px;">
                    <v-flex md2 sm4 xs4>
                      <div class="electrical_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/electricity_g.png"
                          alt="electrical_service"
                          class="electrical_service"
                        />
                        <h4>Electrical Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md2 sm4 xs4>
                      <div class="plumbing_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/plumbing_g.png"
                          alt="plumbing_service"
                          class="plumbing_service"
                        />
                        <h4>Plumbing Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md2 sm4 xs4>
                      <div class="ac_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/ac_g.png"
                          alt="ac_service"
                          class="ac_service"
                        />
                        <h4>AC Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md2 sm4 xs4>
                      <div class="generator_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/genarator_g.png"
                          alt="generator_service"
                          class="generator_service"
                        />
                        <h4>Generator Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md2 sm4 xs4>
                      <div class="it_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/it_g.png"
                          alt="it_service"
                          class="it_service"
                        />
                        <h4>IT Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md2 sm4 xs4>
                      <div class="cctv_service">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/cctv_g.png"
                          alt="cctv_service"
                          class="cctv_service"
                        />
                        <h4>CCTV Service</h4>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <DrawerBalance :drawer="drawerBalance" @clicked="closeDrawer" />
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "../../chart.js";
import Mulmenu_Lenden from "../mulmenu/Mulmenu_Lenden";
import Mulmenu_NotunKaaj from "../mulmenu/Mulmenu_NotunKaaj";
import DrawerBalance from "../mulmenu/DrawerBalance";
import Newjob from "../mulmenu/Newjob";
import axios from "../../axios_instance";

export default {
  components: {
    Mulmenu_Lenden,
    Mulmenu_NotunKaaj,
    DrawerBalance,
    Newjob
  },
  data() {
    return {
      balance: 0,
      rating: 5,
      dataLoaded: true,
      pageCount: 1,
      statements: [],
      drawerBalance: null,
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
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
    closeDrawer: function(value) {
      this.drawerBalance = false;
    },

    async getBalance() {
      var res = await axios.get("/sp/balance");
      this.balance = res.data;
    },
    async getRating() {
      var res = await axios.get("/service-provider/rating");
      this.rating = res.data;
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getBalance();
    this.getRating();
  }
};
</script>
<style lang="scss" scoped>
a {
  cursor: pointer;
  color: var(--dark);
}
a:hover {
  text-decoration: underline;
  color: var(--primary);
}
.custom-height {
  height: 75px;
}
.v-card-padding {
  padding: 8px;
  margin: 15px;
}
.services {
  border: 1px solid var(--primary);
  font-size: 16px !important;
  padding: 10px;
}

// SERVICES
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
.rating-image {
  width: auto;
  margin-top: -80px;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
