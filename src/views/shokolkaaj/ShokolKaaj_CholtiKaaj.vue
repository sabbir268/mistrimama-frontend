<template>
  <v-card flat>
    <v-layout>
      <v-flex md8 sm7 xs6>
        <v-text-field class="custom-searchbox" label="Search ..." solo v-model="ownerSearch">
          <template v-slot:append>
            <v-icon class="icon-hover" @click="searchItem()">search</v-icon>
          </template>
        </v-text-field>
      </v-flex>
      <v-flex md4 sm5 xs6 style="text-align: right;">
        <v-btn small @click="previous()" color="primaryButton" class="pagination-button">
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
        <v-btn small @click="previous()" color="primaryButton" class="pagination-button">
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
          >{{ props.item.fat }}</td>
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
          <td class="text-xs-center" style="cursor: pointer">
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">more_vert</v-icon>
              </template>
              <v-list>
                <v-list-item @click="openDrawer(props.item)">
                  <v-list-item-title class="menu-list-items">বিস্তারিত</v-list-item-title>
                </v-list-item>
                <v-list-item @click="openDrawer(props.item, 'paymentshongroho')">
                  <v-list-item-title class="menu-list-items">পেমেন্ট সংগ্রহ</v-list-item-title>
                </v-list-item>
                <v-list-item @click="openDrawer(props.item, 'shohokariporiborton')">
                  <v-list-item-title class="menu-list-items">সহকারী পরিবর্তন</v-list-item-title>
                </v-list-item>
                <v-list-item @click="openDrawer(props.item, 'notunservicejog')">
                  <v-list-item-title class="menu-list-items">নতুন সার্ভিস যোগ</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </td>
        </template>
      </v-data-table>
      <!-- <v-flex md12 sm12 xs12 style="text-align: center; margin-top: 10px;">
        <v-btn
          @click="previous()"
          class="margins"
          color="primaryButton"
          style="min-width: 20px !important;"
        >
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn
          @click="previous()"
          class="margins"
          color="primaryButton"
          disabled
          style="min-width: 20px !important;"
        >
          <span style="color: var(--error)">1</span>
        </v-btn>
        <v-btn
          @click="previous()"
          class="margins"
          color="primaryButton"
          style="min-width: 20px !important;"
        >
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-flex>-->
    </template>
    <v-navigation-drawer
      width="800"
      v-model="drawerBistarito"
      temporary
      right
      style="position: fixed"
    >
      <v-list class="pa-3" style="background-color: var(--primary) !important">
        <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">বিস্তারিত</h3>
      </v-list>
      <v-list style="background-color: white !important;" class="pt-0" dense>
        <v-divider></v-divider>
        <div style="padding-left: 20px; padding-bottom: 20px; padding-right: 20px;">
          <v-container>
            <v-layout>
              <v-flex md6>
                <label class="label-font-title">কাস্টমার</label>
                <v-list-tile class="list-tile-margin">
                  <v-list-tile-content>
                    <label style="color: var(--accent)">নাম</label>
                    <v-list-tile-title style="font-size: 17px;">{{sideData.name}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="list-tile-margin">
                  <v-list-tile-content>
                    <label style="color: var(--accent)">ফোন</label>
                    <v-list-tile-title style="font-size: 17px;">{{sideData.calories}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="list-tile-margin">
                  <v-list-tile-content>
                    <label style="color: var(--accent)">এলাকা</label>
                    <v-list-tile-title style="font-size: 17px;">{{sideData.fat}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="list-tile-margin">
                  <v-list-tile-content>
                    <label style="color: var(--accent)">ঠিকানা</label>
                    <v-list-tile-title style="font-size: 17px;">{{sideData.fat}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-flex>
              <v-flex md6>
                <label class="label-font-title">সহকারী</label>
                <v-list-tile class="list-tile-margin">
                  <v-list-tile-content>
                    <label style="color: var(--accent)">নাম</label>
                    <v-list-tile-title style="font-size: 17px;">{{sideData.name}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="list-tile-margin">
                  <v-list-tile-content>
                    <label style="color: var(--accent)">ফোন</label>
                    <v-list-tile-title style="font-size: 17px;">{{sideData.calories}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-flex>
            </v-layout>
            <v-layout style="margin-top: 25px;">
              <v-flex md12>
                <v-data-table
                  :headers="headerBistarito"
                  :items="desserts"
                  hide-actions
                  :search="ownerSearch"
                  :items-per-page="5"
                  class="elevation-2 scrollable-table"
                >
                  <template v-slot:items="props">
                    <td class="text-xs-left" style="cursor: pointer">{{ props.item.name }}</td>
                    <td class="text-xs-left" style="cursor: pointer">{{ props.item.calories }}</td>
                    <td class="text-xs-left" style="cursor: pointer">{{ props.item.fat }}</td>
                    <td class="text-xs-left" style="cursor: pointer">{{ props.item.fat }}</td>
                    <td class="text-xs-center" style="cursor: pointer">
                      <div class="my-1">
                        <v-btn>শেষ</v-btn>
                      </div>
                    </td>
                  </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
          <div style="text-align: center; margin-top: 7px;">
            <v-btn
              color="accent"
              @click.stop="drawerBistarito = false; $emit('clicked', false)"
              style="min-width: 100px !important; margin: 5px;"
            >
              <v-icon class="button-icon-cancel">close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawerShohokari" temporary right style="position: fixed">
      <v-list class="pa-3" style="background-color: var(--primary) !important">
        <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">সহকারী পরিবর্তন</h3>
      </v-list>
      <v-list style="background-color: white !important;" class="pt-0" dense>
        <v-divider></v-divider>
        <div style="padding: 20px;">
          <v-list-tile>
            <v-list-tile-content>
              <label style="color: var(--accent)">কাস্টমার</label>
              <v-list-tile-title style="font-size: 17px;">Rubel Chowdhury</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-form @submit.prevent>
            <v-container>
              <v-row>
                <v-col class="d-flex" cols="12">
                  <v-select
                    color="accent"
                    :items="itemsService"
                    v-model="service"
                    label="সহকারী নির্বাচন করুন"
                  ></v-select>
                </v-col>
                <div style="text-align: center;">
                  <v-btn
                    @click.stop="drawerShohokari = !drawerShohokari; $emit('clicked', false)"
                    type="submit"
                    color="success"
                    style="min-width: 100px !important; margin: 5px;"
                  >
                    <v-icon class="button-icon-positive">check</v-icon>
                  </v-btn>
                  <v-btn
                    color="accent"
                    @click.stop="drawerShohokari = !drawerShohokari; $emit('clicked', false)"
                    style="min-width: 100px !important; margin: 5px;"
                  >
                    <v-icon class="button-icon-cancel">close</v-icon>
                  </v-btn>
                </div>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      drawerBistarito: null,
      drawerShohokari: null,
      desserts: [],
      ownerSearch: null,
      itemsService: ["Sami", "Mamun", "Shoibal"],
      sideData: [],
      headers: [
        {
          text: "অর্ডার",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "সার্ভিস", value: "calories" },
        { text: "অর্ডারকারী", value: "fat" },
        { text: "সহকারী", value: "carbs" },
        { text: "বিস্তারিত", value: "protein" },
        { text: "অবস্থা", value: "iron" },
        { text: "অ্যাকশন", value: "iron", align: "center" }
      ],
      headerBistarito: [
        {
          text: "সার্ভিস",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "সার্ভিস মূল্য", value: "calories" },
        { text: "পরিমাণ", value: "fat" },
        { text: "মোট মূল্য", value: "carbs" },
        { text: "অ্যাকশন", value: "iron", align: "center" }
      ]
    };
  },
  methods: {
    openDrawer: function(itemObject, drawerName) {
      this.sideData = itemObject;
      switch (drawerName) {
        case "paymentshongroho":
          this.drawerShohokari = !this.drawerShohokari;
          break;
        case "shohokariporiborton":
          this.drawerShohokari = !this.drawerShohokari;
          break;
        case "notunservicejog":
          this.drawerShohokari = !this.drawerShohokari;
          break;
        default:
          this.drawerBistarito = !this.drawerBistarito;
          break;
      }
    }
  },
  mounted() {
    this.desserts = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "1%",
        carbs: 24,
        protein: 4.0
      }
    ];
    this.dataLoaded = true;
  }
};
</script>

<style lang="scss" scoped>
</style>
