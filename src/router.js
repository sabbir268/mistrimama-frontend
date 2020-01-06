import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login.vue";
import UserProfile from "./views/UserProfile.vue";
import SpProfile from "./views/SpProfile.vue";
import Dashboard from "./components/Dashboard.vue";
import DashboardComrade from "./components/DashboardComrade.vue";
import DashboardUser from "./components/DashboardUser.vue";
import Landing from "./components/Landing.vue";
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
import ViewOrder from "./views/userorderhistory/ViewOrder.vue";
import Services from "./views/services/Service.vue";
import ComradeHome from "./views/comrade/Home.vue";

// Landing Page
import Home from "./views/landingpage/home/Home.vue";

import {
  localStorageService
} from "./helper.js";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/admin",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: requireAuthSP,
      children: [{
          path: "/mulmenu",
          name: "মূল মেনু",
          component: MulMenu,
          beforeEnter: requireAuthSP
        },
        {
          path: "/shohokari",
          name: "সহকারী",
          component: Shohokari,
          beforeEnter: requireAuthSP
        },
        {
          path: "/shokolkaaj",
          name: "সকল কাজ",
          component: ShokolKaaj,
          beforeEnter: requireAuthSP
        },
        {
          path: "/shebashomuho",
          name: "সেবা সমূহ",
          component: ShebaShomuho,
          beforeEnter: requireAuthSP
        },
        {
          path: "/ayerbiboroni",
          name: "আয়ের বিবরণী",
          component: AyerBiboroni,
          beforeEnter: requireAuthSP
        },
        {
          path: "/purberkaaj",
          name: "পূর্বের কাজ",
          component: PurberKaaj,
          beforeEnter: requireAuthSP
        },
        {
          path: "/offerdekhun",
          name: "অফার দেখুন",
          component: OfferDekhun,
          beforeEnter: requireAuthSP
        },
        {
          path: "/jiggasha",
          name: "জিজ্ঞাসা",
          component: Jiggasha,
          beforeEnter: requireAuthSP
        },
        {
          path: "/rechargekorun",
          name: "রিচার্জ করুন",
          component: RechargeKorun,
          beforeEnter: requireAuthSP
        },
        {
          path: "/serviceorder",
          name: "সার্ভিস অর্ডার",
          component: ServiceOrder,
          beforeEnter: requireAuthSP
        },
        {
          path: "/baboharbidhi",
          name: "ব্যবহারবিধি",
          component: Baboharbidhi,
          beforeEnter: requireAuthSP
        },
        {
          path: "/spprofile",
          name: "SPPROFILE",
          component: SpProfile,
          beforeEnter: requireAuthSP
        }
      ]
    },
    {
      path: "/comrade",
      name: "DashboardComrade",
      component: DashboardComrade,
      beforeEnter: requireAuth,
      children: [{
        path: "/comrade-home",
        name: "সহকারী",
        component: ComradeHome,
        beforeEnter: requireAuth
      }]
    },
    {
      path: "/user",
      name: "Dashboard",
      component: DashboardUser,
      beforeEnter: requireAuth,
      children: [{
          path: "/",
          name: "USERHOME",
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
        {
          path: "/view-order",
          name: "VIEW ORDER",
          component: ViewOrder
        },
      ]
    },
    {
      path: "/login/:mood",
      name: "Login",
      component: Login
    },
    {
      path: "/*",
      name: "LANDING",
      component: Landing,
      children: [{
          path: "/",
          name: "HOME",
          component: Home
        },
        {
          path: "/shohokari",
          name: "সহকারী",
          component: Shohokari,
          beforeEnter: requireAuthSP
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

function requireAuthSP(to, from, next) {
  if (localStorage.d_token) {
    let usertype = localStorageService.getItem('currentUserData').type;
    if (usertype == 'esp' || usertype == 'fsp') {
      next();
    } else {
      window.location.href = "/login";
    }
  } else {
    window.location.href = "/login";
  }
}