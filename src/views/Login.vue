<template>
  <div style="background-color: var(--background);">
    <v-layout text-md-center>
      <v-flex
        lg8
        md8
        hidden-sm-and-down
        style="position: fixed; width: 100%; height: 100vh;  background-position:center; background-repeat:no-repeat; background-size:cover"
      >
        <img
          v-if="pageBanner"
          style="width:100%;height:100%"
          v-bind:src="pageBanner"
          alt="mistrimama_logo"
        />

        <img
          v-if="!pageBanner"
          style="width:100%;height:100%"
          src=" https://www.illuminz.com/api/wp-content/uploads/2017/12/loader.gif"
          alt="mistrimama_logo"
        />
      </v-flex>
      <v-flex lg8 md8 hidden-sm-and-down></v-flex>
      <v-flex lg4 md4 sm12 xs12>
        <div
          style="text-align: center; padding-top: 25px; padding-bottom: 12px; background-color: var(--background)"
        >
          <router-link to="/">
            <img
              style="width: 125px;"
              src="http://mistrimama.com/photos/1/a.png"
              alt="mistrimama_logo"
            />
          </router-link>
        </div>
        <v-tabs icons-and-text v-model="tabs" fixed-tabs>
          <v-tab>
            Login
            <v-icon>person</v-icon>
          </v-tab>
          <!-- {{$route.params.mood}} -->
          <v-tab v-if="$route.params.mood == 'user'">
            Register
            <v-icon>person_add</v-icon>
          </v-tab>
        </v-tabs>
        <v-layout style="margin-top: 7%;">
          <v-flex lg12 md12 sm12 xs12>
            <!-- <div style="text-align: center">
              <img
                style="width: 125px;"
                src="http://mistrimama.com/photos/1/a.png"
                alt="mistrimama_logo"
              >
            </div>-->

            <v-tabs-items v-model="tabs">
              <!-- ---------- -->
              <!-- LOGIN USER -->
              <!-- ---------- -->
              <v-tab-item>
                <v-card flat color="background">
                  <v-card-text>
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
                      <v-container text-xs-center class="py-0">
                        <!-- <v-layout row wrap p0>
                        <v-flex xs12>-->
                        <v-radio-group
                          text-md-center
                          v-if="$route.params.mood == 'sp'"
                          v-model="mood"
                          row
                          class="p-0 mt-0"
                        >
                          <v-radio label="ESP" value="esp"></v-radio>
                          <v-radio label="FSP" value="fsp"></v-radio>
                          <v-radio label="Comrade" value="comrade"></v-radio>
                        </v-radio-group>
                        <!-- </v-flex>
                        </v-layout>-->
                      </v-container>

                      <v-btn
                        style="width: 100% !important;"
                        :disabled="!password || !phone || !mood"
                        type="submit"
                        color="primary"
                        class="mx-0"
                      >LOGIN</v-btn>
                      <br />
                      <br />
                      <a class="custom-a" href="#">Forgot your password?</a>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- ------------- -->
              <!-- REGISTER USER -->
              <!-- ------------- -->
              <v-tab-item v-if="$route.params.mood == 'user'">
                <v-card flat color="background">
                  <v-card-text>
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
                      <v-text style="color:red" v-if="errors.name">{{errors.name}}</v-text>
                      <v-text-field
                        color="accent"
                        v-model="formData.phone"
                        :rules="mobileNumberRules"
                        type="text"
                        label="Phone Number"
                        append-icon="call"
                        outlined
                      ></v-text-field>
                      <v-text style="color:red" v-if="errors.phone">{{errors.phone}}</v-text>
                      <v-text-field
                        color="accent"
                        v-model="formData.email"
                        type="text"
                        label="Email"
                        append-icon="email"
                        outlined
                      ></v-text-field>
                      <v-text style="color:red" v-if="errors.email">{{errors.email}}</v-text>
                      <v-text-field
                        color="accent"
                        v-model="formData.area"
                        type="text"
                        label="Area"
                        append-icon="map"
                        outlined
                      ></v-text-field>
                      <v-text style="color:red" v-if="errors.area">{{errors.area}}</v-text>
                      <v-text-field
                        color="accent"
                        v-model="formData.address"
                        type="text"
                        label="Address"
                        append-icon="location_on"
                        outlined
                      ></v-text-field>
                      <v-text style="color:red" v-if="errors.address">{{errors.address}}</v-text>
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
                      <v-text color="red" v-if="errors.password">{{errors.password}}</v-text>
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
                      <br />
                      <v-btn style="width: 100% !important;" type="submit" color="primary">SIGN UP</v-btn>
                      <br />
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
                        @click="varifyOtp()"
                        color="primary"
                      >DONE</v-btn>
                      <br />
                    </div>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :top="'top'"
      :right="'right'"
      :timeout="5000"
      style="text-align: center !important;color:#fff !important;"
    >
      {{ alertMessage }}
      <v-btn class="snackButton" color="primary" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import axios from "../axios_instance.js";
import { localStorageService } from "../helper.js";

export default {
  inject: ["theme"],
  data() {
    return {
      valid: null,
      otpCode: null,
      otp: false,
      page: "",
      pageBanner: "",
      errors: {
        name: null,
        phone: null,
        email: null,
        mfs: null,
        mfsNumber: null,
        password: null,
        area: null,
        address: null
      },
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
    this.pageData();
  },
  methods: {
    /*register and validate*/
    async validate() {
      if (this.$refs.form.validate()) {
        try {
          let response = await axios.post("/client-register", {
            name: this.formData.name,
            phone: this.formData.phone,
            email: this.formData.email,
            password: this.formData.password,
            area: this.formData.area,
            address: this.formData.address
          });
          console.log(response);

          if (response.data.message == "success") {
            // this.$store.commit("setUserInfo", {
            //   afterLoginUserData: response.data.user,
            //   d_token: response.data.access_token
            // });
            this.otp = true;

            // localStorage.clear();
            //this.$router.replace(this.$route.query.redirect || "/user");
          } else {
            this.alertMessage = response.data.message;
            this.snackbar = true;
          }
        } catch (err) {
          var errors = Object.values(err.response.data.errors).flat();
          console.log(err.response.data.errors);
          // this.alertMessage = err;
          // this.snackbar = true;
          console.log(errors[0]);
          this.errors.phone = err.response.data.errors.phone[0];
          this.errors.email = err.response.data.errors.email[0];
          this.errors.email = err.response.data.errors.name[0];
          var i = 0;
          for (i; i < errors.length; i++) {
            this.$toasted.show(errors[i]);
            console.log(errors[i]);
          }
        }
      }
    },
    varifyOtp() {
      axios
        .post("/varify-otp", {
          phone: this.formData.phone,
          password: this.formData.password,
          otp_code: this.otpCode
        })
        .then(res => {
          if (res.status == 200) {
            localStorageService.setItem("currentUserData", res.data.user);
            localStorageService.setItem("d_token", res.data.access_token);
            this.$router.push("/user");
          }
        });
    },
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
          let usertype = localStorageService.getItem("currentUserData").type;
          if (this.mood == "user") {
            if (usertype == "client") {
              this.$router.replace(this.$route.query.redirect || "/user");
            }
            this.$router.replace(this.$route.query.redirect || "/user");
          } else if (this.mood && this.mood == usertype && this.mood == "esp") {
            this.$router.replace(this.$route.query.redirect || "/mulmenu");
          } else if (this.mood && this.mood == usertype) {
            this.$router.replace("/comrade-home");
          } else {
            localStorage.clear();
            this.alertMessage = "User not match";
            this.snackbar = true;
          }
        } else {
          this.alertMessage = response.data.message;
          this.snackbar = true;
        }
      } catch (err) {
        this.alertMessage = err;
        this.snackbar = true;
      }
    },
    async pageData() {
      var page = await axios.get("/page/login");
      this.page = page;
      this.pageBanner = JSON.parse(this.page.data.media).banner;
      //console.log(JSON.parse(this.page.data.media).banner);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
.v-tabs__slider-wrapper > .v-tabs__slider {
  background-color: var(--accent) !important;
}
</style>
