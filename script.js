$.ajax({
	url : "https://api.hangang.msub.kr",
	type : "GET"
}).done(function(data) {
	console.log(data);
	let Temperature = data.temp;
	let get_time = data.time;
	let now_time = new Date();
	let make_time = now_time.getFullYear()+"년 "+ (now_time.getMonth()+1) +"월 "+ now_time.getDate()+"일 " + get_time+"시";
	console.log(make_time);
	document.getElementById("w_temp").innerHTML = Temperature;
	document.getElementById("MSR_DATE").innerHTML = make_time;
}).fail(function(data){
	console.log("실패");
	console.log(data);
});


$( document ).ready( function() {
	$( 'div.i' ).fadeIn( 1800 );
} );
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
var List = ["노력은 자신을 배신하지 않지. 꿈을 배신하는 건 있지만.",
	"씁쓸한 인생, 커피 정도는 달아도 괜찮겠지.",
	"과거를 떠올리면 후회 때문에 죽고 싶고 미래를 생각하면 불안 때문에 우울하니까,<br/> 소거법으로 현재는 행복하다고 할 수 있지.",
	"문제는 문제로 삼지 않는 한 문제가 되지 않아",
	"사회가 내게 가혹하니 나만이라도 나에게 관대해야겠다.",
	"세계를 좁혀 간다는 건 틀림없이 어른에 가까워져 간다는 것이다. 수많은 선택지를 좁혀 가며,<br/> 가능성을 죽여 가며, 더욱 확실한 미래상을 만들어간다.",
]


var arr = new Array();
arr[0] = "./hanRiver_image/wallpaper_0.png";
arr[1] = "./hanRiver_image/wallpaper_1.jpg";
arr[2] = "./hanRiver_image/wallpaper_2.jpg";
arr[3] = "./hanRiver_image/wallpaper_3.jpg";
arr[4] = "./hanRiver_image/wallpaper_4.jpg";
arr[5] = "./hanRiver_image/wallpaper_5.jpg";


function ic(){
	var url = "url(" + arr[Math.floor(Math.random() * arr.length)] + ")";
	document.getElementById("BODY").style.backgroundImage = url;
	if(url == "url(./hanRiver_image/wallpaper_4.jpg)" || url == "url(./hanRiver_image/wallpaper_5.jpg)"){
		var temp = document.getElementById("word");
		temp.style.color="black";
		document.getElementById("last_moment").style.color="black";
		document.getElementById("copy").style.color="black"
		document.getElementById("copy").style.border="1px solid black";
	}
	var new_comment = document.createElement("div");
	new_comment.innerHTML = '" ' + List[Math.floor(Math.random() * List.length)] + ' "';
	document.getElementById("comment").appendChild(new_comment);
}


function print_time(){
	const data1 = new Date();
	const data2 = new Date(data1.getFullYear()+1, 0, 0, 0, 0, 0);
	const elapsedMSec = data2 - data1;
	const elapsedSec = elapsedMSec / 1000;
	var data = document.getElementById("time_data");
	data.innerHTML = parseInt(elapsedSec);
	setTimeout("print_time()",1000);
}