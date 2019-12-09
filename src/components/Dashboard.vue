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
          <!-- <div
            style="background: url('https://static.vecteezy.com/system/resources/thumbnails/000/330/836/small/background-1-19.jpg'); background-position:center; background-repeat:no-repeat; background-size:cover"
          >
            <img
              style="width: 100px; margin-top: 45px; margin-bottom: 40px;"
              src="http://mistrimama.com/photos/1/a.png"
              alt="mistrimama_logo"
            >
          </div>-->
          <div
            style="height: 64px; background: url('https://img.freepik.com/free-vector/abstract-modern-yellow-background_42581-368.jpg?size=626&ext=jpg'); background-position:center; background-repeat:no-repeat; background-size:cover"
          >
            <img
              style="height: 80%; margin-top: 2%;"
              src="http://mistrimama.com/photos/1/a.png"
              alt="mistrimama_logo"
            >
          </div>
          <v-list dark style="background-color: var(--secondary) !important; margin-top: 8px;">
            <v-list-tile
              v-for="item in menuItems"
              :key="item.title"
              avatar
               @click.stop=""
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
          <v-flex hidden-md-and-up>
            <h1 class="headings">{{ this.$route.name }}</h1>
          </v-flex>
          <v-flex hidden-sm-and-down>
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-tabs right color="third">
                  <v-tab class="chips" to="/mulmenu">মূল মেনু</v-tab>
                  <v-tab class="chips" to="/shokolkaaj">সকল কাজ</v-tab>
                  <v-tab class="chips" to="/shohokari">সহকারী</v-tab>
                  <v-tab class="chips" to="/shebashomuho">সেবা সমূহ</v-tab>
                  <v-tab class="chips" to="/ayerbiboroni">আয়ের বিবরণী</v-tab>
                </v-tabs>
              </template>
            </v-menu>
          </v-flex>

          <!-- <v-toolbar-title
            style="display: inline-block;"
            class="headline text-uppercase hidden-sm-and-down"
          >
            <span
              style="color: var(--secondary); font-family: 'Acme', sans-serif; font-size: 30px;"
            >
              <b>IERS</b>
            </span>
          </v-toolbar-title>-->
          <!-- <v-spacer></v-spacer> -->
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
            <v-list style="background-color: white !important;">
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
              <v-list-tile style="cursor: pointer" to="/settings">
                <v-list-tile-title>
                  <v-icon class="font-sizes">settings</v-icon>Settings
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile style="cursor: pointer" to="/help">
                <v-list-tile-title>
                  <v-icon class="font-sizes">help</v-icon>Help
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile style="cursor: pointer">
                <v-list-tile-title @click="logout">
                  <v-icon class="font-sizes">power_settings_new</v-icon>Logout
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>
        <router-view/>
        <v-flex hidden-md-and-up>
          <Footer/>
        </v-flex>
      </v-flex>
    </v-layout>
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
          >
        </div>
      </v-list>
      <v-list>
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
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { localStorageService } from "../helper.js";
import Footer from "../components/Footer";

export default {
  name: "Dashboard",
  components: {
    Footer
  },
  data: () => ({
    drawer: null,
    userInfo: [],
    menuItems: [
      { title: "পূর্বের কাজ", link: "purberkaaj", avatar: "work" },
      { title: "সার্ভিস অর্ডার", link: "serviceorder", avatar: "room_service" },
      { title: "অফার দেখুন", link: "offerdekhun", avatar: "local_offer" },
      { title: "রিচার্জ করুন", link: "rechargekorun", avatar: "flash_on" },
      { title: "জিজ্ঞাসা", link: "jiggasha", avatar: "question_answer" },
      { title: "ব্যবহারবিধি", link: "baboharbidhi", avatar: "build" },
      { title: "কাস্টমার কেয়ার", link: "tenants", avatar: "group" }
    ]
  }),
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
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
.custon-menu-textcolor > .v-btn--flat > .v-btn__content,
.custon-menu-textcolor,
.custon-menu-textcolor > .v-btn__content,
.v-btn__content {
  text-align: left !important;
  justify-content: flex-start !important;
}
.v-btn {
  color: var(--primary) !important;
  width: 100%;
  min-width: 0px;
  padding-left: 0px;
  margin-left: 0px;
}
// .v-btn__content {
//   color: var(--primary) !important;
//   width: 100%;
//   min-width: 0px;
//   padding-left: 0px;
//   margin-left: 0px;
//   // justify-content: initial !important;
//   display: flex !important;
// }

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
  margin-left: 20px;
  color: var(--accent);
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
// .custon-menu-textcolor > .v-btn--flat > .v-btn__content,
// .custon-menu-textcolor,
// .v-btn__content {
//   justify-content: flex-start !important;
//   color: red !important;
//   text-align: left !important;
// }
.chips {
  padding: 5px;
}
.v-menu__content {
  border-radius: 5px;
}
</style>
