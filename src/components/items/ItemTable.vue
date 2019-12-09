<template>
  <div>
    <v-data-table
      :headers="tableData.headers"
      :items="tableData.data"
      :search="search"
      hide-actions
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template v-slot:items="elements">
        <tr v-for="(element) in elements" :key="element" v-show="typeof(element) == 'object'">
          <td v-for="elem in element" :key="elem">
            <span v-if="!actionButtonsHide" class="custom-table-cell" @click.stop="drawer = !drawer" @click="methodOne(element);">{{elem}}</span>
            <span v-if="actionButtonsHide">{{elem}}</span>
          </td>
          <td style="text-align: center;" v-if="actionButtonsHide == false">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon @click.stop="drawer = !drawer" @click="methodTwo(element);" style="cursor: pointer" color="primary" v-on="on">account_circle</v-icon>
              </template>
              <span>User Details</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon @click.stop="drawer = !drawer" @click="methodOne(element);" style="margin-left: 5px; cursor: pointer" color="primary" v-on="on">list</v-icon>
              </template>
              <span>Transaction Details</span>
            </v-tooltip>
          </td>
        </tr>
      </template>
    </v-data-table>
    <!-- <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div> -->
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list class="pa-3" style="background-color: var(--primary) !important">
        <h2 style="text-align: center; color: var(--secondary)">{{sidePanelTitle}}</h2>
      </v-list>
      <v-list style="background-color: white !important;" class="pt-0" dense>
        <v-divider></v-divider>
        <div style="text-align: center; margin-top: 40px;">
          <v-avatar
            :tile="tile"
            :size="170"
            color="grey lighten-4"
          >
            <img src="https://centrik.in/wp-content/uploads/2017/02/user-image-.png" alt="avatar">
          </v-avatar>
        </div>
        <div style="margin-top: 20px; padding: 20px;">
          <v-list-tile
            v-for="(item, key, index) in sideData"
            :key="item"
            style="margin-bottom: 15px;"
          >
            <v-list-tile-content>
              <label style="color: var(--primary)">{{tableData.sidePanelLabels[index].title}}</label>
              <v-list-tile-title style="font-size: 17px;">{{item}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div> 
</template>

<script>

export default {
  name: 'ItemTable',
  props: {
    tableData: Object,
    actionButtonsHide: {
      type: Boolean,
      default: false
    }
    // method: { type: Function }
  },
  data () {
    return {
      search: '',
      pagination: {},
      drawer: null,
      sideData: {},
      counter: 0,
      sidePanelTitle: null
    }
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0
      // this.pagination.rowsPerPage = 7;
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      // return Math.ceil(1)
      return 1
    }
  },
  methods: {
    methodOne: function(data) {
      this.sidePanelTitle = 'TRANSACTION DETAILS';
      this.counter = 0;
      for(let elem in data) {
        if(this.tableData.sidePanelLabels[this.counter].value == elem) {
          this.sideData[elem] = data[elem];
          this.counter++;
        }
      }
    },
    methodTwo: function(data) {
      this.sidePanelTitle = 'USER DETAILS';
      this.counter = 0;
      for(let elem in data) {
        if(this.tableData.sidePanelLabels[this.counter].value == elem) {
          this.sideData[elem] = data[elem];
          this.counter++;
        }
      }
    }
    // methodTwo() {
    //   this.method();
    // }
  },
  mounted() {
    if(this.actionButtonsHide == true) {
      for(let elem in this.tableData.headers) {
        if(this.tableData.headers[elem].text == "Action") {
          delete this.tableData.headers[elem];
          return;
        }
      }
    }
  }
}
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
</style>
