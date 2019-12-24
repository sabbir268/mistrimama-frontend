<template>
  <!-- <v-card class="v-card-padding" flat> -->
  <v-card flat>
    <h3 class="custom-title">
      <v-icon class="custom-icon">swap_horizontal_circle</v-icon>লেনদেন
    </h3>
    <v-layout >
      <v-flex>
        <v-text-field class="custom-searchbox" label="Search ..." solo v-model="ownerSearch">
          <template v-slot:append>
            <v-icon class="icon-hover" @click="searchItem()">search</v-icon>
          </template>
        </v-text-field>
      </v-flex>
      <v-flex md4 sm5 xs6>
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
        <!-- <v-btn small @click="previous()" color="primaryButton" class="pagination-button">
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn> -->
      </v-flex>
    </v-layout>
    <template>
      <v-data-table
        :headers="headersLenden"
        :items="desserts"
        hide-actions
        :search="ownerSearch"
        :items-per-page="5"
        class="elevation-2 scrollable-table"
      >
        <template v-slot:items="props">
          <td
            v-on:mouseover="showSideButtons"
            v-on:mouseleave="hideSideButtons"
            class="text-xs-left"
            style="cursor: pointer"
            @click="openDrawer(props.item)"
          >{{ props.item.name }}</td>
          <td
            v-on:mouseover="showSideButtons"
            v-on:mouseleave="hideSideButtons"
            class="text-xs-left"
            style="cursor: pointer"
            @click="openDrawer(props.item)"
          >{{ props.item.calories }}</td>
          <td
            v-on:mouseover="showSideButtons"
            v-on:mouseleave="hideSideButtons"
            class="text-xs-left"
            style="cursor: pointer"
            @click="openDrawer(props.item)"
          >{{ props.item.fat }}</td>
          <td
            v-on:mouseover="showSideButtons"
            v-on:mouseleave="hideSideButtons"
            class="text-xs-left"
            style="cursor: pointer"
            @click="openDrawer(props.item)"
          >{{ props.item.carbs }}</td>
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
    <v-navigation-drawer width="500" v-model="drawer" temporary right style="position: fixed">
      <v-list class="pa-3" style="background-color: var(--primary) !important">
        <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">বিস্তারিত</h3>
      </v-list>
      <v-list style="background-color: white !important;" class="pt-0" dense>
        <v-divider></v-divider>
        <div style="text-align: center; margin-top: 40px;">
          <v-avatar :size="170" color="grey lighten-4" style="margin-bottom: 15px;">
            <img
              class="rect-image"
              src="https://image.flaticon.com/icons/png/512/236/236832.png"
              alt="user_image"
            />
          </v-avatar>
          <br />
        </div>
        <div style="margin-top: 20px; padding: 20px;">
          <v-list-tile class="list-tile-margin">
            <v-list-tile-content>
              <label style="color: var(--accent)">Dessert Name</label>
              <v-list-tile-title style="font-size: 17px;">{{sideData.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile class="list-tile-margin">
            <v-list-tile-content>
              <label style="color: var(--accent)">Calories</label>
              <v-list-tile-title style="font-size: 17px;">{{sideData.calories}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile class="list-tile-margin">
            <v-list-tile-content>
              <label style="color: var(--accent)">Fat</label>
              <v-list-tile-title style="font-size: 17px;">{{sideData.fat}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <div style="text-align: center; margin-top: 20px;">
            <v-btn
              color="accent"
              @click.stop="drawer = false; $emit('clicked', false)"
              style="min-width: 100px !important; margin: 5px;"
            >
              <v-icon class="button-icon-cancel">close</v-icon>
            </v-btn>
          </div>
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
      drawer: null,
      sideButtonShow: false,
      desserts: [],
      ownerSearch: null,
      sideData: [],
      headersLenden: [
        {
          text: "তারিখ",
          align: "left",
          // sortable: false,
          value: "name"
        },
        { text: "বিস্তারিত", value: "calories" },
        { text: "TXN ID", value: "fat" },
        { text: "পরিমান", value: "carbs" }
      ]
    };
  },
  methods: {
    openDrawer: function(itemObject) {
      this.drawer = !this.drawer;
      this.sideData = itemObject;
    },
    showSideButtons: function() {
      this.sideButtonShow = true;
    },
    hideSideButtons: function() {
      this.sideButtonShow = false;
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
</style>
