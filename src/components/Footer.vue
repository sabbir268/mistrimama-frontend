<template>
  <v-footer fixed height="100px;" style="width: 100%">
    <v-tabs
      style="width: 100%;"
      color="footerBackground"
      icons-and-text
      centered
      hide-slider
      grow
      v-model="tab"
      active-class="secondary"
    >
      <v-tab :to="element.link" v-for="element in icons" :key="element.icon">
        <span class="tab-text">{{ element.text }}</span>
        <v-icon class="tab-icon">{{ element.icon }}</v-icon>
      </v-tab>
    </v-tabs>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    icons: [
      { icon: "home", text: "মূল মেনু", link: "/mulmenu" },
      { icon: "work", text: "সকল কাজ", link: "/shokolkaaj" },
      { icon: "person", text: "সহকারী", link: "/shohokari" },
      { icon: "room_service", text: "সেবা সমূহ", link: "/shebashomuho" },
      { icon: "attach_money", text: "আয়ের বিবরণী", link: "/ayerbiboroni" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.tab-text {
  color: white !important;
  font-size: 8px;
}
.tab-icon {
  color: white !important;
  font-size: 28px;
}
</style>
