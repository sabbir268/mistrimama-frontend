<template>
  <v-navigation-drawer width="800" v-model="drawer" temporary right style="position: fixed">
    <v-list class="pa-3" style="background-color: var(--primary) !important">
      <h3 style="font-size: 20px; text-align: center; color: var(--secondary)">সহকারী এডিট</h3>
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
                <v-select color="accent" :items="itemsService" v-model="category" label="ক্যাটাগরি"></v-select>
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
                <div>
                  <label class="picture-label">ছবি</label>
                  <br>
                  <input type="file" label="File input">
                </div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md12>
                <div>
                  <label class="picture-label">এন.আই.ডি সামনের ছবি</label>
                  <br>
                  <input type="file" label="File input">
                </div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex md12>
                <div>
                  <label class="picture-label">এন.আই.ডি পিছনের ছবি</label>
                  <br>
                  <input type="file" label="File input">
                </div>
              </v-flex>
            </v-layout>
            <div style="text-align: center; margin-top: 20px;">
              <v-btn
                @click.stop="drawer = false; $emit('clicked', false)"
                type="submit"
                color="success"
                style="min-width: 100px !important; margin: 5px;"
              >
                <v-icon class="button-icon-positive">check</v-icon>
              </v-btn>
              <v-btn
                color="accent"
                @click.stop="drawer = false; $emit('clicked', false)"
                style="min-width: 100px !important; margin: 5px;"
              >
                <v-icon class="button-icon-cancel">close</v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-form>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
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
      personalImage: null,
      fullName: null,
      phoneNumber: null,
      email: null,
      nidNumber: null,
      category: null,
      personalImage: null
    };
  },
  watch: {
    drawer: function(val) {
      if (this.drawer == true) return;
      this.$emit("clicked", false);
    }
  },
  data() {
    return {
      itemsService: ["Bkash", "SureCash", "Rocket"]
    };
  },

  methods: {},
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
</style>
