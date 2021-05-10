// A：入学日
// B：卒業日
// C:現在の時間
dayjs.locale('ja');

$(document).ready(function () {
  setInterval("remain_second()", 1000);
  setInterval("remain_hour()", 1000);
});

$('#submit').on('click', function () {
  A = remain_hour();
  B = Passed_hour();
  let ctx = document.getElementById("myPieChart");
  let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["過", "これから"],
      datasets: [{
        backgroundColor: [
          "#dedede",
          "#00A7EA"
        ],
        data: [B, A]
      }]
    },
    options: {
      legend: {
        position: "bottom", // タイトルでの position と同じ
        labels: {
          fontSize: 14,
          boxWidth:14,
          fontColor: "#595959",
           fontfamily: "'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif",

        }
      }
    }
  });
})

function remain_second() {
  const start = dayjs('2021-04-22T00:00:00Z')
  const now = dayjs()
  const end = dayjs('2021-09-30T23:59:59Z')
  const remain = Math.floor((end.diff(now)) / 1000)
  document.getElementById("second").textContent = String(remain)
  return remain;
};

function remain_hour() {
  const start = dayjs('2021-04-22T00:00:00Z')
  const now = dayjs()
  const end = dayjs('2021-09-30T23:59:59Z')
  const remain_hour = end.diff(now, 'hour')
  console.log(remain_hour)
  document.getElementById("hour").textContent = String(remain_hour)
  return remain_hour;
};

function Passed_second() {
  const start = dayjs('2021-04-22T00:00:00Z')
  const now = dayjs()
  const end = dayjs('2021-09-30T23:59:59Z')
  // 全期間
  const Passed_second = Math.floor((now.diff(start)) / 1000);
  return Passed_second;
};

function Passed_hour() {
  const start = dayjs('2021-04-22T00:00:00Z')
  const now = dayjs()
  const end = dayjs('2021-09-30T23:59:59Z')
  // 全期間
  const Passed_hour = now.diff(start, 'hour');
  return Passed_hour;
};

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
