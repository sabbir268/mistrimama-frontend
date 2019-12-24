<template>
  <v-navigation-drawer width="800" v-model="drawer" temporary right style="position: fixed">
    <v-list class="pa-3" style="background-color: var(--primary) !important">
      <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">নতুন সহকারী যোগ</h3>
    </v-list>
    <v-list style="background-color: white !important;" class="pt-0" dense>
      <v-divider></v-divider>
      <div style="padding: 20px;">
        <v-form @submit.prevent>
          <v-container>
            <v-layout>
              <v-flex md6>
                <v-text-field
                  color="accent"
                  clearable
                  v-model="fullName"
                  label="সম্পূর্ণ নাম"
                  placeholder="Radif Chowdhury"
                ></v-text-field>
              </v-flex>
              <v-flex md6>
                <v-text-field
                  color="accent"
                  clearable
                  v-model="phoneNumber"
                  prefix="88"
                  label="ফোন"
                  placeholder="0XXXXXXXXXX"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md6>
                <v-text-field
                  color="accent"
                  clearable
                  v-model="email"
                  label="ই-মেইল"
                  placeholder="youremail@gmail.com"
                ></v-text-field>
              </v-flex>
              <v-flex md6>
                <v-text-field
                  color="accent"
                  clearable
                  type="password"
                  v-model="password"
                  label="পাসওয়ার্ড"
                  placeholder="*********"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md6>
                <v-select
                  color="accent"
                  item-text="name"
                  item-value="id"
                  :items="itemsService"
                  v-model="category"
                  label="ক্যাটাগরি"
                  :menu-props="{ maxHeight: '400' }"
                  multiple
                  persistent-hint
                ></v-select>
              </v-flex>
              <v-flex md6>
                <v-text-field
                  color="accent"
                  clearable
                  v-model="nidNumber"
                  label="এন.আই.ডি নং #"
                  placeholder="123456789"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md12>
                <div style="text-align: left !important;">
                  <label class="picture-label">ছবি</label>
                  <br />
                  <input
                    @change="onFileChange('personalImage', $event)"
                    type="file"
                    label="File input"
                  />
                  <img class="img-display" :src="personalImage" />
                </div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md12>
                <div>
                  <label class="picture-label">এন.আই.ডি সামনের ছবি</label>
                  <br />
                  <input
                    type="file"
                    label="File input"
                    @change="onFileChange('nidImageFront', $event)"
                  />
                  <img class="img-display" :src="nidImageFront" />
                </div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md12>
                <div>
                  <label class="picture-label">এন.আই.ডি পিছনের ছবি</label>
                  <br />
                  <input
                    type="file"
                    label="File input"
                    @change="onFileChange('nidImageBack', $event)"
                  />
                  <img class="img-display" :src="nidImageBack" />
                </div>
              </v-flex>
            </v-layout>
            <div style="text-align: center; margin-top: 20px;">
              <v-btn
                @click="addComrade"
                type="submit"
                color="success"
                style="min-width: 100px !important; margin: 5px;"
              >
                <v-progress-circular v-if="process" indeterminate color="primary"></v-progress-circular>
                <v-icon v-if="!process" class="button-icon-positive">check</v-icon>
              </v-btn>
              <v-btn
                color="accent"
                @click="reset"
                style="min-width: 100px !important; margin: 5px;"
              >
                <v-icon class="button-icon-cancel">close</v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-form>
      </div>
    </v-list>
    <v-snackbar
      v-model="snackbar"
      :top="'top'"
      :right="'right'"
      :timeout="5000"
      style="text-align: center !important;color:#fff !important;"
    >
      {{ alertMessage }}
      <v-btn class="snackButton" color="primary" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-navigation-drawer>
</template>

<script>
import { localStorageService } from "../../helper.js";
import axios from "../../axios_instance.js";

export default {
  name: "ItemTable",
  props: {
    tableData: Object,
    drawer: {
      type: Boolean
    }
    // method: { type: Function }
  },
  data() {
    return {
      process: "",
      personalImage: null,
      nidImageFront: null,
      nidImageBack: null,
      fullName: null,
      phoneNumber: null,
      email: null,
      nidNumber: null,
      category: null,
      itemsService: localStorageService.getItem("categorys"),
      alertMessage: null,
      snackbar: false,
    };
  },
  watch: {
    drawer: function(val) {
      if (this.drawer == true) return;
      this.$emit("clicked", false);
    }
  },
  methods: {
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = e => {
        switch (item) {
          case "personalImage":
            this.personalImage = e.target.result;
            break;
          case "nidImageFront":
            this.nidImageFront = e.target.result;
            break;
          case "nidImageBack":
            this.nidImageBack = e.target.result;
            break;
          default:
            break;
        }
      };
      reader.readAsDataURL(file);
    },
    addComrade() {
      this.process = true;

      let res = axios.post(`/comrade`, {
        service_provider_id: 1,
        name: this.fullName,
        phone: this.phoneNumber,
        email: this.email,
        address: "Nai",
        nid_no: this.nidNumber,
        photo: this.personalImage,
        nid_front: this.nidImageFront,
        nid_back: this.nidImageBack,
        services: this.category
      });

      console.log(res)

      this.alertMessage = res;
      this.snackbar = true;
      this.process = false;
    },
    reset() {
      this.$refs.form.reset();
      drawer = false;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  background-color: var(--primary);
}
.v-btn {
  color: var(--secondary);
}
.v-avatar {
  background-color: var(--accent);
}
.card-custom:hover {
  padding: 5px;
  cursor: pointer;
}
.v-icon:hover {
  color: var(--accent) !important;
}
.custom-table-cell {
  cursor: pointer;
}
.custom-table-cell:hover {
  text-decoration: underline;
  color: var(--primary);
}
.picture-label {
  color: rgba(0, 0, 0, 0.589);
  font-size: 12px !important;
}
.img-display {
  width: 50%;
  // margin: auto;
  text-align: left !important;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
