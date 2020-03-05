<template>
  <div>
    <v-layout row>
      <v-flex
        hidden-sm-and-down
        md2
        lg2
        style="background-color: var(--secondary); height: 100vh; position: fixed; width: 100%"
      >
        <div style="text-align: center !important">
          <div
            style="height: 64px; background: url('https://img.freepik.com/free-vector/abstract-modern-yellow-background_42581-368.jpg?size=626&ext=jpg'); background-position:center; background-repeat:no-repeat; background-size:cover"
          >
            <img
              style="height: 80%; margin-top: 2%;"
              src="http://mistrimama.com/photos/1/a.png"
              alt="mistrimama_logo"
            />
          </div>
          <v-list dark style="background-color: var(--secondary) !important; margin-top: 8px;">
            <v-list-tile
              v-for="item in menuItems"
              :key="item.title"
              avatar
              @click.stop
              style="background-color: var(--secondary);"
              :to="item.link"
            >
              <v-list-tile-avatar>
                <v-icon color="secondary">{{item.avatar}}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              avatar
              @click.stop
              style="background-color: var(--secondary);"
              href="tel:+8809610222111"
            >
              <v-list-tile-avatar>
                <v-icon color="secondary">phone_in_talk</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>CONTACT US</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </div>
      </v-flex>
      <v-flex hidden-sm-and-down md2 lg2></v-flex>
      <v-flex xs12 sm12 md10 lg10>
        <v-toolbar color="third" flat>
          <v-icon
            @click.stop="drawer = !drawer"
            class="hidden-md-and-up"
            style="color: var(--secondary); cursor: pointer"
          >menu</v-icon>
          <!-- <v-flex>
            <h4 class="headings">{{ this.$route.name }}</h4>
            <v-btn @click="payDialog = !payDialog ">Test</v-btn>
          </v-flex>-->

          <v-spacer></v-spacer>
          <v-text
            v-if="userInfo.client_type != 'client' || userInfo.client_type != 'agent'"
          >{{userInfo.company_name}}</v-text>
          <v-menu transition="slide-y-transition" offset-y left>
            <template v-slot:activator="{ on }">
              <v-toolbar-items>
                <v-icon
                  v-on="on"
                  style="font-size: 25px;"
                  color="secondary"
                  class="icon-hover-scoped"
                >notifications_none</v-icon>
              </v-toolbar-items>
            </template>
            <v-list style="background-color: white !important">
              <v-list-tile style="cursor: pointer" to="/mulmenu">
                <v-list-tile-title>
                  <v-icon class="font-sizes">notifications_none</v-icon>
                  <label
                    style="color: var(--secondary)"
                  >Work has been done in Mohammadpur, Dhaka at 02:45pm.</label>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile style="cursor: pointer" to="/mulmenu">
                <v-list-tile-title>
                  <v-icon class="font-sizes">notifications_none</v-icon>
                  <label style="color: var(--secondary)">New request has been sent.</label>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile style="cursor: pointer" to="/mulmenu">
                <v-list-tile-title>
                  <v-icon class="font-sizes">notifications_none</v-icon>
                  <label
                    style="color: var(--secondary)"
                  >Work has been started in Dhanmondi, Dhaka at 09:17pm.</label>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile style="cursor: pointer" to="/mulmenu">
                <v-list-tile-title>
                  <v-icon class="font-sizes">notifications_none</v-icon>
                  <label style="color: var(--secondary)">Client has rejected the request.</label>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile style="cursor: pointer" to="/mulmenu">
                <v-list-tile-title>
                  <v-icon class="font-sizes">notifications_none</v-icon>
                  <label
                    style="color: var(--secondary)"
                  >Work has been done in Mirpur, Bangladesh at 02:45pm.</label>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-menu transition="slide-y-transition" offset-y left>
            <template v-slot:activator="{ on }">
              <v-toolbar-items>
                <v-icon
                  v-on="on"
                  style="font-size: 25px;"
                  color="secondary"
                  class="icon-hover-scoped"
                >account_circle</v-icon>
              </v-toolbar-items>
            </template>
            <v-list style="background-color: white !important">
              <v-list-tile style="cursor: pointer" to="/profile">
                <v-list-tile-title>
                  <v-icon class="font-sizes">person</v-icon>Profile
                </v-list-tile-title>
              </v-list-tile>
              <!-- <v-list-tile style="cursor: pointer" to="/settings">
                <v-list-tile-title>
                  <v-icon class="font-sizes">settings</v-icon>Settings
                </v-list-tile-title>
              </v-list-tile>-->
              <!-- <v-list-tile style="cursor: pointer" to="/help">
                <v-list-tile-title>
                  <v-icon class="font-sizes">help</v-icon>Help
                </v-list-tile-title>
              </v-list-tile>-->
              <v-list-tile style="cursor: pointer">
                <v-list-tile-title @click="logout">
                  <v-icon class="font-sizes">power_settings_new</v-icon>Logout
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-navigation-drawer
          v-model="drawer"
          style="background-color: var(--secondary);"
          absolute
          temporary
        >
          <v-list
            style="padding: 0px !important; text-align: center; background-color: var(--primary) !important"
          >
            <div
              style="height: 64px; background: url('https://img.freepik.com/free-vector/abstract-modern-yellow-background_42581-368.jpg?size=626&ext=jpg'); background-position:center; background-repeat:no-repeat; background-size:cover"
            >
              <img
                style="height: 80%; margin-top: 2%;"
                src="http://mistrimama.com/photos/1/a.png"
                alt="mistrimama_logo"
              />
            </div>
          </v-list>
          <div
            class="custon-menu-textcolor"
            style="margin-top: 10px; color: var(--third) !important;"
          >
            <v-btn
              v-for="item in menuItems"
              :key="item.title"
              flat
              :to="item.link"
              style="color: var(--third) !important;"
            >
              <!-- <v-icon class="font-sizes">{{item.avatar}}</v-icon> -->
              {{item.title}}
            </v-btn>
          </div>
        </v-navigation-drawer>
        <router-view />
        <!-- <v-flex hidden-md-and-up>
          <Footer/>
        </v-flex>-->
      </v-flex>
    </v-layout>

    <v-layout row justify-center v-if="waitngPayOrder">
      <v-dialog v-model="payDialog" persistent style="width:80%">
        <v-card>
          <v-container class="grey lighten-5">
            <h3
              style="text-align:center"
              color="white"
            >Your order has been served. Service Provider Wating for payment</h3>
            <v-divider></v-divider>
            <v-layout row>
              <v-flex xs4 sm12>
                <v-card dark tile flat color="white" style="color:#000;float:left">
                  <v-card-text>
                    <b>User:</b>
                    <br />
                    {{waitngPayOrder.name}}
                    <br />
                    {{waitngPayOrder.phone}}
                    <br />
                    {{waitngPayOrder.address}}
                    <br />
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4 sm12>
                <v-card dark tile flat color="white" style="color:#000;text-align:center">
                  <v-card-text>
                    Order#
                    <br />
                    {{waitngPayOrder.order_no}}
                    <br />
                    {{waitngPayOrder.category_name}}
                    <br />
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4 sm12>
                <v-card dark tile flat color="white" style="color:#000;float:right">
                  <v-card-text>
                    <b>Service Provider:</b>
                    <br />
                    {{waitngPayOrder.comrade_name}}
                    <br />
                    {{waitngPayOrder.comrade_phone}}
                    <br />
                    {{waitngPayOrder.comrade_address}}
                    <br />
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs12>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Service Bit</th>
                      <th class="text-right">Price</th>
                      <th class="text-right">Adtnl. Price</th>
                      <th class="text-center">Qty</th>
                      <th class="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in waitngPayOrder.items" :key="item.id" v-if="item.status == 1">
                      <td>{{item.service_name}}</td>
                      <td>{{item.service_bit_name}}</td>
                      <td class="text-right">{{item.price}}</td>
                      <td class="text-right">{{ item.quantity > 1 ? item.additional_price : '0.00'}}</td>
                      <td class="text-center">{{item.quantity}}</td>
                      <td class="text-right">{{item.total_price}}</td>
                    </tr>
                    <tr class="bg-light">
                      <td colspan="3"></td>
                      <td colspan="2">(+)Extra Charge</td>
                      <td class="text-right">{{waitngPayOrder.extra_charge}}</td>
                    </tr>
                    <tr class="bg-light">
                      <td colspan="3"></td>
                      <td colspan="2">(-)Discount</td>
                      <td class="text-right">{{waitngPayOrder.discount}}</td>
                    </tr>
                    <tr class="bg-dark text-white">
                      <td colspan="3"></td>
                      <td colspan="2">Grand Total</td>
                      <td class="text-right">{{waitngPayOrder.total_price.toFixed(2)}}</td>
                    </tr>
                  </tbody>
                </table>
              </v-flex>
            </v-layout>
          </v-container>

          <v-card-actions style="overflow:hidden">
            <v-btn style="width:33%" class="pl-3" @click="payCash(waitngPayOrder.id)">
              <v-icon>monetization_on</v-icon>Cash
            </v-btn>
            <v-btn style="width:33%" class="pl-3" @click="paySSL(waitngPayOrder.id)">
              <v-icon>payment</v-icon>Card
            </v-btn>
            <v-btn style="width:33%" class="pl-3" @click="bkashPay(waitngPayOrder.id)">
              <v-icon>polymer</v-icon>Bkash
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>
<script src="https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js"></script>
<script>
import axios from "../axios_instance.js";
import { localStorageService } from "../helper.js";
// import Footer from "../components/Footer";

export default {
  name: "DashboardUser",
  components: {
    // Footer
  },
  data: () => ({
    payDialog: false,
    waitngPayOrder: [],
    isPayActive: false,
    drawer: null, 
    userInfo: [],
    menuItems: [
      { title: "DASHBOARD", link: "/user", avatar: "dashboard" },
      {
        title: "ORDER HISTORY",
        link: "order-history",
        avatar: "history"
      },
      { title: "PROMO CODE", link: "/promo", avatar: "code" },
      { title: "REFER", link: "/refer", avatar: "group" },
      { title: "OFFERS", link: "/offers", avatar: "local_offer" }
    ]
  }),
  created() {
    this.storeCategorys();
    Echo.channel("orderPaymentChannel").listen("OrderPaymentEvent", res => {
      console.log(res);
      //  this.getServices();
    });
    this.watingPayOrder();
  },
  watch: {
    $route(to, from) {
      this.watingPayOrder();
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },

    async storeCategorys() {
      var allCategory = await axios.get("/category"); // http://dev.mm/api/category
      localStorageService.setItem("categorys", allCategory.data.data);
    },
    async watingPayOrder() {
      var order = await axios.get("/user/check-waiting-payment");
      this.waitngPayOrder = order.data.data;
      if (this.waitngPayOrder) {
        this.payDialog = true;
      }
    },
    async payCash(orderid) {
      var res = await axios.get(`pay/cash/${orderid}`);
      if (res.data.message == "Success") {
        this.payDialog = false;
      }
    },
    async paySSL(orderid) {
      var res = await axios.get(`pay/ssl/${orderid}`);
      if (res.data.status == "success") {
        window.location.href = res.data.data;
        //window.open(res.data.data, '_blank');
        this.payDialog = false;
      }
    },
    bkashPay(ordedrId) {
      window.location.href = `http://dev.mm/pay/bkash/${ordedrId}`;
    },
    /* bkashPayInit(orderid) {
      axios
        .post("pay/bkash", {
          id: orderid
        })
        .then(res => {
          console.log(res);
          bKash.init({
            paymentMode: "checkout"
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    bkashPayInitTest(orderid) {
      bkash
        .queryPayment({
          paymentID: "42"
        })
        .then(({ data, error, headers, meta }) => {
          // data  -> HTTP Status Code < 400
          // error -> HTTP Status Code >= 400
          console.log(data);
        })
        .catch(err => {
          // HTTP Status Code >= 500
        });
      axios
        .get("bkash/token")
        .then(res => {
          console.log(res);
          var paymentID = "";
          bKash.init({
            paymentMode: "checkout", //fixed value ‘checkout’
      // paymentRequest format: {amount: AMOUNT, intent: INTENT}
      // intent options
      // 1) ‘sale’ – immediate transaction (2 API calls)
      // 2) ‘authorization’ – deferred transaction (3 API calls)
      paymentRequest: {
        amount: "100.50", //max two decimal points allowed
        intent: "sale"
      },
      createRequest: function(request) {
      // request object is basically the paymentRequest object, automatically pushed by the script in createRequest method
      $.ajax({
        url: "MERCHANT_BACKEND_CREATE_API_CALLER_URL",
        type: "POST",
        contentType: "application/json",
        success: function(data) {
          data = JSON.parse(data);
          if (data && data.paymentID != null) {
            paymentID = data.paymentID;
            bKash.create().onSuccess(data); //pass the whole response data in bKash.create().onSucess() method as a parameter
          } else {
            bKash.create().onError();
          }
        },
        error: function() {
          bKash.create().onError();
        }
      });

        axios
          .post("pay/bkash", {
            id: orderid
          })
          .then(res => {
            console.log(res);
            paymentID = res.data.paymentID;
            bKash.create().onSuccess(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
      executeRequestOnAuthorization: function() {
        $.ajax({
          url: "MERCHANT_BACKEND_EXECUTE_API_CALLER_URL",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify({
            paymentID: paymentID
          }),
          success: function(data) {
            data = JSON.parse(data);
            if (data && data.paymentID != null) {
              window.location.href = "success.html"; //Merchant’s success page
            } else {
              bKash.execute().onError();
            }
          },
          error: function() {
            bKash.execute().onError();
          }
        });
      }
        });
      })
      .catch(err => {
        console.log(err);
      });
    },*/
    getUser() {
      return localStorageService.getItem("currentUserData");
    }
  },
  computed: {
    mobileNumberComputed: function() {
      return this.userInfo.mobileNumber;
    },
    displayImage: function() {
      return process.env.VUE_APP_IMAGE_API_URL + this.userInfo.image;
    }
  },
  async mounted() {
    await this.$store.commit("setUserInfo", {
      afterLoginUserData: localStorageService.getItem("currentUserData"),
      d_token: localStorageService.getItem("d_token")
    });
    this.userInfo = this.$store.getters.getCurrentUserData;
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
.v-toolbar {
  background-color: var(--third) !important;
  border-bottom: 1px solid rgba(216, 216, 216, 0.801) !important;
}
.v-btn {
  color: var(--primary) !important;
  width: 100%;
  min-width: 0px;
  padding-left: 0px;
  margin-left: 0px;
}
.v-btn__content {
  color: var(--primary) !important;
  width: 100%;
  min-width: 0px;
  padding-left: 0px;
  margin-left: 0px;
  justify-content: initial !important;
  display: flex !important;
}

.v-avatar {
  background-color: var(--primary);
}
.card-custom:hover {
  padding: 5px;
  cursor: pointer;
}
.custon-menu-textcolor > .v-btn {
  color: var(--secondary) !important;
}
.headings {
  color: var(--secondary);
}
.icon-hover-scoped:hover {
  background-color: var(--primary) !important;
  color: var(--third) !important;
  border-radius: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
}
.icon-hover-scoped {
  padding: 5px;
  margin: 5px;
}
.font-sizes {
  font-size: 19px;
  margin-right: 5px;
}
.custon-menu-textcolor > .v-btn--flat > .v-btn__content,
.custon-menu-textcolor,
.v-btn__content {
  justify-content: flex-start !important;
  color: red !important;
  text-align: left !important;
}
.chips {
  padding: 5px;
}
.v-menu__content {
  border-radius: 5px;
}
.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>
