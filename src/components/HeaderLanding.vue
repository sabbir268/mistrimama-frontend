<template>
  <header class="main-header header-style-one">
    <div class="auto-container">
      <div class="header-lower">
        <div class="main-box clearfix">
          <div class="logo-box">
            <div class="logo p-1">
              <a href="/">
                <img style="height: 94px;" src="https://mistrimama.com/photos/1/a.png" alt title />
              </a>
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
                  <span class="icon flaticon-menu-button"></span>
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
                    <a href="#">Our Service</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">Book Now</a>
                  </li>
                  <li class="dropdown">
                    <a href="#contactus">Contact Us</a>
                  </li>
                  <li class="dropdown">
                    <router-link to="/login/user">
                      <v-chip color="primary" text-color="white">
                        <v-avatar>
                          <v-icon>account_circle</v-icon>
                        </v-avatar>Login &nbsp;&nbsp;
                      </v-chip>
                    </router-link>
                  </li>
                  <li class="dropdown">
                    <router-link to="/login/user">
                      <v-chip color="primary" text-color="white">
                        <v-avatar>
                          <v-icon>account_circle</v-icon>
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
  </header>
</template>

<script>
export default {};
</script>

<style>
.header-style-one .header-lower:after {
  position: absolute;
  top: 0;
  right: -30px;
  height: 0;
  width: 0;
  border-right: 30px solid transparent;
  border-top: 110px solid rgba(0, 0, 0, 0.8);
  content: "";
}
.header-style-one .header-lower:before {
  position: absolute;
  top: 0;
  left: -30px;
  height: 0;
  width: 0;
  border-left: 30px solid transparent;
  border-top: 110px solid rgba(0, 0, 0, 0.8);
  content: "";
}
</style>