<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->

    <!-- Main Header-->
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
                    <li class="current dropdown">
                      <a href="#">Home</a>
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
    <!--End Main Header -->

    <!-- Bnner Section -->
    <section class="banner-section">
      <!-- <div class="banner-carousel"> -->
      <!-- <carousel>
          <div class="col-md-12 p-0 m-0">
            <img style="width:100%" src="../assets/images/main-slider/image-1.jpg" alt />
      </div>-->
      <!-- <img style="width:100%" src="../assets/images/main-slider/image-2.jpg" alt />
          <img style="width:100%" src="../assets/images/main-slider/image-3.jpg" alt />
      <img style="width:100%" src="../assets/images/main-slider/image-4.jpg" alt />-->
      <!-- <div
            class="slide-item"
            style="background-image: url(../assets/images/main-slider/image-1.jpg);"
          >
          <img src="../assets/images/main-slider/image-1.jpg" alt="">
            <div class="auto-container">
              <div class="content-box">
                <h2>
                  Architecture is a
                  <br />Visual Art.
                </h2>
                <div class="text">The buildings speak for themselves</div>
                <div class="link-box">
                  <a href="about.html" class="theme-btn btn-style-one">Check Art</a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="slide-item"
            style="background-image: url(../assets/images/main-slider/image-2.jpg);"
          >
           <img src="../assets/images/main-slider/image-2.jpg" alt="">
            <div class="auto-container">
              <div class="content-box">
                <h2>
                  Architecture is a
                  <br />Visual Art.
                </h2>
                <div class="text">The buildings speak for themselves</div>
                <div class="link-box">
                  <a href="about.html" class="theme-btn btn-style-one">Check Art</a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="slide-item"
            style="background-image: url(../assets/images/main-slider/image-3.jpg);"
          >
           <img src="../assets/images/main-slider/image-3.jpg" alt="">
            <div class="auto-container">
              <div class="content-box">
                <h2>
                  Architecture is a
                  <br />Visual Art.
                </h2>
                <div class="text">The buildings speak for themselves</div>
                <div class="link-box">
                  <a href="about.html" class="theme-btn btn-style-one">Check Art</a>
                </div>
              </div>
            </div>
      </div>-->
      <!-- </carousel>  -->
      <!-- </div>  -->

      <hooper style="height:auto" :settings="hooperSettings">
        <slide
          class="col-md-12 p-0 m-0 text-center"
          style="width: 1358px;background-image: url(https://mistrimama.com/slider-images/AC.webp);background-position: center center;background-size: cover;background-repeat: no-repeat;height: 665px !important;"
        >
          <!-- <div>Hello amigoaskjdh askdj kj</div> -->
        </slide>
        <slide
          class="col-md-12 p-0 m-0 h-100"
          style="width: 1358px;background-image: url(https://mistrimama.com/slider-images/CCTV-2.png);background-position: center center;background-size: cover;background-repeat: no-repeat;height: 665px !important;"
        >
          <!-- <div>Hello</div> -->
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>

      <!-- <div class="bottom-box" style="background-color:#fff">
        <div class="auto-container clearfix">
          <ul class="contact-info">
            <li>
              <span>Phone :</span> (+84) 867-557-243
            </li>
            <li>
              <span>EMAIL :</span>
              <a href="#">Support@yourdomain.com</a>
            </li>
          </ul>
          <ServicesLanding></ServicesLanding>

          
        </div>
        <v-divider></v-divider>
      </div>-->
    </section>
    <!-- End Bnner Section -->
    <section>
      <div class="container-fluid p-0 m-0">
        <div class="sec-title text-center m-0 mt-5 mb-5">
          <span class="float-text">Service</span>
          <h2>OUR SERVICES</h2>
        </div>
        <div class="row p-0 m-0">
          <div
            v-for="category in categorys"
            :key="category.id"
            class="hovereffect col-md-4 p-1 m-0"
          >
            <router-link to="/">
              <img
                :src="category.opt_image"
                alt="Avatar"
                class="hovereffect-image"
                style="width:100%"
              />
              <div class="hovereffect-middle">
                <img :src="category.thumb" style="width: 137px;" alt />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section -->
    <section
      id="aboutus"
      class="about-section"
      style="background-image: url(../assets/images/background/1.jpg);"
    >
      <div class="auto-container">
        <div class="row no-gutters">
          <!-- Image Column -->
          <div class="image-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="title-box wow fadeInLeft" data-wow-delay="1200ms">
                <h2>
                  ABOUT
                  <br />US
                </h2>
              </div>
              <div class="image-box">
                <figure class="alphabet-img wow fadeInRight">
                  <img src="../assets/images/resource/alphabet-image.png" alt />
                </figure>
                <figure class="image wow fadeInRight" data-wow-delay="600ms">
                  <img src="../assets/images/resource/image-1.jpg" alt />
                </figure>
              </div>
            </div>
          </div>

          <!-- Content Column -->
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column wow fadeInLeft">
              <div class="content-box">
                <div class="title">
                  <h2>
                    WHAT IS
                    <br />MISTRI MAMA
                  </h2>
                </div>
                <div
                  class="text"
                >Mistri Mama is an online based service platform that offers home services in all areas of Dhaka City. We ensure quality service by providing training to our technicians which also emphasis on safety and behavioral aspects. Apart from the domiciliary service, Mistri Mama also provide one-time, periodical subscription for corporate houses. Our highly trained and professional technicians are always a CALL away to provide Electrical, Plumbing, Generator, AC, IT, CCTV, etc. servicing works at your doorstep. We are also open to provide our services during holidays, mid-nights or your free hours.</div>
                <div class="link-box">
                  <a href="about.html" class="theme-btn btn-style-one">About Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End About Section -->

    <!-- Services Section -->
    <section class="services-section">
      <div class="upper-box" style="background-image: url(../assets/images/background/2.jpg);">
        <div class="auto-container">
          <div class="sec-title text-center light">
            <span class="float-text">Specialization</span>
            <h2>Our Specialization</h2>
          </div>
        </div>
      </div>

      <div class="services-box">
        <div class="auto-container">
          <div class="services-carousel owl-carousel owl-theme">
            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-1.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Architectural Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-2.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Interior Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-3.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Corporate Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-1.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Architectural Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-2.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Interior Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-3.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Corporate Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-1.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Architectural Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-2.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Interior Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Block -->
            <div class="service-block">
              <div class="inner-box">
                <div class="image-box">
                  <figure class="image">
                    <a href="service-detail.html">
                      <img src="../assets/images/resource/service-3.jpg" alt />
                    </a>
                  </figure>
                </div>
                <div class="lower-content">
                  <h3>
                    <a href="service-detail.html">Corporate Design</a>
                  </h3>
                  <div
                    class="text"
                  >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</div>
                  <div class="link-box">
                    <a href="service-detail.html">
                      Lorn More
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Services Section -->

    <!-- Project Section -->
    <section class="projects-section">
      <div class="auto-container">
        <div class="sec-title text-right">
          <span class="float-text">Project</span>
          <h2>Our Project</h2>
        </div>
      </div>

      <div class="inner-container">
        <div class="projects-carousel owl-carousel owl-theme">
          <!-- Project Block -->
          <div class="project-block">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/images/gallery/1.jpg" alt />
              </figure>
              <div class="overlay-box">
                <h4>
                  <a href="project-detail.html">
                    Laxury Home
                    <br />Project
                  </a>
                </h4>
                <div class="btn-box">
                  <a
                    href="../assets/images/gallery/1.jpg"
                    class="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <a href="project-detail.html">
                    <i class="fa fa-external-link"></i>
                  </a>
                </div>
                <span class="tag">Architecture</span>
              </div>
            </div>
          </div>

          <!-- Project Block -->
          <div class="project-block">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/images/gallery/2.jpg" alt />
              </figure>
              <div class="overlay-box">
                <h4>
                  <a href="project-detail.html">
                    Laxury Home
                    <br />Project
                  </a>
                </h4>
                <div class="btn-box">
                  <a
                    href="../assets/images/gallery/2.jpg"
                    class="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <a href="project-detail.html">
                    <i class="fa fa-external-link"></i>
                  </a>
                </div>
                <span class="tag">Architecture</span>
              </div>
            </div>
          </div>

          <!-- Project Block -->
          <div class="project-block">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/images/gallery/3.jpg" alt />
              </figure>
              <div class="overlay-box">
                <h4>
                  <a href="project-detail.html">
                    Laxury Home
                    <br />Project
                  </a>
                </h4>
                <div class="btn-box">
                  <a
                    href="../assets/images/gallery/3.jpg"
                    class="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <a href="project-detail.html">
                    <i class="fa fa-external-link"></i>
                  </a>
                </div>
                <span class="tag">Architecture</span>
              </div>
            </div>
          </div>

          <!-- Project Block -->
          <div class="project-block">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/images/gallery/4.jpg" alt />
              </figure>
              <div class="overlay-box">
                <h4>
                  <a href="project-detail.html">
                    Laxury Home
                    <br />Project
                  </a>
                </h4>
                <div class="btn-box">
                  <a
                    href="../assets/images/gallery/4.jpg"
                    class="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <a href="project-detail.html">
                    <i class="fa fa-external-link"></i>
                  </a>
                </div>
                <span class="tag">Architecture</span>
              </div>
            </div>
          </div>

          <!-- Project Block -->
          <div class="project-block">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/images/gallery/5.jpg" alt />
              </figure>
              <div class="overlay-box">
                <h4>
                  <a href="project-detail.html">
                    Laxury Home
                    <br />Project
                  </a>
                </h4>
                <div class="btn-box">
                  <a
                    href="../assets/images/gallery/5.jpg"
                    class="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <a href="project-detail.html">
                    <i class="fa fa-external-link"></i>
                  </a>
                </div>
                <span class="tag">Architecture</span>
              </div>
            </div>
          </div>

          <!-- Project Block -->
          <div class="project-block">
            <div class="image-box">
              <figure class="image">
                <img src="../assets/images/gallery/3.jpg" alt />
              </figure>
              <div class="overlay-box">
                <h4>
                  <a href="project-detail.html">
                    Laxury Home
                    <br />Project
                  </a>
                </h4>
                <div class="btn-box">
                  <a
                    href="../assets/images/gallery/3.jpg"
                    class="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <i class="fa fa-search"></i>
                  </a>
                  <a href="project-detail.html">
                    <i class="fa fa-external-link"></i>
                  </a>
                </div>
                <span class="tag">Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Project Section -->

    <!-- Team Section -->
    <section class="team-section" style="display:none">
      <div class="auto-container">
        <div class="sec-title text-center">
          <span class="title">Our Team</span>
          <h2>Profect Expert</h2>
        </div>

        <div class="row clearfix">
       
          <div class="team-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <div class="image">
                  <a href="team.html">
                    <img src="../assets/images/resource/team-1.jpg" alt />
                  </a>
                </div>
                <ul class="social-links">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
                <h3 class="name">
                  <a href="team.html">Scott Grey</a>
                </h3>
              </div>
              <span class="designation">Architect</span>
            </div>
          </div>

      
          <div class="team-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <div class="image">
                  <a href="team.html">
                    <img src="../assets/images/resource/team-2.jpg" alt />
                  </a>
                </div>
                <ul class="social-links">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
                <h3 class="name">
                  <a href="team.html">Russel Reed</a>
                </h3>
              </div>
              <span class="designation">Project Manager</span>
            </div>
          </div>

         
          <div class="team-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <div class="image">
                  <a href="team.html">
                    <img src="../assets/images/resource/team-3.jpg" alt />
                  </a>
                </div>
                <ul class="social-links">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
                <h3 class="name">
                  <a href="team.html">Cheryl Ray</a>
                </h3>
              </div>
              <span class="designation">Interior Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Team Section -->

    <!-- Testimonial Section -->
    <section class="testimonial-section mt-5" style="margin-top:100px">
      <div class="outer-container clearfix">
        <!-- Title Column -->
        <div class="title-column clearfix">
          <div class="inner-column">
            <div class="sec-title">
              <span class="float-text">testimonial</span>
              <h2>What Client Says</h2>
            </div>
            <div
              class="text"
            >Looking at its layout. The point of using very profectly is that it has a more-or-less normal distribution of letters, as opposed</div>
          </div>
        </div>

        <!-- Testimonial Column -->
        <div
          class="testimonial-column clearfix"
          style="background-image: url(../assets/images/background/4.jpg);"
        >
          <div class="inner-column">
            <div class="testimonial-carousel owl-carousel owl-theme">
              <!-- Testimonial Block -->
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="image-box">
                    <img src="../assets/images/resource/thumb-1.jpg" alt />
                  </div>
                  <div
                    class="text"
                  >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</div>
                  <div class="info-box">
                    <h4 class="name">Jane Smith</h4>
                    <span class="designation">CEO, InDesign</span>
                  </div>
                </div>
              </div>

              <!-- Testimonial Block -->
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="image-box">
                    <img src="../assets/images/resource/thumb-1.jpg" alt />
                  </div>
                  <div
                    class="text"
                  >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</div>
                  <div class="info-box">
                    <h4 class="name">Jane Smith</h4>
                    <span class="designation">CEO, InDesign</span>
                  </div>
                </div>
              </div>

              <!-- Testimonial Block -->
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="image-box">
                    <img src="../assets/images/resource/thumb-1.jpg" alt />
                  </div>
                  <div
                    class="text"
                  >A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.</div>
                  <div class="info-box">
                    <h4 class="name">Jane Smith</h4>
                    <span class="designation">CEO, InDesign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Testimonial Section -->

    <!-- News Section -->
    <section class="news-section">
      <div class="auto-container">
        <div class="sec-title">
          <span class="float-text">Blogs</span>
          <h2>News & Articals</h2>
        </div>
        <div class="row">
          <!-- News Block -->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="../assets/images/resource/news-1.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <a href="blog-detail.html">
                    <i class="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div class="caption-box">
                <h3>
                  <a href="blog-detail.html">In Good Taste: Mark Finlay Architects & Interiors.</a>
                </h3>
                <ul class="info">
                  <li>06 June 2018,</li>
                  <li>John Smith</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- News Block -->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="../assets/images/resource/news-2.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <a href="blog-detail.html">
                    <i class="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div class="caption-box">
                <h3>
                  <a href="blog-detail.html">The Lexury Apartment of sepcial interiors.</a>
                </h3>
                <ul class="info">
                  <li>06 June 2018,</li>
                  <li>John Smith</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- News Block -->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image-box">
                <figure class="image">
                  <img src="../assets/images/resource/news-3.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <a href="blog-detail.html">
                    <i class="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div class="caption-box">
                <h3>
                  <a href="blog-detail.html">The Business metting room interior in the rank.</a>
                </h3>
                <ul class="info">
                  <li>06 June 2018,</li>
                  <li>John Smith</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End News Section -->

    <!--Clients Section-->
    <!-- <section class="clients-section">
      <div class="inner-container">
        <div class="sponsors-outer">
        
          <ul class="sponsors-carousel owl-carousel owl-theme">
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/1.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/2.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/3.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/4.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/5.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/1.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/2.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/3.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/4.png" alt />
                </a>
              </figure>
            </li>
            <li class="slide-item">
              <figure class="image-box">
                <a href="#">
                  <img src="../assets/images/clients/5.png" alt />
                </a>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>-->
    <!--End Clients Section-->

    <section class="contact-page-section" id="contactus">
      <div class="auto-container">
        <div class="row">
          <!-- Form Column -->
          <div class="form-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title">
                <span class="float-text">informaer</span>
                <h2>Contact Us</h2>
              </div>

              <div class="contact-form">
                <form
                  method="post"
                  action="https://expert-themes.com/html/contra/sendemail.php"
                  id="contact-form"
                >
                  <div class="row">
                    <div class="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="username" placeholder="Name" required />
                    </div>

                    <div class="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="phone" placeholder="Phone" required />
                    </div>

                    <div class="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="text" name="company" placeholder="Company" />
                    </div>

                    <div class="form-group col-lg-6 col-md-12 col-sm-12">
                      <input type="email" name="email" placeholder="Email" required />
                    </div>

                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea name="message" placeholder="Massage"></textarea>
                    </div>

                    <div class="form-group col-lg-12 col-md-12 col-sm-12">
                      <button
                        class="theme-btn btn-style-three"
                        type="submit"
                        name="submit-form"
                      >Submit</button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="contact-info">
                <div class="row">
                  <div class="info-block col-lg-4 col-md-4 col-sm-12">
                    <div class="inner">
                      <h4>Location</h4>
                      <p>Complax interprice company, 882 street Latrobe, PA 15786</p>
                    </div>
                  </div>

                  <div class="info-block col-lg-4 col-md-4 col-sm-12">
                    <div class="inner">
                      <h4>Call Us</h4>
                      <p>+88 169 787 5256</p>
                      <p>+88 165 358 5678</p>
                    </div>
                  </div>

                  <div class="info-block col-lg-4 col-md-4 col-sm-12">
                    <div class="inner">
                      <h4>Email</h4>
                      <p>
                        <a href="#">support@contra.com</a>
                      </p>
                      <p>
                        <a href="#">info@contra.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="map-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1826.1862866683!2d90.40703995798418!3d23.734089901507584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.7351004!2d90.4098442!4m5!1s0x3755b9590048c46b%3A0x4f2d99cc0463a1cc!2sMistri%20Mama%2C%20Dhaka!3m2!1d23.733269!2d90.40642439999999!5e0!3m2!1sen!2sbd!4v1572521216666!5m2!1sen!2sbd"
                frameborder="0"
                height="600"
                style="width:100%;"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <footer class="main-footer" style="background-image: url(../assets/images/background/5.jpg);">
      <div class="auto-container">
        <!--Widgets Section-->
        <div class="widgets-section">
          <div class="row">
            <!--Big Column-->
            <div class="big-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
              <div class="row">
                <!--Footer Column-->
                <div class="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget about-widget">
                    <div class="footer-logo">
                      <figure>
                        <a href="index.html">
                          <img src="../assets/images/footer-logo.png" alt />
                        </a>
                      </figure>
                    </div>
                    <div class="widget-content">
                      <div
                        class="text"
                      >Contra and layouts, in content of dummy text is nonsensical.typefaces of dummy text is appearance of different general the content of dummy text is nonsensical. typefaces of dummy text is nonsensical.</div>
                    </div>
                  </div>
                </div>

                <!--Footer Column-->
                <div class="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget recent-posts">
                    <h2 class="widget-title">Recent Posts</h2>
                    <!--Footer Column-->
                    <div class="widget-content">
                      <div class="post">
                        <div class="thumb">
                          <a href="blog-detail.html">
                            <img src="../assets/images/resource/post-thumb-1.jpg" alt />
                          </a>
                        </div>
                        <h4>
                          <a href="blog-detail.html">Triangle Concrete House on lake</a>
                        </h4>
                        <ul class="info">
                          <li>26 Aug</li>
                          <li>3 Comments</li>
                        </ul>
                      </div>

                      <div class="post">
                        <div class="thumb">
                          <a href="blog-detail.html">
                            <img src="../assets/images/resource/post-thumb-2.jpg" alt />
                          </a>
                        </div>
                        <h4>
                          <a href="blog-detail.html">The Amazing Interior for the Hotel art</a>
                        </h4>
                        <ul class="info">
                          <li>26 Aug</li>
                          <li>3 Comments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Big Column-->
            <div class="big-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
              <div class="row clearfix">
                <div class="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h2 class="widget-title">Useful links</h2>
                    <div class="widget-content">
                      <ul class="list">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="services.html">Services</a>
                        </li>
                        <li>
                          <a href="projects.html">Project</a>
                        </li>
                        <li>
                          <router-link to="/login/sp">SP&Comrade Login</router-link>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!--Footer Column-->
                <div class="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                  <div class="footer-widget gallery-widget">
                    <h2 class="widget-title">Recent Works</h2>
                    <div class="widget-content">
                      <div class="outer clearfix">
                        <figure class="image">
                          <a
                            href="../assets/images/gallery/1.jpg"
                            class="lightbox-image"
                            title="Image Title Here"
                          >
                            <img src="../assets/images/resource/work-thumb-1.jpg" alt />
                          </a>
                        </figure>

                        <figure class="image">
                          <a
                            href="../assets/images/gallery/2.jpg"
                            class="lightbox-image"
                            title="Image Title Here"
                          >
                            <img src="../assets/images/resource/work-thumb-2.jpg" alt />
                          </a>
                        </figure>

                        <figure class="image">
                          <a
                            href="../assets/images/gallery/3.jpg"
                            class="lightbox-image"
                            title="Image Title Here"
                          >
                            <img src="../assets/images/resource/work-thumb-3.jpg" alt />
                          </a>
                        </figure>

                        <figure class="image">
                          <a
                            href="../assets/images/gallery/4.jpg"
                            class="lightbox-image"
                            title="Image Title Here"
                          >
                            <img src="../assets/images/resource/work-thumb-4.jpg" alt />
                          </a>
                        </figure>

                        <figure class="image">
                          <a
                            href="../assets/images/gallery/5.jpg"
                            class="lightbox-image"
                            title="Image Title Here"
                          >
                            <img src="../assets/images/resource/work-thumb-5.jpg" alt />
                          </a>
                        </figure>

                        <figure class="image">
                          <a
                            href="../assets/images/gallery/1.jpg"
                            class="lightbox-image"
                            title="Image Title Here"
                          >
                            <img src="../assets/images/resource/work-thumb-6.jpg" alt />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--Footer Bottom-->
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="inner-container clearfix">
            <div class="social-links">
              <ul class="social-icon-two">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="copyright-text" style="padding: 12px 0;">
              <p>
                Copyright © 2019
                <a href="#">Mistrimama</a> All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <a href="#" class="scroll-to-top scroll-to-target" data-target="html">
      <span class="fa fa-arrow-circle-o-up"></span>
    </a>
    <!-- End Main Footer -->
  </div>
</template>

<script>
import jQuery from "jquery";
let $ = jQuery;

import bootstrap from "bootstrap";
// // import "rijs.npm";
// import popper from "popper";

// import "../assets/js/bootstrap.min.js";
import "../assets/js/jquery.js";
import "../assets/js/jquery.fancybox.js";
// import "../assets/js/owl.js";
// import "../assets/js/wow.js";
import "../assets/js/appear.js";
import "../assets/js/mixitup.js";
import "../assets/js/script.js";
// require("../assets/js/popper.min.js");
// import "../assets/js/popper.min.js";

// import Service from "../views/services/Service.vue";
import ServicesLanding from "../views/landing/service-landing.vue";
import axios from "../axios_instance.js";
import { localStorageService } from "../helper.js";

import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
    ServicesLanding
  },
  data() {
    return {
      categorys: "",
      hooperSettings: {
        // itemsToShow: 1,
        centerMode: true,
        wheelControl: false,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 3000,
        transition: 1000
      }
    };
  },

  created() {
    this.storeCategorys();
  },

  methods: {
    async storeCategorys() {
      var allCategory = await axios.get("/category"); 
      localStorageService.setItem("categorys", allCategory.data.data);
      this.categorys = allCategory.data.data;
    }
  }
};
</script>


<style scoped>
/* @import "../assets/css/style.css";
@import "../assets/css/responsive.css";  */
/* @import "../assets/css/bootstrap.css";  */
</style>

<style scoped>
.owl-stage {
  width: 100% !important;
}
.owl-item .active {
  width: 100% !important;
}
.v-chip__content {
  cursor: pointer;
}

.hovereffect {
  position: relative;
  width: 50%;
}

.hovereffect-image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.hovereffect-middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  background-color: #000000bf;
  height: 100%;
  width: 100%;
  padding: 20%;
}

.hovereffect:hover .hovereffect-middle {
  opacity: 1;
}

.hovereffect-text {
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

.header-style-one .header-lower:after {
    position: absolute;
    top: 0;
    right: -30px;
    height: 0;
    width: 0;
    border-right: 30px solid transparent;
    border-top: 110px solid rgba(0,0,0,0.80);
    content: "";
}
.header-style-one .header-lower:before {
    position: absolute;
    top: 0;
    left: -30px;
    height: 0;
    width: 0;
    border-left: 30px solid transparent;
    border-top: 110px solid rgba(0,0,0,0.80);
    content: "";
}
</style>