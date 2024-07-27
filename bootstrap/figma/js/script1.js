const xValues = ["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", " 45k", "50k", "55k", "60k", "65k", "70k", "75k", "80k", "85k", "90k", "95k", "100k"];
const yValues = [10, 30, 45, 10, 20, 80, 90, 35, 17, 29, 63, 55, 20, 30, 30, 10, 20, 20, 30, 30];

var myChart = document.getElementById("myChart").getContext("2d");
var ctx = document.getElementById("myChart").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(72,128,255)');
gradient.addColorStop(1, 'rgba(214,215,220,0)');

new Chart("myChart", {
	type: "line",
	data: {
		labels: xValues,
		datasets: [{
			lineTension: 0,
			lineTension: 0,
			borderColor: "#4880ff",
			pointBorderColor: "#4880ff",
			pointBackgroundColor: "#4880ff",
			backgroundColor: gradient,
			data: yValues
		}]
	},
	options: {
		legend: { display: false },
		scales: {
			yAxes: [{ ticks: { min: 10, max: 100 } }],
		}
	}
});


let button = document.querySelector(".removebtn");
let sideMenu = document.querySelector('.sidemenu');
let menubutton = document.querySelector('.menubutton');
let sidetext = document.querySelectorAll('.sidetext');
let traker = document.querySelector('.traker-info');

button.addEventListener("click", function () {
	sideMenu.classList.remove('show');;
});


let b = true;

menubutton.addEventListener("click", function () {
	if (window.innerWidth <= 777) {
		sideMenu.classList.add('show');
	}
	else {
		var divsToHide = document.getElementsByClassName("sidetext");
		if (b == true) {

			for (var i = 0; i < divsToHide.length; i++) {
				divsToHide[i].classList.toggle('sidetextshow');
			}

			b = false;
			sideMenu.classList.remove('col-xxl-2');
			traker.classList.remove('col-xxl-10');
			traker.classList.add('col-xxl-11')
			sideMenu.classList.add('col-xxl-1')




			sideMenu.classList.remove('col-lg-3');
			traker.classList.remove('col-lg-9');
			traker.classList.add('col-lg-10')
			sideMenu.classList.add('col-lg-2')



			sideMenu.classList.remove('col-md-4');
			traker.classList.remove('col-md-8');
			traker.classList.add('col-md-9')
			sideMenu.classList.add('col-md-3')

			console.log("sss");
			sideMenu.classList.toggle('ss');
		}
		else {
			for (var i = 0; i < divsToHide.length; i++) {
				divsToHide[i].classList.toggle('sidetextshow');
			}
			sideMenu.classList.add('ss1');
			sideMenu.classList.toggle('ss');

			traker.classList.add('col-xxl-10');
			traker.classList.remove('col-xxl-11')
			sideMenu.classList.add('col-xxl-2');
			sideMenu.classList.remove('col-xxl-1');


			sideMenu.classList.add('col-lg-3');
			traker.classList.add('col-lg-9');
			traker.classList.remove('col-lg-10')
			sideMenu.classList.remove('col-lg-2')


			sideMenu.classList.add('col-md-4');
			traker.classList.add('col-md-8');
			traker.classList.remove('col-md-9')
			sideMenu.classList.remove('col-md-3')

			b = true
		}
	}

});




