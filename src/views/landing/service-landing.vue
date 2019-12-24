<template>
  <v-tabs centered icons-and-text>
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab
      v-for="category in categorys"
      :key="category.id"
      :href="'#tab-'+category.id"
      @click="loadService(category.slug)"
      
    >
      {{category.name}}
      <img :src="category.icon" alt style="height:80px" />
    </v-tab>
    <!-- <v-divider></v-divider> -->
    <v-tab-item
      v-for="category in categorys"
      :key="category.id"
      :value="'tab-' + category.id"
    >
      <v-card flat>
        <!-- <v-list v-if="services">
          <v-list-tile v-for="service in services" :key="service.id" avatar>
            <v-list-tile-avatar>
              <img :src="service.icon" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="service.name"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>-->
        <div class="text-xs-center" style="margin-top: 25px;">
          <v-chip v-for="service in services" :key="service.id" style="padding:5px">
            <v-avatar>
              <img :src="service.icon" alt="trevor" />
            </v-avatar>
            {{service.name}}
          </v-chip>

          <v-progress-circular v-if="isProggress" :size="50" color="amber" indeterminate></v-progress-circular>
        </div>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import axios from "../../axios_instance.js";
import { localStorageService } from "../../helper.js";

export default {
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      categorys: [],
      services: [],
      isProggress: false
    };
  },
  created() {
    this.categorysGet();
  },
  methods: {
    categorysGet() {
      this.categorys = localStorageService.getItem("categorys");
    },

    async loadService(category) {
      this.isProggress = true;
      this.services = "";
      var res = await axios.get(`/category/service/${category}`);
      // res.data ? (this.category = res.data.data) : (this.category = []);
      this.services = res.data.data.services;
      this.isProggress = false;
    }
  }
};
</script>

<style>
.v-tabs__container--icons-and-text {
  height: 100px !important;
}

.v-tabs__bar {
  background-color: transparent !important;
}
</style>