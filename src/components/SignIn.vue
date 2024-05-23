<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center mb-4" style="color: rgb(253, 183, 53)">Вхід</h2>
          <form @submit.prevent="submitForm">
            <div class="form-sign-group mb-4">
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Введіть електронну адресу"
                required
              />
              <p style="font-size: 15px; margin-top: 10px; color: rgb(94, 99, 105)">
                Ми передамо вашу електронну адресу усім кому тільки зможемо.
              </p>
            </div>

            <div class="form-sign-group mb-2">
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Введіть ваш пароль"
                required
              />
              <p style="font-size: 15px; margin-top: 10px; color: rgb(94, 99, 105)">
                Пароль також.
              </p>
            </div>

            <div class="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                class="btn btn-primary"
                style="
                  border-radius: 10px;
                  border-color: rgb(253, 183, 53);
                  background-color: rgb(253, 183, 53);
                  width: 120px;
                  height: 40px;
                  padding: 5px 10px;
                  color: rgb(42, 46, 51);
                "
              >
                Підтвердити
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const userData = {
        email: this.email,
        password: this.password
      }

      if (this.authenticateUser(userData)) {
        this.$router.push('/profile')
      }
    },
    authenticateUser(userData) {
      const { email, password } = userData
      const accounts = JSON.parse(localStorage.getItem('accounts')) || []

      const user = accounts.find(
        (account) => account.email === email && account.password === password
      )

      if (!user) {
        alert('Невірний логін або пароль!')
        return false
      }

      this.setCurrentAccount(user)
      return true
    },
    setCurrentAccount(account) {
      localStorage.setItem('currentAccount', JSON.stringify(account))
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
