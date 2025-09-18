<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <h1>Welcome to the Home Page!</h1>
          </v-card-title>
          
          <v-card-text>
            <div v-if="user">
              <h3>Hello, {{ user.fullname || user.username }}!</h3>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Username:</strong> {{ user.username }}</p>
              <p><strong>User ID:</strong> {{ user.id }}</p>
            </div>
            
            <div v-else>
              <p>Loading user information...</p>
            </div>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              color="error"
              variant="outlined"
              @click="handleLogout"
            >
              <v-icon start>mdi-logout</v-icon>
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
useHead({
  title: "Home Page",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Home Page - Welcome to your dashboard",
    },
  ],
});

const { user, logout } = useAuth()

const handleLogout = async () => {
  logout()
  await navigateTo('/auth')
}
</script>
