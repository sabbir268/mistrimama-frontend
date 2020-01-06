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
                                item-text="name"
                                item-value="value"
                                :items="itemsMedium"
                                v-model="medium"
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
                                @click="recharge"
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
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <v-snackbar v-model="snackbar" top right :timeout="6000">
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
      dataLoaded: true,
      snackbar: null,
      alertMessage: null,
      transactionNumber: null,
      amount: null,
      medium: null,
      itemsMedium: [
        { name: "বিকাশ", value: "bkash" },
        { name: "ব্যাংক ডিপোজিট", value: "Bank Deposit" },
        { name: "মিস্ট্রিমামা এজেন্ট ডিপোজিট", value: "Mistrimama Agent" }
      ],
      steps: [
        "ধাপ-১: আপনার পার্সোনাল বিকাশ নাম্বার থেকে মিস্ট্রি মামা মার্চেন্ট নাম্বার ০১৭২৭০৬৩৫৯৩ এ প্রয়োজন অনুযায়ী টাকা সেন্ড করুন |",
        "ধাপ-২: টাকা রিচার্জ করার পর আপনার মোবাইল নাম্বার-এ বিকাশ থেকে একটি কনফার্মেশন এস.এম.এস আসবে তা সংরক্ষণ করুন |",
        "ধাপ-৩: যেকোনো স্মার্ট ডিভাইস থেকে আপনার আই.ডি এবং পাসওয়ার্ড দিয়ে মিস্ট্রি মামা একাউন্ট-এ লগইন করুন |"
      ]
    };
  },
  methods: {
    async recharge() {
      var res = await axios.post("/recharge-request", {
        trxno: this.transactionNumber,
        amount: this.amount,
        medium: this.medium
      });

      if (res.data.message == "Recharge request placed Successfully") {
        this.snackbar = true;
        this.alertMessage = res.data.message;
      } else {
        this.snackbar = true;
        this.alertMessage = "Something went wrong";
      }
    }
  },
  watch: {},
  computed: {}
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
