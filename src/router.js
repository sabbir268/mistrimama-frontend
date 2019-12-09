import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";
import UserProfile from "./views/UserProfile.vue";
import Dashboard from "./components/Dashboard.vue";
import DashboardUser from "./components/DashboardUser.vue";
import DashboardLandingPage from "./components/DashboardLandingPage.vue";

// MENUS: SERVICE PROVIDER
import MulMenu from "./views/mulmenu/MulMenu.vue";
import Shohokari from "./views/shohokari/Shohokari.vue";
import ShokolKaaj from "./views/shokolkaaj/ShokolKaaj.vue";
import ShebaShomuho from "./views/shebashomuho/ShebaShomuho.vue";
import AyerBiboroni from "./views/ayerbiboroni/AyerBiboroni.vue";
import PurberKaaj from "./views/purberkaaj/PurberKaaj.vue";
import OfferDekhun from "./views/offerdekhun/OfferDekhun.vue";
import Jiggasha from "./views/jiggasha/Jiggasha.vue";
import RechargeKorun from "./views/rechargekorun/RechargeKorun.vue";
import ServiceOrder from "./views/serviceorder/ServiceOrder.vue";
import Baboharbidhi from "./views/baboharbidhi/Baboharbidhi.vue";

// MENUS: USER
import UserHome from "./views/userhome/UserHome.vue";
import UserOffers from "./views/useroffers/UserOffers.vue";
import UserPromo from "./views/userpromo/UserPromo.vue";
import UserRefer from "./views/userrefer/UserRefer.vue";
import UserOrderHistory from "./views/userorderhistory/UserOrderHistory.vue";
import Services from "./views/services/Service.vue";

// Landing Page
import Home from "./views/landingpage/home/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/admin",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: requireAuth,
      children: [
        {
          path: "/mulmenu",
          name: "মূল মেনু",
          component: MulMenu,
          beforeEnter: requireAuth
        },
        {
          path: "/shohokari",
          name: "সহকারী",
          component: Shohokari,
          beforeEnter: requireAuth
        },
        {
          path: "/shokolkaaj",
          name: "সকল কাজ",
          component: ShokolKaaj,
          beforeEnter: requireAuth
        },
        {
          path: "/shebashomuho",
          name: "সেবা সমূহ",
          component: ShebaShomuho,
          beforeEnter: requireAuth
        },
        {
          path: "/ayerbiboroni",
          name: "আয়ের বিবরণী",
          component: AyerBiboroni,
          beforeEnter: requireAuth
        },
        {
          path: "/purberkaaj",
          name: "পূর্বের কাজ",
          component: PurberKaaj,
          beforeEnter: requireAuth
        },
        {
          path: "/offerdekhun",
          name: "অফার দেখুন",
          component: OfferDekhun,
          beforeEnter: requireAuth
        },
        {
          path: "/jiggasha",
          name: "জিজ্ঞাসা",
          component: Jiggasha,
          beforeEnter: requireAuth
        },
        {
          path: "/rechargekorun",
          name: "রিচার্জ করুন",
          component: RechargeKorun,
          beforeEnter: requireAuth
        },
        {
          path: "/serviceorder",
          name: "সার্ভিস অর্ডার",
          component: ServiceOrder,
          beforeEnter: requireAuth
        },
        {
          path: "/baboharbidhi",
          name: "ব্যবহারবিধি",
          component: Baboharbidhi,
          beforeEnter: requireAuth
        },
        // {
        //   path: "/test",
        //   name: "Test",
        //   component: Test
        // }
      ]
    },
    {
      path: "/user",
      name: "Dashboard",
      component: DashboardUser,
      beforeEnter: requireAuth,
      children: [
        {
          path: "/",
          name: "DASHBOARD",
          component: UserHome,
          beforeEnter: requireAuth
        },
        {
          path: "/offers",
          name: "OFFERS",
          component: UserOffers,
          beforeEnter: requireAuth
        },
        {
          path: "/promo",
          name: "PROMO CODE",
          component: UserPromo,
          beforeEnter: requireAuth
        },
        {
          path: "/refer",
          name: "REFER",
          component: UserRefer,
          beforeEnter: requireAuth
        },
        {
          path: "/order-history",
          name: "ORDER HISTORY",
          component: UserOrderHistory,
          beforeEnter: requireAuth
        },
        {
          path: "/profile",
          name: "PROFILE",
          component: UserProfile
        },
        {
          path: "/service/:category",
          name: "Services",
          component: Services
        },
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/*",
      name: "DashboardLandingPage",
      component: DashboardLandingPage,
      children: [
        {
          path: "/",
          name: "HOME",
          component: Home
        },
        {
          path: "/shohokari",
          name: "সহকারী",
          component: Shohokari,
          beforeEnter: requireAuth
        }
      ]
    }
  ]
});

function requireAuth(to, from, next) {
  if (localStorage.d_token) {
    next();
  } else {
    window.location.href = "/login";
  }
}
