const sp_menu = document.querySelector(".sp-menu");
const menu_list = document.querySelector(".menu-list");

sp_menu.addEventListener("click", function () {
  sp_menu.classList.toggle("sp-menu-open");
  menu_list.classList.toggle("menu-list-open");
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "doughnut",
  // plugins: [ChartDataLabels],
  data: {
    labels: [
      "大阪教組・日教組で働く人・とりくみの費用",
      "八尾教組で働く人のための費用",
      "事務所維持",
      "八尾のとりくみ",
      "他",
    ],
    datasets: [
      {
        label: "八尾教組の組合費利用のうちわけ",
        data: [50, 23, 13, 10, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "組合費のおおまかな使いみち",
      fontSize: 20,
      position: "top",
    },
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 10,
      },
    },
    plugins: {
      labels: [
        {
          render: "label",
          position: "outside",
          arc: true,
        },
        {
          render: "percentage",
        },
      ],
    },
  },
});

$(".qa-list dd").hide();
$(".qa-list dl").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

var mySwiper = new Swiper(".swiper-container", {
  // オプションパラメータ(一部のみ抜粋)
  loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
  speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
  slidesPerView: 2, // 何枚のスライドを表示するか
  spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
  direction: "horizontal", // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
  effect: "slide", // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
  autoplay: false,

  // レスポンシブ化条件
  breakpoints: {
    // 960ピクセル幅以下になったら
    1280: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // 640ピクセル幅以下になったら
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },

  // 前後スライドへのナビゲーションを表示する場合
  navigation: {
    nextEl: ".swiper-button-next", // 次のスライドボタンのセレクタ
    prevEl: ".swiper-button-prev", // 前のスライドボタンのセレクタ
  },
});


//　専門部のモーダルウィンドウ

const createModal = (target, targetHeadingText) => {
  const targetModal = document.getElementById(target);
  const targetHeading = document.getElementById(targetHeadingText);
	const close = targetModal.querySelector('#close');
	const mask = document.getElementById("mask");

  targetHeading.addEventListener("click", function () {
    targetModal.classList.remove("hidden");
    mask.classList.remove("hidden");
    close.classList.remove("hidden");
  });

  close.addEventListener("click", function () {
    targetModal.classList.add("hidden");
    mask.classList.add("hidden");
    close.classList.add("hidden");
  });

  mask.addEventListener("click", function () {
    targetModal.classList.add("hidden");
    mask.classList.add("hidden");
    close.classList.add("hidden");
  });
};

createModal("nursing-modal", "headingNursing");
createModal("kinder-modal", "headingKinder");
createModal("nutritionist-modal", "headingNutritionist");
createModal("school-clerical-modal", "headingSchoolClerical");
createModal("young-modal", "headingYoung");
createModal("etc-modal","headingEtc");

// {
// 	const close = document.getElementById('close');
// 	const nursingModal = document.getElementById('nursing-modal');
// 	const mask = document.getElementById('mask');
// 	const headingNursing = document.getElementById('headingNursing');

// 	headingNursing.addEventListener('click',function(){
// 	nursingModal.classList.remove('hidden');
// 	mask.classList.remove('hidden');
// 	close.classList.remove('hidden');
// 	});

// 	close.addEventListener('click',function(){
// 		nursingModal.classList.add('hidden');
// 		mask.classList.add('hidden');
// 		close.classList.add('hidden');
// 	});

// 	mask.addEventListener('click',function(){
// 		nursingModal.classList.add('hidden');
// 		mask.classList.add('hidden');
// 		close.classList.add('hidden');
// 	});

// }
