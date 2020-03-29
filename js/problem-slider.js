let problemBtn = document.getElementsByClassName('problems-switch-button'),
	problemBtnArea = document.getElementsByClassName('problems-switch')[0],
	problems = document.getElementsByClassName('problems-block-item'),
	problemIndex = 1;

showProblems(problemIndex);

function showProblems(n) {
	if (n < 1) {
		problemIndex = problems.length;
	} else if (n > problems.length) {
		problemIndex = 1;
	}
	for (let i = 0; i < problems.length; i++) {
		problems[i].style.display = 'none';
		problems[i].style.opacity = "0";
	}
	for (let i = 0; i < problemBtn.length; i++) {
		problemBtn[i].classList.remove('problems-switch-button-active');
	}
	problemBtn[problemIndex - 1].classList.add('problems-switch-button-active');
	function del() {
		problems[problemIndex - 1].style.opacity = "1";
	}
	setTimeout(del, 200);
	problems[problemIndex - 1].style.display = 'block';
}

function plusProblems(n) {
	showProblems(problemIndex += n);
}

function currentProblem(n) {
	showProblems(problemIndex = n);
}

problemBtnArea.onclick = function (e) {
	for (let i = 0; i < problemBtn.length + 1; i++) {
		if (e.target.classList.contains('problems-switch-button') && e.target == problemBtn[i - 1]) {
			currentProblem(i);
		}
	}
}