<template>
  <div>
    <div class="side-gapper top-gapper">
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex lg12 md12 sm12 xs12>
          <div v-if="dataLoaded" style="text-align: left; margin-bottom: 20px; font-size: 40px">
            <v-layout
              wrap
              align-center
              class="elevation-2 border_radius"
              style="background-color: white;"
            >
              <v-flex md12 sm12 xs12>
                <v-card class="v-card-padding" flat>
                  <h3 class="custom-title">
                    <v-icon class="custom-icon">group</v-icon>সহকারীদের লিস্ট
                  </h3>
                  <v-layout wrap>
                    <v-flex md12 sm12 xs12>
                      <v-layout>
                        <v-flex hidden-md-and-up>
                          <v-btn
                            color="primary"
                            style="width: 100%; margin-top: 12px;"
                            @click="drawerNotunShohokari = !drawerNotunShohokari"
                          >
                            <v-icon class="custom-icon">person_add</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                      <v-layout>
                        <v-flex md7 sm7 xs6>
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
                        <v-flex md2 sm1 hidden-sm-and-down style="padding-left: 10px;">
                          <v-btn
                            color="primary"
                            style="width: 100%; margin-top: -11px; min-height: 35px;"
                            @click="drawerNotunShohokari = !drawerNotunShohokari"
                          >
                            <v-icon class="custom-icon">person_add</v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex md5 sm5 xs6 style="text-align: right;">
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
                    </v-flex>
                  </v-layout>
                  <template>
                    <v-data-table
                      :headers="headers"
                      :items="comrades"
                      hide-actions
                      :search="ownerSearch"
                      :items-per-page="5"
                      :loading="!dataLoaded"
                      class="elevation-2 scrollable-table"
                    >
                      <template v-slot:items="props">
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >
                          <v-avatar>
                            <img :src="props.item.photo" alt="Picture" />
                          </v-avatar>
                          <!-- {{props.item.photo}} -->
                        </td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.name }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.phone }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.email }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                          @click="openDrawer(props.item)"
                        >{{ props.item.nid_no }}</td>
                        <td class="text-xs-center">
                          <v-tooltip v-model="show" bottom>
                            <template v-slot:activator="{ on }">
                              <v-icon
                                v-on="on"
                                @click="drawerNotunShohokariEdit = !drawerNotunShohokariEdit"
                                class="icon-hover"
                              >edit</v-icon>
                            </template>
                            <span>এডিট</span>
                          </v-tooltip>
                          <v-tooltip v-model="show" bottom>
                            <template v-slot:activator="{ on }">
                              <v-icon v-on="on" class="icon-hover" color="accent">not_interested</v-icon>
                            </template>
                            <span>বাতিল</span>
                          </v-tooltip>
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
      <DrawerNotunShohokari :drawer="drawerNotunShohokari" @clicked="closeDrawer" />
      <DrawerNotunShohokariEdit :drawer="drawerNotunShohokariEdit" @clicked="closeDrawer" />
      <DrawerShohokari :drawer="drawerShohokari" :tableData="sideData" @clicked="closeDrawer" />
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
import DrawerNotunShohokari from "../shohokari/DrawerNotunShohokari";
import DrawerNotunShohokariEdit from "../shohokari/DrawerNotunShohokariEdit";
import DrawerShohokari from "../shohokari/DrawerShohokari";
import axios from "../../axios_instance.js";
import { async } from "q";

export default {
  components: {
    DrawerNotunShohokari,
    DrawerNotunShohokariEdit,
    DrawerShohokari
  },
  data() {
    return {
      comrades: [],
      dataLoaded: '',
      pageCount: 1,
      drawerNotunShohokari: false,
      drawerNotunShohokariEdit: false,
      drawerShohokari: false,
      pagination: null,
      snackbar: null,
      alertMessage: null,
      ownerSearch: null,
      headers: [
        {
          text: "ছবি",
          align: "left",
          sortable: false,
          value: "calories"
        },
        { text: "নাম", value: "calories" },
        { text: "ফোন নম্বর", value: "fat" },
        { text: "ই-মেইল", value: "carbs" },
        { text: "এন.আই.ডি নং #", value: "protein" },
        { text: "অ্যাকশন", value: "iron", align: "center" }
      ],
      drawer: null,
      sideData: [],
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  },
  watch: {
    drawerShohokari: function(val) {}
  },
  methods: {
    openDrawer: function(itemObject) {
      this.drawerShohokari = true;
      this.sideData = itemObject;
    },
    closeDrawer: function(value) {
      this.drawerNotunShohokari = false;
      this.drawerNotunShohokariEdit = false;
      this.drawerShohokari = false;
    },
    async getAllComrades() {
      this.dataLoaded = false;
      let res = await axios.get(`/sp/comrades`);
      this.comrades = res.data;
      this.dataLoaded = true;
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getAllComrades();
  }
  // async mounted() {
  //   this.dataLoaded = true;
  // }
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
.row{
  margin-right: 0px;
  margin-left: 0px;
}
</style>
