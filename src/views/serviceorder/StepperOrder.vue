<template>
  <v-form @submit.prevent>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        <label class="step-headers">Service Selection</label>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card>
          <v-row>
            <v-col class="d-flex" cols="12">
              <v-select
                color="accent"
                :items="itemsService"
                v-model="service"
                label="Select Service"
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
        <v-btn class="extra-gap" color="primary" @click="e6 = 2">Next</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        <label class="step-headers">Service Configuration</label>
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card>
          <v-row>
            <v-col class="d-flex" cols="12">asdsad</v-col>
          </v-row>
        </v-card>
        <v-btn class="extra-gap" color="primary" @click="e6 = 3">Next</v-btn>
        <v-btn class="extra-gap" @click="e6 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">
        <label class="step-headers">Date Selection</label>
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card>
          <v-row>
            <v-col class="d-flex" cols="12">
              <template>
                <v-row>
                  <v-date-picker
                    class="ssss"
                    color="secondary"
                    :reactive="true"
                    v-model="datePicker"
                  ></v-date-picker>
                </v-row>
              </template>
            </v-col>
          </v-row>
        </v-card>
        <v-btn class="extra-gap" color="primary" @click="e6 = 4">Next</v-btn>
        <v-btn class="extra-gap" @click="e6 = 2">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 4" step="4">
        <label class="step-headers">Time Selection</label>
      </v-stepper-step>
      <v-stepper-content step="4">
        <v-card>
          <!-- <v-flex hidden-sm-and-down>
            <v-time-picker
              color="secondary"
              v-model="timePicker"
              class="mt-2"
              :ampm-in-title="true"
              :scrollable="true"
              :landscape="false"
            ></v-time-picker>
          </v-flex>-->
          <v-flex>
            <v-time-picker
              color="secondary"
              v-model="timePicker"
              class="mt-2"
              :ampm-in-title="true"
              :scrollable="true"
              :landscape="false"
            ></v-time-picker>
          </v-flex>
        </v-card>
        <v-btn class="extra-gap" color="primary" @click="e6 = 5">Next</v-btn>
        <v-btn class="extra-gap" @click="e6 = 3">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 5" step="5">
        <label class="step-headers">Confirmation</label>
      </v-stepper-step>
      <v-stepper-content step="5">
        <v-card>
          <v-row>
            <v-col class="d-flex" cols="12">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="accent"
                    prepend-inner-icon="person"
                    clearable
                    v-model="name"
                    label="Name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="accent"
                    prepend-inner-icon="phone"
                    clearable
                    v-model="phone"
                    label="Phone"
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12">
                  <v-select
                    color="accent"
                    prepend-inner-icon="my_location"
                    :items="itemsArea"
                    v-model="area"
                    label="Select Area"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="accent"
                    prepend-inner-icon="home"
                    clearable
                    v-model="address"
                    label="Address"
                  ></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="12">
                  <v-select
                    color="accent"
                    prepend-inner-icon="work"
                    :items="itemsComrade"
                    v-model="comrade"
                    label="Select Comrade"
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-btn class="extra-gap" color="primary" @click>Confirm</v-btn>
        <v-btn class="extra-gap" @click="e6 = 4">Back</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      datePicker: new Date().toISOString().substr(0, 10),
      timePicker: null,
      name: null,
      phone: null,
      area: null,
      address: null,
      comrade: null,
      itemsService: ["Electrical Services"],
      itemsArea: ["Area 1", "Area 2"],
      itemsComrade: ["Comrade 1", "Comrade 2"]
    };
  }
};
</script>

<style lang="scss" scoped>
.step-headers {
  font-size: 20px;
  font-weight: bold;
}
.v-stepper {
  -webkit-box-shadow: 0px 0px 0px 0px #fff;
  box-shadow: 0px 0px 0px 0px #fff;
}
.v-card {
  -webkit-box-shadow: 0px 0px 0px 0px #fff;
  box-shadow: 0px 0px 0px 0px #fff;
}
.extra-gap {
  margin-top: 20px !important;
  margin-right: 5px !important;
  margin-left: 5px !important;
  min-width: 70px;
  min-height: 30px;
  // margin: 5px !important;
}
.v-stepper > .v-stepper__step__step > .v-icon {
  color: var(--accent) !important;
}
</style>
