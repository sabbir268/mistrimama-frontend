<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout wrap align-center class="top-gapper">
              <v-flex md4 sm12 xs12 class="total-box">
                <v-card class="border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>check</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          <span class="a">17</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md12>
                      <div style="margin-bottom: 15px; margin-top: 5px;">
                        <h3 style="font-size: 17px;">চলতি কাজের সংখ্যা</h3>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md4 sm12 xs12 class="total-box">
                <v-card class="border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>pan_tool</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          <span class="a">3</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md12>
                      <div style="margin-bottom: 15px; margin-top: 5px;">
                        <h3 style="font-size: 17px;">অপেক্ষামান কাজের সংখ্যা</h3>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md4 sm12 xs12 class="total-box">
                <v-card class="border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>work</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          <span class="a">20</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md12>
                      <div style="margin-bottom: 15px; margin-top: 5px;">
                        <h3 style="font-size: 17px;">মোট কাজ</h3>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex md12 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <v-tabs icons-and-text centered grow v-model="tab">
                    <v-tabs-slider color="accent"></v-tabs-slider>
                    <v-tab class="classic-tabs" style="border-radius: 5px 0px 0px 0px">
                      ফোন অর্ডার
                      <v-icon>local_phone</v-icon>
                    </v-tab>
                    <v-tab class="classic-tabs" style="border-radius: 0px 5px 0px 0px">
                      চলতি কাজ
                      <v-icon>av_timer</v-icon>
                    </v-tab>
                    <v-tabs-items v-model="tab">
                      <v-tab-item v-for="item in tabValue" :key="item">
                        <div v-if="item == 1">
                          <ShokolKaajPhoneOrder />
                        </div>
                        <div v-if="item == 2">
                          <ShokolKaajCholtiKaaj />
                        </div>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-tabs>
                </v-card>
              </v-flex>
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
        <v-btn color="primary" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShokolKaajCholtiKaaj from "../shokolkaaj/ShokolKaajCholtiKaaj";
import ShokolKaajPhoneOrder from "../shokolkaaj/ShokolKaajPhoneOrder";

export default {
  components: {
    ShokolKaajCholtiKaaj,
    ShokolKaajPhoneOrder
  },
  data() {
    return {
      dataLoaded: true,
      pageCount: 1,
      dataLoaded: false,
      drawer: null,
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
      tabValue: [1, 2],
      headers: [
        {
          text: "অর্ডার",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "সার্ভিস", value: "calories" },
        { text: "অর্ডারকারী", value: "fat" },
        { text: "সহকারী", value: "carbs" },
        { text: "বিস্তারিত", value: "protein" },
        { text: "অবস্থা", value: "iron" }
      ],
      desserts: [],
      drawer: null,
      sideData: [],
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  methods: {
    openDrawer: function(itemObject) {
      this.drawer = !this.drawer;
      this.sideData = itemObject;
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
  padding: 10px;
  margin: 15px;
}
.services {
  border: 1px solid var(--primary);
  font-size: 16px !important;
  padding: 10px;
}
.header-font {
  font-size: 30px;
}
.empty-box > h3 > .a {
  color: var(--secondary);
  font-size: 30px !important;
  background-color: var(--primaryTwo);
  // padding-right: 15px !important;
  // padding-left: 7px !important;
  margin-right: 15px !important;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 1px 1px rgba(31, 31, 31, 0.26);
}
.empty-box > h3 {
  margin-top: 0px;
}
.empty-box {
  margin: 0px;
  height: 60px;
  text-align: right !important;
  float: right;
}
.icon-box {
  background-color: var(--primary);
  margin-left: 10px;
  height: 100%;
  width: 100%;
  margin-top: -22px;
  border-radius: 5px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.212);
  transition: 0.2s;
}
.icon-box > i {
  font-size: 30px;
  color: var(--third) !important;
  line-height: 160%;
}

.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
