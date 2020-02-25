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
                  <td class="text-xs-center" style="cursor: pointer">
                    <span
                      v-if="props.item.status != 0 || order.state != 2"
                    >{{ props.item.quantity }}</span>
                    <template v-if="order.state == 2 && props.item.status == 0">
                      <v-btn-toggle fab style="background-color:#ddd">
                        <v-btn flat small @click="qtyDecrease(orderindex,props.index)">
                          <v-icon dark>remove</v-icon>
                        </v-btn>
                        <input
                          type="text"
                          class="custom-form-control"
                          :value="props.item.quantity"
                          readonly
                        />
                        <v-btn flat small @click="qtyIncrease(orderindex,props.index)">
                          <v-icon dark>add</v-icon>
                        </v-btn>
                      </v-btn-toggle>
                    </template>
                  </td>
                  <td class="text-xs-left" style="cursor: pointer">{{ props.item.total_price }}</td>
                  <td class="text-xs-left" style="cursor: pointer">
                    <div v-if="props.item.status == 0">
                      <v-icon v-if="order.state == 1">remove</v-icon>
                      <v-icon v-if="order.state == 3">close</v-icon>
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
              <!-- <div
                class="elevation-2 pr-2"
                color="success"
                style="float: right;
                      bottom: 15px;
                      position: absolute;
                      left: 100px;
                      text-align:right"
              >
                <ul>
                  <li>Total Price 1000</li>
                  <li>Extra Charge 1000</li>
                  <li style="border-bottom:1px solid #ddd">Discount 1000</li>
                  <li>
                    <b>Grand Total 1000</b>
                  </li>
                </ul>
              </div>
              
              -->
              <v-btn
                v-if="order.state > 2"
                disabled
                style="float: right;
                      bottom: 6px;
                      position: absolute;
                      right: 180px;
                      color: #000 !important;
                      font-size:10px;
                      font-weight:bolder"
                color="success"
              >((Total Price {{order.total_price }} + Extra Charge {{order.extra_charge}}) - Discount {{order.discount}}) = {{( parseInt( order.total_price) + parseInt(order.extra_charge))- order.discount}}/-</v-btn>

              <v-btn
                v-if="order.state != 3"
                :disabled="checkItemDone(orderindex)"
                @click="changeOrderState(orderindex)"
                style="float: right;
                      bottom: 6px;
                      position: absolute;
                      right: 6px;"
                color="success"
              >{{ order.state == 1 ? 'Start Working' : order.state == 2 ? 'Finished' : order.state == 3 ? 'Collect Payment' : 'Finish Job'}}</v-btn>

              <div
                v-if="order.state == 3"
                style="float: right;
                      bottom: 6px;
                      position: absolute;
                      right: 6px;
                      text-align: center;"
                color="success"
              >
                <v-text>Collect Payment</v-text>
                <br />
                <v-btn small class="p-0 m-0" @click="collectCash(orderindex)">Cash</v-btn>
                <v-btn
                  v-if="order.order_from != 'ondemand'"
                  small
                  class="p-0 m-0"
                  @click="payDigital(orderindex)"
                >Digital</v-btn>
                <v-btn
                  v-if="order.order_from == 'ondemand' || order.order_from == 'affiliation'"
                  small
                  class="p-0 m-0"
                  @click="payLater(order.id)"
                >Pay Later</v-btn>
              </div>
            </v-card>
            <v-btn color="success" dark absolute bottom left fab @click="addNewService(order)">
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

    <v-navigation-drawer
      v-if="addNewServiceDrawer"
      width="800"
      v-model="addNewServiceDrawer"
      temporary
      right
      style="position: fixed"
    >
      <v-list class="pa-3" style="background-color: var(--primary) !important">
        <h3
          style="font-size: 20px; text-align: center; color: var(--secondary)"
        >সার্ভিস-এর বিস্তারিত</h3>
      </v-list>
      <v-list style="background-color: white !important;" class="pt-0">
        <div style="padding: 20px;">
          <!-- <v-data-table
            :headers="newHeadersItem"
            :items="addNewItems"
            hide-actions
            :items-per-page="5"
            class
          >
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.service_name }}</td>
              <td class="text-xs-left">{{ props.item.service_bit_name }}</td>
              <td class="text-xs-left">{{ props.item.quantity }}</td>
              <td class="text-xs-left">{{ props.item.price }}</td>
              <td class="text-xs-left">{{ props.item.additional_price }}</td>
              <td class="text-xs-left">{{ props.item.total_price }}</td>
              <td class="text-xs-left">
                <v-icon>{{ props.item.status == 1 ? 'done' : 'close' }}</v-icon>
              </td>
            </template>
          </v-data-table>-->
          <v-list>
            <v-list-group v-for="item in addNewItems" :key="item.title" no-action>
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{item.name}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>

              <v-list-tile v-for="subItem  in item.serviceBits" :key="subItem.id">
                <v-checkbox v-model="selectedNewItems" :value="subItem">
                  <template v-slot:label>
                    <v-list-tile-content>
                      <v-list-tile-title class="pt-1">{{subItem.name}}</v-list-tile-title>
                      <!-- <v-list-tile-sub-title
                        v-if="checkSelectedBit(serviceBit.id)"
                      >Price: {{bitPriceTotal(serviceBit.id)}}</v-list-tile-sub-title>-->
                    </v-list-tile-content>
                  </template>
                </v-checkbox>
                <v-felx v-if="!checkSelectedBit(subItem.id)">
                  <v-btn-toggle fab style="background-color:#ddd">
                    <v-btn flat small @click="subItem.qty == 1 ? 1 :subItem.qty--">
                      <v-icon dark>remove</v-icon>
                    </v-btn>
                    <input type="text" class="custom-form-control" :value="subItem.qty" />
                    <v-btn flat small @click="subItem.qty++">
                      <v-icon dark>add</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-felx>
              </v-list-tile>
            </v-list-group>
          </v-list>

          <div style="text-align: center; margin-top: 15px;">
            <v-btn
              color="accent"
              @click.stop="addNewServiceDrawer = false; $emit('clicked', false)"
              style="min-width: 100px !important; margin: 5px; margin-top: 20px;"
            >
              <v-icon class="button-icon-cancel">close</v-icon>
            </v-btn>

            <v-btn
              color="success"
              @click="newSelectedItemsAdd"
              style="min-width: 100px !important; margin: 5px; margin-top: 20px;"
            >
              <v-icon class="button-icon-cancel">check</v-icon>
            </v-btn>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
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
        { text: "Quantiy", sortable: false, align: "center" },
        { text: "Price", sortable: false },
        { text: "Action", sortable: false }
      ],
      orders: [],
      newHeadersItem: [
        { text: "সার্ভিস", value: "service" },
        { text: "সার্ভিস বিট", value: "service bit" },
        { text: "পরিমান", value: "quantity" },
        { text: "মূল্য", value: "price" },
        { text: " অতিঃমূল্য", value: "additional price" },
        { text: "মোট মূল্য", value: "total price" },
        { text: "Action", value: "action" }
      ],
      addNewServiceDrawer: false,
      addNewItems: [],
      selectedNewItems: [],
      selectedOrder: ""
    };
  },
  methods: {
    async allocatedOrder() {
      var orders = await axios.get("/allowcated-orders/comrade");
      this.orders = orders.data.data;
    },
    changeItemStatus(orderIndex, itemIndex) {
      this.itemDone(this.orders[orderIndex].items[itemIndex].id);
      this.orders[orderIndex].items[itemIndex].status = 1;
    },
    async itemDone(itemId) {
      var res = await axios.get(`/item-status-change/${itemId}`);
      if (res.data.message == "Work Done") {
        this.snackbar = true;
        this.message = res.data.message;
      }
    },
    changeOrderState(orderIndex) {
      if (this.orders[orderIndex].state == 1) {
        this.startServicing(this.orders[orderIndex].id);
      }

      if (this.orders[orderIndex].state == 2) {
        this.finishServicing(this.orders[orderIndex].id, orderIndex);
      }
      this.orders[orderIndex].state++;
      this.orders[orderIndex].status++;
    },

    async startServicing(orderId) {
      var res = await axios.post("start-servicing", { id: orderId });
      if (res.data.message == "Status Updated") {
        this.snackbar = true;
        this.message = res.data.message;
      }
    },

    async finishServicing(orderId, orderIndex) {
      var res = await axios.post("finish-servicing", { id: orderId });
      if (res.data.message == "Order Finished") {
        this.snackbar = true;
        this.message = "Order finished successfully wait for payment";
        this.orders[orderIndex].discount = res.data.discount;
        this.orders[orderIndex].total_price = res.data.total_price;
      }
    },

    async collectPayment(orderId) {
      var res = await axios.post("collect-payment", { id: orderId });
      if (res.data.message == "Order Finish successfully") {
        this.snackbar = true;
        this.message = res.data.message;
      } else {
        this.snackbar = true;
        this.message = "Something went wrong";
      }
    },
    collectCash(orderIndex) {
      if (this.orders[orderIndex].state == 3) {
        this.collectPayment(this.orders[orderIndex].id);
        this.orders[orderIndex].status++;
        this.orders[orderIndex].state++;
      }
    },
    payDigital(orderIndex) {
      if (this.orders[orderIndex].state == 3) {
        this.paySSL(this.orders[orderIndex].id);
      }

      // this.orders[orderIndex].status =
      //   parseInt(this.orders[orderIndex].status) + 1;
      // this.orders[orderIndex].state =
      //   parseInt(this.orders[orderIndex].state) + 1;
    },
    payLater(order_id) {
      axios.get(`/outstanding/add/${order_id}`).then(res => {
        if (res.data == 1) {
          this.allocatedOrder();
        } else {
          alert("Something went wrong");
        }
      });
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
    },
    qtyIncrease(orderIndex, itemIndex) {
      var item = this.orders[orderIndex].items[itemIndex];
      item.quantity++;
      if (item.quantity > 1) {
        item.total_price = parseFloat(
          parseInt(item.price) +
            parseInt((item.quantity - 1) * item.additional_price)
        ).toFixed(2);
      } else {
        item.total_price = parseFloat(item.price).toFixed(2);
      }

      this.qtyUpdate(item.id, item.quantity);
    },
    qtyDecrease(orderIndex, itemIndex) {
      var item = this.orders[orderIndex].items[itemIndex];
      if (item.quantity != 1) {
        item.quantity--;
        item.total_price = parseFloat(
          parseInt(item.price) +
            parseInt((item.quantity - 1) * item.additional_price)
        ).toFixed(2);
      }

      if (item.quantity == 1) {
        item.total_price = parseFloat(item.price).toFixed(2);
      }

      this.qtyUpdate(item.id, item.quantity);
    },

    async qtyUpdate(itemId, qty) {
      var res = await axios.get(`item-quantity-update/${itemId}/${qty}`);
      if ((res.data.message = "success")) {
        console.log("Quantity Update");
      }
    },

    async addNewService(order) {
      this.addNewServiceDrawer = true;
      var res = await axios.get(`/category/service_by_id/${order.category_id}`);
      this.selectedOrder = order;
      this.addNewItems = res.data.data.services;
    },

    checkSelectedBit: function(serviceBitId) {
      var arr = this.selectedNewItems;
      var slectedBit = this.selectedNewItems.find(
        arr => arr.id == serviceBitId
      );
      var arr2 = this.addNewItems;
      var bit = this.addNewItems.find(arr2 => arr2.id == serviceBitId);
      return slectedBit == bit ? true : false;
    },

    async newSelectedItemsAdd() {
      // console.log(this.selectedNewItems);
      var res = await axios.post(`add_new_service/${this.selectedOrder.id}`, {
        data: this.selectedNewItems
      });

      var order = this.orders;
      var corder = this.orders.find(order => order.id == this.selectedOrder.id);
      console.log(corder.items);
      //corder.items.push.apply(corder.items, res.data.data);
      corder.items = res.data.data;
      this.addNewServiceDrawer = false;
    },
    async paySSL(orderid) {
      var res = await axios.get(`pay/ssl/${orderid}`);
      if (res.data.status == "success") {
        axios.post("pay/offline", {
          orderId: orderid,
          payUrl: res.data.data
        });
        // window.location.href = res.data.data;
        // //window.open(res.data.data, '_blank');
        // this.payDialog = false;
      }
    }
  },
  created() {
    this.allocatedOrder();
  },
  mounted() {
    axios.get("/allowcated-orders/comrade").then(res => {
      this.orders = res.data.data;
    });
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