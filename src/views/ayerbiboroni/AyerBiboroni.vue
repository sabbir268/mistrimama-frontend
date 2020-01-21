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
                          <br />একাউন্ট ব্যালান্স
                          <br />
                          <span class="a">৳ {{balance}}/-</span>
                        </h3>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout wrap>
                    <div class="box-buttons">
                      <p
                        style="font-size: 17px; font-weight: bold; color: grey;"
                      >উত্তোলনযোগ্য ৳ {{balance > 500 ? balance - 500 : 0 }}/-</p>
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
                          <br />সার্ভিস
                          <br />
                          <span
                            class="a"
                          >৳ {{(lastOrder.total_price - ((parseInt(lastOrder.total_price) + parseInt(lastOrder.extra_charge)) * 20)/100)}}/-</span>
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
                          <br />আউট-এর
                          <br />পরিমান
                          <br />
                          <span class="a">৳ {{lastWithdraw.amount > 0 ? lastWithdraw.amount : 0}}/-</span>
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
                          <br />পরিমান
                          <br />
                          <span class="a">৳ {{lastRecharge.amount}}/-</span>
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
                    <v-icon class="custom-icon">sync_alt</v-icon>লেনদেন এর বিবরন
                  </h3>
                  <v-layout>
                    <v-flex md12 sm12 xs12>
                      <v-text-field
                        class="custom-searchbox"
                        label="Search ..."
                        solo
                        v-model="search"
                      >
                        <template v-slot:append>
                          <v-icon class="icon-hover">search</v-icon>
                        </template>
                      </v-text-field>
                    </v-flex>
                    <!-- <v-flex md4 sm5 xs6 style="text-align: right;">
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
                    </v-flex>-->
                  </v-layout>
                  <template>
                    <v-data-table
                      :headers="headers"
                      :items="statements"
                      :search="search"
                      class="elevation-2 scrollable-table"
                    >
                      <template v-slot:items="props">
                        <td class="text-xs-left">{{ props.item.date }}</td>
                        <td class="text-xs-left">{{ props.item.details }}</td>
                        <td class="text-xs-left">{{props.item.trxno}}</td>
                        <td class="text-xs-right">
                          <v-chip>
                            <v-avatar>
                              <v-icon
                                :color="props.item.status == 'credit' ? 'success' : 'red'"
                              >{{ props.item.status == 'credit' ? 'add_circle_outline' : 'remove_circle_outline' }}</v-icon>
                            </v-avatar>
                            {{ props.item.amount }}/-
                          </v-chip>
                        </td>
                      </template>
                    </v-data-table>
                  </template>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <DrawerShorboShesh :drawer="drawerShorboShesh" @clicked="closeDrawer" />
      <DrawerSheshCashOut :drawer="drawerSheshCashOut" @clicked="closeDrawer" />
      <DrawerSheshRecharge :drawer="drawerSheshRecharge" @clicked="closeDrawer" />
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
              />
            </v-avatar>
            <br />
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
import axios from "../../axios_instance";

export default {
  components: {
    DrawerShorboShesh,
    DrawerSheshCashOut,
    DrawerSheshRecharge
  },
  data() {
    return {
      balance: 0,
      lastOrder: "",
      lastWithdraw: "",
      lastRecharge: "",
      search: "",
      statements: [],
      dataLoaded: true,
      pageCount: 1,
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
    },
    async getBalance() {
      var res = await axios.get("/sp/balance");
      this.balance = res.data;
    },
    async getLastRecharge() {
      var res = await axios.get("/sp/last-recharge");
      this.lastRecharge = res.data;
    },
    async getLastWithdraw() {
      var res = await axios.get("/sp/last-withdraw");
      this.lastWithdraw = res.data;
    },
    async getLastOrder() {
      var res = await axios.get("/sp/last-order");
      this.lastOrder = res.data;
    },
    async getStatements() {
      var res = await axios.get("/sp/statements");
      this.statements = res.data;
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getBalance();
    this.getLastRecharge();
    this.getLastWithdraw();
    this.getLastOrder();
    this.getStatements();
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

.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
