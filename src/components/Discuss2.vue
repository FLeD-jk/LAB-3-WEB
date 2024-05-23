<template>
    <div class="container mt-5">
      <h1 class="md-3" style="color: rgb(253, 183, 53)">
        Щомісячні бан-листи [01.03.24]
      </h1>
      <h2 class="text-white-50">7 днів тому</h2>
      <p class="mt-5">
        Щомісячний бан лист:
        <ol>
          <li>NamelessKingXd</li>
          <li>NovichkoviyChel</li>
          <li>Holoret</li>
          <li>AlekkDatt</li>
          <li>SameThug</li>
          <li>St_Asgard</li>
          <li>HollowPurple</li>
          <li>UA_Malina_UA</li>
          <li>DontLetMeDie</li>
          <li>Thetoend</li>
          <li>Googl_Moogl</li>
          <li>Quiizzzmeow</li>
          <li>CJluGa</li>
        </ol>
      </p>
  
      <img
        src="https://i.pinimg.com/564x/9f/b7/3a/9fb73a628e5575be86e1f3828996937a.jpg"
        width="64"
            height="64"
        alt="Зображення"
        class="img-fluid"
        style="border-radius: 10px"
      />
  
      <!-- Секція коментарів -->
      <div class="mt-5">
        <h2 style="color: rgb(253, 183, 53)">Коментарі</h2>
        <div class="media mt-3">
          <img
            src="https://i.pinimg.com/564x/4e/aa/87/4eaa87910feb654895e3827e5319b3c5.jpg"
            width="64"
            height="64"
            class="mr-3"
            alt="Аватар"
          />
          <div class="media-body">
            <h5 class="mt-0">Aboba124</h5>
            Знову роблять вигляд, що працють.
            <div class="media mt-3">
              <img
                src="https://i.pinimg.com/564x/dc/46/40/dc46403064ec076a128234ffdcd916c9.jpg"
                width="64"
            height="64"
                class="mr-3"
                alt="Аватар"
              />
              <div class="media-body">
                <h5 class="mt-0">Biba2_pro</h5>
                STAL-POINT moment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form class="container mt-5">
      <div class="form-group">
        <label for="comment" style="color: rgb(253, 183, 53);">Ваш коментар:</label>
        <textarea class="form-control" id="comment" rows="3" style="border-radius: 1em; background-color:gainsboro"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" style="border-radius: 1em; border-color: rgb(253, 183, 53); background-color: rgb(253, 183, 53); width: 120px; height: 60px; padding: 5px 10px; color: rgb(42, 46, 51);">
          Додати коментар
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: "Discuss2",
  };
  </script>