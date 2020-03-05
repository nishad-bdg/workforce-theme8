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
                      <v-list-item-avatar color="grey darken-3" class="profile-avatar" size="180" max-width="120">
                        <v-img
                          class="elevation-6 avatar-border"
                          src="../assets/images/avatar.png"
                        ></v-img>
                      </v-list-item-avatar>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <!-- Column 1 -->

              <!-- Column 2 -->
              <v-col cols="12" md="6">
                Column2
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
  .profile-avatar{
    border-radius: 22px !important;
  }
</style>