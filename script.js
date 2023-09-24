$.ajax({
	url : "https://api.hangang.life/",
	type : "GET"
}).done(function(data) {
	console.log("안양천의 정보 : ", data.DATAs.DATA.HANGANG.안양천);
	data = data.DATAs.DATA.HANGANG.안양천;

	let get_time = data.LAST_UPDATE; //temperature
	document.getElementById("w_temp").innerHTML = data.TEMP; 
	document.getElementById("MSR_DATE").innerHTML = get_time.slice(0,4) + "년 " + get_time.slice(5, 7) + "월 " + get_time.slice(8, 10) + "일 " + get_time.slice(11, 13) + "시";
}).fail(function(data){
	console.log("failed to get HANGANG info");
	console.log(data);
});


function alert_box(txt, sym="success", time=3000) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'center-center',
		showConfirmButton: false,
		timer: time,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})

	Toast.fire({
		icon: sym, // [success, error, warning, info, question]
		title: txt
	})
}

function copy() {
	let data = document.getElementById("MSR_DATE");
	let date = document.getElementById("w_temp");
	let main = document.getElementById("temp");
	main.innerHTML = data.firstChild.nodeValue + " 온도 " + date.firstChild.nodeValue+"°C";
	let range = document.createRange();
	range.selectNode(main.childNodes[0]); //텍스트 정보를 Range 객체에 저장
	let sel = window.getSelection();
	sel.removeAllRanges(); //기존 선택정보 삭제
	sel.addRange(range); //텍스트 정보 선택
	document.execCommand("copy"); //복사
	sel.removeRange(range); //선택 정보 삭제
	main.innerHTML = "";

	alert_box("온도 복사 완료!", "success", 2000);
}


/* pc 에 따라 모바일에 따라 구분지어 각 화면을 비춘다.
var filter = "win16|win32|win64|mac|macintel";
if ( navigator.platform )
{
	if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
		alert('mobile 접속');
	}
	else { //pc
		  alert('pc 접속');
	}
}
*/

//명언 배열
let List = [
	"The hatred of the two families could not stop their love. ― Romeo and Juliet", //로미오와 줄리엣
	"you see clearly only with your heart. Nothing important can be seen with your eyes. ― The Little Prince", //어린 왕자
	'what is in men? &nbsp what is not given men? &nbsp what men live by? ― tolstoy three questions', //톨스토이의 미하일이 배워야할 과제 3가지
	"What does not destroy me, makes me stronger. ― Friedrich Nietzsche", //프리드리히 니체
	"나를 죽이지 못하는 고통은, 나를 더 강하게 해줄 뿐이다. ― 프리드리히 니체", //우상의 황혼
	"<a style='font-size:20pt' href='https://www.kookmin.ac.kr/comm/menu/user/d48d445aa00b36a21e59610221023b0d/content/index.do'>以校爲家 事必歸正</a>", //국민대
	"노력은 자신을 배신하지 않지. 꿈을 배신하는 건 있지만.",
	"씁쓸한 인생, 커피 정도는 달아도 괜찮겠지.",
	"과거를 떠올리면 후회 때문에 죽고 싶고 미래를 생각하면 불안 때문에 우울하니까,<br/> 소거법으로 현재는 행복하다고 할 수 있지.",
	"문제는 문제로 삼지 않는 한 문제가 되지 않아",
	"사회가 내게 가혹하니 나만이라도 나에게 관대해야겠다.",
	"세계를 좁혀 간다는 건 틀림없이 어른에 가까워져 간다는 것이다. 수많은 선택지를 좁혀 가며,<br/> 가능성을 죽여 가며, 더욱 확실한 미래상을 만들어간다.",
]
/* //이전 명언

*/


//background img 위치 배열
let arr = new Array();
arr[0] = "./hanRiver_image/wallpaper_0.png";
arr[1] = "./hanRiver_image/wallpaper_1.jpg";
arr[2] = "./hanRiver_image/wallpaper_2.jpg";
arr[3] = "./hanRiver_image/wallpaper_3.jpg";
arr[4] = "./hanRiver_image/wallpaper_4.jpg";
arr[5] = "./hanRiver_image/wallpaper_5.jpg";


function ic(){ //랜덤으로 배경화면및 코멘트 설정
	let url = "url(" + arr[Math.floor(Math.random() * arr.length)] + ")";
	document.getElementById("BODY").style.backgroundImage = url;
	if(url == "url(./hanRiver_image/wallpaper_4.jpg)" || url == "url(./hanRiver_image/wallpaper_5.jpg)"){
		let temp = document.getElementById("word");
		temp.style.color="black";
		document.getElementById("last_moment").style.color="black";
		document.getElementById("copy").style.color="black"
		document.getElementById("copy").style.border="2px solid black";
	}
	let new_comment = document.createElement("div");
	new_comment.innerHTML = '" ' + List[Math.floor(Math.random() * List.length)] + ' "';
	document.getElementById("comment").appendChild(new_comment);
}


function print_time(){
	const data1 = new Date();
	const data2 = new Date(data1.getFullYear()+1, 0, 0, 0, 0, 0);
	const elapsedMSec = data2 - data1;
	const elapsedSec = elapsedMSec / 1000;
	let data = document.getElementById("time_data");
	data.innerHTML = parseInt(elapsedSec);
	setTimeout("print_time()",1000);
}

$(window).on('load', function(){
	$( document ).ready( function() {
		$('#load').fadeOut( 1000 );
		$( 'div.i' ).fadeIn( 1000 );
	} );
})
