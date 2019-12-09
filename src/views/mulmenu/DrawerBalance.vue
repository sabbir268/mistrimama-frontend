<template>
  <v-navigation-drawer width="500" v-model="drawer" temporary right style="position: fixed">
    <v-list class="pa-3" style="background-color: var(--primary) !important">
      <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">ক্যাশ আউট করুন</h3>
    </v-list>
    <v-list style="background-color: white !important;" class="pt-0" dense>
      <v-divider></v-divider>
      <div style="margin-top: 20px; padding: 20px;">
        <v-form @submit.prevent>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  color="accent"
                  clearable
                  v-model="amount"
                  label="Amount"
                  placeholder="Enter an amount"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12">
                <v-select
                  color="accent"
                  :items="itemsService"
                  v-model="service"
                  label="Select Service"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  color="accent"
                  clearable
                  v-model="mfsNumber"
                  label="MFS Number (Bkash/Rocket/SureCash)"
                  placeholder="Enter MFS No."
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  color="accent"
                  clearable
                  type="password"
                  v-model="confirmPassword"
                  label="Confirm Password"
                  placeholder="Please enter your password"
                ></v-text-field>
              </v-col>
              <div style="text-align: center; margin-top: 20px;">
                <v-btn
                  @click.stop="drawer = false; $emit('clicked', false)"
                  type="submit"
                  color="success"
                  style="min-width: 100px !important; margin: 5px;"
                >
                  <v-icon class="button-icon-positive">check</v-icon>
                </v-btn>
                <v-btn
                  color="accent"
                  @click.stop="drawer = false; $emit('clicked', false)"
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
  watch: {
    drawer: function(val) {
      if (this.drawer == true) return;
      this.$emit("clicked", false);
    }
  },
  data() {
    return {
      amount: null,
      service: null,
      mfsNumber: null,
      confirmPassword: null,
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
// .v-input--is-focused {
//   color: var(--secondary) !important;
// }
</style>
