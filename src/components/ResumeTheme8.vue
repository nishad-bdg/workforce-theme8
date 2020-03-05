<template>
  <v-container fluid ma-0 pa-0>
    <v-row no-gutters>
      <!-- Column for header section -->
      <v-col cols="12">
        <v-card color="#6152CF" style="border-radius:0px;" dark flat>
          <v-card-text>
            <v-row class="mt-n5">
              <!-- Column 1 -->
              <v-col cols="12" md="5">
                <v-card color="transparent" flat>
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

                        <v-list-item-icon class>
                          <v-btn icon class="mr-3">
                            <v-img src="../assets/icons/behance.png"></v-img>
                          </v-btn>
                          <v-btn icon class="mr-3">
                            <v-img src="../assets/icons/instagram.png"></v-img>
                          </v-btn>
                          <v-btn icon class="mr-3">
                            <v-img src="../assets/icons/dribble.png"></v-img>
                          </v-btn>
                          <v-btn icon class="mr-3">
                            <v-img src="../assets/icons/google.png"></v-img>
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
              <v-col cols="12" md="7" class="desktop-row">
                <v-row>
                  <v-col cols="12" md="12">
                    <v-card flat color="transparent">
                      <v-card-text align="center">
                        <v-row align="center">
                          <v-col cols="12" md="3" offset-md="1">
                            <div class="interview-text mr-n10">Your Interviews:</div>
                          </v-col>
                          <v-col cols="12" md="3" class="mr-10 custom-col"> 
                            <v-btn x-large color="#03CA9F" class="btn-voice-call">
                              <img width="16.35" height="16.35" src="../assets/icons/phone.png" class="mr-4"/>Voice Call
                            </v-btn>
                          </v-col>
                          <v-col cols="12" md="3">
                            <v-btn x-large color="#2400FF" class="btn-voice-call pa-0" >
                              <img width="28.36" height="16.35" src="../assets/icons/camera.png" class="mr-4"/>Upload Video
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="12">2</v-col>
                </v-row>
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

.interview-text {
  font-family: "Open Sans" !important;
  font-size: 20px !important;
  color: #ffffff !important;
}

.btn-voice-call {
  font-family: "Open Sans" !important;
  border-radius: 28px !important;
  font-size: 14px !important;
  width: 200px;
  text-transform: capitalize !important;
}

@media screen and (max-width: 1250px) {
    .custom-col{
      margin-left: 15px !important;
    }
}

</style>

