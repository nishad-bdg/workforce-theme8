<template>
  <v-container fluid ma-0 pa-0>
    <!-- Main Row -->
    <v-row no-gutters>
      <!-- Column for header section -->
      <v-col cols="12">
        <v-card color="#6152CF" class="parent-card" dark flat>
          <v-card-text>
            <v-container fluid ma-0 pa-0>
              <v-row no-gutters>
                <!-- Column 1 -->
                <v-col cols="12" md="5" sm="8" xs="8">
                  <v-card color="transparent" flat class="mx-md-5 ml-xs-n10">
                    <v-card-text>
                      <div class="d-flex">
                        <v-list-item>
                          <!-- avatar -->
                          <v-list-item-avatar
                            color="grey darken-3"
                            class="profile-avatar"
                            size="150"
                            max-width="150"
                          >
                            <v-img
                              class="elevation-6 avatar-border"
                              src="../assets/images/avatar.png"
                            ></v-img>
                          </v-list-item-avatar>
                          <!-- Avatar -->
                          <!-- Name -->
                          <v-list-item-content>
                            <v-list-item-title class="headline ml-4">
                              <span class="profile-title">Olivia Emily</span>
                            </v-list-item-title>
                            <v-list-item-subtitle class="ml-4">
                              <span class="profile-subtitle">UX/UI Designer</span>
                            </v-list-item-subtitle>

                            <v-list-item-icon>
                              <v-btn small icon class="mr-2">
                                <v-img class="social-icon" src="../assets/icons/behance.png"></v-img>
                              </v-btn>
                              <v-btn small icon class="mr-2">
                                <v-img
                                  height="30"
                                  width="30"
                                  class="social-icon"
                                  src="../assets/icons/instagram.png"
                                ></v-img>
                              </v-btn>
                              <v-btn small icon class="mr-2">
                                <v-img class="social-icon" src="../assets/icons/dribble.png"></v-img>
                              </v-btn>
                              <v-btn small icon class="mr-2">
                                <v-img class="social-icon" src="../assets/icons/google.png"></v-img>
                              </v-btn>
                            </v-list-item-icon>
                          </v-list-item-content>

                          <!-- Name -->
                        </v-list-item>
                      </div>

                      <v-btn color="#FF5231" class="chat-btn">
                        TAP TO CHAT
                        <v-img src="../assets/icons/chat.png" class="ml-1"></v-img>
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>
                <!-- Column 1 -->

                <!-- Column 2 -->
                <v-col cols="12" md="6" class="desktop-row ml-10 mt-n8">
                  <v-card flat color="transparent">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12" md="10">
                          <v-card flat color="transparent">
                            <v-card-text align="center">
                              <v-row align="center">
                                <v-col cols="12" md="4">
                                  <div class="interview-text">Your Interviews:</div>
                                </v-col>
                                <v-col cols="12" md="4" class="custom-col">
                                  <v-btn block color="#03CA9F" class="btn-voice-call">
                                    <img class="mr-2" src="../assets/icons/phone.png" />Voice Call
                                  </v-btn>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-btn block color="#2400FF" class="btn-upload">
                                    <img src="../assets/icons/camera.png" class="mr-2" />Upload Video
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-card>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-card flat class="card-hire-me" height="70" color="rgba(37, 0, 0, 0.1)">
                            <v-card-text>
                              <v-row no-gutters align="center" class="mt-n5">
                                <v-col cols="12" md="4">
                                  <v-list disabled color="transparent">
                                    <v-list-item-group color="primary">
                                      <v-list-item>
                                        <v-list-item-icon>
                                          <v-img width="20" src="../assets/icons/hourly-rate.png"></v-img>
                                        </v-list-item-icon>
                                        <v-list-item-content class="ml-n5">
                                          <v-list-item-title>15$</v-list-item-title>
                                          <v-list-item-subtitle>Hourly Rate</v-list-item-subtitle>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list-item-group>
                                  </v-list>
                                </v-col>

                                <v-col cols="12" md="4">
                                  <v-list disabled color="transparent">
                                    <v-list-item-group color="primary">
                                      <v-list-item>
                                        <v-list-item-icon>
                                          <v-img width="20" src="../assets/icons/availibility.png"></v-img>
                                        </v-list-item-icon>
                                        <v-list-item-content class="ml-n5">
                                          <v-list-item-title>40 Hours</v-list-item-title>
                                          <v-list-item-subtitle>Weekly Availibility</v-list-item-subtitle>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list-item-group>
                                  </v-list>
                                </v-col>

                                <v-col cols="12" md="2" offset="1">
                                  <v-btn block color="#00CDF7" class="btn-hire-me">
                                    Hire Me
                                    <img class="ml-2" src="../assets/icons/chat2.png" />
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
                <!-- Column 2 -->
                <!-- Coumn 3 tabs -->
                <v-col
                  cols="12"
                  md="10"
                  sm="10"
                  align="center"
                  offset="1"
                  class="mb-n8 hidden-xs-only"
                >
                  <v-card color="transparent" flat>
                    <v-card-text align="center">
                      <!-- tabs -->
                      <v-tabs
                        v-model="dataTabs"
                        background-color="#00CDF7"
                        height="50"
                        class="parent-tab"
                        grow
                        centered
                        dark
                        hide-slider
                      >
                        <v-tab
                          show-arrows
                          v-for="tab in tabs"
                          :key="tab.id"
                          @click="currentTab = tab.id"
                          class="ct-tab-title text-capitalize"
                          :class="[
                        currentTab == tab.id ? 'active-tab' : '',
                        tab.id == 1 ? 'round-left' : '',
                        tab.id == 6 ? 'round-right' : '',
                      ]"
                        >
                          <v-avatar tile height="20" width="23">
                            <img
                              :src="[currentTab == tab.id ? getImgUrlIconActive(tab.id):getImgUrlIcon(tab.id) ]"
                              class="mr-4"
                            />
                          </v-avatar>
                          {{tab.title}}
                        </v-tab>
                        <!-- tabs -->
                      </v-tabs>
                    </v-card-text>
                  </v-card>
                </v-col>
                <!-- Column3 tabs-->
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Column for header section -->
      <!-- Row For Tab Items -->

      <!-- Row For Tab Items -->
    </v-row>
    <v-row class>
      <v-col cols="12" md="12" xs="12">
        <v-card flat color="#F5F5F5">
          <!-- tab items -->
          <v-tabs v-model="dataTabs">
            <!-- Tab Item Portfolio -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10">
                  <v-card-text align="center">
                    <v-row>
                      <v-col
                        cols="12"
                        md="4"
                        sm="6"
                        xs="12"
                        v-for="item in portfolio"
                        :key="item.id"
                      >
                        <v-card elevation-12 class="card-portfolio">
                          <v-img aspect-ratio="1.4" :src="getImgUrlPortfolio(item.id)">
                            <v-overlay
                              :absolute="absolute"
                              :value="item.id==1 ? overlay : false"
                              opacity="0.8"
                              color="#6152CF"
                            >
                              <v-btn fab small color="#ffffff">
                                <img src="../assets/icons/overlay-icon.png" />
                              </v-btn>
                            </v-overlay>
                          </v-img>

                          <v-card-title class="subtitle-1">{{item.title}}</v-card-title>
                          <v-card-subtitle align="left">{{ item.subtitle }}</v-card-subtitle>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>
            <!-- tab item portfolio -->

            <!-- Tab Item For Work -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10">
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6" v-for="(item,index) in work" :key="index">
                        <v-card flat color="transparent" class="mx-10">
                          <v-card-text>
                            <v-list-item>
                              <v-list-item-icon class="mt-2">
                                <v-img width="40" :src="getIconWork(item.id)"></v-img>
                              </v-list-item-icon>
                              <div class="v-line" v-if="work.length-(index+1) >1"></div>
                              <v-list-item-content>
                                <v-list-item-title class="work-title">{{item.title}}</v-list-item-title>
                                <v-list-item-subtitle
                                  class="work-subtitle mt-2"
                                >{{ item.subtitle1 }}</v-list-item-subtitle>
                                <v-list-item-subtitle class="work-subtitle mt-2">{{ item.subtitle2}}</v-list-item-subtitle>
                                <div class="float-xs-left mt-4 work-text">{{ item.bodyText }}</div>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>
            <!-- Tab Item for work -->

            <!-- Tab Item For Education -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10">
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6" v-for="(item,index) in education" :key="index">
                        <v-card flat color="transparent" class="mx-md-10">
                          <v-card-text>
                            <v-list-item>
                              <v-list-item-icon class="mt-2">
                                <v-img width="40" :src="getIconEducation(item.id)"></v-img>
                              </v-list-item-icon>
                              <div class="v-line" v-if="work.length-(index+1) >1"></div>
                              <v-list-item-content>
                                <v-list-item-title class="work-title">{{item.title}}</v-list-item-title>
                                <v-list-item-subtitle
                                  class="work-subtitle mt-2"
                                >{{ item.subtitle1 }}</v-list-item-subtitle>
                                <v-list-item-subtitle
                                  v-if="item.subtitle2"
                                  class="work-subtitle mt-2"
                                >{{ item.subtitle2}}</v-list-item-subtitle>
                                <div class="float-xs-left mt-4 work-text">{{ item.bodyText }}</div>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>
            <!-- Tab Item For Education -->

            <!-- Tab Item for skills -->
            <v-tab-item>
              <v-card>
                <v-card-text>
                  <v-tabs fixed-tabs background-color="indigo" dark>
                    <v-tab>Option</v-tab>
                    <v-tab>Another Selection</v-tab>
                    <v-tab>Items</v-tab>
                    <v-tab>Another Screen</v-tab>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <!-- Tab Item For Skills -->
          </v-tabs>
          <!-- tab items -->
        </v-card>
      </v-col>
    </v-row>
    <!-- Main Row Ends Here -->
    <!-- Footer -->

    <!-- Footer -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skillTab: null,
      page: 1,
      overlay: true,
      absolute: true,
      dataTabs: null,
      currentTab: 1,

      tabs: [
        { title: "Portfolio", id: 1 },
        { title: "Works", id: 2 },
        { title: "Education", id: 3 },
        { title: "Skill", id: 4 },
        { title: "About Me", id: 5 },
        { title: "Achievement", id: 6 }
      ],
      skills: [
        { skill: "Programming Languages", value: 80, id: 1 },
        { skill: "Framework/Databases", value: 35, id: 2 },
        { skill: "Software", value: 92, id: 3 },
        { skill: "Desgign Skills", value: 55, id: 4 }
      ],
      portfolio: [
        {
          title: "Product Design",
          subtitle: "industrial,creative,idea",
          id: 1
        },
        {
          title: "Website Design",
          subtitle: "industrial,creative,idea",
          id: 2
        },
        {
          title: "Pattern Design",
          subtitle: "industrial,creative,idea",
          id: 3
        },
        {
          title: "Product Design",
          subtitle: "industrial,creative,idea",
          id: 4
        },
        {
          title: "Product Design",
          subtitle: "industrial,creative,idea",
          id: 5
        },
        {
          title: "Product Design",
          subtitle: "industrial,creative,idea",
          id: 6
        }
      ],
      work: [
        {
          id: 1,
          title: "Product Designer",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 2,
          title: "Animation Designer",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 3,
          title: "Visual Designer",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 4,
          title: "Illustrator Designer",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 5,
          title: "UX Designer",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 6,
          title: "UX Designer",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        }
      ],
      // Education
      education: [
        {
          id: 1,
          title: "Graphic Art Institute",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 2,
          title: "Edx Ltd",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 3,
          title: "Visual Design ltd",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 4,
          title: "teachable",
          subtitle1: "Gps Bangla",
          subtitle2: "Jan 2017 - Feb 2019",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 5,
          title: "Udemy",
          subtitle1: "Gps Bangla",
          subtitle2: "",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        },
        {
          id: 6,
          title: "learnworlds",
          subtitle1: "Gps Bangla",
          subtitle2: "",
          bodyText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabore et dolore magna aliquyam erat,"
        }
      ]
    };
  },

  methods: {
    getImgUrlIcon(icon) {
      let image = require.context("../assets/icons/tabs", false, /\.png$/);
      return image("./" + icon + ".png");
    },

    getImgUrlIconActive(icon) {
      let image = require.context(
        "../assets/icons/tabs-active",
        false,
        /\.png$/
      );
      return image("./" + icon + ".png");
    },
    // portfolio image
    getImgUrlPortfolio(id) {
      let image = require.context(
        "../assets/images/portfolio",
        false,
        /\.png$/
      );
      return image("./" + id + ".png");
    },

    //work icons
    getIconWork(id) {
      let image = require.context("../assets/icons/work", false, /\.png$/);
      return image("./" + id + ".png");
    },

    //education icons
    getIconEducation(id) {
      let image = require.context("../assets/icons/education", false, /\.png$/);
      return image("./" + id + ".png");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url(//db.onlinewebfonts.com/c/150037e11f159dca84bc4c04549094b6?family=Averta-Regular);

.parent-card {
  border-radius: 0px !important;
}
.profile-avatar {
  border-radius: 22px !important;
}
.profile-title {
  font-family: "Open Sans" !important;
  font-size: 30px !important;
}

.profile-subtitle {
  font-family: "Open Sans" !important;
  font-size: 16px !important;
  padding: 1px;
  color: #ffffff !important;
}

.chat-btn {
  font-family: "Open Sans" !important;
  border-radius: 23px !important;
  padding: 10px !important;
  font-size: 12px !important;
  margin-top: -50px;
  margin-left: 24px;
  text-align: center !important;
}

/* social icons */
.social-icon {
  width: 30px;
  height: 30px;
}
/* social icons */

.interview-text {
  font-family: "Open Sans" !important;
  font-size: 16px !important;
  color: #ffffff !important;
}

.btn-voice-call {
  font-family: "Open Sans" !important;
  border-radius: 28px !important;
  font-size: 12px !important;
  text-transform: capitalize !important;
  width: 160px !important;
  height: 35px !important;
  margin-left: -20px;
}

.btn-voice-call img {
  width: 12px !important;
}

.btn-upload {
  font-family: "Open Sans" !important;
  border-radius: 28px !important;
  font-size: 12px !important;
  text-transform: capitalize !important;
  width: 180px !important;
}

.btn-upload img {
  width: 20px !important;
}

/* hire me card */
.card-hire-me {
  border-radius: 51px !important;
  padding: -50px;
}

.btn-hire-me {
  font-family: "Open Sans" !important;
  font-size: 15px !important;
  text-transform: capitalize !important;
  padding: 25px !important;
  border-radius: 38px !important;
}

.btn-hire-me img {
  width: 20px !important;
}

.hourly-rate-icon {
  width: 20px;
}

/* tab styles */
.parent-tab {
  border-radius: 26px 26px 0 0 !important;
}

.ct-tab-title {
  color: #ffffff !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
}

.active-tab {
  background-color: #ffffff !important;
  color: #fc5283 !important;
}

/* Corners */
.round-left {
  border-top-left-radius: 26px;
}

.round-right {
  border-top-right-radius: 26px;
}
/* tab styles */

/* Portfolio */
.card-portfolio {
  border-radius: 12px !important;
  width: 90% !important;
}
/* Portfolio */
/* Work */
.work-title {
  font-family: "Poppins" !important;
  font-size: 22px !important;
}

.work-subtitle {
  font-family: "Poppins" !important;
  font-size: 14px !important;
  color: #4b4b4b !important;
  font-weight: 400 !important;
}

.work-text {
  font-family: "Poppins" !important;
  font-size: 12px !important;
  color: #656565 !important;
}
/* Work */

/* Skill tabs */
.skill-tab-text {
  font-family: "Averta-Regular" !important;
  font-size: 15px !important;
  text-transform: capitalize !important;
}
/* Skills tabs */
/*  */
/* sticky images */

/* sticky images */
.scroll {
  overflow-y: auto !important;
}

.v-line {
  position: absolute;
  margin-top: 115px;
  margin-left: 19px;
  height: 112%;
  border: 1px solid #707070;
}
/* hire me card */
@media screen and (max-width: 1200px) {
  .desktop-row {
    display: none;
  }
}

@media screen and (max-width: 599px) {
  .skill-tab-text {
    font-size: 12px !important;
  }
}
</style>

