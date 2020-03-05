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
                    <v-icon class="custom-icon">history</v-icon>ALL ORDER HISTORY
                  </h3>

                  <v-layout mx-0 style="overflow: auto;height: 440px;">
                    <v-flex xs12 sm12>
                      <v-expansion-panel popout style="font-size:16px">
                        <v-expansion-panel-content v-for="order in orders" :key="order.id">
                          <v-divider></v-divider>
                          <template v-slot:header>
                            <div>
                              <span>
                                <v-icon>label</v-icon>
                                Order#{{order.order_no}}
                              </span>
                              <br />
                              <v-stepper alt-labels style="box-shadow:none">
                                <v-stepper-header>
                                  <v-stepper-step step="1" :complete="order.status >= 0">
                                    <span style="text-align:center">Order Placed</span>
                                  </v-stepper-step>
                                  <v-divider></v-divider>
                                  <v-stepper-step step="2" :complete="order.status >= 2">
                                    <span style="text-align:center">Technician Allowcated</span>
                                  </v-stepper-step>
                                  <v-divider></v-divider>
                                  <v-stepper-step step="3" :complete="order.status >= 3">
                                    <span style="text-align:center">Technician Start Working</span>
                                  </v-stepper-step>
                                  <v-divider></v-divider>
                                  <v-stepper-step step="4" :complete="order.status >= 4">
                                    <span
                                      style="text-align:center"
                                    >{{order.status >= 5 ? 'Payment Done' : 'Bill Payment'}}</span>
                                  </v-stepper-step>
                                  <v-divider></v-divider>
                                  <v-stepper-step step="5" :complete="order.status >= 5">
                                    <span style="text-align:center">Feedback</span>
                                  </v-stepper-step>
                                </v-stepper-header>
                              </v-stepper>
                            </div>
                          </template>
                          <v-card>
                            <v-divider></v-divider>

                            <v-layout class="px-3">
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
                                    <td
                                      class="text-xs-left"
                                      style="cursor: pointer"
                                    >{{ props.item.quantity }}</td>
                                    <td
                                      class="text-xs-left"
                                      style="cursor: pointer"
                                    >{{ props.item.total_price }}</td>
                                  </template>
                                </v-data-table>
                              </v-flex>
                            </v-layout>
                          </v-card>
                          <v-divider></v-divider>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <DrawerOrderHistory
        :drawer="drawerOrderHistory"
        :tableData="sideData"
        @clicked="closeDrawer"
      />
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
import DrawerOrderHistory from "../userorderhistory/DrawerOrderHistory";
import axios from "../../axios_instance.js";

export default {
  components: {
    DrawerOrderHistory
  },
  data() {
    return {
      dataLoaded: true,
      snackbar: null,
      orders: []
    };
  },
  methods: {
    async getCurrentOrder() {
      var currentOrders = await axios.get("/user-orders");
      this.orders = currentOrders.data.data;
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getCurrentOrder();
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
</style>
