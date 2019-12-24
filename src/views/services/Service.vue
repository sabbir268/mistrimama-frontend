<template>
  <v-layout row>
    <v-flex xs12 md8 offset-md2 class="mt-3">
      <!-- {{categorys}} -->
      <div class="service-area" v-if="viewarea == 'service'">
        <v-layout v-if="categorys" row wrap text-xs-center>
          <!-- <v-flex v-for="i in 6" :key="`2${i}`" xs2 class="text-center" > -->
          <v-flex xs2 class="text-center" v-for="category in categorys" :key="category.id">
            <v-card style="border-radius: 0px !important;" class="py-2">
              <router-link style="text-decoration: none;" :to="'/service/'+category.slug">
                <v-card-text class="px-0 pt-0 pb-0">
                  <img
                    v-if="$route.params.category == category.slug"
                    class="footer-icons"
                    style="width:90%"
                    :src="category.thumb"
                    :alt="category.name"
                  />
                  <img
                    v-else
                    class="footer-icons"
                    style="width:90%"
                    :src="category.icon"
                    :alt="category.name"
                  />
                </v-card-text>
                <span>{{category.name}} Service</span>
              </router-link>
            </v-card>
          </v-flex>
        </v-layout>

        <v-card>
          <v-card-title primary-title>
            <v-layout justify-center row>
              <div class="headline">All {{category.name}} Services</div>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-layout xs12 justify-center row>
            <v-progress-linear
              v-if="!services.length"
              v-show="isProgressLoading"
              :indeterminate="true"
            ></v-progress-linear>
          </v-layout>

          <v-layout v-if="services.length != 0" xs12 md12 row>
            <v-flex xs12 md6>
              <v-list v-if="services">
                <v-list-tile
                  v-for="service in services"
                  :key="service.id"
                  avatar
                  @click="loadServiceBit(service.id)"
                >
                  <v-list-tile-avatar>
                    <img :src="service.icon" />
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="service.name"></v-list-tile-title>
                  </v-list-tile-content>

                  <!-- <v-list-tile-action>
                  <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
                  </v-list-tile-action>-->
                </v-list-tile>
              </v-list>
            </v-flex>
            <v-divider vertical></v-divider>
            <v-flex xs12 md6 v-if="serviceBits" v:bind="layoutAttr">
              <!-- {{selectedServiceBit}} -->
              <v-list-tile v-for="serviceBit in serviceBits" :key="serviceBit.id">
                <!-- <v-checkbox
                v-model="selectedServiceBit"
                :label="serviceBit.name"
                :value="serviceBit"
                >{{serviceBit.name}}</v-checkbox>-->
                <v-checkbox v-model="selectedServiceBit" :value="serviceBit">
                  <template v-slot:label>
                    <v-list-tile-content>
                      <v-list-tile-title class="pt-1">{{serviceBit.name}}</v-list-tile-title>
                      <v-list-tile-sub-title
                        v-if="checkSelectedBit(serviceBit.id)"
                      >Price: {{bitPriceTotal(serviceBit.id)}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </template>
                </v-checkbox>
                <v-felx v-if="checkSelectedBit(serviceBit.id)">
                  <v-btn-toggle fab style="background-color:#ddd">
                    <v-btn flat small @click="qtyDecrease(serviceBit.id)">
                      <v-icon dark>remove</v-icon>
                    </v-btn>
                    <input type="text" class="custom-form-control" :value="serviceBit.qty" />
                    <v-btn flat small @click="qtyIncrease(serviceBit.id)">
                      <v-icon dark>add</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-felx>
              </v-list-tile>
            </v-flex>
          </v-layout>
          <v-layout v-else>
            <v-flex v-show="!isProgressLoading" xs12 md12 row text-xs-center>
              <v-title-text>No Service Found</v-title-text>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions text-xs-right v-if="selectedServiceBit.length != 0">
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="nextView">NEXT</v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div class="date-area" v-if="viewarea == 'schedule'">
        <v-card>
          <v-card-title primary-title>
            <v-layout justify-center row>
              <div class="headline">Schedule Your Service</div>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-body>
            <v-layout row text-xs-center>
              <v-flex>
                <hooper style="height:auto" :settings="hooperSettings">
                  <slide v-for="(date,i) in dates" :key="i">
                    <v-btn
                      dark
                      large
                      xs2
                      md2
                      class="xs12"
                      :color="order.date == date ? 'primary' : 'error'"
                      @click="addDate(date)"
                    >
                      {{date.split(',')[0]}}
                      <br />
                      {{date.split(',')[1]}}
                    </v-btn>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
              </v-flex>
            </v-layout>
            <v-layout row text-xs-center>
              <v-flex>
                <v-btn
                  v-for="(time,i) in times"
                  :key="i"
                  :color="order.time == time ? 'primary' : 'error'"
                  @click="addTime(time)"
                >{{time}}</v-btn>
              </v-flex>
            </v-layout>
          </v-card-body>
          <v-divider></v-divider>
          <v-card-actions text-xs-right v-if="selectedServiceBit.length != 0">
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="prevView">PREV</v-btn>
            <v-btn flat color="orange" @click="nextView">NEXT</v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div class="confirmation-area" v-if="viewarea == 'confirmation'">
        <v-card>
          <v-card-title primary-title>
            <v-layout justify-center row>
              <div class="headline">Confirm Your Order</div>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-body>
            <v-layout>
              <v-flex mx-2 my-2>
                <v-card>
                  <v-card-title class="d-flex" cols="12">
                    <v-text>Order Informations</v-text>
                    <v-switch
                      label="Order For Other"
                      color="warning"
                      v-model="order.orderFor"
                      
                      hide-details
                      value="others"
                      style="margin-top:0px"
                    ></v-switch>
                  </v-card-title>
                  <!-- <v-btn small color="primary">Slef</v-btn>
                  <v-btn>Others</v-btn>-->

                  <v-divider></v-divider>
                  <v-card-body>
                    <v-form @submit.prevent class="px-2 py-2">
                      <v-row>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            v-if="order.orderFor == 'others'"
                            color="accent"
                            v-model="order.orderarName"
                            label="Name"
                            class="px-3 py-2"
                          ></v-text-field>
                          <v-text v-else class="px-3 py-2">
                            <b>Name:</b>
                            {{order.orderarName}}
                          </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            v-if="order.orderFor == 'others'"
                            color="accent"
                            v-model="order.orderarPhone"
                            label="Phone Number"
                            class="px-3 py-2"
                          ></v-text-field>
                          <v-text v-else class="px-3 py-2">
                            <b>Phone:</b>
                            {{order.orderarPhone}}
                          </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            v-if="order.orderFor == 'others'"
                            color="accent"
                            v-model="order.orderarArea"
                            label="Area"
                            class="px-3 py-2"
                          ></v-text-field>
                          <v-text v-else class="px-3 py-2">
                            <b>Area:</b>
                            {{order.orderarArea}}
                          </v-text>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            v-if="order.orderFor == 'others'"
                            color="accent"
                            v-model="order.orderarAddress"
                            label="Address"
                            class="px-3 py-2"
                          ></v-text-field>
                          <v-text v-else class="px-3 py-2">
                            <b>Address:</b>
                            {{order.orderarAddress}}
                          </v-text>
                        </v-col>
                        <div style="text-align: center;">
                          <!-- <v-btn
                            @click.stop="drawer = false; $emit('clicked', false)"
                            type="submit"
                            color="primary"
                            style="min-width: 250px !important; margin: 5px;"
                          >Ok</v-btn>-->
                        </div>
                      </v-row>
                    </v-form>
                  </v-card-body>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card>
                  <v-card-title>Order Summury</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-body>
          <v-divider></v-divider>
          <v-card-actions text-xs-right v-if="selectedServiceBit.length != 0">
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="prevView">PREV</v-btn>
            <v-btn flat color="orange" @click="nextView">NEXT</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "../../axios_instance.js";
import { localStorageService, Helper, customDate } from "../../helper.js";

import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperNavigation
  },
  data() {
    return {
      selectedServiceBit: [],
      categorys: [],
      category: [],
      services: [],
      serviceBits: [],
      isProgressLoading: false,
      order: {
        category: "",
        categoryId: "",
        serviceBit: [],
        date: "",
        time: "",
        ordedrFor: "self",
        userId: "",
        orderarName: "",
        orderarPhone: "",
        orderarAddress: "",
        orderarArea: "",
        remarks: "",
        orderFrom: "",
        orderFor: "self"
      },
      window: {
        width: 0,
        height: 0
      },
      viewarea: "service",
      dates: [],
      times: [
        "9am - 10am",
        "10am - 11am",
        "11am - 12am",
        "12am - 1pm",
        "1pm - 2pm"
      ],

      hooperSettings: {
        itemsToShow: 3,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: false,
        autoPlay: false,
        playSpeed: 3000,
        transition: 1000
      }
    };
  },
  created() {
    this.getService();
    this.categorysGet();
    // this.setCategory();
    this.handleResize();
    this.customDate();
  },
  computed: {},
  watch: {
    $route(to, from) {
      this.clearSelected();
      this.getService();
    },
    layoutAttr: function() {
      if (this.window.width < 100) {
        return "row";
      } else {
        return "column";
      }
    }
    // handleResize()
  },
  methods: {
    async getService() {
      this.isProgressLoading = true;
      var res = await axios.get(
        `/category/service/${this.$route.params.category}`
      );
      res.data ? (this.category = res.data.data) : (this.category = []);
      this.services = this.category.services;
      this.isProgressLoading = false;
    },

    countServiceBit: function() {
      // if (order.selectedServiceBit.length < 0) {
      alert(this.order.selectedServiceBit.length);
      // }
    },

    loadServiceBit: function(serviceId) {
      // this.services.id == servicesId;
      this.serviceBits = "";
      var arr = this.services;
      this.serviceBits = this.services.find(
        arr => arr.id == serviceId
      ).serviceBits;
    },
    categorysGet: function() {
      return (this.categorys = localStorageService.getItem("categorys"));
    },
    qtyIncrease: function(serviceBitId) {
      var selectedServiceBit = this.selectedServiceBit.find(
        selectedServiceBit => selectedServiceBit.id == serviceBitId
      ).qty++;
    },
    qtyDecrease: function(serviceBitId) {
      var selectedServiceBit = this.selectedServiceBit.find(
        selectedServiceBit => selectedServiceBit.id == serviceBitId
      ).qty;
      if (selectedServiceBit != 1) {
        this.selectedServiceBit.find(
          selectedServiceBit => selectedServiceBit.id == serviceBitId
        ).qty--;
      }
    },
    checkSelectedBit: function(serviceBitId) {
      var arr = this.selectedServiceBit;
      var slectedBit = this.selectedServiceBit.find(
        arr => arr.id == serviceBitId
      );
      var arr2 = this.serviceBits;
      var bit = this.serviceBits.find(arr2 => arr2.id == serviceBitId);
      return slectedBit == bit ? true : false;
    },

    bitPriceTotal: function(serviceBitId) {
      var arr = this.selectedServiceBit;
      var slectedBit = this.selectedServiceBit.find(
        arr => arr.id == serviceBitId
      );
      var arr2 = this.serviceBits;
      var bit = this.serviceBits.find(arr2 => arr2.id == serviceBitId);
      if (slectedBit == bit) {
        // console.log(slectedBit);
        var total =
          slectedBit.qty > 1
            ? slectedBit.price +
              slectedBit.additional_price * (slectedBit.qty - 1)
            : slectedBit.price;
        return total;
      }
      // return slectedBit == bit ? true : false;
    },
    clearSelected: function() {
      if (this.order.category.name != this.$route.params.category) {
        this.services = [];
        this.serviceBits = [];
        this.selectedServiceBit = [];
      }
    },
    selectedServiceBitAddToOrder: function() {
      this.order.serviceBit = this.selectedServiceBit;
    },
    handleResize: function() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },

    nextView: function() {
      if (this.viewarea == "service") {
        this.viewarea = "schedule";
      } else if (this.viewarea == "schedule") {
        this.viewarea = "confirmation";
      } else {
        alert("fuck");
      }
      this.selectedServiceBitAddToOrder();
      this.order.category = this.category.name;
      this.order.categoryId = this.category.id;
      this.orderarInfo();

      // if (this.viewarea == "schedule") {
      //   this.viewarea = 'confirmation';
      //  // this.placeOrder();
      // }
    },
    prevView: function() {
      if (this.viewarea == "schedule") {
        this.viewarea = "service";
      } else if (this.viewarea == "confirmation") {
        this.viewarea = "schedule";
      }
    },
    customDate: function() {
      var startDate = new Date();
      var aryDates = customDate.GetDates(startDate, 20);
      this.dates = aryDates;
    },
    addDate: function(date) {
      this.order.date = date;
    },
    addTime: function(time) {
      this.order.time = time;
    },
    orderarInfo: function() {
      this.order.userId = localStorageService.getItem("currentUserData").id;
      this.order.orderarName = localStorageService.getItem(
        "currentUserData"
      ).name;
      this.order.orderarPhone = localStorageService.getItem(
        "currentUserData"
      ).phone;
      this.order.orderarAddress = localStorageService.getItem(
        "currentUserData"
      ).address;
    },
    placeOrder: function() {
      var order = axios.post("/order", {
        data: this.order
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}

.v-input--switch {
  margin-top: 0px;
}
</style>