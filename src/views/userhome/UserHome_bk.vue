<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout wrap align-center class="top-gapper">
              <v-flex md3 sm12 xs12 class="total-box">
                <v-card class="card-height">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box">
                        <v-icon>room_service</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          ORDER STATUS
                          <br>
                          <span class="b">No service is taken</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="drawerBalance = !drawerBalance;">VIEW DETAILS</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 class="total-box">
                <v-card class="card-height">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box">
                        <v-icon>emoji_events</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          REWARD POINT
                          <br>
                          <span class="a">17</span>
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
              <v-flex md6 sm12 xs12 class="total-box">
                <v-card class="card-height">
                  <v-layout
                    style="background-color: var(--primary); padding: 8px; border-bottom: 1px solid rgb(189, 189, 189)"
                  >
                    <v-icon style="color: white; margin-right: 7px;">room_service</v-icon>
                    <p style="font-size: 20px; margin: 0px !important; color: white;">
                      <b>PLACE ORDER</b>
                    </p>
                  </v-layout>
                  <v-layout wrap style="text-align: center !important;">
                    <v-flex md4 sm4 xs4>
                      <div class="services">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/electricity_g.png"
                          alt="electrical_service"
                          class="electrical_service"
                        >
                        <h4>Electrical Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="services">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/plumbing_g.png"
                          alt="plumbing_service"
                          class="plumbing_service"
                        >
                        <h4>Plumbing Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="services">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/ac_g.png"
                          alt="ac_service"
                          class="ac_service"
                        >
                        <h4>AC Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="services">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/genarator_g.png"
                          alt="generator_service"
                          class="generator_service"
                        >
                        <h4>Generator Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="services">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/it_g.png"
                          alt="it_service"
                          class="it_service"
                        >
                        <h4>IT Service</h4>
                      </div>
                    </v-flex>
                    <v-flex md4 sm4 xs4>
                      <div class="services">
                        <img
                          src="http://mistrimama.com/dashboard/img/icons/cctv_g.png"
                          alt="cctv_service"
                          class="cctv_service"
                        >
                        <h4>CCTV Service</h4>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper"
              style="background-color: white;"
            >
              <v-flex md12 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <img
                    style="width: 100%;"
                    src="http://mistrimama.com/images/Product-Promo-Banner.png"
                    alt
                  >
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <DrawerBalance :drawer="drawerBalance" @clicked="closeDrawer"/>
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
    // tableAction: function(data, option, isButton) {
    //   this.selectedImage = data.photo;
    //   this.rowData = data;
    //   // this.displayImage = process.env.VUE_APP_IMAGE_API_URL + data.distributor.image;
    //   this.actionButtonVisibleInSidePanel = isButton;
    //   if (option == "ownerDetails") {
    //     this.sidePanelTitle = "TENANT DETAILS";
    //     this.sideData = [
    //       { label: "Name", value: data.fullName },
    //       { label: "Address", value: data.homeAddress },
    //       { label: "Contact", value: data.phoneNumber }
    //     ];
    //   } else {
    //     this.sidePanelTitle = "OWNER DETAILS";
    //     this.sideData = [
    //       { label: "ID", value: data.id },
    //       { label: "Name", value: data.name },
    //       { label: "Address", value: data.address },
    //       { label: "Contact", value: data.contact },
    //       { label: "Region", value: data.region },
    //       { label: "City", value: data.city }
    //     ];
    //   }
    // },
    // async previous() {
    //   this.dataLoaded = false;
    //   let api =
    //     this.ownerListSelected != "Home Owner"
    //       ? "getHouseownerDataByPage"
    //       : "getHouseownerDataByPageOwnerOnly";
    //   let respo = await this.$store.dispatch(api, {
    //     currentPage: this.pageCount - 1
    //   });
    //   if (respo.status == "failure") this.errorAlerts(respo.data);
    //   this.pageCount = this.pageCount - 1;
    //   this.$router.push({ path: "/tenants", query: { page: this.pageCount } });
    //   this.arrangeData(this.dataList[this.pageCount - 1]);
    // },
    // async next() {
    //   this.dataLoaded = false;
    //   let numPage = parseInt(this.pageCount) + 1;
    //   let api =
    //     this.ownerListSelected != "Home Owner"
    //       ? "getHouseownerDataByPage"
    //       : "getHouseownerDataByPageOwnerOnly";
    //   let respo = await this.$store.dispatch(api, {
    //     currentPage: parseInt(numPage)
    //   });
    //   if (respo.status == "failure") this.errorAlerts(respo.data);
    //   this.pageCount = numPage;
    //   this.$router.push({ path: "/tenants", query: { page: numPage } });
    //   this.arrangeData(this.dataList[this.pageCount - 1]);
    // },
    // arrangeData(response) {
    //   this.tableData.data = response;
    //   this.dataLoaded = true;
    // }
  },
  watch: {
    // ownerListSelected: async function() {
    //   this.dataLoaded = false;
    //   let response;
    //   this.pageCount = 1;
    //   let api =
    //     this.ownerListSelected != "Home Owner"
    //       ? "getHouseownerDataByPage"
    //       : "getHouseownerDataByPageOwnerOnly";
    //   await this.$store.dispatch("emptyListHouseowner");
    //   response = await this.$store.dispatch(api, {
    //     currentPage: this.pageCount
    //   });
    //   if (response.status == "failure") this.errorAlerts(response.data);
    //   this.$router.push({ path: "/tenants", query: { page: this.pageCount } });
    //   this.arrangeData(this.dataList[this.pageCount - 1]);
    // }
  },
  computed: {
    // ...mapState({
    //   dataList: state => state.houseownerModule.houseownerInformation,
    //   currentPageState: state => state.houseownerModule.currentPageHouseowner,
    //   totalPage: state => state.houseownerModule.totalPageHouseowner
    // })
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
.services {
  // border: 1px solid rgb(189, 189, 189);
  font-size: 11px !important;
  padding: 8px;
}
.services > img {
  width: 30px;
}
// SERVICES ICON CHANGE ON HOVER
.electrical_service:hover {
  cursor: pointer;
}
.plumbing_service:hover {
  cursor: pointer;
}
.ac_service:hover {
  cursor: pointer;
}
.generator_service:hover {
  cursor: pointer;
}
.it_service:hover {
  cursor: pointer;
}
.cctv_service:hover {
  cursor: pointer;
}
</style>
