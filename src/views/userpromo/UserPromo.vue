<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md6 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left;margin-bottom: 20px; font-size: 40px">
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex md6 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">code</v-icon>APPLY PROMO CODE TO GET DISCOUNTS
                  </h3>
                  <v-form
                    ref="form"
                    @submit.prevent
                    style="padding-top: 10px; padding-bottom: 20px;"
                  >
                    <v-text-field
                      color="accent"
                      v-model="formData.promoCode"
                      type="text"
                      label="Enter Promo Code here ..."
                    ></v-text-field>
                    <v-btn type="submit" color="primary">APPLY</v-btn>
                    <br />
                  </v-form>
                </v-card>
              </v-flex>

              <v-flex md6 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">code</v-icon>AVAILABLE PROMOCODE
                  </h3>
                  <v-form
                    ref="form"
                    @submit.prevent
                    style="padding-top: 10px; padding-bottom: 20px;"
                  >
                    <v-text-field
                      color="accent"
                      v-model="formData.promoCode"
                      type="text"
                      label="Enter Promo Code here ..."
                    ></v-text-field>
                    <v-btn type="submit" color="primary">APPLY</v-btn>
                    <br />
                  </v-form>
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

export default {
  name: "UserPromo",
  data() {
    return {
      dataLoaded: true,
      snackbar: null,
      alertMessage: null,
      formData: {
        promoCode: null
      }
    };
  },
  methods: {
    openDrawer: function(itemObject) {
      this.drawerPurberkaaj = true;
      this.sideData = itemObject;
    },
    closeDrawer: function(value) {
      this.drawerPurberkaaj = false;
    },
    addPromoCode(){
      
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
  border: 2px solid rgba(102, 102, 102, 0.555);
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
}
.label-divs {
  margin: 15px;
}
</style>
