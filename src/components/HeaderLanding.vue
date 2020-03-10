<template>
  <header class="main-header header-style-one">
    <!-- <div class="col-md-12" style="background-color:#000;color:#fff">something</div> -->
    <div class="auto-container">
      <div class="header-lower" style="border-radius: 0px 0px 17px 17px;">
        <div class="main-box clearfix">
          <div class="logo-box">
            <div class="logo p-1">
              <router-link to="/">
                <img style="height: 94px;" src="https://mistrimama.com/photos/1/a.png" alt title />
              </router-link>
            </div>
          </div>
          <div class="nav-outer clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-md">
              <div class="navbar-header">
                <!-- Toggle Button -->
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <v-icon class="icon">menu</v-icon>
                </button>
              </div>

              <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                  <li class="dropdown">
                    <a href="/">Home</a>
                  </li>
                  <li class="dropdown">
                    <a href="#aboutus">About Us</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">Our Services</a>
                  </li>
                  <li class="dropdown">
                    <a href="#" @click="quicikOrderDialog = true">Quick Order</a>
                  </li>
                  <li class="dropdown">
                    <a href="#contactus">Contact Us</a>
                  </li>
                  <li class="dropdown" style="margin-top: -6px;">
                    <router-link to="/login/user">
                      <v-chip color="primary" text-color="white">
                        <v-avatar style="padding-left: 10px !important;">
                          <v-icon>person</v-icon>
                        </v-avatar>Login &nbsp;&nbsp;
                      </v-chip>
                    </router-link>
                  </li>
                  <li class="dropdown" style="margin-left: 10px;margin-top: -6px;">
                    <router-link to="/login/user">
                      <v-chip color="primary" text-color="white">
                        <v-avatar style="padding-left: 10px !important;">
                          <v-icon>person_add</v-icon>
                        </v-avatar>Sign Up &nbsp;&nbsp;
                      </v-chip>
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>
            <!-- Main Menu End-->

            <!-- Outer Box-->
            <!-- <div class="outer-box">
                <div class="search-box-outer">
                  <div class="dropdown">
                    <button
                      class="search-box-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="fa fa-user"></span>
                    </button>
                    <ul
                      class="dropdown-menu pull-right search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li class="panel-outer">
                        <div class="form-container">
                          <form
                            method="post"
                            action="https://expert-themes.com/html/contra/blog.html"
                          >
                            <div class="form-group">
                              <input
                                type="search"
                                name="field-name"
                                value
                                placeholder="Search Here"
                                required
                              />
                              <button type="submit" class="search-btn">
                                <span class="fa fa-search"></span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="quicikOrderDialog" persistent max-width="600px">
      <v-card
        style="background-color: #131313e6;border-color: #fff;color: rgba(255, 255, 255, 0.87);"
      >
        <v-card-title>
          <span class="headline">Quick Order</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-autocomplete
                  v-model="quickOrderData.category_id"
                  :items="categorys"
                  item-text="name"
                  item-value="id"
                  label="Search for a service"
                  full-width
                  hide-details
                  hide-no-data
                  hide-selected
                  single-line
                  required
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="quickOrderData.name"
                  color="primary"
                  label="Full Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="quickOrderData.phone" label="Phone Number" required></v-text-field>
              </v-flex>
              <!-- <v-flex xs12>
                <v-text-field v-model="quickOrderData.address" label="Details Address" required></v-text-field>
              </v-flex>-->
              <v-flex xs12>
                <v-text-field v-model="quickOrderData.comments" label="Comments/Notes" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary darken-1" flat @click="quicikOrderDialog = false">Close</v-btn>
          <v-btn color="primary darken-1" flat @click="palceQuickOrder">Order</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </header>
</template>

<script>
import axios from "../axios_instance";
export default {
  props: ["categorys"],
  data() {
    return {
      quicikOrderDialog: false,
      quickOrderData: {
        category_id: "",
        name: "",
        phone: "",
        address: "",
        comments: ""
      }
    };
  },
  methods: {
    async palceQuickOrder() {
      var res = await axios.post("quickorder", {
        category_id: this.quickOrderData.category_id,
        name: this.quickOrderData.name,
        phone: this.quickOrderData.phone,
        address: this.quickOrderData.address,
        comments: this.quickOrderData.comments
      });
      console.log(res);
      if (res.status == 200) {
        this.quicikOrderDialog = false;
        alert("We will contact you soon!");
      } else {
        alert("Something went worng");
      }
    }
  }
};
</script>

<style>
.header-style-one .header-lower:after {
  position: absolute;
  top: 0;
  right: -30px;
  height: 0;
  width: 0;
  border-right: 30px solid transparent;
  border-top: 90px solid rgba(0, 0, 0, 0.8);
  content: "";
}
.header-style-one .header-lower:before {
  position: absolute;
  top: 0;
  left: -30px;
  height: 0;
  width: 0;
  border-left: 30px solid transparent;
  border-top: 90px solid rgba(0, 0, 0, 0.8);
  content: "";
}

.theme--light.v-label {
  color: #ffc107 !important;
}

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #ffc107 !important;
}

.theme--light.v-select .v-select__selections {
  color: #ffc107 !important;
}

.v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
  padding: 0 0px !important;
}

.v-text-field.v-text-field--enclosed {
  border-bottom: 1px solid #ffc107 !important;
}
.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: rgb(241, 183, 8);
}
</style>