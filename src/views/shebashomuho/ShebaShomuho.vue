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
                        <v-icon>room_service</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          <span class="a">{{localGetItem('sp').total_avail_service}}</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md12>
                      <div style="margin-bottom: 15px; margin-top: 5px;">
                        <h3 style="font-size: 17px;">সার্ভিস</h3>
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
                        <v-icon>description</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          <span class="a">{{localGetItem('sp').total_avail_sub_service}}</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md12>
                      <div style="margin-bottom: 15px; margin-top: 5px;">
                        <h3 style="font-size: 17px;">সাব সার্ভিস</h3>
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
                        <v-icon>account_box</v-icon>
                      </div>
                    </v-flex>
                    <v-flex md9 sm9 xs9>
                      <div class="empty-box">
                        <h3>
                          <div
                            class="a"
                            style="font-size: 22px !important; padding-bottom: 7px; padding-top: 6px;"
                          >
                            <span style="text-transform: capitalize">{{localGetItem('sp').category}}</span>
                            ({{localGetItem('sp').commission}}%)
                          </div>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <v-flex md12>
                      <div style="margin-bottom: 15px; margin-top: 5px;">
                        <h3 style="font-size: 17px;">একাউন্ট-এর ধরণ</h3>
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
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">room_service</v-icon>সেবা সমূহের বর্ণনা
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
                      :items="services"
                      hide-actions
                      :search="ownerSearch"
                      :items-per-page="5"
                      class="elevation-2 scrollable-table"
                      densed
                    >
                      <template slot="headers">
                        <th rowspan="2">
                          <div>ক্যাটাগরি</div>
                        </th>
                        <th rowspan="2">
                          <div>সাব ক্যাটাগরি</div>
                        </th>
                        <th rowspan="2">
                          <div>কাজের ধরণ</div>
                        </th>
                        <th align="center" colspan="3" rowspan="2">
                          <div style="padding: 20px;">মূল কাজের মূল্য</div>
                          <tr>
                            <td>সার্ভিস মূল্য</td>
                            <td>পার্টনার-এর আয়</td>
                            <td>মিস্ত্রীমামা কমিশন</td>
                          </tr>
                        </th>
                        <th align="center" colspan="3" rowspan="2">
                          <div style="padding: 20px;">অতিরিক্ত কাজের মূল্য</div>
                          <tr>
                            <td>অতিরিক্ত ইউনিট মূল্য</td>
                            <td>পার্টনার-এর আয়</td>
                            <td>মিস্ত্রীমামা কমিশন</td>
                          </tr>
                        </th>
                      </template>

                      <template v-slot:items="props">
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.category_id }}</td>
                        <td class="text-xs-left" style="cursor: pointer">{{ props.item.service_id }}</td>
                        <td class="text-xs-left" style="cursor: pointer">{{ props.item.name }}</td>
                        <td class="text-xs-left" style="cursor: pointer">{{ props.item.price }}</td>
                        <td class="text-xs-left" style="cursor: pointer">{{ props.item.price }}</td>
                        <td class="text-xs-left" style="cursor: pointer">{{ props.item.price }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.additional_price }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.additional_price }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.additional_price }}</td>
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
import axios from "../../axios_instance.js";
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
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
      tabValue: [1, 2],
      headers: [
        {
          text: "ক্যাটাগরি",
          value: "name"
        },
        { text: "সাব ক্যাটাগরি", value: "calories" },
        { text: "কাজের ধরণ", value: "fat" },
        { text: "মূল কাজের মূল্য", value: "carbs" },
        { text: "অতিরিক্ত কাজের মূল্য", value: "protein" }
      ],
      services: [],
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
    },
    async getServices() {
      var allservices = await axios.get("/sp/services");
      this.services = allservices.data;
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getServices();
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
th {
  border: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center !important;
}
td {
  text-align: center !important;
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
