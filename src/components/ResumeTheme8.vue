<template>
  <v-container fluid ma-0 pa-0>
    <!-- Header Row -->
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
                              class="elevation-6 profile-avatar-img"
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
                                          <v-list-item-subtitle class="caption">Hourly Rate</v-list-item-subtitle>
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
                                          <v-list-item-subtitle class="caption">Weekly Availibility</v-list-item-subtitle>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list-item-group>
                                  </v-list>
                                </v-col>

                                <v-col cols="12" md="2" lg="2" offset-md="1">
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
                          <v-avatar tile height="16" width="15">
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
    </v-row>
    <!-- header row -->

    <!-- tabs details row -->
    <v-row>
      <v-col cols="12" md="12" xs="12">
        <v-card flat color="#F5F5F5">
          <!-- tab items -->
          <v-tabs v-model="dataTabs">
            <!-- Tab Item Portfolio -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10" style="z-index:1;">
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
                    <!-- Pagination -->
                    <v-row class="mt-5">
                      <v-col cols="12">
                        <div class="text-center">
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon disabled>mdi-arrow-left</v-icon>
                          </v-btn>
                          <span class="title pagination-text">1/5</span>
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                    <!-- Pagination -->
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

                    <!-- Pagination -->
                    <v-row class="mt-5">
                      <v-col cols="12">
                        <div class="text-center">
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon disabled>mdi-arrow-left</v-icon>
                          </v-btn>
                          <span class="title pagination-text">1/5</span>
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                    <!-- Pagination -->
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
                    <!-- Pagination -->
                    <v-row class="mt-5">
                      <v-col cols="12">
                        <div class="text-center">
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon disabled>mdi-arrow-left</v-icon>
                          </v-btn>
                          <span class="title pagination-text">1/5</span>
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                    <!-- Pagination -->
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>
            <!-- Tab Item For Education -->

            <!-- Tab Item for skills -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10">
                  <v-card-text>
                    <!-- Skill Child Tabs -->
                    <v-toolbar flat class="ml-md-5">
                      <v-tabs
                        color="#6152CF"
                        v-model="skillTab"
                        background-color="transparent"
                        show-arrows
                        align-with-title
                        mobile-break-point="599"
                      >
                        <v-tab
                          v-for="item in skills"
                          :key="item.id"
                          class="skill-tab-text mx-md-4"
                        >{{item.skill}}</v-tab>
                      </v-tabs>
                      <v-spacer></v-spacer>
                      <v-btn icon class="mx-md-3">
                        <img width="40" src="../assets/icons/skills/arrange.png" />
                      </v-btn>
                      <v-btn icon small class="mr-sm-3">
                        <img height="16" width="20" src="../assets/icons/skills/view-list.png" />
                      </v-btn>
                    </v-toolbar>
                    <!-- Inner Tab Items -->
                    <v-tabs-items v-model="skillTab">
                      <!-- Inner tab first item -->
                      <v-tab-item v-for="n in 4" :key="n">
                        <v-card color="transparent" flat>
                          <v-card-text>
                            <v-row>
                              <!-- 1st inner column -->
                              <v-col
                                cols="12"
                                md="12"
                                v-for="skill in skillDetails"
                                :key="skill.title"
                              >
                                <v-card flat color="transparent">
                                  <v-card-title class="skill-child-title">{{skill.title}}</v-card-title>
                                  <v-card-text>
                                    <v-row>
                                      <v-col
                                        cols="12"
                                        md="3"
                                        sm="6"
                                        xs="12"
                                        v-for="software in skill.softwareList"
                                        :key="software.name"
                                      >
                                        <v-card flat color="#D5EEFF" class="pa-0">
                                          <v-card-text>
                                            <v-list-item>
                                              <v-list-item-icon>
                                                <v-img
                                                  width="35"
                                                  :src="getIconSkill(software.icon)"
                                                ></v-img>
                                              </v-list-item-icon>

                                              <v-list-item-content class="ml-n6">
                                                <v-list-item-subtitle>{{software.name}}</v-list-item-subtitle>
                                                <v-list-item-subtitle>
                                                  <v-row no-gutters>
                                                    <v-col cols="12" md="9" sm="9">
                                                      <v-progress-linear
                                                        height="8"
                                                        background-color="#C5C5C5"
                                                        :color="software.color"
                                                        :value="software.value"
                                                      ></v-progress-linear>
                                                    </v-col>
                                                    <v-col
                                                      cols="12"
                                                      md="2"
                                                      sm="2"
                                                      offset="1"
                                                      class="mt-n1 caption"
                                                    >{{software.valueText}}</v-col>
                                                  </v-row>
                                                </v-list-item-subtitle>
                                              </v-list-item-content>
                                            </v-list-item>
                                          </v-card-text>
                                        </v-card>
                                      </v-col>
                                    </v-row>
                                  </v-card-text>
                                </v-card>
                              </v-col>
                              <!-- 1st inner column -->
                            </v-row>
                            <!-- Pagination -->
                            <v-row class="mt-5">
                              <v-col cols="12">
                                <div class="text-center">
                                  <v-btn dark x-small class="mx-8" fab color="#6152CF">
                                    <v-icon disabled>mdi-arrow-left</v-icon>
                                  </v-btn>
                                  <span class="title pagination-text">1/5</span>
                                  <v-btn dark x-small class="mx-8" fab color="#6152CF">
                                    <v-icon>mdi-arrow-right</v-icon>
                                  </v-btn>
                                </div>
                              </v-col>
                            </v-row>
                            <!-- Pagination -->
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                      <!-- inner tab 1st item -->
                    </v-tabs-items>
                    <!-- Inner tab Items -->
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>
            <!-- Tab Item For Skills -->

            <!-- Tab Item For About Me -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10">
                  <v-card-text>
                    <v-row>
                      <!-- About Me Me Name and Designation -->
                      <v-col cols="12" md="6">
                        <v-card color="transparent" flat>
                          <v-card-text>
                            <div class="hello-text">Hello I'm</div>
                            <div class="hello-title">Mickel David</div>
                            <div class="display-2 hello-designation">
                              a
                              <span style="color:#6152CF;">UI&UX</span> Designer
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <!-- ABout Me Name and Designation -->

                      <!-- About Me Picture -->
                      <v-col cols="12" md="5">
                        <v-card flat color="transparent">
                          <v-card-text align="right">
                            <div class="pic-box">
                              <v-img src="../assets/images/about-me/men.png"></v-img>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <!-- About Me Picture -->
                      <!-- About Me Main Text -->
                      <v-col cols="12" md="8" class="about-me-flex">
                        <v-card flat color="transparent">
                          <v-card-title class="display-1">
                            About Me
                            <span style="color:#69C03E;">.</span>
                          </v-card-title>
                          <v-card-text>
                            <v-row>
                              <v-col cols="12" md="1">
                                <v-img
                                  class="about-me-line"
                                  height="2.5"
                                  width="35"
                                  src="../assets/images/about-me/line85.png"
                                ></v-img>
                              </v-col>
                              <v-col cols="12" md="10" class="mt-n7 ml-n7">
                                <v-card flat color="transparent" class="pa-0">
                                  <v-card-text
                                    class="body-1"
                                  >I have a great passion on designing and always love to create a new design. Thus now I am highly skilled, enthusiastic, self- motivated UI & UX Designer able to do any kinds of designing on upwork. Not only that I have worked for other company but I myself have also a website based on web programming and web developing of my own.</v-card-text>
                                  <v-card-actions class="ml-2">
                                    <v-btn
                                      color="#414143"
                                      height="35"
                                      x-small
                                      dark
                                      v-for="media in socialMedia"
                                      :key="media.title"
                                    >
                                      <v-icon small v-text="media.icon"></v-icon>
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <!-- About Me Main Text -->
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>
            <!-- Tab Item for About Me -->

            <!-- Tab item for achievement -->
            <v-tab-item>
              <v-container>
                <v-card flat color="transparent" class="mt-n10">
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="6" sm="6">
                        <v-card flat color="transparent" elevation-12>
                          <v-img src="../assets/images/about-me/certification.png"></v-img>
                        </v-card>
                      </v-col>

                      <v-col cols="12" md="6" sm="6">
                        <div class="flex-column mb-12"></div>
                        <div class="d-flex flex-column">
                          <v-card flat color="transparent">
                            <v-card-title class="mt-md-12">
                              <span class="achievement-title">Hubspot Design Certification</span>
                            </v-card-title>
                            <v-card-subtitle class="achievement-subtitle">HubSpot Design Academy</v-card-subtitle>
                            <v-card-text
                              class="achievement-text caption"
                            >The bearer of this certificate is hereby deemed proficient in crafting responsive, styled templates using HubSpot's design tools. The bearer has demonstrated that he/she can effectively apply template and style knowledge to HubSpot blog, page, landing page and email templates and is approved to sell these assets in the HubSpot Marketplace. Certification is active for 13 months after month issued.</v-card-text>
                          </v-card>
                        </div>
                        <div class="d-flex flex-column mt-10"></div>
                      </v-col>
                    </v-row>
                    <!-- Pagination -->
                    <v-row class="mt-5">
                      <v-col cols="12">
                        <div class="text-center">
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon disabled>mdi-arrow-left</v-icon>
                          </v-btn>
                          <span class="title pagination-text">1/5</span>
                          <v-btn dark x-small class="mx-8" fab color="#6152CF">
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                    <!-- Pagination -->
                  </v-card-text>
                </v-card>
              </v-container>
            </v-tab-item>

            <!-- Tab item for achievement -->
          </v-tabs>
          <!-- Main Tab -->
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-0">
      <!-- Footer Column -->
      <v-col cols="12" md="4" sm="4" class="mb-n0">
        <v-card class="footer-left" flat color="transparent">
          <img src="../assets/images/left.png" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4" sm="4"></v-col>
      <v-col cols="12" md="4" sm="4" align="right">
        <v-card class="footer-right" flat color="transparent">
          <img src="../assets/images/right.png" />
        </v-card>
      </v-col>
      <!-- Footer Column -->
    </v-row>
    <!-- Tab Details Row -->
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
        { title: "Skills", id: 4 },
        { title: "About Me", id: 5 },
        { title: "Achievement", id: 6 }
      ],
      skills: [
        {
          skill: "Programming Languages",
          value: 80,
          id: 1
        },
        { skill: "Framework/Databases", value: 35, id: 2 },
        { skill: "Software", value: 92, id: 3 },
        { skill: "Design Skills", value: 55, id: 4 }
      ],
      skillDetails: [
        {
          title: "Softwares",
          softwareList: [
            {
              name: "Illustrator",
              icon: "illustrator",
              color: "#FF7C00",
              value: "90",
              valueText: "90%"
            },
            {
              name: "Adobe XD",
              icon: "xd",
              color: "#FF21AF",
              value: "70",
              valueText: "70%"
            },
            {
              name: "Photoshop",
              icon: "photoshop",
              color: "#00C8FF",
              value: "95",
              valueText: "95%"
            },
            {
              name: "Premier Pro",
              icon: "premier",
              color: "#E788FF",
              value: "50",
              valueText: "50%"
            }
          ]
        },
        {
          title: "Languages",
          softwareList: [
            {
              name: "HTML",
              icon: "html",
              color: "#E34F26",
              value: "90",
              valueText: "90%"
            },
            {
              name: "CSS",
              icon: "css",
              color: "#264DE4",
              value: "70",
              valueText: "70%"
            },
            {
              name: "Javascript",
              icon: "js",
              color: "#FDD83C",
              value: "95",
              valueText: "95%"
            },
            {
              name: "Magento",
              icon: "magento",
              color: "#EC6737",
              value: "50",
              valueText: "50%"
            }
          ]
        }
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
      ],

      socialMedia: [
        { title: "Behance", icon: "mdi-behance" },
        { title: "Dribbble", icon: "mdi-dribbble" },
        { title: "Instagram", icon: "mdi-instagram" },
        { title: "Behance", icon: "mdi-google-plus" }
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
    },

    //skills icons
    getIconSkill(icon) {
      let image = require.context("../assets/icons/skills", false, /\.png$/);
      return image("./" + icon + ".png");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url(//db.onlinewebfonts.com/c/150037e11f159dca84bc4c04549094b6?family=Averta-Regular);
.pagination-text {
  color: #3d3d3d;
}
.parent-card {
  border-radius: 0px !important;
}
.profile-avatar {
  border-radius: 22px !important;
}

.profile-avatar-img {
  width: 150px !important;
  height: auto !important;
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
  padding: 8px !important;
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
  font-size: 14px !important;
  text-transform: capitalize !important;
}

.skill-child-title {
  font-weight: 500 !important;
}
/* Skills tabs */

/* About Me Tab */
.hello-text {
  color: #373737;
}

.hello-title {
  font-size: 35px;
  font-weight: 400;
  margin-top: 15px;
  color: #373737;
}

.hello-designation {
  font-size: 37px;
  font-weight: 400;
  margin-top: 22px;
  color: #373737;
}

.pic-box {
  width: 75%;
  height: auto;
  border-radius: 15px;
  aspect-ratio: 0.9 !important;
  box-shadow: 48px 56px 0px -8px rgba(97, 82, 207, 1);
}

.about-me-flex {
  margin-top: -200px;
}

/* About Me Tab */

/* Achievement */
.achievement-title {
  font-size: 22px;
  color: #474747 !important;
  font-weight: normal;
}

.achievement-subtitle {
  color: #6152cf !important;
}

.achievement-text {
  color: #808080 !important;
}

/* Achievement */

.v-line {
  position: absolute;
  margin-top: 115px;
  margin-left: 19px;
  height: 112%;
  border: 1px solid #707070;
}

/* Footer Image */
.footer-left {
  margin-top: -90px;
}
.footer-left img {
  width: 60%;
  height: auto;
}

.footer-right {
  margin-top: -215px;
  margin-bottom: 0px;
}

.footer-right img {
  position: sticky;
  width: 70%;
  height: auto;
}
/* Footer Image */

/* Media Query */
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

  .footer-left {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .footer-left img {
    width: 20%;
    height: auto;
  }

  .footer-right {
    margin-top: -130px;
    margin-bottom: -100px;
  }

  .footer-right img {
    width: 30%;
    height: auto;
  }
}
</style>

