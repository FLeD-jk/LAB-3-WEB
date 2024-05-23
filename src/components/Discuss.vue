<template>
  <div>
    <div class="container mt-5" id="discussion">
      <h1 id="topic-discuss" class="md-3" style="color: rgb(253, 183, 53)">
        {{ title }}
      </h1>
      <h2 id="time-discuss" class="text-white-50">{{ time }}</h2>
      <div id="content-discussion" class="container mt-5">
        {{ content }}
      </div>

      <!-- Секція коментарів -->
      <div class="mt-5">
        <h2 style="color: rgb(253, 183, 53)">Коментарі</h2>
        <div class="media mt-3">
          <img
            src="https://i.pinimg.com/564x/2a/ff/b4/2affb4335ff7c8da21f76f9a179a135a.jpg"
            width="64"
            height="64"
            class="mr-3"
            alt="Аватар"
          />
          <div class="media-body">
            <h5 class="mt-0">Aboba124</h5>
            Знову роблять вигляд, що працють.
            <a class="text-muted" href="#">Відповісти</a>
            <div class="media mt-3">
              <img
                src="https://i.pinimg.com/236x/71/cb/a5/71cba53eb4cf1281a18f65afbcd1730f.jpg"
                class="mr-3"
                alt="Аватар"
                width="64"
                height="64"
              />
              <div class="media-body">
                <h5 class="mt-0">Biba2_pro</h5>
                STAL-POINT moment
                <a class="text-muted" href="#">Відповісти</a>
              </div>
            </div>
          </div>
        </div>

        <div v-for="comment in comments" :key="comment.timestamp" class="media mt-3">
          <img
            src="https://i.pinimg.com/564x/2a/ff/b4/2affb4335ff7c8da21f76f9a179a135a.jpg"
            width="64"
            height="64"
            class="mr-3"
            alt="Аватар"
          />
          <div class="media-body">
            <h5 class="mt-0">{{ comment.username }}</h5>
            {{ comment.text }}
            <a class="text-muted" href="#">Відповісти</a>
          </div>
        </div>
      </div>
    </div>

    <form class="container mt-5" @submit.prevent="addComment">
      <div class="form-group">
        <label for="comment" style="color: rgb(253, 183, 53)">Ваш коментар:</label>
        <textarea
          class="form-control"
          id="comment"
          rows="3"
          v-model="newComment"
          style="border-radius: 1em; background-color: gainsboro"
        ></textarea>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        style="
          border-radius: 1em;
          border-color: rgb(253, 183, 53);
          background-color: rgb(253, 183, 53);
          width: 120px;
          height: 60px;
          padding: 5px 10px;
          color: rgb(42, 46, 51);
        "
      >
        Додати коментар
      </button>
    </form>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Discuss',
  components: {
    Navbar
  },
  data() {
    return {
      title: '',
      time: '',
      content: '',
      newComment: '',
      comments: []
    }
  },
  mounted() {
    this.fetchDiscussionData()
    this.loadComments()
  },
  methods: {
    fetchDiscussionData() {
      const urlParams = new URLSearchParams(window.location.search)
      this.title = urlParams.get('title')
      this.time = urlParams.get('time')
      this.content = urlParams.get('content')
    },
    loadComments() {
      this.comments = JSON.parse(localStorage.getItem('comments')) || []
    },
    addComment() {
      const currentAccount = JSON.parse(localStorage.getItem('currentAccount'))
      const username = currentAccount ? currentAccount.name : 'Anonymous'
      const newComment = {
        username: username,
        text: this.newComment,
        timestamp: new Date().toLocaleString()
      }
      this.comments.push(newComment)
      localStorage.setItem('comments', JSON.stringify(this.comments))
      this.newComment = ''
    }
  }
}
</script>

<style scoped>
/* Add any necessary styles here */
</style>
