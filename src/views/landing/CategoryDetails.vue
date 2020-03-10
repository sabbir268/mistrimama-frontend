<template>
  <div class="page-wrapper">
    <HeaderLanding></HeaderLanding>
    <v-layout style="margin-top:100px" class="pt-3" v-if="isDataLoad">
      <div class="col-md-10 offset-md-1 p-0">
        <!-- <v-card> -->
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <!-- <span class="headline text-center"></span> -->
              <h2 class="text-left">{{category.name}}</h2>
              <div class="row">
                <p style="font-size:14px" class="pt-2 pl-3" v-html="category.description"></p>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <h4 class="pb-3">Unique Benefits</h4>
                  <div v-html="category.benifits"></div>
                </div>

                <div class="col-md-8 col-sm-8" style="border-left: 1px solid #ddd">
                  <h4 class="pb-3">Services</h4>
                  <div>
                    <span v-for="services in category.services " :key="services.id">
                      <li v-for="bit in services.serviceBits" :key="bit.id">{{bit.name}}</li>
                    </span>
                  </div>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>

        <!--         
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>-->
        <!-- </v-card> -->
      </div>
    </v-layout>
  </div>
</template>
<script>
import axios from "../../axios_instance.js";
import { localStorageService } from "../../helper.js";
import HeaderLanding from "../../components/HeaderLanding.vue";

export default {
  components: {
    HeaderLanding
  },
  data() {
    return {
      isDataLoad: false,
      category: "",
      services: ""
    };
  },
  methods: {
    async getService() {
      this.isDataLoad = false;
      var res = await axios.get(
        `/category/service/${this.$route.params.category}`
      );
      res.data ? (this.category = res.data.data) : (this.category = []);
      this.services = this.category.services;
      this.isDataLoad = true;
    }
  },

  created() {
    this.getService();
  }
};
</script>

<style>
</style>