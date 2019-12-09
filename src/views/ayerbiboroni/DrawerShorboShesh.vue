<template>
  <v-navigation-drawer width="800" v-model="drawer" temporary right style="position: fixed">
    <v-list class="pa-3" style="background-color: var(--primary) !important">
      <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">সর্বশেষ সার্ভিস সমূহ</h3>
    </v-list>
    <v-list style="background-color: white !important;" class="pt-0">
      <v-divider></v-divider>
      <div style="padding: 20px;">
        <v-container>
          <v-layout>
            <v-flex md6>
              <label class="label-font-title">কাস্টমার</label>
              <v-list-tile class="list-tile-margin">
                <v-list-tile-content>
                  <label style="color: var(--accent)">নাম</label>
                  <v-list-tile-title style="font-size: 17px;">{{desserts[0].name}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile class="list-tile-margin">
                <v-list-tile-content>
                  <label style="color: var(--accent)">ঠিকানা</label>
                  <v-list-tile-title style="font-size: 17px;">{{desserts[0].fat}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
            <v-flex md6>
              <label class="label-font-title">সহকারী</label>
              <v-list-tile class="list-tile-margin">
                <v-list-tile-content>
                  <label style="color: var(--accent)">নাম</label>
                  <v-list-tile-title style="font-size: 17px;">{{desserts[0].name}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile class="list-tile-margin">
                <v-list-tile-content>
                  <label style="color: var(--accent)">ঠিকানা</label>
                  <v-list-tile-title style="font-size: 17px;">{{desserts[0].calories}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-flex>
          </v-layout>
          <v-layout style="margin-top: 25px;">
            <v-flex md12>
              <v-data-table
                :headers="headers"
                :items="desserts"
                hide-actions
                :search="ownerSearch"
                :items-per-page="5"
                class="elevation-2 scrollable-table"
              >
                <template v-slot:items="props">
                  <td class="text-xs-left">{{ props.item.name }}</td>
                  <td class="text-xs-left">{{ props.item.calories }}</td>
                  <td class="text-xs-left">{{ props.item.fat }}</td>
                  <td class="text-xs-left">{{ props.item.calories }}</td>
                  <td class="text-xs-left">{{ props.item.fat }}</td>
                  <td class="text-xs-left">{{ props.item.name }}</td>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-container>
        <div style="text-align: center; margin-top: 7px;">
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
</template>

<script>
export default {
  name: "ItemTable",
  props: {
    tableData: Object,
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      ownerSearch: null,
      headers: [],
      desserts: []
    };
  },
  watch: {
    drawer: function(val) {
      if (this.drawer == true) return;
      this.$emit("clicked", false);
    }
  },
  data() {
    return {
      itemsService: ["Bkash", "SureCash", "Rocket"]
    };
  },

  methods: {},
  mounted() {
    this.headers = [
      {
        text: "সার্ভিস",
        value: "name"
      },
      { text: "সার্ভিস বিট", value: "calories" },
      { text: "পরিমাণ", value: "fat" },
      { text: "মূল্য", value: "carbs" },
      { text: "অতিরিক্ত মূল্য", value: "iron" },
      { text: "মোট মূল্য", value: "carbs" }
    ];
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
  }
};
</script>

<style lang="scss" scoped>
</style>
