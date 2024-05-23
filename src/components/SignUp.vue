<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center mb-4" style="color: rgb(253, 183, 53)">Реєстрація</h2>
          <form @submit.prevent="submitForm">
            <div class="form-sign-group mb-4">
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Введіть ваше ім'я"
                required
              />
            </div>

            <div class="form-sign-group mb-4">
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Введіть ваш пароль"
                required
              />
            </div>

            <div class="form-sign-group mb-4">
              <input
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Введіть ваш email"
                required
              />
            </div>

            <div class="form-sign-group mb-4">
              <input type="date" class="form-control" v-model="dob" required />
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
  name: 'SignUp',
  data() {
    return {
      name: '',
      password: '',
      email: '',
      dob: ''
    }
  },
  methods: {
    submitForm() {
      const userData = {
        name: this.name,
        password: this.password,
        email: this.email,
        dob: this.dob
      }

      if (this.validateUserData(userData) && this.checkExistingAccount(userData)) {
        this.saveUserData(userData)
        this.setCurrentAccount(userData)
        this.$router.push('/profile')
      }
    },
    validateUserData(userData) {
      const { name, password, email, dob } = userData

      if (name.length < 4 || password.length < 4) {
        alert('Логін та пароль мають містити щонайменше 4 символи!')
        return false
      }

      if (!this.isValidEmail(email)) {
        alert('Будь ласка, введіть правильну електронну скриньку!')
        return false
      }

      if (!dob) {
        alert('Будь ласка, введіть дату народження!')
        return false
      }

      const today = new Date().toISOString().split('T')[0]
      if (dob > today) {
        alert('Введіть коректну дату народження, яка не перевищує поточну дату!')
        return false
      }

      return true
    },
    isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailPattern.test(email)
    },
    checkExistingAccount(userData) {
      const { email, name } = userData
      const accounts = JSON.parse(localStorage.getItem('accounts')) || []

      const existingAccount = accounts.find(
        (account) => account.email === email || account.name === name
      )

      if (existingAccount) {
        alert('Обліковий запис з такою електронною адресою або іменем користувача вже існує!')
        return false
      }

      return true
    },
    saveUserData(userData) {
      const accounts = JSON.parse(localStorage.getItem('accounts')) || []
      accounts.push(userData)
      localStorage.setItem('accounts', JSON.stringify(accounts))
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
