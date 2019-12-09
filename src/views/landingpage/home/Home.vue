<template>
  <div>
    <Home_A />
    <v-flex md12>
      <h4>CALL FOR SERVICE</h4>
      <h3>
        <v-icon>phone_in_talk</v-icon>09610 222 111
      </h3>
    </v-flex>
  </div>
</template>

<script>
import axios from "../../../axios_instance.js";
import { localStorageService } from "../../../helper.js";
import Home_A from "../home/Home_A";

export default {
  name: "HOME",
  components: {
    Home_A
  },
  data() {
    return {
      rememberMe: false,
      password: null,
      passShow: null,
      alertMessage: null,
      snackbar: false,
      tabs: 0
    };
  },
  created(){
    this.storeCategorys();
  },
  methods: {
    async storeCategorys() {
      var allCategory = await axios.get("/category"); // http://dev.mm/api/category
     // this.$store.commit("setCategory", {category:allCategory});
     localStorageService.setItem('categorys',allCategory.data.data);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Acme&display=swap");
.v-tabs__slider-wrapper > .v-tabs__slider {
  background-color: var(--accent) !important;
}
.landing-margin {
  width: 100% !important;
  text-align: center !important;
  margin-left: 10% !important;
  margin-right: 10% !important;
}
</style>
