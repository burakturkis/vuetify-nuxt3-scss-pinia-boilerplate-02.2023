<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="8">
          <v-card-title class="text-center">
            <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>
          </v-card-title>
          
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <!-- Register-only fields -->
              <template v-if="!isLogin">
                <v-text-field
                  v-model="form.username"
                  label="Username"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  class="mb-2"
                />
                
                <v-text-field
                  v-model="form.fullname"
                  label="Full Name"
                  :rules="[rules.required]"
                  prepend-inner-icon="mdi-account-box"
                  variant="outlined"
                  class="mb-2"
                />
              </template>
              
              <!-- Common fields -->
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                :rules="[rules.required, rules.email]"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                class="mb-2"
              />
              
              <v-text-field
                v-model="form.password"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required, rules.minLength]"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                class="mb-4"
              />
              
              <v-btn
                type="submit"
                color="primary"
                block
                size="large"
                :loading="loading"
                :disabled="!isFormValid"
              >
                {{ isLogin ? 'Login' : 'Register' }}
              </v-btn>
            </v-form>
            
            <!-- Error message -->
            <v-alert
              v-if="error"
              type="error"
              class="mt-4"
              dismissible
              @click:close="error = ''"
            >
              {{ error }}
            </v-alert>
            
            <!-- Success message -->
            <v-alert
              v-if="success"
              type="success"
              class="mt-4"
              dismissible
              @click:close="success = ''"
            >
              {{ success }}
            </v-alert>
          </v-card-text>
          
          <v-card-actions class="justify-center pb-4">
            <v-btn
              variant="text"
              @click="toggleMode"
            >
              {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Authentication",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Login or Register to access your account",
    },
  ],
});

const { login, register } = useAuth()

const isLogin = ref(true)
const loading = ref(false)
const showPassword = ref(false)
const error = ref('')
const success = ref('')

const form = reactive({
  email: '',
  password: '',
  username: '',
  fullname: ''
})

const rules = {
  required: (value: string) => !!value || 'This field is required',
  email: (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Please enter a valid email address'
  },
  minLength: (value: string) => value.length >= 6 || 'Password must be at least 6 characters'
}

const isFormValid = computed(() => {
  if (isLogin.value) {
    return form.email && form.password && form.password.length >= 6
  }
  return form.email && form.password && form.username && form.fullname && form.password.length >= 6
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
  error.value = ''
  success.value = ''
  // Clear form when switching modes
  if (isLogin.value) {
    form.username = ''
    form.fullname = ''
  }
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  success.value = ''
  
  try {
    let result
    
    if (isLogin.value) {
      result = await login({
        email: form.email,
        password: form.password
      })
    } else {
      result = await register({
        email: form.email,
        password: form.password,
        username: form.username,
        fullname: form.fullname
      })
    }
    
    if (result.success) {
      success.value = `${isLogin.value ? 'Login' : 'Registration'} successful! Redirecting...`
      // Redirect will happen automatically via middleware
      setTimeout(() => {
        navigateTo('/')
      }, 1000)
    } else {
      error.value = result.error || `${isLogin.value ? 'Login' : 'Registration'} failed`
    }
  } catch (err: any) {
    error.value = err.message || `${isLogin.value ? 'Login' : 'Registration'} failed`
  } finally {
    loading.value = false
  }
}
</script>
