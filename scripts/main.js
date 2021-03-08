const sp_menu = document.querySelector('.sp-menu');
const menu_list = document.querySelector('.menu-list');



sp_menu.addEventListener('click',
	function(){
		sp_menu.classList.toggle('sp-menu-open');
		menu_list.classList.toggle('menu-list-open');
});


$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
				labels: ["大阪教組・日教組で働く人・とりくみのための費用", "八尾教組で働く人のための費用", "事務所維持のための費用", "八尾の分会や評議員の活動のための費用", "八尾のとりくみのための費用", "その他の費用"],
				datasets: [{
						label: '八尾教組の組合費利用のうちわけ',
						data: [50, 23, 13, 6, 4, 4],
						backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
								'rgba(255, 206, 86, 0.2)',
								'rgba(75, 192, 192, 0.2)',
								'rgba(153, 102, 255, 0.2)',
								'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
								'rgba(255,99,132,1)',
								'rgba(54, 162, 235, 1)',
								'rgba(255, 206, 86, 1)',
								'rgba(75, 192, 192, 1)',
								'rgba(153, 102, 255, 1)',
								'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
				}]
		},
});
