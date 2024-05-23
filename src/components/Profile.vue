<template>
  <div>
    <div
      class="container mt-4"
      style="background-color: rgb(50, 53, 58); border-radius: 2em; height: 200px"
    >
      <div class="row align-items-center">
        <div class="col-md-2 text-center">
          <img
            src="https://i.pinimg.com/564x/6e/31/01/6e310128e60356943de190687a0729d0.jpg"
            class="img-fluid rounded-circle mb-3"
            alt="Аватар"
            style="width: 200px; height: 200px"
          />
        </div>
        <div class="col-md-8">
          <h1 id="login" style="color: azure">{{ profile.name }}</h1>
          <p id="dob" style="color: azure">День народження: {{ profile.dob }}</p>
        </div>

        <div class="col-md-2 text-right">
          <span class="badge badge-success">
            <i class="fas fa-user" style="color: green"></i>
            Онлайн
          </span>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="container mt-2">
        <div class="row justify-content-center gap-4">
          <!-- Панель піднавігації -->
          <div class="list-group list-group-flush col-md-2" style="height: 300px">
            <a
              class="profile list-group-item list-group-item-action"
              style="color: white"
              aria-current="true"
              >Повідомлення</a
            >
            <a class="profile list-group-item list-group-item-action" style="color: white"
              >Дискусії</a
            >
            <a class="profile list-group-item list-group-item-action" style="color: white"
              >Налаштування</a
            >
          </div>
          <div class="list-group list-group-flush col">
            <a
              class="profile list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              style="color: white; height: 100px"
              aria-current="true"
            >
              <span style="font-size: 20px"
                >Баг в селищі новачків: Коли пофіксять бочку в С.Н.? Неможливо робити квести.</span
              >
              <i class="bi bi-trash"></i>
            </a>

            <a
              class="profile list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              style="color: white; height: 100px"
              aria-current="true"
            >
              <span style="font-size: 20px">[PENDING] Коли введуть бан чату на 2 тижні?</span>
              <i class="bi bi-trash"></i>
            </a>
            <a
              class="profile list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              style="color: white; height: 100px"
              aria-current="true"
            >
              <span style="font-size: 20px">[CLOSED] Компенсація на ребалансі заточки.</span>
              <i class="bi bi-trash"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Navbar from './Navbar.vue';

export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        name: '',
        dob: ''
      }
    }
  },
  mounted() {
    const currentAccount = JSON.parse(localStorage.getItem('currentAccount'))
    if (currentAccount) {
      this.profile.name = currentAccount.name
      this.profile.dob = currentAccount.dob
    } else {
      console.log('Дані про аккаунт не знайдені в LocalStorage')
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
