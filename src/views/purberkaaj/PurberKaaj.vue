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
                      :items="orders"
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
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.order_no }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.total_price }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.extra_charge }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ parseInt(props.item.total_price) + parseInt(props.item.extra_charge) }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{(props.item.total_price - ((parseInt(props.item.total_price) + parseInt(props.item.extra_charge)) * 20)/100)}}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.date }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.time }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.orders_place_time }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.name }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item.order_items)"
                        >{{ props.item.comrade_id }}</td>
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


      <v-navigation-drawer
        v-if="drawer"
        width="800"
        v-model="drawer"
        temporary
        right
        style="position: fixed"
      >
        <v-list class="pa-3" style="background-color: var(--primary) !important">
          <h3
            style="font-size: 20px; text-align: center; color: var(--secondary)"
          >সার্ভিস-এর বিস্তারিত</h3>
        </v-list>
        <v-list style="background-color: white !important;" class="pt-0">
          <div style="padding: 20px;">
            <v-data-table
              :headers="headersItem"
              :items="orderItems"
              hide-actions
              :items-per-page="5"
              class
            >
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.service_name }}</td>
                <td class="text-xs-left">{{ props.item.service_bit_name }}</td>
                <td class="text-xs-left">{{ props.item.quantity }}</td>
                <td class="text-xs-left">{{ props.item.price }}</td>
                <td class="text-xs-left">{{ props.item.additional_price }}</td>
                <td class="text-xs-left">{{ props.item.total_price }}</td>
                <td class="text-xs-left">
                  <v-icon>{{ props.item.status == 1 ? 'done' : 'close' }}</v-icon>
                </td>
              </template>
            </v-data-table>
            <div style="text-align: center; margin-top: 15px;">
              <v-btn
                color="accent"
                @click.stop="drawer = false; $emit('clicked', false)"
                style="min-width: 100px !important; margin: 5px; margin-top: 20px;"
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
import axios from "../../axios_instance";

export default {
  data() {
    return {
      orders: [],
      orderItems: "",
      dataLoaded: true,
      pageCount: 1,
      drawerNotunShohokari: false,
      drawerNotunShohokariEdit: false,
      drawer: false,
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
      headersItem: [
        { text: "সার্ভিস", value: "service" },
        { text: "সার্ভিস বিট", value: "service bit" },
        { text: "পরিমান", value: "quantity" },
        { text: "মূল্য", value: "price" },
        { text: " অতিঃমূল্য", value: "additional price" },
        { text: "মোট মূল্য", value: "total price" },
        { text: "অবস্থা", value: "status" }
      ],
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
      this.drawer = true;
      this.orderItems = itemObject;
    },
    closeDrawer: function(value) {
      this.drawer = false;
    },
    async getOrders() {
      var res = await axios.get("/sp/order-history");
      this.orders = res.data;
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getOrders();
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
