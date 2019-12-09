<template>
  <div>
    <v-toolbar class="hidden-md-and-down landing-padding" color="third" fixed>
      <v-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
        style="color: var(--secondary); cursor: pointer"
      >menu</v-icon>
      <img style="height: 90%;" src="http://mistrimama.com/photos/1/a.png" alt="mistrimama_logo">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn style="border-radius: 0px !important;" flat to="/">HOME</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/asd">ABOUT US</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/ww">SERVICES</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/dd">BOOK NOW</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/mulmenu">CONTACT</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="toolbar-button" to="/login" flat>LOGIN</v-btn>
        <v-btn class="toolbar-button" to="/login" flat>SIGN UP</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-toolbar class="hidden-lg-and-up" color="third" flat fixed>
      <v-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
        style="color: var(--secondary); cursor: pointer"
      >menu</v-icon>
      <img
        class="hidden-sm-and-down"
        style="height: 90%;"
        src="http://mistrimama.com/photos/1/a.png"
        alt="mistrimama_logo"
      >
      <v-flex hidden-md-and-up>
        <h1 class="headings">{{ this.$route.name }}</h1>
      </v-flex>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn style="border-radius: 0px !important;" flat to="/">HOME</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/asd">ABOUT US</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/ww">SERVICES</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/dd">BOOK NOW</v-btn>
        <v-btn style="border-radius: 0px !important;" flat to="/mulmenu">CONTACT</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn class="toolbar-button" flat>LOGIN</v-btn>
        <v-btn class="toolbar-button" flat>SIGN UP</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
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
      <div class="custon-menu-textcolor" style="margin-top: 10px; color: var(--third) !important;">
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
        <!-- <v-btn
          v-for="item in menuItems"
          :key="item.title"
          flat
          :to="item.link"
          style="color: var(--third) !important;"
        >
          {{item.title}}
        </v-btn>-->
      </div>
    </v-navigation-drawer>
    <!-- <router-view/> -->
    <!-- <v-flex hidden-md-and-up>
          <Footer/>
    </v-flex>-->
  </div>
</template>

<script>
// import { localStorageService } from "../helper.js";
// import Footer from "../components/Footer";

export default {
  name: "DashboardLandingPage",
  components: {
    // Footer
  },
  data: () => ({
    drawer: null,
    userInfo: [],
    menuItems: [
      { title: "HOME", link: "/" },
      { title: "ABOUT US", link: "/about" },
      { title: "SERVICES", link: "/services" },
      { title: "BOOK NOW", link: "/book" },
      { title: "CONTACT", link: "/contact" }
    ]
  }),
  methods: {
    logout() {
      // localStorage.clear();
      // this.$router.push("/login");
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
    // await this.$store.commit("setUserInfo", {
    //   afterLoginUserData: localStorageService.getItem("currentUserData"),
    //   d_token: localStorageService.getItem("d_token")
    // });
    // this.userInfo = this.$store.getters.getCurrentUserData;
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
.v-toolbar {
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: var(--third) !important;
  border-bottom: 4px solid var(--primary) !important;
}
.v-menu {
  padding: 0px !important;
  margin: 0px !important;
}
// .v-btn {
//   color: var(--primary) !important;
//   width: 100%;
//   min-width: 0px;
//   padding-left: 0px;
//   margin-left: 0px;
// }
// .v-btn__content {
//   color: var(--primary) !important;
//   width: 100%;
//   min-width: 0px;
//   padding-left: 0px;
//   margin-left: 0px;
//   justify-content: initial !important;
//   display: flex !important;
// }

// .v-avatar {
//   background-color: var(--primary);
// }
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
.toolbar-button {
  color: white !important;
  background-color: var(--primary);
  margin-left: 3px !important;
  margin-right: 3px !important;
  border-radius: 0px !important;
  min-width: 100px;
}
.toolbar-button:hover {
  color: var(--primary) !important;
  background-color: var(--secondary) !important;
}
.landing-padding {
  text-align: center !important;
  padding-left: 10% !important;
  padding-right: 10% !important;
}
</style>
