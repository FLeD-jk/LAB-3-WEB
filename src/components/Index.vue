<template>
  <div class="container mt-3 p-auto">
    <div class="row justify-content-center gap-4">
      <!-- Панель піднавігації -->
      <div class="col-md-2">
        <div class="list-group list-group-flush gap-3 text-align-center text-align-left">
          <a
            href="#"
            class="btn-all-categories list-group-item list-group-item-action"
            style="
              border-radius: 10px;
              border-color: rgb(253, 183, 53);
              background-color: rgb(253, 183, 53);
            "
            >Всі</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action tag-filter"
            data-tag="Новини"
            style="
              border-radius: 10px;
              border-color: rgb(41, 111, 196);
              background-color: rgb(41, 111, 196);
            "
          >
            <i class="bi bi-newspaper"></i> Новини
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action tag-filter"
            data-tag="Правила"
            style="
              border-radius: 10px;
              border-color: rgb(255, 99, 71);
              background-color: rgb(255, 99, 71);
            "
            ><i class="bi bi-journal-bookmark-fill"></i> Правила
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action tag-filter"
            data-tag="F.A.Q."
            style="
              border-radius: 10px;
              border-color: rgb(154, 205, 50);
              background-color: rgb(154, 205, 50);
            "
            ><i class="bi bi-question-circle"></i> F.A.Q.</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action tag-filter"
            data-tag="Торгівля"
            style="
              border-radius: 10px;
              border-color: rgb(255, 215, 0);
              background-color: rgb(255, 215, 0);
            "
          >
            <i class="bi bi-coin"></i> Торгівля
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action tag-filter"
            data-tag="Обговорення"
            style="
              border-radius: 10px;
              border-color: rgb(153, 50, 204);
              background-color: rgb(153, 50, 204);
            "
            ><i class="bi bi-chat-dots-fill"></i> Обговорення
          </a>
        </div>
      </div>

      <!-- Панель з обговореннями -->
      <div class="Tred-container col-md-8 mt-3 p-auto">
        <div style="display: flex; justify-content: space-between">
          <button
            href="#"
            class="btn-add-post p-auto align-self-start"
            style="
              border-radius: 10px;
              border-color: rgb(253, 183, 53);
              background-color: rgb(253, 183, 53);
              width: 120px;
              height: 40px;
              padding: 5px 4px;
              color: rgb(42, 46, 51);
            "
            data-bs-toggle="modal"
            data-bs-target="#add_post_modal"
          >
            Додати пост
          </button>

          <div class="dropdown">
            <select
              class="list-group-item"
              style="
                border-radius: 10px;
                height: 40px;
                padding: 5px 10px;
                background-color: rgb(253, 183, 53);
                border-color: rgb(253, 183, 53);
                color: rgb(42, 46, 51);
              "
            >
              <option value="rating">За рейтингом</option>
              <option value="time">За часом</option>
              <option value="update">За оновленням</option>
            </select>
          </div>
        </div>

        <router-link
          class="Card-discuss card border-0"
          :to="{ name: 'Discuss1' }"
          style="text-decoration: none"
        >
          <div class="card-header border-0">Компенсація</div>
          <div class="card-body d-flex justify-content-between">
            <div>
              <h5 class="card-title">
                Компенсація заточування несправедлива і зламана. Наведу простий приклад для
                розуміння.
              </h5>
              <p class="card-text">18 годин тому</p>
            </div>
            <span
              class="tag align-self-start"
              style="background-color: rgb(153, 50, 204); font-size: 15px; color: rgb(42, 46, 51)"
              >Обговорення</span
            >
          </div>
        </router-link>

        <router-link
          class="Card-discuss card border-0"
          :to="{ name: 'Discuss2' }"
          style="text-decoration: none"
        >
          <div class="card-header border-0">Щомісячні бан-листи [01.03.24]</div>
          <div class="card-body d-flex justify-content-between">
            <div>
              <h5 class="card-title">
                Щомісячний бан лист: NamelessKingXd NovichkoviyChel Holorez AlekkDatt SameThug
                St_Asgard HollowPurple UA_Malina_UA DontLetMeDie Thetoend Googl_Moogl Quiizzzmeow
                CJluGa.
              </h5>
              <p class="card-text">7 днів тому</p>
            </div>
            <span
              class="tag align-self-start"
              style="background-color: rgb(41, 111, 196); font-size: 15px; color: rgb(42, 46, 51)"
              >Новини</span
            >
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="modal" id="add_post_modal">
    <div class="modal-dialog">
      <div class="modal-content" style="background-color: rgb(42, 46, 51)">
        <div class="modal-header">
          <h5 class="modal-title" id="add_todo_item_modal_label" style="color: rgb(253, 183, 53)">
            Додайте пост
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="/">
            <div class="mb-3">
              <label for="add_title_post" class="form_label" style="color: rgb(253, 183, 53)"
                >Заголовок</label
              >
              <textarea
                class="form-control mt-3"
                required
                id="add_title_post"
                rows="1"
                style="background-color: gainsboro"
                placeholder="Enter title..."
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="todo-text-input" class="form-label" style="color: rgb(253, 183, 53)"
                >Текст</label
              >
              <textarea
                class="form-control"
                required
                id="todo-text-input"
                rows="3"
                style="background-color: gainsboro"
                placeholder="Start typing..."
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="tags" class="form-label" style="color: rgb(253, 183, 53)">Мітки</label>
              <div id="tags">
                <button
                  class="tag align-self-start mt-3 tag-checkbox"
                  type="button"
                  data-tag="Обговорення"
                  style="
                    background-color: rgb(153, 50, 204);
                    font-size: 15px;
                    border-color: rgb(153, 50, 204);
                  "
                >
                  Обговорення
                </button>
                <button
                  class="tag align-self-start mt-3 tag-checkbox"
                  type="button"
                  data-tag="F.A.Q."
                  style="
                    background-color: rgb(154, 205, 50);
                    font-size: 15px;
                    border-color: rgb(154, 205, 50);
                  "
                >
                  F.A.Q.
                </button>
                <button
                  class="tag align-self-start mt-3 tag-checkbox"
                  type="button"
                  data-tag="Торгівля"
                  style="
                    background-color: rgb(255, 215, 0);
                    font-size: 15px;
                    border-color: rgb(255, 215, 0);
                  "
                >
                  Торгівля
                </button>
                <button
                  class="tag align-self-start mt-3 tag-checkbox"
                  type="button"
                  data-tag="Новини"
                  style="
                    background-color: rgb(41, 111, 196);
                    font-size: 15px;
                    border-color: rgb(41, 111, 196);
                  "
                >
                  Новини
                </button>
                <button
                  class="tag align-self-start mt-3 tag-checkbox"
                  type="button"
                  data-tag="Правила"
                  style="
                    background-color: rgb(255, 99, 71);
                    font-size: 15px;
                    border-color: rgb(255, 99, 71);
                  "
                >
                  Правила
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-dark"
            data-bs-dismiss="modal"
            style="color: rgb(253, 183, 53)"
          >
            Скасувати
          </button>
          <button type="button" class="btn btn-primary btn-dark" style="color: rgb(253, 183, 53)">
            Підтвердити
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostModel from '../js/model/model_index.js'
import PostView from '../js/view/view_index.js'
import PostController from '../js/controller/controller_index.js'

export default {
  name: 'Index',
  data() {
    return {
      model: null,
      view: null,
      controller: null
    }
  },
  mounted() {
    this.model = new PostModel()
    this.view = new PostView()
    this.controller = new PostController(this.model, this.view)
  }
}
</script>

<style scoped>
/* Your styles specific to Index.vue */
</style>
