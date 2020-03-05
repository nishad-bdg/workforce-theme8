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
                    <v-list-item three-line>
                      <!-- avatar -->
                      <v-list-item-avatar
                        color="grey darken-3"
                        class="profile-avatar"
                        size="180"
                        max-width="180"
                      >
                        <v-img class="elevation-6 avatar-border" src="../assets/images/avatar.png"></v-img>
                      </v-list-item-avatar>
                      <!-- Avatar -->
                      <!-- Name -->
                      <v-list color="transparent" class="ml-n5" disabled>
                        <!-- Group Name -->
                        <v-list-item-group>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title class="headline">
                                <span class="profile-title">Olivia Emily</span>
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                        <!-- Group Name -->
                        <!-- Group Designation-->
                        <v-list-item-group class="mt-n6">
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle class="profile-subtitle">UI/UX Designer</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                        <!-- Group Desigantion -->
                        <!-- Social Icons -->
                        <v-list-item-group>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>
                                <v-row no-gutters>
                                  <v-col cols="12" md="3">
                                    <v-btn icon>
                                      <v-img src="../assets/icons/behance.png"></v-img>
                                    </v-btn>
                                  </v-col>

                                  <v-col cols="12" md="3">
                                    <v-btn icon>
                                      <v-img src="../assets/icons/dribble.png"></v-img>
                                    </v-btn>
                                  </v-col>

                                  <v-col cols="12" md="3">
                                    <v-btn icon>
                                      <v-img src="../assets/icons/instagram.png"></v-img>
                                    </v-btn>
                                  </v-col>

                                  <v-col cols="12" md="3">
                                    <v-btn icon>
                                      <v-img src="../assets/icons/google.png"></v-img>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                        <!-- Social Icons -->
                      </v-list>

                      <!-- Name -->
                    </v-list-item>
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
  font-family: Open Sans !important;
  font-size: 40px !important;
}

.profile-subtitle {
  font-family: Open Sans !important;
  font-size: 18px !important;
  padding: 5px;
  color: #ffffff !important;
}
</style>