<template>
  <v-container fluid ma-0 pa-0>
    <v-row no-gutters>
      <!-- Column for header section -->
      <v-col cols="12">
        <v-card color="#6152CF" style="border-radius:0px;" dark flat>
          <v-card-text>
            <v-row class="mt-n5">
              <!-- Column 1 -->
              <v-col cols="12" md="6">
                <v-card color="transparent" flat>
                  <v-card-text>
                    <v-list-item>
                      <!-- avatar -->
                      <v-list-item-avatar
                        color="grey darken-3"
                        class="profile-avatar"
                        size="215"
                        max-width="215"
                      >
                        <v-img class="elevation-6 avatar-border" src="../assets/images/avatar.png"></v-img>
                      </v-list-item-avatar>
                      <!-- Avatar -->
                      <!-- Name -->
                      <v-list-item-content>
                        <v-list-item-title class="headline ml-4" >
                          <span class="profile-title">Olivia Emily</span>
                        </v-list-item-title>
                        <v-list-item-subtitle class="ml-4">
                          <span class="profile-subtitle">UX/UI Designer</span>
                        </v-list-item-subtitle>
                        
                        <v-list-item-icon class="">
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
                    <v-btn color="#FF5231" class="chat-btn">TAP TO CHAT
                      <v-img src="../assets/icons/chat.png" class="ml-2"></v-img>
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- Column 1 -->

              <!-- Column 2 -->
              <v-col cols="12" md="6">Column2</v-col>
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
  font-family: 'Open Sans' !important;
  font-size: 40px !important;
}

.profile-subtitle {
  font-family: 'Open Sans' !important;
  font-size: 18px !important;
  padding: 5px;
  color: #ffffff !important;
}

.chat-btn{
  font-family:'Open Sans' !important;
  font-size: 15px !important;
  font-weight: bold !important;
  border-radius: 23px !important;
  padding: 25px !important;
  margin-top: -50px;
  margin-left: 26px;
}
</style>

