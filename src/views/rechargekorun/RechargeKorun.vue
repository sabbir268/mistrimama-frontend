<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex
                md12
                sm12
                xs12
                class="v-card-padding"
                style="margin-bottom: 0px !important; padding-bottom: 0px !important"
              >
                <h3 class="custom-title">
                  <v-icon class="custom-icon">flash_on</v-icon>রিচার্জ করুন
                </h3>
              </v-flex>
              <v-flex md6 sm12 xs12>
                <v-card
                  class="v-card-padding"
                  flat
                  style="margin-top: 0px !important; padding-top: 0px !important"
                >
                  <div>
                    <v-card class="bordered-div">
                      <div class="label-divs" style="padding-top: 20px !important;">
                        <label style="color: var(--secondary);">
                          <b>এম.এফ.এস / Bank</b>
                        </label>
                      </div>
                      <!-- <hr> -->
                      <div class="label-divs">
                        <v-form @submit.prevent>
                          <v-row>
                            <v-col class="d-flex" cols="12">
                              <v-select
                                color="accent"
                                :items="itemsService"
                                v-model="service"
                                label="মাধমে নির্বাচন করুন"
                              ></v-select>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                color="accent"
                                clearable
                                v-model="transactionNumber"
                                label="ট্রানজেক্শন নাম্বার"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                color="accent"
                                clearable
                                v-model="amount"
                                label="টাকার পরিমাণ"
                              ></v-text-field>
                            </v-col>
                            <div style="text-align: center;">
                              <v-btn
                                @click.stop="drawer = false; $emit('clicked', false)"
                                type="submit"
                                color="primary"
                                style="min-width: 250px !important; margin: 5px;"
                              >নিশ্চিত করুন</v-btn>
                            </div>
                          </v-row>
                        </v-form>
                      </div>
                    </v-card>
                  </div>
                </v-card>
              </v-flex>
              <v-flex md6 sm12 xs12 hidden-md-and-up>
                <v-card
                  flat
                  class="v-card-padding"
                  style="margin-top: 20px !important; padding-top: 0px !important"
                >
                  <div>
                    <v-card class="bordered-div" flat style="padding-top: 0px !important">
                      <div class="label-divs" style="margin-top: 0px !important;">
                        <label style="color: var(--secondary);">
                          <b>বিকাশ-এর মাধ্যমে মিস্ট্রিমামা একাউন্ট-এ রিচার্জ করার জন্য নিচের ধাপগুলো অনুসূরণ করুন</b>
                        </label>
                      </div>
                      <div v-for="step in steps" :key="step" class="label-divs">{{ step }}</div>
                    </v-card>
                  </div>
                </v-card>
              </v-flex>
              <v-flex md6 sm12 xs12 hidden-sm-and-down>
                <v-card
                  class="v-card-padding"
                  flat
                  style="margin-top: 0px !important; padding-top: 0px !important"
                >
                  <div>
                    <v-card
                      class="bordered-div"
                      flat
                      style="margin-top: -40px !important; padding-top: 0px !important"
                    >
                      <div class="label-divs" style="margin-top: 0px !important;">
                        <label style="color: var(--secondary);">
                          <b>বিকাশ-এর মাধ্যমে মিস্ট্রিমামা একাউন্ট-এ রিচার্জ করার জন্য নিচের ধাপগুলো অনুসূরণ করুন</b>
                        </label>
                      </div>
                      <div v-for="step in steps" :key="step" class="label-divs">{{ step }}</div>
                    </v-card>
                  </div>
                </v-card>
                <!-- <v-card
                  class="v-card-padding"
                  flat
                  style="margin-top: 0px !important; padding-top: 0px !important"
                >
                  <v-card
                    class="bordered-div"
                    flat
                    style="margin-top: 0px !important; padding-top: 0px !important"
                  >
                    <div class="label-divs" style="margin-top: 0px !important;">
                      <label style="color: var(--secondary);">
                        <b>বিকাশ-এর মাধ্যমে মিস্ট্রিমামা একাউন্ট-এ রিচার্জ করার জন্য নিচের ধাপগুলো অনুসূরণ করুন</b>
                      </label>
                    </div>
                    <div v-for="step in steps" :key="step" class="label-divs">{{ step }}</div>
                  </v-card>
                </v-card>-->
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

export default {
  data() {
    return {
      dataLoaded: true,
      snackbar: null,
      alertMessage: null,
      transactionNumber: null,
      amount: null,
      service: null,
      itemsService: ["বিকাশ", "ব্যাংক ডিপোজিট", "মিস্ট্রিমামা এজেন্ট ডিপোজিট"],
      steps: [
        "ধাপ-১: আপনার পার্সোনাল বিকাশ নাম্বার থেকে মিস্ট্রি মামা মার্চেন্ট নাম্বার ০১৭২৭০৬৩৫৯৩ এ প্রয়োজন অনুযায়ী টাকা সেন্ড করুন |",
        "ধাপ-২: টাকা রিচার্জ করার পর আপনার মোবাইল নাম্বার-এ বিকাশ থেকে একটি কনফার্মেশন এস.এম.এস আসবে তা সংরক্ষণ করুন |",
        "ধাপ-৩: যেকোনো স্মার্ট ডিভাইস থেকে আপনার আই.ডি এবং পাসওয়ার্ড দিয়ে মিস্ট্রি মামা একাউন্ট-এ লগইন করুন |"
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
.bordered-div {
  // border: 2px solid rgba(102, 102, 102, 0.555);
  // padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
}
.label-divs {
  margin: 15px;
}
</style>
