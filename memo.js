// 生ま：date1
// 現在：date2
// 死ぬ：date3
// time1：date2-date1
// time2：date3-date2

// 送信ボタンをクリックしたあとの動作
if (localStorage.getItem('date1') || localStorage.getItem('date3')) { // 値が保存されていれば
  let date1 = localStorage.getItem('date1'); // データ取得
  let date3 = localStorage.getItem('date3'); // データ取得
  console.log(date3)
  date1 = parseInt(date1);
  date3 = parseInt(date3);

  $(function () {
    // 誕生日を取得
    // 1970年からの経過時間を1000でわる、小数点以下を綺麗に
    // // 現在時間の取得　const life=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    let now = Date.now() //今の時間
    date2 = Math.floor(now / 1000);
    // 死ぬ予定日を入力
    // 1970年からの経過時間を1000でわる、小数点以下を綺麗に
    setInterval("countDown()", 1000);
  })

  function countDown() {
    // 現在時間の取得　const life=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    let now = Date.now() //今の時間
    date2 = Math.floor(now / 1000);
    let time1 = date2 - date1;
    document.getElementById("life").textContent = String(time1)

    // 現在－生年月日で何秒間生きたか
    let time2 = date3 - date2;
    document.getElementById("limit").textContent = String(time2)
    $('#limit').prepend('<p class="add">Future</p>');
    $('#life').prepend('<p class="add">Past</p>');
  }
} else {
  $('#submit').on('click', function () {
    // 誕生日を取得
    let birthday = document.getElementById("birthday_input").value;
    // 1970年からの経過時間を1000でわる、小数点以下を綺麗に
    date1 = Math.floor(Date.parse(birthday) / 1000);
    // // 現在時間の取得　const life=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    let now = Date.now() //今の時間
    date2 = Math.floor(now / 1000);

    // 死ぬ予定日を入力
    let limitday = document.getElementById("limit_input").value;
    // 1970年からの経過時間を1000でわる、小数点以下を綺麗に
    date3 = Math.floor(Date.parse(limitday) / 1000);
    setInterval("countDown()", 1000);
  });

  // カウントダウンの関数
  function countDown() {
    // 現在時間の取得　const life=Math.floor(differ/1000)%60;//ミリ秒を秒に直してから
    let now = Date.now() //今の時間
    date2 = Math.floor(now / 1000);
    let time1 = date2 - date1;
    document.getElementById("life").textContent = String(time1)
    $('#life').prepend('<p class="add">Past</p>');

    // 現在－生年月日で何秒間生きたか
    let time2 = date3 - date2;
    document.getElementById("limit").textContent = String(time2)
    $('#limit').prepend('<p class="add">Future</p>');
  }
}
//1.Save クリックイベント
$('#save').on('click', function () {
  localStorage.setItem('date1', date1);
  localStorage.setItem('date3', date3);
  // saveボタンクリックイベント
  console.log(date1);
  console.log(date3);
});
//2.clear クリックイベント

$('#clear').on('click', function () {
  localStorage.removeItem('date1'); // localstorage削除
  localStorage.removeItem('date3'); // localstorage削除

  console.log("date1");
  console.log("date3");

  location.reload();
});

// モーダル

function popupImage() {
  let popup = document.getElementById('js-popup');
  if (!popup) return;

  let blackBg = document.getElementById('js-black-bg');
  let closeBtn = document.getElementById('js-close-btn');
  let showBtn = document.getElementById('info');

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);

  function closePopUp(elem) {
    if (!elem) return;
    elem.addEventListener('click', function () {
      popup.classList.toggle('is-show');
    });
  }
}
popupImage();


// ここから隠し
