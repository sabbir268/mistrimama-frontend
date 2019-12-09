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
                    <v-icon class="custom-icon">group</v-icon>SHARE YOUR REFERRAL CODE/LINK
                  </h3>
                  <div class="div-margins">
                    <div class="fixed-text" style="display: inline-block; width: 100%;">
                      <p style="float: left;">
                        <b>CODE</b>&nbsp;-
                        <span id="getCode">aq71jf91u</span>
                      </p>
                      <v-tooltip left>
                        <template v-slot:activator="{ on }">
                          <v-icon
                            @click="copyText('code')"
                            style="float: right; cursor: pointer"
                            v-on="on"
                          >file_copy</v-icon>
                        </template>
                        <span>Copy</span>
                      </v-tooltip>
                    </div>
                    <div class="fixed-text" style="display: inline-block; width: 100%;">
                      <p style="float: left;">
                        <b>LINK</b>&nbsp;-
                        <span id="getLink">https://mistrimama.com/order/refer/sa166999</span>
                      </p>
                      <v-tooltip left>
                        <template v-slot:activator="{ on }">
                          <v-icon
                            @click="copyText('link')"
                            style="float: right; cursor: pointer"
                            v-on="on"
                          >file_copy</v-icon>
                        </template>
                        <span>Copy</span>
                      </v-tooltip>
                    </div>
                    <!-- <div style="text-align: center"> -->
                    <div>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn
                            v-on="on"
                            style="color: white !important; background-color: #3b5998"
                            class="social-button"
                          >
                            <i class="fa fa-facebook"></i>
                          </v-btn>
                        </template>
                        <span>Share on Facebook</span>
                      </v-tooltip>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <v-btn
                            v-on="on"
                            style="color: white !important; background-color: #1DA1F2"
                            class="social-button"
                          >
                            <i class="fa fa-twitter"></i>
                          </v-btn>
                        </template>
                        <span>Share on Twitter</span>
                      </v-tooltip>
                    </div>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper border_radius"
              style="background-color: white;"
            >
              <v-flex md12 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <div>
                    <h3 class="custom-title">
                      <v-icon class="custom-icon">history</v-icon>REFER HISTORY
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
                        :items="desserts"
                        hide-actions
                        :search="ownerSearch"
                        :items-per-page="5"
                        class="elevation-2 scrollable-table"
                      >
                        <template v-slot:items="props">
                          <td
                            class="text-xs-left"
                            style="cursor: pointer"
                            @click="openDrawer(props.item)"
                          >{{ props.item.name }}</td>
                          <td
                            class="text-xs-left"
                            style="cursor: pointer"
                            @click="openDrawer(props.item)"
                          >{{ props.item.calories }}</td>
                          <td
                            class="text-xs-left"
                            style="cursor: pointer"
                            @click="openDrawer(props.item)"
                          >{{ props.item.fat }}</td>
                          <td
                            class="text-xs-left"
                            style="cursor: pointer"
                            @click="openDrawer(props.item)"
                          >{{ props.item.carbs }}</td>
                        </template>
                      </v-data-table>
                    </template>
                  </div>
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
  name: "UserRefer",
  data() {
    return {
      dataLoaded: true,
      snackbar: null,
      alertMessage: null,
      formData: {
        promoCode: null
      },
      headers: [
        {
          text: "Date",
          value: "name"
        },
        { text: "Details", value: "calories" },
        { text: "RP", value: "fat" },
        { text: "Status", value: "carbs" }
      ],
      desserts: [],
      ownerSearch: null
    };
  },
  methods: {
    copyText(type) {
      let copyText = null;
      if (type == "code") {
        copyText = document.getElementById("getCode");
      } else {
        copyText = document.getElementById("getLink");
      }
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(copyText);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
    }
  },
  watch: {
    //
  },
  computed: {
    //
  },
  async mounted() {
    this.desserts = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      }
    ];
    this.dataLoaded = true;
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
.bordered-div {
  border: 2px solid rgba(102, 102, 102, 0.555);
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
}
.label-divs {
  margin: 15px;
}
.fixed-text {
  background-color: rgb(241, 241, 241);
  border-radius: 10px;
  padding: 12px;
}
.fixed-text > p {
  font-size: 17px;
  color: var(--secondary);
  margin: 0px !important;
}
.copy-button {
  font-size: 17px !important;
  cursor: pointer;
  color: var(--third) !important;
  margin: 0px !important;
}
.div-margins {
  margin-top: 15px;
}
.social-button {
  min-width: 60px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  margin-left: 5px !important;
  margin-right: 5px !important;
  padding: 0px !important;
}
</style>
