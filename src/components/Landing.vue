<template>
  <div class="page-wrapper">
    <!-- Preloader -->
    <!-- <div class="preloader"></div> -->

    <!-- Main Header-->
    <HeaderLanding :categorys="categorys"></HeaderLanding>
    <!--End Main Header -->

    <!-- Bnner Section -->

    <section class="banner-section">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <!-- <div
            v-for="(slider , i) in sliders"
            :key="i"
            :class="`carousel-item ${i == 0 ? 'active' : ''}`"
          >
            <img
              class="d-block w-100"
              style="max-height:668px"
              :src="slider.image"
              :alt="slider.name"
            />
          </div>-->
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              style="max-height:668px"
              src="http://192.168.241.47/mistrimama3.0/public/frontend/image/fac.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style="max-height:668px"
              src="http://192.168.241.47/mistrimama3.0/public/frontend/image/Kit.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style="max-height:668px"
              src="http://192.168.241.47/mistrimama3.0/public/frontend/image/liv.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style="max-height:668px"
              src="http://192.168.241.47/mistrimama3.0/public/frontend/image/off.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              style="max-height:668px"
              src="http://192.168.241.47/mistrimama3.0/public/frontend/image/toy.jpg"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <!-- <hooper style="height:auto" :settings="hooperSettings">
        <slide
          class="col-md-12 p-0 m-0 text-center"
          style="width: 1358px;background-image: url(http://dev.mm/theme/WEBSIT-02.png);background-position: center center;background-size: cover;background-repeat: no-repeat;height: 665px !important;"
        >
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>-->

      <div class="order-form contact-form">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="row mx-2 d-none">
                <div class="col-md-12 rounded">
                  <!-- <h2 style="text-align: center;padding-top:10px;color:#fff">Place a Service Order</h2> -->
                  <div class="row" style="padding: 14px 10px 0px 10px;">
                    <div class="col-md-12 text-center">
                      <h1
                        class="mm-color p-0"
                        style="font-size: 4.5rem;text-shadow: 1px 1px 6px black;"
                      >
                        Your Trusted
                        <br />Service Partner
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 test-animate p-0">
              <div class="row mx-1 order-row">
                <div
                  class="col-md-12 mm-bg-transparent main-order-area"
                  style="border-radius: 20px"
                >
                  <h2
                    style="text-align: left;padding: 13px 0px 0px 10px;color: rgb(255, 255, 255);"
                  >Place Service Order</h2>
                  <div class="row" style="padding: 14px 10px 0px 10px;">
                    <div class="form-group col-md-12 mb-3">
                      <!-- <input type="text" name="username" placeholder="Name" required /> -->
                      <select
                        name="category"
                        id="category"
                        class="form-control select-mm"
                        v-model="selectedCategory"
                      >
                        <option value selected>Select Category</option>
                        <option
                          v-for="category in categorys"
                          :key="category.id"
                          :value="category.slug"
                        >
                          <span class="bg-mm text-white">{{category.name}}</span>
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-12 mb-2">
                      <button
                        class="col-md-12 text-center text-white btn-mm"
                        color="primary"
                        @click="initOrder()"
                      >Book Now</button>
                    </div>

                    <div class="form-group col-md-12 text-right">
                      <img
                        src="https://mistrimama.com/images/call.png"
                        style="width: 65% !important; "
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        <div class="services-box">
          <div class="auto-container">
            <div class>
              <!-- Service Block -->
              <hooper v-if="categorys != ''" :settings="hooperSettings">
                <Slide v-for="category in categorys" :key="category.id">
                  <div class="service-block">
                    <div class="inner-box">
                      <div class="image-box">
                        <figure class="image">
                          <router-link :to="category.slug">
                            <img :src="category.opt_image" alt />
                          </router-link>
                        </figure>
                      </div>
                      <div class="lower-content">
                        <h3>
                          <router-link :to="category.slug">{{category.name}}</router-link>
                        </h3>
                        <div class="text" v-html="truncate(category.description)"></div>
                        <div class="link-box">
                          <router-link :to="category.slug">
                            Lorn More
                            <i class="fa fa-long-arrow-right"></i>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>

                <!-- Service Block -->
              </hooper>
            </div>
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
                  <img src="http://dev.mm/theme/ABOUT US-03.png" alt />
                </figure>
                <figure class="image wow fadeInRight" data-wow-delay="600ms">
                  <img src="http://dev.mm/theme/ABOUT US-04.png" alt />
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

    <!-- Project Section -->
    <section class="projects-section">
      <div class="auto-container">
        <div class="sec-title text-right">
          <span class="float-text">Corporate</span>
          <h2>B2B Packages</h2>
        </div>
      </div>
      <div class="inner-container">
        <!-- <div class="projects-carousel"> -->
        <!-- Project Block sabbir -->
        <hooper :settings="hooperSettingsProject">
          <Slide>
            <div class="project-block">
              <div class="image-box">
                <figure class="image">
                  <img src="http://192.168.241.47/mistrimama3.0/public/frontend/image/C1.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <h4>
                    <a href="/">
                      <stron>B2B Affiliation</stron>
                    </a>
                  </h4>
                  <div class="btn-box">
                    <!-- <a href="/">
                      <i class="fa fa-external-link"></i>
                    </a>-->
                    <ul class="btn-box-ul">
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Real Time Dashboard</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Priority Service</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Technician Monitoring Facility</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Separate Service Team</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Product Purchase Support</li>
                    </ul>
                  </div>
                  <router-link class="tag" style="color: #febe00;" to="/affliation">
                    View More
                    <i class="fa fa-external-link"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </Slide>
          <!-- Project Block -->
          <Slide>
            <div class="project-block">
              <div class="image-box">
                <figure class="image">
                  <img src="http://192.168.241.47/mistrimama3.0/public/frontend/image/C3.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <h4>
                    <a href="/">
                      <stron>B2B Project</stron>
                    </a>
                  </h4>
                  <div class="btn-box">
                    <!-- <a href="/">
                      <i class="fa fa-external-link"></i>
                    </a>-->
                    <ul class="btn-box-ul">
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Dynamic Dashboard</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Project Process Monitoring</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Project Inventory</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Corporate Discount</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Credit Facility</li>
                    </ul>
                  </div>
                  <router-link class="tag" style="color: #febe00;" to="/affliation">
                    View More
                    <i class="fa fa-external-link"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </Slide>

          <!-- Project Block -->
          <Slide>
            <div class="project-block">
              <div class="image-box">
                <figure class="image">
                  <img src="http://192.168.241.47/mistrimama3.0/public/frontend/image/C2.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <h4>
                    <a href="/">
                      <stron>B2B Maintenance</stron>
                    </a>
                  </h4>
                  <div class="btn-box">
                    <!-- <a href="/">
                      <i class="fa fa-external-link"></i>
                    </a>-->
                    <ul class="btn-box-ul">
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Asset Inventory</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Regular Maintenance</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Safety Training</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Corporate Advising Session</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Separate Key Account Manager</li>
                    </ul>
                  </div>
                  <router-link class="tag" style="color: #febe00;" to="/affliation">
                    View More
                    <i class="fa fa-external-link"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </Slide>
          <!-- Project Block -->
          <Slide>
            <div class="project-block">
              <div class="image-box">
                <figure class="image">
                  <img src="http://192.168.241.47/mistrimama3.0/public/frontend/image/C4.jpg" alt />
                </figure>
                <div class="overlay-box">
                  <h4>
                    <a href="/">
                      <stron>B2B On Demand</stron>
                    </a>
                  </h4>
                  <div class="btn-box">
                    <!-- <a href="/">
                      <i class="fa fa-external-link"></i>
                    </a>-->
                    <ul class="btn-box-ul">
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >On Time Service</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >7 Days Service Warranty</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Fast Service During Emergency</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Negotiation Free</li>
                      <li
                        class="btn-box-li"
                        style="color: #fff;padding-bottom: 8px;"
                      >Secured and Trust Worthy Service</li>
                    </ul>
                  </div>
                  <router-link class="tag" style="color: #febe00;" to="/affliation">
                    View More
                    <i class="fa fa-external-link"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </Slide>
          <!-- Project Block -->
          <!-- <Slide>
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
          </Slide>
          
          <Slide>
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
          </Slide>-->
        </hooper>
        <!-- </div> -->
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
            <!-- <div
              class="text"
            >Looking at its layout. The point of using very profectly is that it has a more-or-less normal distribution of letters, as opposed</div>-->
          </div>
        </div>

        <!-- Testimonial Column -->
        <div class="testimonial-column clearfix">
          <div class="inner-column">
            <div class="testimonial">
              <!-- Testimonial Block -->
              <hooper :settings="hooperSettingsTestimonial">
                <Slide>
                  <div class="testimonial-block">
                    <div class="inner-box">
                      <div class="image-box">
                        <img
                          src="http://192.168.241.47/mistrimama3.0/public/frontend/image/review/SadmanOrnab_.png"
                          alt
                        />
                      </div>
                      <div
                        class="text"
                      >One of the best service I got. Quick response and faster service delivery I got. Service person behavior is good and very efficient to give the service.</div>
                      <div class="info-box">
                        <h4 class="name">Sadman Ornab</h4>
                        <span class="designation">Corporate Executive</span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <!-- Testimonial Block -->
                <Slide>
                  <div class="testimonial-block">
                    <div class="inner-box">
                      <div class="image-box">
                        <img
                          src="http://192.168.241.47/mistrimama3.0/public/frontend/image/review/HasiburRahmanRahib_.png"
                          alt
                        />
                      </div>
                      <div
                        class="text"
                      >Great Convenient and affordable service. Wish best of luck for future endeavors and keep it up this service quality.</div>
                      <div class="info-box">
                        <h4 class="name">Hasibur Rahman Rahib</h4>
                        <span class="designation">Student</span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <!-- Testimonial Block -->
                <Slide>
                  <div class="testimonial-block">
                    <div class="inner-box">
                      <div class="image-box">
                        <img
                          src="http://192.168.241.47/mistrimama3.0/public/frontend/image/review/DiabMahmudTushar.png"
                          alt
                        />
                      </div>
                      <div
                        class="text"
                      >Mistri mama is a great platform to have household service of electronic items. it's made our daily life easier than before.</div>
                      <div class="info-box">
                        <h4 class="name">Diab Mahmud Tushar</h4>
                        <span class="designation">Corporate Executive</span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <!-- Testimonial Block -->
                <Slide>
                  <div class="testimonial-block">
                    <div class="inner-box">
                      <div class="image-box">
                        <img
                          src="http://192.168.241.47/mistrimama3.0/public/frontend/image/review/TausifAhmed_.png"
                          alt
                        />
                      </div>
                      <div
                        class="text"
                      >Took AC servicing from Mistri Mama and they did a stellar job. Highly recommended.</div>
                      <div class="info-box">
                        <h4 class="name">Tausif Ahmed</h4>
                        <span class="designation">Corporate Manager</span>
                      </div>
                    </div>
                  </div>
                </Slide>
                <!-- Testimonial Block -->
                <Slide>
                  <div class="testimonial-block">
                    <div class="inner-box">
                      <div class="image-box">
                        <img
                          src="http://192.168.241.47/mistrimama3.0/public/frontend/image/review/MizanurRahman_.png"
                          alt
                        />
                      </div>
                      <div
                        class="text"
                      >Services quality is very good and behavior of mistri is just amazing. Thanks to Mistri Mama for excellent services.</div>
                      <div class="info-box">
                        <h4 class="name">Mizanur Rahman</h4>
                        <span class="designation">Corporate Executive</span>
                      </div>
                    </div>
                  </div>
                </Slide>
              </hooper>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.383745283798!2d90.40608961449269!3d23.73369129533243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9590048c46b%3A0x4f2d99cc0463a1cc!2sMistri%20Mama!5e0!3m2!1sen!2sbd!4v1583748129871!5m2!1sen!2sbd"
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
import HeaderLanding from "./HeaderLanding.vue";

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
    ServicesLanding,
    HeaderLanding
  },
  data() {
    return {
      categorys: "",
      selectedCategory: "",
      sliders: "",
      hooperSettings: {
        itemsToShow: 3,
        centerMode: true,
        wheelControl: false,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 3000,
        transition: 1000
      },
      hooperSettingsProject: {
        itemsToShow: 4,
        centerMode: false,
        wheelControl: false,
        infiniteScroll: false,
        autoPlay: false,
        playSpeed: 100000,
        transition: 1000
      },
      hooperSettingsTestimonial: {
        itemsToShow: 1,
        centerMode: true,
        wheelControl: false,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 1000,
        transition: 1000
      }
    };
  },

  created() {
    this.storeCategorys();
    this.getSlider();
  },

  methods: {
    async storeCategorys() {
      if (!localStorageService.getItem("categorys")) {
        var allCategory = await axios.get("/category");
        localStorageService.setItem("categorys", allCategory.data.data);
        this.categorys = allCategory.data.data;
      } else {
        this.categorys = localStorageService.getItem("categorys");
      }
    },
    initOrder() {
      this.$router.replace("/order/" + this.selectedCategory);
    },
    async getArea() {
      var area = await axios.get("/area");
      localStorageService.setItem("area", area.data.data);
    },

    truncate(input) {
      if (input.length > 5) return input.substring(0, 200) + "...";
      else {
        return input;
      }
    },
    async getSlider() {
      var res = await axios.get("slider");
      console.log(res.data);
      this.sliders = res.data;
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

.order-form {
  z-index: 200;
  position: absolute;
  display: block;
  top: 50%;
  /* left: 40%; */
  width: 100%;
  /* background: #11090869; */
  border-radius: 5px;
}
.mm-bg-transparent {
  background: #1109089e;
}
.btn-mm {
  background-color: #febe00;
  padding: 7px !important;
  border-radius: 23px;
  border: 1px solid #febe00;
}

.btn-mm:hover {
  background-color: #fff !important;
  padding: 7px !important;
  border-radius: 23px;
  color: #febe00 !important;
  border: 1px solid #febe00;
}

.select-mm {
  color: rgb(254, 190, 0) !important;
  font-weight: bold !important;
  background-color: rgba(0, 0, 0, 0.46) !important;
  padding: 4px 13px !important;
  border-radius: 18px !important;
  height: 40px !important;
  font-size: 18px !important;
}

.select-mm:active {
  color: rgb(254, 190, 0) !important;
  font-weight: bold !important;
  background-color: rgba(0, 0, 0, 0.46) !important;
  padding: 4px 13px !important;
  border-radius: 18px !important;
  height: 40px !important;
  font-size: 18px !important;
}

.select-mm:focus {
  color: rgb(254, 190, 0) !important;
  font-weight: bold !important;
  background-color: rgba(0, 0, 0, 0.46) !important;
  padding: 4px 13px !important;
  border-radius: 18px !important;
  height: 40px !important;
  font-size: 18px !important;
  border-color: #ff8a00;
  box-shadow: none;
}

.select-mm > option:hover {
  color: rgb(254, 190, 0) !important;
}
select.decorated option:hover {
  box-shadow: 0 0 10px 100px rgb(254, 190, 0) inset;
}
/* option {
  background-color: rgb(254, 190, 0) !important;
  color: #000 !important;
} */

.mm-color {
  color: rgb(254, 190, 0) !important;
}

option {
  background-color: rgb(24, 24, 25) !important;
  color: rgb(254, 190, 0) !important;
}

.main-menu .navigation > li.current > a,
.main-menu .navigation > li:hover > a:hover {
  color: #febe00 !important;
}
.header-style-one .main-menu .navigation > li > a:before {
  background-color: #febe00 !important;
}

/* section {
  display: initial;
} */

.hooper {
  height: auto !important;
}

.about-section .content-column .content-box .title h2 {
  padding-bottom: 10px !important;
}

.about-section .content-column .content-box .title {
  margin-bottom: 10px !important;
}
.about-section {
  padding: 0px 0 !important;
}

.btn-box-ul {
  color: #fff !important;
}

.project-block .overlay-box .btn-box {
  top: 38% !important;
}

.btn-box > .btn-box-ul > .btn-box-li {
  padding-bottom: 10px;
  color: #fff !important;
}

.btn-box > ul > li {
  color: #fff !important;
}

.testimonial-section .testimonial-column .inner-column {
  padding: 70px 118px 40px 60px !important;
}

@media only screen and (max-width: 600px) {
  .order-form {
    z-index: 200;
    position: unset;
    display: block;
    /* top: 50%; */
    /* left: 40%; */
    width: 100%;
    background: #000000a8;
    border-radius: 5px;
  }

  .order-form > .container {
    padding: 0px;
  }
  .order-form > .container > .row {
    margin: 0px;
  }
  .order-row {
    margin: 0px !important;
  }
  .main-order-area {
    border-radius: 0px !important;
  }

  .banner-section {
    margin-top: 100px;
  }
}
</style>