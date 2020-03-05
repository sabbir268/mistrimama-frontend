<template>
  <div class="page-wrapper">
    <HeaderLanding></HeaderLanding>
    <v-layout row style="margin-top:100px">
      <v-flex xs12 md8 offset-md2 class="mt-3">
        <!-- {{categorys}} -->
        <h3 style="text-align:center" class="p-3">Service Order</h3>
        <div class="service-area" v-if="viewarea == 'service'">
          <v-layout v-if="categorys" row wrap text-xs-center>
            <!-- <v-flex v-for="i in 6" :key="`2${i}`" xs2 class="text-center" > -->
            <v-flex xs2 class="text-center" v-for="category in categorys" :key="category.id">
              <v-card style="border-radius: 0px !important;" class="py-2">
                <router-link style="text-decoration: none;" :to="category.slug">
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
                  <span>{{category.name}}</span>
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
                  <hooper style="height:auto" :settings="hooperSettingsTime">
                    <slide v-for="(time,i) in times" :key="i">
                      <v-btn
                        :color="order.time == time ? 'primary' : 'error'"
                        @click="addTime(time)"
                      >{{time}}</v-btn>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                  </hooper>
                </v-flex>
              </v-layout>
            </v-card-body>
            <v-divider></v-divider>
            <v-card-actions text-xs-right>
              <v-spacer></v-spacer>
              <v-btn flat color="orange" @click="prevView">PREV</v-btn>
              <v-btn v-if="order.date && order.time" flat color="orange" @click="nextView">NEXT</v-btn>
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
              <v-layout wrap align-center>
                <v-flex md6 sm6 xs12 class="elevation-2" style="height: 450px;overflow: auto;">
                  <v-card-title class="d-flex" cols="12">
                    <v-text>
                      <h3>Order Informations</h3>
                    </v-text>
                    <!-- <v-switch
                      label="Order For Other"
                      color="warning"
                      v-model="order.orderFor"
                      hide-details
                      value="others"
                      style="margin-top:0px"
                    ></v-switch>-->
                    <v-radio-group v-model="userType" row>
                      <v-radio style="padding-top:5px" label="Login" value="login"></v-radio>
                      <v-radio label="Sign Up" value="signup"></v-radio>
                      <v-radio label="Guest" value="guest"></v-radio>
                    </v-radio-group>
                  </v-card-title>
                  <!-- <v-btn small color="primary">Slef</v-btn>
                  <v-btn>Others</v-btn>-->

                  <v-divider></v-divider>
                  <v-card-text v-if="userType == 'login'">
                    <!-- {{$route.params.mood}} -->
                    <v-form
                      ref="form"
                      @submit.prevent="login"
                      style="padding-left: 60px; padding-right: 60px; padding-top: 0px; padding-bottom: 60px;"
                    >
                      <v-text-field
                        color="accent"
                        v-model="phone"
                        type="text"
                        label="Phone Number"
                        append-icon="call"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="password"
                        append-icon="lock"
                        :type="passShow ? 'text' : 'password'"
                        label="Password"
                        @click:append="passShow = !passShow"
                        outlined
                      ></v-text-field>

                      <v-checkbox
                        v-if="$route.params.mood == 'user'"
                        flex-4
                        v-model="rememberMe"
                        label="Remember Me"
                      ></v-checkbox>
                      <!-- {{spmood}} -->
                      <!-- <v-btn
                        style="width: 100% !important;"
                        :disabled="!password || !phone || !mood"
                        type="submit"
                        color="primary"
                        class="mx-0"
                      >LOGIN</v-btn>
                      <br />
                      <br />
                      <a class="custom-a" href="#">Forgot your password?</a>-->
                    </v-form>
                  </v-card-text>

                  <!-- register -->
                  <v-card-text v-if="userType == 'signup'">
                    <v-form
                      v-if="otp == false"
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      @submit.prevent="validate"
                      style="padding-left: 60px; padding-right: 60px; padding-top: 0px; padding-bottom: 60px;"
                    >
                      <v-text-field
                        color="accent"
                        v-model="formData.name"
                        :rules="nameRules"
                        type="text"
                        label="Name"
                        append-icon="person"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="formData.phone"
                        :rules="mobileNumberRules"
                        type="text"
                        label="Phone Number"
                        append-icon="call"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="formData.email"
                        type="text"
                        label="Email"
                        append-icon="email"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="formData.area"
                        type="text"
                        label="Area"
                        append-icon="map"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="formData.address"
                        type="text"
                        label="Address"
                        append-icon="location_on"
                        outlined
                      ></v-text-field>
                      <!-- <v-text-field
                        color="accent"
                        v-model="formData.mfs"
                        type="text"
                        label="MFS"
                        append-icon="room_service"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="formData.mfsNumber"
                        type="text"
                        label="MFS No."
                        append-icon="call"
                        outlined
                      ></v-text-field>-->
                      <v-text-field
                        color="accent"
                        v-model="formData.password"
                        :rules="requiredRules"
                        append-icon="lock"
                        :type="passShow ? 'text' : 'password'"
                        label="Password"
                        @click:append="passShow = !passShow"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        color="accent"
                        v-model="confirmPassword"
                        :rules="requiredRules"
                        append-icon="lock"
                        :type="passShow ? 'text' : 'password'"
                        label="Confirm Password"
                        @click:append="passShow = !passShow"
                        outlined
                      ></v-text-field>
                      <!-- <v-select :items="['User']" label="User"></v-select> -->
                      <div style="text-align: left !important;">
                        <span
                          v-if="formData.password != confirmPassword"
                          style="text-align: left !important; color: var(--error)"
                        >
                          <b>Password did not match!</b>
                        </span>
                      </div>
                      <!-- <br /> -->
                      <!-- <v-btn style="width: 100% !important;" type="submit" color="primary">REGISTER</v-btn>
                      <br />-->
                    </v-form>
                    <div
                      v-if="otp == true"
                      style="padding-left: 60px; padding-right: 60px; padding-top: 0px; padding-bottom: 60px;"
                    >
                      <a
                        class="custom-a"
                      >A code has been sent to your phone no. Please enter the code below.</a>
                      <v-text-field
                        color="accent"
                        v-model="otpCode"
                        type="text"
                        label="Enter Code"
                        append-icon="mobile_screen_share"
                        outlined
                      ></v-text-field>
                      <v-btn
                        style="width: 100% !important;"
                        @click="otp = false; tabs = 0;"
                        color="primary"
                      >DONE</v-btn>
                      <br />
                    </div>
                  </v-card-text>
                  <!-- guest user -->
                  <v-card-body v-if="userType == 'guest'">
                    <v-form @submit.prevent class="px-2 py-2">
                      <v-row>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            color="accent"
                            v-model="order.orderarName"
                            label="Name"
                            class="px-3 py-2"
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            color="accent"
                            v-model="order.orderarPhone"
                            label="Phone Number"
                            class="px-3 py-2"
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            color="accent"
                            v-model="order.orderarArea"
                            label="Area"
                            class="px-3 py-2"
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            color="accent"
                            v-model="order.orderarAddress"
                            label="Address"
                            class="px-3 py-2"
                          ></v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12">
                          <v-text-field
                            color="accent"
                            v-model="order.comments"
                            label="Comments"
                            class="px-3 py-2"
                          ></v-text-field>
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
                </v-flex>

                <v-flex md6 sm6 xs12 class="elevation-2" style="height: 450px;">
                  <v-card-title class="d-flex" cols="12">
                    <v-text class="py-2">
                      <h3>Order Summary</h3>
                    </v-text>
                  </v-card-title>
                  <v-divider></v-divider>
                  <div class="mt-3" style="overflow:auto;height:100%">
                    <ul>
                      <li v-for="(service,i) in order.services" :key="i">
                        <v-text class="d-flex">
                          <b>{{service[0]}}</b>
                        </v-text>
                        <ul>
                          <li v-for="(bit,i) in service[1]" :key="i">
                            <tr class="d-flex">
                              <td style="width: 65%;">
                                <v-text style="float:left">{{bit.name}}</v-text>
                              </td>
                              <td style="width: 5%;text-align: right;">
                                <v-text>{{bit.qty}}</v-text>
                              </td>
                              <td style="width: 30%;">
                                <v-text style="float:right" class="pr-3">
                                  {{bit.qty > 1
                                  ? (bit.qty - 1) * parseInt(bit.additional_price) + parseInt(bit.price)
                                  : parseInt(bit.price)}}
                                </v-text>
                              </td>
                            </tr>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <v-text
                    class="elevation-2 px-3 py-3 d-flex"
                    style="position: absolute;bottom: 53px;width: 50%;float:right;"
                  >
                    <h3>Total Price</h3>
                    <span style="text-align: right;">
                      <h3>{{ this.totalPrice(order.serviceBit)}}</h3>
                    </span>
                  </v-text>
                </v-flex>
              </v-layout>
            </v-card-body>
            <v-divider></v-divider>
            <v-card-actions text-xs-right v-if="selectedServiceBit.length != 0">
              <v-spacer></v-spacer>
              <v-btn flat color="orange" @click="prevView">PREV</v-btn>
              <v-btn flat color="orange" @click="nextView">FINISH</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>

      <v-layout row justify-center>
        <v-dialog v-model="orderDone" max-width="290">
          <v-card>
            <v-card-text>
              <div v-if="!orderPlacingStatus">
                <v-progress-linear :indeterminate="true"></v-progress-linear>
                <h4 style="text-align:center">Placing your ordedr!</h4>
              </div>
              <div v-else>
                <sweetalert-icon icon="success" />
                <h4 style="text-align:center">Order Placed!</h4>
              </div>
            </v-card-text>
            <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click="orderDone = false">Disagree</v-btn>
            <v-btn color="green darken-1" flat @click="orderDone = false">Agree</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-dialog>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import axios from "../../axios_instance.js";
import { localStorageService, Helper, customDate } from "../../helper.js";
import SweetalertIcon from "vue-sweetalert-icons";
import HeaderLanding from "../../components/HeaderLanding.vue";
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
    HooperNavigation,
    SweetalertIcon,
    HeaderLanding
  },
  data() {
    return {
      selectedServiceBit: [],
      categorys: [],
      category: [],
      services: [],
      serviceBits: [],
      isProgressLoading: false,
      userType: "login",
      order: {
        category: "",
        categoryId: "",
        services: [],
        serviceBit: [],
        date: "",
        time: "",
        orderFor: "self",
        userId: "",
        orderarName: "",
        orderarPhone: "",
        orderarAddress: "",
        orderarArea: "",
        comments: "",
        orderFrom: ""
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
        "11am - 12pm",
        "12pm - 1pm",
        "1pm - 2pm",
        "2pm - 3pm",
        "3pm - 4pm",
        "4pm - 5pm",
        "5pm - 6pm",
        "6pm - 7pm",
        "7pm - 8pm",
        "8pm - 9pm",
        "9pm - 10pm",
        "10pm - 11pm",
        "11pm - 12am",
        "12am - 1am",
        "1am - 2am",
        "2am - 3am",
        "3am - 4am",
        "4am - 5am",
        "5am - 6am",
        "6am - 7am",
        "7am - 8am",
        "8am - 9am"
      ],
      orderDone: false,
      orderPlacingStatus: false,
      hooperSettings: {
        itemsToShow: 3,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: false,
        autoPlay: false,
        playSpeed: 3000,
        transition: 1000
      },
      hooperSettingsTime: {
        itemsToShow: 7,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: false,
        autoPlay: false,
        playSpeed: 3000,
        transition: 1000
      },
      /* login register data*/
      valid: null,
      otpCode: null,
      otp: false,
      page: "",
      pageBanner: "",
      formData: {
        name: null,
        phone: null,
        email: null,
        mfs: null,
        mfsNumber: null,
        password: null,
        area: null,
        address: null
      },
      nameRules: [
        v => !!v || "This field cannot be empty",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      mobileNumberRules: [
        v => !!v || "This field cannot be empty",
        v => (v && v.length == 11) || "Invalid mobile number"
      ],
      requiredRules: [v => !!v || "This field cannot be empty"],
      phone: null,
      password: null,
      confirmPassword: null,
      userTypes: ["User", "Service Provider"],
      rememberMe: false,
      passShow: null,
      alertMessage: null,
      snackbar: false,
      tabs: 0,
      mood: this.$route.params.mood == "user" ? "user" : null
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
            ? parseInt(slectedBit.price) +
              parseInt(slectedBit.additional_price) * (slectedBit.qty - 1)
            : parseInt(slectedBit.price);
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
      var arr = this.selectedServiceBit;
      var services = Helper.groupBy(
        this.selectedServiceBit,
        arr => arr.service_name
      );
      this.order.services = [...services];
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
      } else if (this.viewarea == "confirmation") {
        this.placeOrder();
      } else {
        alert("Something went wrong");
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
      var aryDates = customDate.GetDates(startDate, 8);
      this.dates = aryDates;
    },
    addDate: function(date) {
      this.order.date = date;
    },
    addTime: function(time) {
      this.order.time = time;
    },
    orderarInfo: function() {
      this.order.orderFrom = localStorageService.getItem(
        "currentUserData"
      ).type;
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
    async placeOrder() {
      if (this.userType == "login") {
        this.login();
      }
      if (this.userType == "signup") {
        this.validate();
        this.orderarInfo();
      }
      this.orderDone = true;
      this.orderPlacingStatus = false;
      var order = axios.post("/order", {
        data: this.order
      });
      console.log(order);
      await new Promise(r => setTimeout(r, 1000));
      this.orderPlacingStatus = true;
      await new Promise(r => setTimeout(r, 1000));
      this.$router.replace("/user");
    },
    totalPrice(servicesBits) {
      function indvidualTotal(item) {
        var total =
          item.qty > 1
            ? (item.qty - 1) * parseInt(item.additional_price) +
              parseInt(item.price)
            : parseInt(item.price);
        return parseInt(total);
      }

      var tp = servicesBits.map(indvidualTotal).reduce((f, n) => n + f, 0);

      return tp;
    },

    /** Login  */
    async login() {
      var response;
      // THIS CODE SHOULD BE IN A STORE. BUT CAN ALSO BE IMPLEMENTED IN THIS MANNER.
      // THE REGISTRATION IS DONE USING STORE MODULES.
      try {
        response = await axios.post("/login", {
          phone: this.phone,
          password: this.password
        });
        //console.log(response.data.message);
        if (response.data.message != "Invalid credentials") {
          this.$store.commit("setUserInfo", {
            afterLoginUserData: response.data.user,
            d_token: response.data.access_token
          });
          // console.log(response.data.access_token);
          //let usertype = localStorageService.getItem("currentUserData").type;
          // this.$router.replace(this.$route.query.redirect || "/user");
        } else {
          this.alertMessage = response.data.message;
          this.snackbar = true;
        }
      } catch (err) {
        this.alertMessage = err;
        this.snackbar = true;
      }
    },
    /*register and validate*/
    async validate() {
      if (this.$refs.form.validate()) {
        // src/modules/user_module -> 'userRegistration' //
        let response = await axios.post("/client-register", {
          name: this.formData.name,
          phone: this.formData.phone,
          email: this.formData.email,
          password: this.formData.password,
          area: this.formData.area,
          address: this.formData.address
        });
        if (response.data.message == "success") {
          this.$store.commit("setUserInfo", {
            afterLoginUserData: response.data.user,
            d_token: response.data.access_token
          });
        } else {
          this.alertMessage = response.data.message;
          this.snackbar = true;
        }
      }
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

ul {
  list-style: none;
}

.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>