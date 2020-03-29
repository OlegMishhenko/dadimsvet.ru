let questions = document.querySelectorAll('.questions-block-item-text-2');
for (let i = 0; i < questions.length; i++) {
	questions[i].style.display = 'none';
};

let questionsClick;
document.addEventListener("click", function (e) {
	questionsClick = e.target;
	if (questionsClick.className == "questions-block-item-text" && questionsClick.lastElementChild.style.display == "block") {
		questionsClick.lastElementChild.style.display = "none";
		questionsClick.firstElementChild.lastElementChild.style.clipPath = "polygon(0 40%, 40% 40%, 40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 39% 60%, 0 60%)"
	} else if (questionsClick.className == "questions-block-item-text" && questionsClick.lastElementChild.style.display == "none") {
		questionsClick.lastElementChild.style.display = "block";
		questionsClick.firstElementChild.lastElementChild.style.clipPath = "polygon(0 40%, 40% 40%, 40% 40%, 60% 40%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 60%, 40% 60%, 40% 60%, 0 60%)"
	};
	// if (questionsClick.className == "modal") {
	// 	// document.querySelector('html').style.overflowY = null;
	// 	// setTimeout("document.querySelector('.modal').style.display = 'none'", 600);
	// };
});