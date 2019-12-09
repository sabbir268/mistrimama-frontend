<template>
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
          >
        </v-avatar>
        <br>
      </div>
      <div style="margin-top: 20px; padding: 20px;">
        <v-list-tile class="list-tile-margin">
          <v-list-tile-content>
            <label style="color: var(--accent)">Dessert Name</label>
            <v-list-tile-title style="font-size: 17px;">{{tableData.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="list-tile-margin">
          <v-list-tile-content>
            <label style="color: var(--accent)">Calories</label>
            <v-list-tile-title style="font-size: 17px;">{{tableData.calories}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="list-tile-margin">
          <v-list-tile-content>
            <label style="color: var(--accent)">Fat</label>
            <v-list-tile-title style="font-size: 17px;">{{tableData.fat}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <div style="text-align: center; margin-top: 20px;">
          <v-btn
            color="primary"
            @click.stop="drawer = false; $emit('clicked', false)"
            style="min-width: 100px !important; margin: 5px;"
          >
            <v-icon class="button-icon-cancel">edit</v-icon>
          </v-btn>
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
    // method: { type: Function }
  },
  data() {
    return {
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
  mounted() {}
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  background-color: var(--primary);
}
.v-btn {
  color: var(--secondary);
}
.v-avatar {
  background-color: var(--accent);
}
.card-custom:hover {
  padding: 5px;
  cursor: pointer;
}
.v-icon:hover {
  color: var(--accent) !important;
}
.custom-table-cell {
  cursor: pointer;
}
.custom-table-cell:hover {
  text-decoration: underline;
  color: var(--primary);
}
.picture-label {
  color: rgba(0, 0, 0, 0.589);
  font-size: 12px !important;
}
</style>
