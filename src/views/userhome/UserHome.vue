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
                        <v-icon>room_service</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          ORDER STATUS
                          <br />
                          <span class="b">No service is taken</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <!-- <div class="box-button">
                      <v-btn style="min-width: 10px; width: 100%" @click="drawerBalance = !drawerBalance;">VIEW DETAILS</v-btn>
                    </div>-->
                    <v-layout wrap class="lower-box">
                      <v-flex
                        md12
                        style="height: 100%; padding-left: 10px; padding-right: 10px; padding-top: 6px;"
                      >
                        <v-btn
                          style="font-size: 12px !important; min-width: 10px; width: 100%"
                          @click="drawerBalance = !drawerBalance;"
                        >VIEW DETAILS</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 class="total-box">
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
                        style="font-size: 12px !important; min-width: 10px; width: 100% "
                      >ADJUST BILL</v-btn>
                    </v-flex>
                    <v-flex
                      md6
                      style="height: 100%; padding-left: 6px; padding-right: 10px; padding-top: 6px;"
                    >
                      <v-btn
                        style="font-size: 12px !important; min-width: 10px; width: 100%"
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
                      <b>PLACE ORDER</b>
                    </p>
                  </v-layout>
                  <v-layout wrap style="text-align: center !important;">
                   
                    <v-btn style="none" :to="{path: '/service/air-conditionar'}">
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
                    </v-btn>
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
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout
              wrap
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex md6 sm12 xs12>
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
              </v-flex>
              <v-flex md6 sm12 xs12 align-center>
                <v-card class="v-card-padding-pic" flat>
                  <img
                    style="width: 100%;"
                    src="http://mistrimama.com/images/Product-Promo-Banner.png"
                    alt
                  />
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
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BarChart from "../../chart.js";
import Mulmenu_Lenden from "../mulmenu/Mulmenu_Lenden";
import Mulmenu_NotunKaaj from "../mulmenu/Mulmenu_NotunKaaj";
import DrawerBalance from "../mulmenu/DrawerBalance";

export default {
  components: {
    Mulmenu_Lenden,
    Mulmenu_NotunKaaj,
    DrawerBalance,
    BarChart
  },
  data() {
    return {
      rating: 4,
      dataLoaded: true,
      pageCount: 1,
      dataLoaded: false,
      drawerBalance: null,
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
      ],
      dailyOrMonthly: "daily",
      dataday: {
        labels: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        datasets: [
          {
            label: "Number of Transection",
            backgroundColor: "#febe00",
            data: [6, 44, 82, 13, 23, 57, 59]
          },
          {
            label: "Volume of Transected Money",
            backgroundColor: "#222222",
            data: [54, 6, 82, 85, 25, 56, 79]
          },
          {
            label: "Number of Users",
            backgroundColor: "#ed1c24",
            data: [15, 32, 39, 37, 35, 18, 7]
          }
        ]
      },
      datamonth: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Number of Transection",
            backgroundColor: "#f87979",
            data: [28, 78, 1, 17, 96, 75, 47, 42, 2, 7, 44, 13]
          },
          {
            label: "Volume of Transected Money",
            backgroundColor: "#41B883",
            data: [42, 27, 63, 61, 56, 57, 50, 87, 35, 53, 32, 90]
          },
          {
            label: "Number of Users",
            backgroundColor: "#35495E",
            data: [37, 99, 13, 15, 83, 86, 56, 14, 50, 64, 35, 52]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "'Montserrat', sans-serif"
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "'Montserrat', sans-serif"
              }
            }
          ]
        },
        legend: {
          labels: {
            fontFamily: "'Montserrat', sans-serif"
          }
        }
      }
    };
  },
  methods: {
    closeDrawer: function(value) {
      this.drawerBalance = false;
    }
    
  },
  watch: {
    
  },
  computed: {
  },
  async mounted() {
    this.desserts = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      }
    ];
    this.dataLoaded = true;
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
</style>
