<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/" style="font-size: 24px; color: rgb(253, 183, 53)">
        <div class="logo-container">
          <img :src="logo" alt="Logo" style="height: 24px; margin-right: 10px" />
          STAL-POINT
        </div>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="in-up" class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="isActive" class="nav-item" id="profile">
            <router-link class="nav-link" to="/profile">Профіль користувача</router-link>
          </li>
          <li v-if="isActive" class="nav-item" id="exit">
            <a class="nav-link" href="#" @click.prevent="logout">Вихід з профілю</a>
          </li>
          <li v-if="!isActive" class="nav-item" id="sign-in">
            <router-link class="nav-link" to="/sign-in">Вхід</router-link>
          </li>
          <li v-if="!isActive" class="nav-item" id="sign-up">
            <router-link class="nav-link" to="/sign-up">Реєстрація</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Про Нас</router-link>
          </li>
        </ul>
        <form class="d-flex px-2">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Пошук"
            aria-label="Search"
            style="background-color: gainsboro"
          />
          <button class="btn btn-outline-warning" type="submit">Пошук</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
import logo from '../assets/logo.svg'

export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false,
      logo: logo
    }
  },
  mounted() {
    this.checkActiveState()
  },
  watch: {
    $route(to, from) {
      this.checkActiveState()
    }
  },
  methods: {
    checkActiveState() {
      const currentAccount = JSON.parse(localStorage.getItem('currentAccount'))
      this.isActive = !!currentAccount
    },
    logout() {
      this.isActive = false
      localStorage.removeItem('currentAccount')
      this.$router.push('/sign-in')
    }
  }
}
</script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
