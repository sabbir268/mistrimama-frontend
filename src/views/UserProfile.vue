<template>
  <div>
    <div>
      <v-layout row wrap style="margin-bottom: 55px;">
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
        <v-flex md12>
          <div style="text-align: center; margin-bottom: 20px; font-size: 40px">
            <v-layout
              wrap
              align-center
              class="elevation-2 side-gapper top-gapper"
              style="background-color: white;"
            >
              <!-- <v-flex md5 sm4 xs12 class="up-bottom-gap">
                <div v-if="uploadImageOption" style="text-align: center !important">
                  <ImageCropper :src="imgURL"/>
                  <br>
                  <v-btn @click="uploadImageOption = false">DONE</v-btn>
                  <v-btn @click="uploadImageOption = false">CANCEL</v-btn>
                </div>
                <div v-if="!uploadImageOption">
                  <v-avatar :size="170" color="grey lighten-4" style="margin-bottom: 15px;">
                    <img class="rect-image" :src="imgURL" alt="user_image">
                  </v-avatar>
                  <br>
                  <v-btn @click="uploadImageOption = true">UPLOAD IMAGE</v-btn>
                </div>
              </v-flex>-->
              <v-flex v-if="personalImage" md5 sm4 xs12 class="up-bottom-gap">
                <div v-if="uploadImageOption" style="text-align: center !important">
                  <ImageCropper :src="personalImage" @clicked="croppedImage"/>
                  <br>
                  <v-btn
                    color="success"
                    class="pagination-button"
                    style="margin: 5px; max-width: 50px !important; min-width: 40px; !important"
                    @click="uploadImageOption = false; personalImage = personalImageTemp"
                  >
                    <v-icon>check</v-icon>
                  </v-btn>
                  <v-btn
                    color="accent"
                    class="pagination-button"
                    style="margin: 5px; max-width: 50px !important; min-width: 40px; !important"
                    @click="uploadImageOption = false"
                  >
                    <v-icon>close</v-icon>
                  </v-btn>
                </div>
                <div v-if="!uploadImageOption">
                  <v-avatar :size="170" color="grey lighten-4" style="margin-bottom: 15px;">
                    <img class="rect-image" :src="personalImage" alt="user_image">
                  </v-avatar>
                  <br>
                  <v-btn
                    color="primary"
                    class="pagination-button"
                    style="margin: 5px; max-width: 50px !important; min-width: 40px; !important"
                    @click="uploadImageOption = true"
                  >
                    <v-icon>crop</v-icon>
                  </v-btn>
                  <v-btn
                    color="error"
                    class="pagination-button"
                    style="margin: 5px; max-width: 50px !important; min-width: 40px; !important"
                    @click="personalImage = null;"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <v-btn
                    color="success"
                    style="margin: 5px; max-width: 50px !important; min-width: 40px; !important"
                    class="pagination-button"
                  >
                    <v-icon>check</v-icon>
                  </v-btn>
                </div>
              </v-flex>
              <v-flex v-if="!personalImage" md5 sm4 xs12 class="up-bottom-gap">
                <v-avatar :size="170" color="grey lighten-4" style="margin-bottom: 15px;">
                  <img class="rect-image" :src="imgURL" alt="user_image">
                </v-avatar>
                <br>
                <div style="text-align: center">
                  <input
                    style="font-size: 17px;"
                    @change="onFileChange('personalImage', $event)"
                    type="file"
                    label="File input"
                  >
                </div>
              </v-flex>
              <v-flex md7 sm8 xs12 class="up-bottom-gap" style="text-align: left; padding: 15px;">
                <h3 style="font-size: 20px;">PROFILE INFORMATION</h3>
                <hr>
                <v-form ref="form" v-model="valid" lazy-validation style="margin-top: 15px;">
                  <v-text-field
                    v-model="formData.name"
                    :counter="20"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="formData.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="formData.phoneNumber"
                    :counter="11"
                    :rules="mobileNumberRules"
                    label="Mobile Number"
                    required
                  ></v-text-field>
                  <v-textarea
                    rows="2"
                    v-model="formData.address"
                    :counter="100"
                    :rules="addressRules"
                    label="Address"
                    required
                  ></v-textarea>
                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    @click="validate"
                  >Update Profile</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <!-- <v-flex lg1 md1 hidden-sm-and-down></v-flex> -->
      </v-layout>
      <v-snackbar
        v-model="snackbar"
        :bottom="'bottom'"
        :right="'right'"
        :timeout="6000"
        :vertical="'vertical'"
        style="text-align: left !important"
      >
        {{ alertMessage }}
        <v-btn color="primary" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ImageCropper from "../components/ImageCropper";

export default {
  name: "UserProfile",
  components: {
    ImageCropper
  },
  data() {
    return {
      uploadImageOption: false,
      imgURL: "https://image.flaticon.com/icons/png/512/236/236832.png",
      personalImage: null,
      personalImageTemp: null,
      formData: {
        name: null,
        address: null,
        email: null,
        phoneNumber: null
      },
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      mobileNumberRules: [
        v => !!v || "Mobile number is required",
        v => (v && v.length == 11) || "Invalid mobile number"
      ],
      addressRules: [
        v => !!v || "Address is required",
        v => (v && v.length <= 100) || "Address must be less than 50 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      dataLoaded: true,
      snackbar: null,
      alertMessage: null
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        // call API from STORE
      }
    },
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();
      reader.onload = e => {
        this.personalImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    croppedImage: function(val) {
      this.personalImageTemp = val;
    }
  },
  watch: {
    // personalImage: function(val) {
    //   console.log(val);
    // }
  },
  computed: {
    //
  },
  mounted() {
    this.dataLoaded = true;
  }
};
</script>
<style lang="scss" scoped>
a {
  cursor: pointer;
  color: var(--dark);
}
a:hover {
  text-decoration: underline;
  color: var(--primary);
}
.custom-height {
  height: 75px;
}
.v-card-padding {
  padding: 10px;
}
.services {
  border: 1px solid var(--primary);
  font-size: 16px !important;
  padding: 10px;
}
.up-bottom-gap {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
