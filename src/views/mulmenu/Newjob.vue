<template>
  <div>
    <v-card flat style="height: 333px;
    overflow: hidden;">
      <h3 class="custom-title">
        <v-icon class="custom-icon">gavel</v-icon>নতুন অর্ডার
      </h3>

      <v-layout mx-2 style="overflow: auto;height: 340px;">
        <v-flex xs12 sm12 v-if="localGetItem('sp').balance > 1000">
          <v-expansion-panel popout style="font-size:16px">
            <v-expansion-panel-content v-for="order in orders" :key="order.id">
              <template v-slot:header>
                <div>
                  <span>
                    <v-icon>label</v-icon>
                    Order#{{order.order_no}}
                  </span>
                  <span>
                    <v-icon>change_history</v-icon>
                    Category: {{order.category_name}}
                  </span>
                  <span>
                    <v-icon>room</v-icon>
                    Area: {{order.area}}
                  </span>
                  <br />
                  <!-- <v-divider vertical></v-divider> -->
                  <span>
                    <v-icon>calendar_today</v-icon>
                    Date/Time: {{order.date}}
                  </span>
                  <span>
                    <v-icon>query_builder</v-icon>
                    Time: {{order.time}}
                  </span>
                </div>
              </template>
              <v-card>
                <v-divider></v-divider>

                <v-layout class="px-3 py-3">
                  <v-flex>
                    <v-data-table
                      :items="order.items"
                      :headers="headers"
                      hide-actions
                      :items-per-page="5"
                      class
                    >
                      <template v-slot:items="props">
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.service_name }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.service_bit_name }}</td>
                        <td class="text-xs-left" style="cursor: pointer">{{ props.item.quantity }}</td>
                        <td
                          class="text-xs-left"
                          style="cursor: pointer"
                        >{{ props.item.total_price }}</td>
                      </template>
                    </v-data-table>
                    <div class="text-xs-right pt-2">
                      <v-btn color="primary" @click="openDrawerComrade(order)">Allowcate</v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-flex v-else xs12 sm12>
          <v-text
            color="ref"
            p-3
            style="text-align:center"
          >Please recharge your account to get orders!</v-text>
        </v-flex>
      </v-layout>
    </v-card>
    <v-navigation-drawer v-model="drawerComrade" temporary right style="position: fixed">
      <v-list class="pa-3" style="background-color: var(--primary) !important">
        <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">সহকারী</h3>
      </v-list>
      <v-list style="background-color: white !important;" class="pt-0" dense>
        <v-divider></v-divider>
        <div style="padding: 20px;">
          <v-list-tile>
            <v-list-tile-content>
              <label style="color: var(--accent)">কাস্টমার</label>
              <v-list-tile-title style="font-size: 17px;">{{drawerComradeData.order.name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-form @submit.prevent>
            <v-container>
              <v-row>
                <v-col class="d-flex" cols="12">
                  <v-select
                    v-model="drawerComradeData.selectedComrade"
                    color="accent"
                    item-text="name"
                    item-value="id"
                    :items="drawerComradeData.comrades"
                    label="সহকারী নির্বাচন করুন"
                  ></v-select>
                </v-col>
                <div style="text-align: center;">
                  <v-btn
                    @click="allowcateComrade()"
                    type="submit"
                    color="success"
                    style="min-width: 100px !important; margin: 5px;"
                  >
                    <v-icon class="button-icon-positive">check</v-icon>
                  </v-btn>
                  <v-btn
                    color="accent"
                    @click.stop="drawerComrade = !drawerComrade; $emit('clicked', false)"
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
  </div>
</template>

<script>
import axios from "../../axios_instance";
export default {
  data() {
    return {
      drawerComrade: null,
      drawerComradeData: {
        order: "",
        comrades: "",
        selectedComrade: ""
      },

      orders: [],
      headers: [
        { text: "Service" },
        { text: "Service Bit" },
        { text: "Quantiy" },
        { text: "Price" }
      ]
    };
  },
  created() {
    this.getNewAvaibaleOrder();
    this.checkAvailableOrder();
    Echo.channel("orderChannel").listen("OrderEvent", res => {
      // this.orders.push(res.order);
      this.getNewAvaibaleOrder();
      console.log(this.orders);
    });
  },
  methods: {
    getServices() {
      let order = this.orders.find(orders => orders.id == 1);
      //  console.log(order);
      let items = order.items;
      //  console.log(items);
      let services = items.filter(items => items.service_id == 3);

      console.log(services);
    },

    openDrawerComrade(itemObject) {
      this.drawerComrade = !this.drawerComrade;
      this.drawerComradeData.order = itemObject;

      this.getComrades(itemObject.category_id);
    },

    async getNewAvaibaleOrder() {
      var orders = await axios.get("/avaiable-order");
      // console.log(orders.data);
      this.orders = orders.data.data;
    },

    async getComrades(category) {
      this.drawerComradeData.comrades = "";
      var comrade = await axios.get(`/sp/comrades/${category}`);
      this.drawerComradeData.comrades = comrade.data;
    },

    async allowcateComrade() {
      var res = await axios.post("/allowcate-comrade", {
        comrade_id: this.drawerComradeData.selectedComrade,
        order_id: this.drawerComradeData.order.id
      });
      this.drawerComrade = false;
      this.getNewAvaibaleOrder();
      alert(res.data.message);
    },
    checkAvailableOrder() {
      // setInterval(function() {
      //   // var orders = await axios.get("/avaiable-order");
      //   // // console.log(orders.data);
      //   // this.orders = orders.data.data;
      //   this.getNewAvaibaleOrder;
      //   console.log(this.orders);
      // }, 5000);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.v-list--three-line .v-list__tile {
  height: auto !important;
}
</style>
