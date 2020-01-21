<template>
  <!-- <v-card class="v-card-padding" flat> -->
  <v-card flat>
    <h3 class="custom-title">
      <v-icon class="custom-icon">swap_horizontal_circle</v-icon>লেনদেন
    </h3>
    <v-layout>
      <!-- <v-flex>
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
      </v-btn>-->
      <!-- <v-btn small @click="previous()" color="primaryButton" class="pagination-button">
          <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>-->
      <!-- </v-flex> -->
    </v-layout>
    <template style="overflow: auto;height: 340px;">
      <v-data-table
        :headers="headers"
        hide-actions
        :items="statements"
        class="elevation-2 scrollable-table"
      >
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.date }}</td>
          <td class="text-xs-left">{{ props.item.details }}</td>
          <td class="text-xs-left">{{props.item.trxno}}</td>
          <td class="text-xs-right">
            <v-chip>
              <v-avatar>
                <v-icon
                  :color="props.item.status == 'credit' ? 'success' : 'red'"
                >{{ props.item.status == 'credit' ? 'add_circle_outline' : 'remove_circle_outline' }}</v-icon>
              </v-avatar>
              {{ props.item.amount }}/-
            </v-chip>
          </td>
        </template>
      </v-data-table>
    </template>
  </v-card>
</template>

<script>
import axios from "../../axios_instance";
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
      statements: [],
      sideData: [],
      headers: [
        {
          text: "তারিখ",
          value: "name"
        },
        { text: "বিস্তারিত", value: "calories" },
        { text: "টি.এক্স.এন আইডি #", value: "fat" },
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
    },
    async getStatements() {
      var res = await axios.get("/sp/statements");
      this.statements = res.data;
    }
  },
  created() {
    this.getStatements();
  }
};
</script>

<style lang="scss" scoped>
</style>
