<template>
  <v-container fluid ma-0 pa-0>
    <v-row no-gutters>
      <!-- Column for header section -->
      <v-col cols="12">
        <v-card color="#6152CF" class="parent-card" dark flat>
          <v-card-text>
            <v-row class="mt-n5">
              <!-- Column 1 -->
              <v-col cols="12" md="5" sm="8" xs="8">
                <v-card color="transparent" flat class="mx-5">
                  <v-card-text>
                    <v-list-item>
                      <!-- avatar -->
                      <v-list-item-avatar
                        color="grey darken-3"
                        class="profile-avatar"
                        size="150"
                        max-width="150"
                      >
                        <v-img class="elevation-6 avatar-border" src="../assets/images/avatar.png"></v-img>
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
                    <v-btn color="#FF5231" class="chat-btn">
                      TAP TO CHAT
                      <v-img src="../assets/icons/chat.png" class="ml-1"></v-img>
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- Column 1 -->

              <!-- Column 2 -->
              <v-col cols="12" md="6" class="desktop-row ml-10">
                <v-card flat color="transparent">
                  <v-card-text>
                    <v-row no-gutters>
                      <v-col cols="12" md="12">
                        <v-card flat color="transparent">
                          <v-card-text align="center">
                            <v-row align="center">
                              <v-col cols="12" md="3">
                                <div class="interview-text mr-n10">Your Interviews:</div>
                              </v-col>
                              <v-col cols="12" md="2" class="custom-col mx-4">
                                <v-btn large color="#03CA9F" class="btn-voice-call">
                                  <img class="mr-4" src="../assets/icons/phone.png" />Voice Call
                                </v-btn>
                              </v-col>
                              <v-col cols="12" md="4" offset-md="2">
                                <v-btn large color="#2400FF" class="btn-voice-call">
                                  <img src="../assets/icons/camera.png" class="mr-4" />Upload Video
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="12" md="12">
                        <v-card class="card-hire-me" color="#251D44">
                          <v-card-text>
                            <v-row no-gutters align="center">
                              <v-col cols="12" md="3">
                                <v-list disabled color="transparent">
                                  <v-list-item-group color="primary">
                                    <v-list-item>
                                      <v-list-item-icon>
                                        <v-img width="20" src="../assets/icons/hourly-rate.png"></v-img>
                                      </v-list-item-icon>
                                      <v-list-item-content class="ml-n5">
                                        <v-list-item-title>15$</v-list-item-title>
                                        <v-list-item-title>Hourly Rate</v-list-item-title>
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
                                        <v-list-item-title>40</v-list-item-title>
                                        <v-list-item-title>Weekly Availibility</v-list-item-title>
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list-item-group>
                                </v-list>
                              </v-col>

                              <v-col cols="12" md="4" offset-md="1">
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
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Column for header section -->
    </v-row>
  </v-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
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
  font-size: 20px !important;
  color: #ffffff !important;
}

.btn-voice-call {
  font-family: "Open Sans" !important;
  border-radius: 28px !important;
  font-size: 14px !important;
  width: 220px;
  text-transform: capitalize !important;
}

/* hire me card */
.card-hire-me {
  border-radius: 51px !important;
  padding: -50px;
}

.btn-hire-me {
  font-family: "Open Sans" !important;
  font-size: 18px !important;
  text-transform: capitalize !important;
  padding: 30px !important;
  border-radius: 38px !important;
}

.hourly-rate-icon {
  width: 20px;
}
/* hire me card */
@media screen and (max-width: 1200px) {
  .desktop-row {
    display: none;
  }
}
</style>

