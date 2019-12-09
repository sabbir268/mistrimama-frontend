<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout wrap align-center class="top-gapper">
              <v-flex md3 sm6 xs12 class="total-box">
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
                          বর্তমান
                          <br>একাউন্ট ব্যালান্স
                          <br>
                          <span class="a">৳ 3487/-</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <div class="box-buttons">
                      <p
                        style="font-size: 17px; font-weight: bold; color: grey;"
                      >উত্তোলনযোগ্য ৳ 2944/-</p>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm6 xs12 class="total-box">
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
                          সর্বশেষ
                          <br>সার্ভিস সমূহ
                          <br>
                          <span class="a">470</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="drawerShorboShesh = true">বিস্তারিত</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm6 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>attach_money</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          শেষ ক্যাশ
                          <br>আউট-এর
                          <br>পরিমান
                          <br>
                          <span class="a">৳ 1500/-</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="drawerSheshCashOut = true">বিস্তারিত</v-btn>
                    </div>
                  </v-layout>
                </v-card>
              </v-flex>
              <v-flex md3 sm6 xs12 class="total-box">
                <v-card class="card-height border_radius">
                  <v-layout wrap>
                    <v-flex md3 sm3 xs3>
                      <div class="icon-box floating">
                        <v-icon>replay</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          শেষ রিচার্জ-এর
                          <br>পরিমান
                          <br>
                          <span class="a">৳ 200/-</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap class="lower-box">
                    <div class="box-button">
                      <v-btn @click="drawerSheshRecharge = true">বিস্তারিত</v-btn>
                    </div>
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
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">attach_money</v-icon>আয়ের বিবরণের বর্ণনা
                  </h3>
                  <v-layout>
                    <v-flex md8 sm7 xs6>
                      <v-text-field
                        class="custom-searchbox"
                        label="Search ..."
                        solo
                        v-model="ownerSearch"
                      >
                        <template v-slot:append>
                          <v-icon class="icon-hover" @click="searchItem()">search</v-icon>
                        </template>
                      </v-text-field>
                    </v-flex>
                    <v-flex md4 sm5 xs6 style="text-align: right;">
                      <v-btn
                        small
                        @click="previous()"
                        color="primaryButton"
                        class="pagination-button"
                      >
                        <v-icon>keyboard_arrow_left</v-icon>
                      </v-btn>
                      <v-btn
                        @click="previous()"
                        small
                        class="margins pagination-page-button"
                        color="primaryButton"
                        disabled
                      >
                        <span style="color: var(--error)">1</span>
                      </v-btn>
                      <v-btn
                        small
                        @click="previous()"
                        color="primaryButton"
                        class="pagination-button"
                      >
                        <v-icon>keyboard_arrow_right</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <template>
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      hide-actions
                      :search="ownerSearch"
                      :items-per-page="5"
                      class="elevation-2 scrollable-table"
                    >
                      <template v-slot:items="props">
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.name }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.calories }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.fat }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.carbs }}</td>
                      </template>
                    </v-data-table>
                    <!-- <v-flex md12 sm12 xs12 style="text-align: center; margin-top: 10px;">
                      <v-btn
                        @click="previous()"
                        class="margins"
                        color="primaryTwo"
                        style="min-width: 20px !important;"
                      >
                        <v-icon>keyboard_arrow_left</v-icon>
                      </v-btn>
                      <v-btn
                        @click="previous()"
                        class="margins"
                        color="primaryTwo"
                        disabled
                        style="min-width: 20px !important;"
                      >
                        <span style="color: var(--error)">1</span>
                      </v-btn>
                      <v-btn
                        @click="previous()"
                        class="margins"
                        color="primaryTwo"
                        style="min-width: 20px !important;"
                      >
                        <v-icon>keyboard_arrow_right</v-icon>
                      </v-btn>
                    </v-flex>-->
                  </template>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <DrawerShorboShesh :drawer="drawerShorboShesh" @clicked="closeDrawer"/>
      <DrawerSheshCashOut :drawer="drawerSheshCashOut" @clicked="closeDrawer"/>
      <DrawerSheshRecharge :drawer="drawerSheshRecharge" @clicked="closeDrawer"/>
      <v-navigation-drawer
        width="500"
        v-model="drawer"
        absolute
        temporary
        right
        style="position: fixed"
      >
        <v-list class="pa-3" style="background-color: var(--primary) !important">
          <h2 style="text-align: center; color: var(--secondary)">বিস্তারিত</h2>
        </v-list>
        <v-list style="background-color: white !important;" class="pt-0" dense>
          <v-divider></v-divider>
          <div style="text-align: center; margin-top: 40px;">
            <v-avatar :size="170" color="grey lighten-4" style="margin-bottom: 15px;">
              <img
                class="rect-image"
                src="https://image.flaticon.com/icons/png/512/236/236832.png"
                alt="user_image"
              >
            </v-avatar>
            <br>
          </div>
          <div style="margin-top: 20px; padding: 20px;">
            <v-list-tile style="margin-bottom: 15px;">
              <v-list-tile-content>
                <label style="color: var(--accent)">Dessert Name</label>
                <v-list-tile-title style="font-size: 17px;">{{sideData.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile style="margin-bottom: 15px;">
              <v-list-tile-content>
                <label style="color: var(--accent)">Calories</label>
                <v-list-tile-title style="font-size: 17px;">{{sideData.calories}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile style="margin-bottom: 15px;">
              <v-list-tile-content>
                <label style="color: var(--accent)">Fat</label>
                <v-list-tile-title style="font-size: 17px;">{{sideData.fat}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <div style="text-align: center; margin-top: 20px;">
              <v-btn
                color="accent"
                @click.stop="drawer = false; $emit('clicked', false)"
                style="min-width: 100px !important; margin: 5px;"
              >
                <v-icon class="button-icon-cancel">close</v-icon>
              </v-btn>
            </div>
          </div>
        </v-list>
      </v-navigation-drawer>
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
import DrawerShorboShesh from "../ayerbiboroni/DrawerShorboShesh";
import DrawerSheshCashOut from "../ayerbiboroni/DrawerSheshCashOut";
import DrawerSheshRecharge from "../ayerbiboroni/DrawerSheshRecharge";

export default {
  components: {
    DrawerShorboShesh,
    DrawerSheshCashOut,
    DrawerSheshRecharge
  },
  data() {
    return {
      dataLoaded: true,
      pageCount: 1,
      dataLoaded: false,
      drawer: null,
      drawerShorboShesh: null,
      drawerSheshCashOut: null,
      drawerSheshRecharge: null,
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
      headers: [
        {
          text: "তারিখ",
          value: "name"
        },
        { text: "বিস্তারিত", value: "calories" },
        { text: "টি.এক্স.এন আইডি #", value: "fat" },
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
    openDrawer: function(itemObject) {
      this.drawer = !this.drawer;
      this.sideData = itemObject;
    },
    closeDrawer: function(value) {
      this.drawer = false;
      this.drawerShorboShesh = false;
      this.drawerSheshCashOut = false;
      this.drawerSheshRecharge = false;
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
  height: 120px;
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
.box-buttons {
  width: 100%;
  margin: 0px;
}
</style>
