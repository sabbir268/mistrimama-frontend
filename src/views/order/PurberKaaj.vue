<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left;margin-bottom: 20px; font-size: 40px">
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex md12 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">work</v-icon>পূর্বের কাজ
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
                      class="elevation-2"
                      style="margin-top: -8px;"
                    >
                      <template v-slot:items="props">
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.name }}</td>
                        <!-- <td class="text-xs-center">
                          <v-tooltip v-model="show" bottom>
                            <template v-slot:activator="{ on }">
                              <v-icon v-on="on" class="icon-hover" color="accent">info</v-icon>
                            </template>
                            <span>বিস্তারিত</span>
                          </v-tooltip>
                        </td>-->
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
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.protein }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.protein }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.protein }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.protein }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.protein }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.protein }}</td>
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
      <DrawerPurberkaaj :drawer="drawerPurberkaaj" :tableData="sideData" @clicked="closeDrawer"/>
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
import DrawerPurberkaaj from "../purberkaaj/DrawerPurberkaaj";

export default {
  components: {
    DrawerPurberkaaj
  },
  data() {
    return {
      dataLoaded: true,
      pageCount: 1,
      dataLoaded: false,
      drawerNotunShohokari: false,
      drawerNotunShohokariEdit: false,
      drawerPurberkaaj: false,
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
      headers: [
        {
          text: "অর্ডার নং #",
          value: "calories"
        },
        // { text: "সার্ভিস", value: "iron", align: "center" },
        { text: "চার্জ", value: "fat" },
        { text: "জরুরি মূল্য", value: "carbs" },
        { text: "মোট মূল্য", value: "protein" },
        { text: "আয়", value: "iron", align: "center" },
        { text: "তারিখ", value: "iron", align: "center" },
        { text: "সময়", value: "iron", align: "center" },
        { text: "অর্ডার-এর সময়", value: "protein" },
        { text: "কাস্টমার", value: "iron" },
        { text: "সহকারী", value: "carbs" }
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
      this.drawerPurberkaaj = true;
      this.sideData = itemObject;
    },
    closeDrawer: function(value) {
      this.drawerPurberkaaj = false;
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
</style>
