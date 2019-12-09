<template>
  <v-app app class="main-app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
:root {
  --primary: #febe00; // Theme color
  --primaryTwo: #fffaaf;
  --primaryButton: #fffaaf;
  --secondary: #222222; // Button Text
  --third: white;
  --light-text: rgba(0, 0, 0, 0.45);
  --light-text-two: #e2e2e2;
  --accent: #ed1c24;
  --error: #ed1c24;
  --success: #40a05d;
  --background: #fffdf7;
  --backgroundLogin: #fffdf7;
  --footerBackground: #525252;
}
.main-app {
  background-color: var(--background) !important;
}
*::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
  background-color: rgb(207, 207, 207);
}
*::-webkit-scrollbar-thumb {
  background-color: rgb(167, 167, 167);
}
// .v-list {
//   background-color: var(--secondary) !important;
// }
.custom-a {
  text-decoration: none;
  color: var(--error) !important;
}
// .v-btn {
//   min-width: 130px;
//   min-height: 50px;
//   margin-left: 0px;
//   margin-right: 0px;
//   color: var(--secondary) !important;
// }
.v-date-picker-header > .v-btn,
.v-date-picker-table > table > tbody > tr > td > .v-btn {
  min-width: 0px;
  min-height: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
.invalidInput {
  .v-text-field__slot {
    border-bottom: 1px solid var(--error) !important;
  }
}
.v-tabs__bar {
  background-color: var(--background) !important;
}
.md-error {
  color: var(--error);
  text-align: right;
  font-weight: bold;
  // background-color: #f0f0f0;
  width: 100%;
  border-radius: 10px;

  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.table-image {
  border-radius: 5px;
  margin: 7px;
  width: 50px;
  height: 100%;
}
.image-arrow:hover {
  color: var(--primary) !important;
}
// .v-tabs__item--active {
//   color: var(--third) !important;
//   background-color: var(--primary) !important;
//   border-radius: 50px !important;
//   transition: 0.5s !important;
// }
// .v-tabs__slider-wrapper > .v-tabs__slider {
//   background-color: var(--accent) !important;
// }
button:hover {
  background-color: var(--primary) !important;
  color: var(--third) !important;
}
.image-arrow {
  font-size: 30px;
}
.image-arrow-disable {
  font-size: 30px;
  cursor: not-allowed;
}
.rect-image {
  border-radius: 5px !important;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.custom-container {
  padding-left: 2%;
  padding-right: 2%;
}
.light-text {
  color: var(--light-text);
}
.custom-gap {
  margin-top: 30px;
}
.scrollable-table {
  margin-top: -8px !important;
  height: 300px !important;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
}
// .scrollable-table::-webkit-scrollbar {
//   width: 6px !important;
//   background-color: grey;
// }
// .scrollable-table::-webkit-scrollbar-thumb {
//   background-color: var(--secondary);
// }
.scrollable-table-long {
  height: 500px !important;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
}
table.v-table thead th {
  font-weight: bold;
  color: var(--secondary) !important;
}
.custom-searchbox {
  width: 100% !important;
  text-align: left;
  margin-bottom: -20px !important;
  margin-top: 7px !important;
}
.v-input__slot {
  min-height: 35px !important;
}
.icon-hover:hover {
  background-color: var(--error) !important;
  color: var(--primary) !important;
  border-radius: 10px;
  cursor: pointer;
}
.icon-hover {
  padding: 1px;
}
.custom-title {
  background-color: var(--primaryTwo);
  border-top: 3px solid var(--primary);
  // border-radius: 15px 15px 1px 1px !important;
  font-size: 18px;
  padding: 7px;
}
.margins {
  margin: 5px;
}
.outer-bound {
  padding: 25px;
  border-right: 1px solid rgb(223, 223, 223);
  border-top: 1px solid rgb(223, 223, 223);
}
.menu-list-items {
  padding: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
  display: block;
  transition: 0.2s;
}
.menu-list-items:hover {
  background-color: var(--primary);
  cursor: pointer;
}
.classic-tabs {
  // border-top: 5px solid var(--primary);
  background-color: var(--primaryTwo);
}

.v-tabs__item--active > i {
  color: var(--secondary) !important;
}
.list-tile-margin {
  margin-bottom: 7px;
}
.label-font-title {
  font-size: 17px !important;
  padding: 7px;
  text-align: center !important;
  font-weight: bold;
  text-decoration: underline;
}

// Dashboard Boxes
.icon-box {
  background-color: var(--primary);
  margin-left: 10px;
  height: 50%;
  width: 100%;
  margin-top: -22px;
  border-radius: 5px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.212);
  transition: 0.2s;
}
.icon-box > i {
  font-size: 30px;
  color: var(--third) !important;
  line-height: 120%;
}
.empty-box {
  margin: 10px;
  height: 120px;
  text-align: right !important;
  float: right;
}
.empty-box > h3 {
  color: var(--accent);
  font-size: 15px;
}
.empty-box > h3 > .a {
  font-size: 22px;
  color: var(--secondary);
}
.empty-box > h3 > .b {
  color: grey;
  font-size: 11px;
}
.box-button {
  width: 100%;
  height: 100%;
}
.box-button > .v-btn {
  width: 95%;
  margin-top: -8px !important;
  min-height: 100% !important;
  border-radius: 5px;
}
.lower-box {
  border-top: 1px solid rgb(189, 189, 189);
}
.total-box {
  text-align: center;
  padding: 20px;
}
.border_radius {
  border-radius: 5px;
}
.card-height {
  height: 195px;
}
.total-box:hover {
  .icon-box {
    margin-top: -30px;
    background-color: var(--primary);
    transition: 0.2s;
  }
}
// end Dashboard boxes

.top-gapper {
  margin-top: 20px;
}
.side-gapper {
  margin-left: 20px;
  margin-right: 20px;
}
.custom-icon {
  // padding-right: 5px;
  margin-right: 6px;
  color: var(--secondary) !important;
  // float: right;
  // border-right: 2px solid var(--secondary);
}
.pagination-button {
  width: 30%;
  margin-top: -12px;
  min-width: 15px !important;
  min-height: 35px;
}
.pagination-page-button {
  width: 20%;
  margin-top: -12px;
  min-width: 10px !important;
  min-height: 35px;
}
.button-icon-positive {
  color: white !important;
}
.button-icon-cancel {
  color: white !important;
}
.snackButton:hover {
  background-color: rgba(255, 255, 255, 0) !important;
}
// ANIMATION
.floating {
  // animation-name: floating;
  // animation-duration: 3s;
  // animation-iteration-count: infinite;
  // animation-timing-function: ease-in-out;
}
@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}

/** Style by sabbir */

.custom-form-control {
  width: 35px;
  background-color: #fff;
  border: 1px solid #ddd;
  text-align: center;
  color: #909090;
}
</style>

