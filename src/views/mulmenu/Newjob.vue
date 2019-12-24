<template>
  <div>
    <v-card flat style="height:396px">
      <h3 class="custom-title">
        <v-icon class="custom-icon">gavel</v-icon>নতুন অর্ডার
      </h3>

      <v-layout mx-2 style="overflow: auto;height: 340px;">
        <v-flex xs12 sm12>
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
                    color="accent"
                    item-text="name"
                    item-value="id"
                    :items="drawerComradeData.comrades"
                    label="সহকারী নির্বাচন করুন"
                  ></v-select>
                </v-col>
                <div style="text-align: center;">
                  <v-btn
                    @click.stop="drawerComrade = !drawerComrade; $emit('clicked', false)"
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
export default {
  data() {
    return {
      drawerComrade: null,
      drawerComradeData: {
        order: "",
        comrades: [{ id: 1, name: "Sazzad" }, { id: 2, name: "Mukul" }]
      },
      // comrades: {name : 'Comrade Name' , id: 0},
      orders: [
        {
          id: 1,
          order_no: "63021",
          category_id: 1,
          category_name: "AC",
          user_id: 1,
          name: "Sabbir Hossain",
          phone: "01775280411",
          area: "Gulshan",
          address: "Location",
          location: null,
          date: "2019-12-11",
          time: "12am - 1pm",
          extra_charge: 0,
          discount: 0,
          status: 0,
          comments: null,
          items: [
            {
              id: 1,
              order_id: 1,
              service_id: 3,
              service_name: "AC Basic Servicing",
              service_bit_id: 7,
              service_bit_name: "AC Install",
              price: 2000,
              additional_price: 1800,
              quantity: 1,
              total_price: 2000,
              status: 0
            },
            {
              id: 2,
              order_id: 1,
              service_id: 3,
              service_name: "AC Basic Servicing",
              service_bit_id: 8,
              service_bit_name: "Install Ac",
              price: 100,
              additional_price: 80,
              quantity: 1,
              total_price: 100,
              status: 0
            }
          ],
          user_image: null,
          service_image:
            "http://dev.mm//storage/app/R5liB8uPtnGgoKpauo12UPgKTT5fMQzyLyFjzIqi.png"
        }
      ],
      headers: [
        { text: "Service" },
        { text: "Service Bit" },
        { text: "Quantiy" },
        { text: "Price" }
      ]
    };
  },
  created() {
    Echo.channel("orderChannel").listen("OrderEvent", res => {
      this.orders.push(res.order);
      this.getServices();
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
