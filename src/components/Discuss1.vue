<template>
  <div class="container mt-5">
    <h1 class="md-3" style="color: rgb(253, 183, 53)">Компенсація</h1>
    <h2 class="text-white-50">18 годин тому</h2>
    <div class="mt-5">
      <p>Компенсація заточування несправедлива і зламана.</p>
      <p>Наведу простий приклад для розуміння.</p>
      <p>
        Припустимо Ви раніше заточили шмотку до, наприклад, +10 і у вас виходить ось така кількість
        спроб:
      </p>

      <ul>
        <li>1 lvl - 1 спроба (зараз макс 1 спроба)</li>
        <li>2 lvl - 1 спроба (зараз макс 2 спроби)</li>
        <li>3 lvl - 3 спроби (зараз макс 3 спроби)</li>
        <li>4 lvl - 5 спроб (зараз макс 4 спроби)</li>
        <li>5 lvl - 4 спроби (зараз макс 5 спроб)</li>
        <li>6 lvl - 9 спроб (зараз макс 10 спроб)</li>
        <li>7 lvl - 19 спроб (зараз макс 15 спроб)</li>
        <li>8 lvl - 18 спроб (зараз макс 20 спроб)</li>
        <li>9 lvl - 11 спроб (зараз макс 25 спроб)</li>
        <li>10 lvl - 36 спроб (зараз макс 30 спроб)</li>
      </ul>

      <p><strong>ЯК МАЄ ПРАЦЮВАТИ</strong></p>
      <p>
        Алгоритм має проходитися по кожному рівню окремо, перевіряючи, чи не перевищує ваша
        кількість траїв кількість максимальних траїв. Тобто в цьому випадку алгоритм повернув би вам
        1 запаску за 4 рівень, 4 запаски за 7 рівень і 6 запасок за 10 рівень.
      </p>

      <p><strong>ЯК ПРАЦЮЄ ЗАРАЗ</strong></p>
      <p>
        Алгоритм перемішує всі ваші траї і вирівнює загальну кількість, тобто в цьому випадку, де
        вам, як годиться, належало б 11 запасок, алгоритм би сказав вам, що ви зробили 107 спроб за
        максимального обмеження в 115 спроб і вам загалом нічого не належить.
      </p>

      <p>
        Це математично неправильно, оскільки в разі перемішування всіх рівнів, ви закриваєте одне
        невезіння іншим везінням, хоча весь сенс гарантів - це уникнути сильного невезіння в
        конкретному взятому кейсі. На додачу до цього всього варто додати, що якщо ви точили рік+
        тому, то отримати компенсацію для вас околонереально.
      </p>

      <p>
        Як приклад можу навести себе, який вкинув у ССР величезну кількість запасок (близько 200) з
        13 до 15 (до 13 я його заточив ще до перебудови).
      </p>

      <p>
        Гра весело відрапортувала, що компенсація мені не передбачена, оскільки я зробив лише сотню
        з чимось спроб, за необхідних 370, хоча я де-факто точив два рівні.
      </p>

      <p>
        Я вимагаю переробки компенсації за заточку, вона видана несправедливо і не повертає гравцям
        ту кількість ресурсів, яку вони повинні отримати через зміни в механіці.
      </p>
    </div>
  </div>

  <!-- Секція коментарів -->
  <div class="container mt-5">
    <h2 style="color: rgb(253, 183, 53)">Коментарі</h2>
    <div class="media mt-3">
      <img
        src="https://i.pinimg.com/564x/d0/1e/a6/d01ea6c4de56b6e4dedca7a99b81a50c.jpg"
        width="64"
        height="64"
        class="mr-3"
        alt="Аватар"
      />
      <div class="media-body">
        <h5 class="mt-0">Flex>Monker</h5>
        Зараз би скиглити, що пушки не точяться.
        <div class="media mt-3">
          <img
            src="https://i.pinimg.com/736x/9b/e0/a9/9be0a9849de05d1ca85ec0a39de46d29.jpg"
            width="64"
            height="64"
            class="mr-3"
            alt="Аватар"
          />
          <div class="media-body">
            <h5 class="mt-0">gli_pro</h5>
            Зараз би точиться по гаранту...
            <div class="media mt-3">
              <img
                src="https://i.pinimg.com/736x/40/75/46/4075463c42fcce14ede9869582a7917d.jpg"
                width="64"
                height="64"
                class="mr-3"
                alt="Аватар"
              />
              <div class="media-body">
                <h5 class="mt-0">Hamster_young_boy</h5>
                Зараз би на форумі скиглити.
              </div>
            </div>
          </div>
        </div>
        <div class="media mt-3">
          <img
            src="https://i.pinimg.com/564x/22/15/05/22150529e42d9f879003ce81521d678f.jpg"
            width="64"
            height="64"
            class="mr-3"
            alt="Аватар"
          />
          <div class="media-body">
            <h5 class="mt-0">Traider</h5>
            ....
          </div>
        </div>
      </div>
    </div>

    <div class="media mt-3">
      <img
        src="https://i.pinimg.com/564x/35/c0/56/35c0561589a2042c01dae6ab28b36b9e.jpg"
        width="64"
        height="64"
        class="mr-3"
        alt="Аватар"
      />
      <div class="media-body">
        <h5 class="mt-0">Lvivianin</h5>
        Я Микола Парасюк, зі Львова, я витратив 1к запасок на 3 лвл на +13.
      </div>
    </div>
  </div>

  <form class="container mt-5">
    <div class="form-group">
      <label for="comment" style="color: rgb(253, 183, 53)">Ваш коментар:</label>
      <textarea
        class="form-control"
        id="comment"
        rows="3"
        style="border-radius: 1em; background-color: azure"
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
</template>

<script>
export default {
  name: 'Discuss1'
}
</script>
