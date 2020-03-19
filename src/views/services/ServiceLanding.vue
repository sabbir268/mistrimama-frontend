<template>
  <div class="my-custom-wrap">
    <div class="page-wrapper">
      <HeaderLanding></HeaderLanding>
      <v-layout row style="margin-top:100px">
        <v-flex xs12 md8 offset-md2 class="mt-2">
          <!-- {{categorys}} -->
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center pt-3 pb-2" v-if="viewarea == 'service'">Select Services</h3>
              <h3 class="text-center pt-3 pb-2" v-if="viewarea == 'schedule'">Set Date & Time</h3>
              <h3 class="text-center pt-3 pb-2" v-if="viewarea == 'confirmation'">Confirm Order</h3>
            </div>
          </div>
          <v-card>
            <v-flex class="pt-4 pb-2">
              <div class="col-md-8 offset-md-2">
                <v-stepper
                  alt-labels
                  style="box-shadow:none"
                  :value="viewarea == 'service' ? 1 : viewarea == 'schedule' ? 2 : viewarea == 'confirmation' ? 3 : '' "
                >
                  <v-stepper-header>
                    <v-stepper-step
                      step="1"
                      :complete="viewarea == 'schedule' || viewarea == 'confirmation'"
                    >
                      <span style="text-align:center">Service Selection</span>
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="2">
                      <span
                        style="text-align:center"
                        :complete="viewarea == 'schedule' || viewarea == 'confirmation' "
                      >Schedule Time</span>
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step step="3">
                      <span style="text-align:center" :complete="'as'">Confirmation</span>
                    </v-stepper-step>
                  </v-stepper-header>
                </v-stepper>
              </div>
            </v-flex>
          </v-card>

          <div class="service-area" v-if="viewarea == 'service'">
            <v-card>
              <v-layout v-if="categorys" row wrap text-xs-center class>
                <v-flex xs2 class="text-center" v-for="category in categorys" :key="category.id">
                  <v-card
                    :style="`border-radius: 0px !important; ${$route.params.category == category.slug ? 'background-color: #000000cc;border-color:#000000cc !important' : ''}`"
                    class="py-2 elevation-2 border"
                  >
                    <router-link style="text-decoration: none;" :to="category.slug">
                      <span
                        :style="`${$route.params.category == category.slug ? 'color: #fff' : 'color: #333'}`"
                      >{{category.name}}</span>
                    </router-link>
                  </v-card>
                </v-flex>
              </v-layout>

              <v-layout xs12 justify-center row>
                <v-progress-linear
                  v-if="!services.length"
                  v-show="isProgressLoading"
                  :indeterminate="true"
                ></v-progress-linear>
              </v-layout>

              <v-layout v-if="services.length != 0" xs12 md12 row>
                <v-flex style="min-height: 308px;max-height: 308px;height: auto;overflow-x: auto;">
                  <v-list v-if="services">
                    <v-list-tile
                      v-for="service in services"
                      :key="service.id"
                      avatar
                      @click="loadServiceBit(service.id)"
                      three-line
                      class="list-mm"
                      :style="`${getServiceBit(service.id).length > 0 ? 'background-color: #90909094 !important' : ''}`"
                    >
                      <v-list-tile-avatar>
                        <img src="../../assets/electrical.png" />
                      </v-list-tile-avatar>

                      <v-list-tile-content>
                        <div class="row w-100">
                          <div class="col-md-10">
                            <v-list-tile-title v-html="service.name"></v-list-tile-title>
                            <ul class="pl-3">
                              <li v-for="bit in getServiceBit(service.id)" :key="bit.id">
                                <small>{{bit.name}}</small>
                                <small>
                                  : &nbsp;
                                  <span
                                    style="font-weight:bold;color:#000"
                                  >{{bit.qty}} {{bit.unit_type}}</span>
                                </small>
                              </li>
                            </ul>
                          </div>
                          <div
                            class="col-md-2 pt-2"
                          >Price: ৳{{totalPrice(getServiceBit(service.id))}}</div>
                        </div>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>

                <v-navigation-drawer
                  v-show="navdr"
                  v-model="navdr"
                  absolute
                  temporary
                  right
                  height="auto"
                  hide-overlay="false"
                >
                  <v-flex
                    xs12
                    v-if="serviceBits"
                    v:bind="layoutAttr"
                    style="padding-left: 18px;padding-top: 10px;max-height: 253px;overflow-x: auto;display: block;"
                  >
                    <v-list-item
                      v-for="serviceBit in serviceBits"
                      :key="serviceBit.id"
                      style="height: auto !important;"
                    >
                      <!-- <v-flex> -->
                      <div class="row border mr-3 mb-1">
                        <div class="col-md-8">
                          <v-checkbox v-model="selectedServiceBit" :value="serviceBit">
                            <template v-slot:label>
                              <v-list-tile-content>
                                <!-- <v-list-tile-title class="pt-1"> -->
                                <v-text>{{serviceBit.name}}</v-text>
                                <v-text v-if="checkSelectedBit(serviceBit.id)">
                                  <small>Price: ৳{{bitPriceTotal(serviceBit.id)}}</small>
                                </v-text>
                                <!-- </v-list-tile-title> -->
                                <!-- <v-list-tile-sub-title
                              
                                ></v-list-tile-sub-title>-->
                              </v-list-tile-content>
                            </template>
                          </v-checkbox>
                          <div v-if="breif ? breifActiveId == serviceBit.id ? true : false : false">
                            <span>
                              <strong>Price:</strong>
                              {{serviceBit.price}}
                            </span>
                            <br />
                            <span>
                              <strong>Additional Price:</strong>
                              {{serviceBit.additional_price}}
                            </span>
                            <br />
                            {{serviceBit.brief}}
                          </div>
                          <!-- {{}} -->
                        </div>
                        <div class="col-md-4 col-md-4 pt-3">
                          <v-btn-toggle
                            v-if="checkSelectedBit(serviceBit.id)"
                            fab
                            style="background-color:#ddd"
                          >
                            <v-btn flat small @click="qtyDecrease(serviceBit.id)">
                              <v-icon dark>remove</v-icon>
                            </v-btn>
                            <input type="text" class="custom-form-control" :value="serviceBit.qty" />
                            <v-btn flat small @click="qtyIncrease(serviceBit.id)">
                              <v-icon dark>add</v-icon>
                            </v-btn>
                          </v-btn-toggle>
                          <!-- <button
                          class="btn btn-sm btn-default"
                          style="cursor: pointer;float: right;margin-top: 0px"
                          @click="showBrief(serviceBit.id)"
                        >
                          <strong style="font-weight:bold">Brief</strong>
                          </button>-->
                          <v-btn
                            small
                            @click="showBrief(serviceBit.id)"
                            style="float: right;margin-top: 0px"
                          >
                            <strong style="font-weight: bold;text-transform: capitalize;">Brief</strong>
                            <v-icon>{{breif ? breifActiveId == serviceBit.id ? 'keyboard_arrow_up' : 'keyboard_arrow_down' : 'keyboard_arrow_down'}}</v-icon>
                          </v-btn>
                        </div>
                      </div>
                      <!-- <div v-if="serviceBit.id == breifActiveId" class="pl-3">
                      <p v-if="checkSelectedBit(serviceBit.id)" class="text-left">{{breif}}</p>
                      </div>-->
                      <!-- </v-flex> -->
                      <!-- <v-felx > -->

                      <!-- </v-felx> -->
                    </v-list-item>
                  </v-flex>
                  <div
                    class="w-100 bg-white"
                    style="bottom: 0px;left: 0px;position: sticky;display: block;background-color: #fff !important;"
                  >
                    <v-btn small fav @click.stop="navdr = !navdr" class="float-right mr-3">Cancel</v-btn>
                    <v-btn small fav @click.stop="navdr = !navdr" class="float-right">Ok</v-btn>
                  </div>
                </v-navigation-drawer>
              </v-layout>
              <v-layout v-else>
                <v-flex v-show="!isProgressLoading" xs12 md12 row text-xs-center>
                  <v-title-text>No Service Found</v-title-text>
                </v-flex>
              </v-layout>
              <!-- <v-divider></v-divider> -->
              <v-card-actions text-xs-right>
                <h4 class="text-left">Total Price: ৳ {{totalPrice(selectedServiceBit)}}</h4>
                <v-spacer></v-spacer>
                <v-btn small to="/">Cancel</v-btn>
                <v-btn v-if="selectedServiceBit.length != 0" small @click="nextView">Next</v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="date-area" v-if="viewarea == 'schedule'">
            <v-card>
              <!-- <v-card-title primary-title>
              <v-layout justify-center row>
                <div class="headline">Schedule Your Service</div>
              </v-layout>
            </v-card-title>
              <v-divider></v-divider>-->
              <v-card-body>
                <div style="min-height: 346px; height: auto; overflow-x: auto;padding-top: 11%;">
                  <v-layout row text-xs-center>
                    <!-- <v-flex>
                  <VueCtkDateTimePicker v-model="datetime" inline noButton></VueCtkDateTimePicker>
                    </v-flex>-->

                    <v-flex>
                      <hooper style="height:auto" :settings="hooperSettings">
                        <slide v-for="(date,i) in dates" :key="i">
                          <v-btn
                            dark
                            large
                            :color="order.date == date ? 'primary' : 'dark'"
                            @click="addDate(date)"
                            class="m-0"
                          >
                            {{date.split(',')[0]}}
                            <br />
                            <span style="display: contents;font-size: 12px;">{{date.split(',')[1]}}</span>
                          </v-btn>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                      </hooper>
                    </v-flex>
                  </v-layout>
                  <br />
                  <v-layout row text-xs-center>
                    <v-flex>
                      <hooper style="height:auto" :settings="hooperSettingsTime">
                        <slide v-for="(time,i) in times" :key="i">
                          <v-btn
                            large
                            :color="order.time == time ? 'primary' : 'dark'"
                            @click="addTime(time)"
                          >{{time}}</v-btn>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                      </hooper>
                    </v-flex>
                  </v-layout>
                </div>
              </v-card-body>
              <v-divider class="m-0"></v-divider>
              <v-card-actions text-xs-right v-if="selectedServiceBit.length != 0" class="pt-2">
                <h4 class="text-left">Total Price: ৳ {{totalPrice(selectedServiceBit)}}</h4>
                <v-spacer></v-spacer>
                <v-btn small @click="prevView">Back</v-btn>
                <v-btn small v-if="order.date && order.time" @click="nextView">Next</v-btn>
              </v-card-actions>
            </v-card>
          </div>

          <div class="confirmation-area" v-if="viewarea == 'confirmation'">
            <v-card>
              <v-card-body>
                <v-layout
                  wrap
                  align-center
                  style="min-height: 346px;overflow: hidden;max-height: 346px;"
                >
                  <v-flex md8 sm8 xs12 class="elevation-2" style="height: 450px;overflow: auto;">
                    <div class="row">
                      <div class="col-md-8 offset-md-2">
                        <v-card-title class="d-flex p-0 m-0">
                          <v-radio-group class="m-0" v-model="userType" row>
                            <v-radio
                              class="p-0"
                              style="padding-top:5px"
                              label="Login"
                              value="login"
                            ></v-radio>
                            <v-radio class="p-0" label="Sign Up" value="signup"></v-radio>
                            <v-radio class="p-0" label="Guest" value="guest"></v-radio>
                          </v-radio-group>
                          <br />
                          <h5
                            style="display: inline-table;"
                            class="text-center p-0 m-0"
                            v-if="userType == 'guest'"
                          >Without resgitration you will miss many amazing things</h5>
                          <h5
                            style="display: inline-table;"
                            class="text-center p-0 m-0"
                            v-if="userType == 'signup'"
                          >Signup now to track your order</h5>
                          <h5
                            class="text-center p-0 m-0"
                            style="display: inline-table;"
                            v-if="userType == 'login'"
                          >Hello there!</h5>
                        </v-card-title>
                      </div>
                    </div>
                    <v-divider class="m-0"></v-divider>
                    <v-card-text v-if="userType == 'login'">
                      <v-form ref="form" @submit.prevent="login" class="pt-0">
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
                        class="pt-0"
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
                      <div v-if="otp == true" class="pt-0">
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

                  <v-flex md4 sm4 xs12 class="elevation-2" style="height: 450px;">
                    <v-card-title class="d-flex p-0 px-2">
                      <v-text class>
                        <h3 class="py-1 p-0 text-center">Order Summary</h3>
                      </v-text>
                    </v-card-title>
                    <v-divider class="m-0"></v-divider>
                    <div class="mt-3">
                      <ul style="max-height: 300px;overflow-y: scroll;" class="pb-3">
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
                  </v-flex>
                </v-layout>
              </v-card-body>
              <v-divider class="m-0"></v-divider>
              <v-card-actions text-xs-right v-if="selectedServiceBit.length != 0" class="pt-2">
                <h4 class="text-left">Total Price: ৳ {{totalPrice(selectedServiceBit)}}</h4>
                <v-spacer></v-spacer>
                <v-btn small @click="prevView">Back</v-btn>
                <v-btn small v-if="order.date && order.time" @click="nextView">Confirm</v-btn>
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
            </v-card>
          </v-dialog>
        </v-layout>
      </v-layout>
    </div>
  </div>
</template>

<script>
import axios from "../../axios_instance.js";
import { localStorageService, Helper, customDate } from "../../helper.js";
import SweetalertIcon from "vue-sweetalert-icons";
import HeaderLanding from "../../components/HeaderLanding.vue";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

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
    HeaderLanding,
    VueCtkDateTimePicker
  },
  data() {
    return {
      datetime: "",
      navdr: null,
      breif: null,
      breifActiveId: "",
      selectedServiceBit: [],
      categorys: [],
      category: [],
      services: [],
      selectedServices: [],
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
        itemsToShow: 4,
        itemsToSlide: 4,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: false,
        autoPlay: false,
        playSpeed: 3000,
        transition: 1000
      },
      hooperSettingsTime: {
        itemsToShow: 4,
        itemsToSlide: 4,
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
      var selectedService = this.services.find(arr => arr.id == serviceId);
      this.serviceBits = selectedService.serviceBits;
      this.selectedServices.push(selectedService);
      this.navdr = true;
      // this.$router.replace(selectedService.slug);
    },
    checkSelectedService: function(serviceId) {
      var arr = this.selectedServices;
      var selectedServic = this.selectedServices.find(
        arr => arr.id == serviceId
      );
      return selectedServic;
    },
    getServiceBit: function(serviceId) {
      var arr = this.selectedServices;
      var selectedService = this.selectedServices.find(
        arr => arr.id == serviceId
      );

      if (selectedService) {
        var arr2 = this.selectedServiceBit;
        var bits = this.selectedServiceBit.filter(
          arr2 => arr2.service_id == selectedService.id
        );
        console.log(bits.length);
        console.log("me");
        return bits;
      } else {
        return [];
      }

      // return bits ? bits : "";
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
    showBrief(servirceBitId) {
      if (this.breifActiveId != servirceBitId) {
        this.breifActiveId = servirceBitId;
        this.breif = true;
      } else {
        this.breif = false;
        this.breifActiveId = "";
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
      if (servicesBits) {
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
      } else {
        return 0;
      }
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

<style >
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

.v-stepper__step {
  padding: 0px !important;
}

.v-stepper--alt-labels .v-stepper__header .v-divider {
  margin: 12px -68px 0 !important;
}

.v-stepper--alt-labels .v-stepper__step__step {
  margin-right: 0;
  margin-bottom: 5px !important;
}

.v-navigation-drawer--open {
  margin-top: 4.3% !important;
  width: 100% !important;
  padding-bottom: 5px !important;
  /* height: auto !important;
  max-height: 340px; */
}

.v-list__tile .theme--light {
  height: auto !important;
}
.v-label {
  margin-bottom: 0px !important;
}
/* .theme--light.v-list {
  background-color: #eff0f1 !important;
} */

.v-stepper__step__step {
  font-size: 15px !important;
  height: 26px !important;
  width: 26px !important;
}

div::-webkit-scrollbar {
  width: 1em !important;
}

div::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
}

div::-webkit-scrollbar-thumb {
  background-color: darkgrey !important;
  outline: 1px solid slategrey !important;
}

.list-mm {
  background-color: #e4e4e4 !important;
  /* border: 1px solid #bfbfbf; */
  /* box-shadow: 0 0 0px 2px white; */
  /* margin: 4px 0px; */
  border-bottom: 1px solid #6f6f6f !important;
}

.v-list__tile--link {
  height: auto !important;
  min-height: 60px;
}

.v-list__tile--link:hover > .v-list__tile__title {
  /* background-color: #000 !important; */
  color: #fff !important;
}

.v-list__tile--link:hover {
  background-color: #90909094 !important;
  /* color: #fff !important; */
}
.v-avatar {
  border-radius: 0px;
}
.v-avatar img {
  border-radius: 0px;
}
.v-chip__content {
  cursor: pointer !important;
}
/* .hooper-track {
  padding: 0 5% !important;
} */

.my-custom-wrap {
  background-image: url("http://192.168.241.47/mistrimama3.0/public/frontend/image/order_background.png") !important;
  height: 100%;
}
.v-input__slot {
  margin-bottom: 0px !important;
}

.v-message {
  display: none !important;
}
.v-input--radio-group--row {
  justify-content: center !important;
}
</style>