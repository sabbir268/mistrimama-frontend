<template>
  <v-container>
    <v-expansion-panel
      popout
      style="font-size:16px;border-bottom: 1px solid #ececec;"
      class="elevation-2"
      v-for="(order,orderindex) in orders"
      :key="order.id"
    >
      <v-expansion-panel-content v-if="order.state != 4">
        <template v-slot:header>
          <div>
            <v-layout>
              <v-flex xs12>
                <v-chip text-color="white" color="primary">
                  <v-avatar color="white" class="primary--text">
                    <v-icon>gavel</v-icon>
                  </v-avatar>
                  Order#{{order.order_no}}
                </v-chip>
                <v-chip text-color="white" color="primary">
                  <v-avatar color="white" class="primary--text">
                    <v-icon>widgets</v-icon>
                  </v-avatar>
                  {{order.category_name}}
                </v-chip>

                <v-chip text-color="white" color="primary">
                  <v-avatar color="white" class="primary--text">
                    <v-icon>room</v-icon>
                  </v-avatar>
                  {{order.area}}
                </v-chip>
                <v-chip text-color="white" color="primary">
                  <v-avatar color="white" class="primary--text">
                    <v-icon>calendar_today</v-icon>
                  </v-avatar>
                  {{order.date}}
                </v-chip>

                <v-chip text-color="white" color="primary">
                  <v-avatar color="white" class="primary--text">
                    <v-icon>query_builder</v-icon>
                  </v-avatar>
                  {{order.time}}
                </v-chip>
                <v-chip
                  label
                  :color="order.state == 1 ? '' : order.state == 2 ? 'red' : 'success'"
                  text-color="white"
                  style="float: right;"
                >
                  <v-avatar>
                    <v-icon>check_circle</v-icon>
                  </v-avatar>
                  {{order.state == 1 ? "Allowcated" : order.state == 2 ? 'Wroking' : 'Waiting For Payment' }}
                </v-chip>
              </v-flex>
            </v-layout>
          </div>
        </template>
        <v-layout wrap align-center class="side-gapper" style="background-color: white;">
          <v-flex md4 sm6 xs12 class="elevation-2" mt-3 mb-3>
            <v-card color p-1 style="min-height: 400px;">
              <h3 class="text-xs-center pt-3">Client Info</h3>
              <v-divider light></v-divider>
              <v-layout>
                <v-flex xs12 class="text-xs-center">
                  <v-avatar size="120">
                    <img :src="order.photo" height contain />
                  </v-avatar>

                  <div>
                    <div>
                      <h5>
                        <v-icon>person</v-icon>
                        {{order.name}}
                      </h5>
                    </div>
                    <div>
                      <h5>
                        <v-icon>phone</v-icon>
                        {{order.phone}}
                      </h5>
                    </div>
                    <div>
                      <h5>
                        <v-icon>room</v-icon>
                        {{order.area}}
                      </h5>
                    </div>
                    <div>
                      <h5>
                        <v-icon>map</v-icon>
                        {{order.address}}
                      </h5>
                    </div>
                  </div>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-layout class="pb-3">
                <v-flex xs6 sm6 class="text-xs-center">
                  User Rating
                  <br />
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                  <v-icon>star_border</v-icon>
                </v-flex>
                <v-divider vertical light></v-divider>
                <v-flex xs6 sm6 class="text-xs-center">
                  Total Service Taken
                  <br />
                  <span>0</span>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>

          <v-flex md8 sm6 xs12 class="elevation-2" mt-3 mb-3 style="position: relative">
            <v-card style="height: 400px;overflow: auto;">
              <v-data-table :items="order.items" :headers="headers" hide-actions class>
                <template v-slot:items="props">
                  <td class="text-xs-left" style="cursor: pointer">{{ props.item.service_name }}</td>
                  <td class="text-xs-left" style="cursor: pointer">{{ props.item.service_bit_name }}</td>
                  <td class="text-xs-left" style="cursor: pointer">{{ props.item.quantity }}</td>
                  <td class="text-xs-left" style="cursor: pointer">{{ props.item.total_price }}</td>
                  <td class="text-xs-left" style="cursor: pointer">
                    <div v-if="props.item.status == 0">
                      <v-icon v-if="order.state == 1">remove</v-icon>
                      <v-btn
                        v-if="order.state == 2"
                        @click="changeItemStatus(orderindex,props.index)"
                        small
                        fab
                        color="primary"
                      >
                        <v-icon>done</v-icon>
                      </v-btn>
                    </div>
                    <v-icon v-else>done_all</v-icon>
                  </td>
                </template>
              </v-data-table>
              <v-btn
                :disabled="checkItemDone(orderindex)"
                @click="changeOrderState(orderindex)"
                style="float: right;
                      bottom: 6px;
                      position: absolute;
                      right: 6px;"
                color="success"
              >{{ order.state == 1 ? 'Start Working' : order.state== 2 ? 'Finished' : 'Finish Job'}}</v-btn>
            </v-card>
            <v-btn color="success" dark absolute bottom left fab>
              <v-icon>add</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-snackbar
      v-model="snackbar"
      :top="'top'"
      :right="'right'"
      :timeout="5000"
      style="text-align: center !important;color:#fff !important;"
    >
      {{ message }}
      <v-btn class="snackButton" color="primary" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "../../axios_instance";
export default {
  data() {
    return {
      snackbar: false,
      message: "",
      headers: [
        { text: "Service", sortable: false },
        { text: "Service Bit", sortable: false },
        { text: "Quantiy", sortable: false },
        { text: "Price", sortable: false },
        { text: "Action", sortable: false }
      ],
      orders: []
    };
  },
  methods: {
    async allocatedOrder() {
      var orders = await axios.get("/allowcated-orders/comrade");
      this.orders = orders.data.data;
    },
    changeItemStatus(orderIndex, itemIndex) {
      this.orders[orderIndex].items[itemIndex].status = 1;
    },
    changeOrderState(orderIndex) {
      if (this.orders[orderIndex].state == 1) {
        this.startServicing(this.orders[orderIndex].id);
      }

      this.orders[orderIndex].status =
        parseInt(this.orders[orderIndex].status) + 1;
      this.orders[orderIndex].state =
        parseInt(this.orders[orderIndex].state) + 1;
    },

    async startServicing(orderId) {
      var res = await axios.post("start-servicing", { id: orderId });
      if (res.data.message == "Status Updated") {
        this.snackbar = true;
        this.message = res.data.message;
      }
    },

    checkItemDone(orderIndex) {
      var arr = this.orders[orderIndex].items;
      var doneItems = this.orders[orderIndex].items.filter(
        arr => arr.status == "1"
      ).length;

      if (this.orders[orderIndex].state == "1") {
        return false;
      } else if (this.orders[orderIndex].state == "2" && doneItems == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.allocatedOrder();
  }
};
</script>

<style>
.v-expansion-panel--popout .v-expansion-panel__container,
.v-expansion-panel--inset .v-expansion-panel__container {
  max-width: 100% !important;
}
.v-btn--bottom.v-btn--absolute {
  bottom: 8px;
}
</style>