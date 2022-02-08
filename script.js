const table = document.getElementById("table");
const Submit = document.querySelector(".button").children[0];
const form = Submit.parentNode.parentNode;

const Name = document.querySelector('.i-1').children[1];
const Email = document.querySelector('.i-2').children[1];
const Phone = document.querySelector('.i-3').children[1];
const Profession = document.querySelector('.i-4').children[1];

const validateEmail = (email) => {
	let checkA = email.indexOf('@');
	let checkB = email.indexOf('.');
	if (checkA == -1 || checkB == -1)
		return 0;
	if (checkA > checkB || email.lastIndexOf('.') != email.indexOf('.'))
		return 0;
	return 1;
};


Submit.onclick = (e) => {
	e.preventDefault();
	let tr = document.createElement('tr');

	let worning = document.createElement("p");
	worning.textContent = "Email is not valid"
	worning.classList.add("worning");
	
	if (!validateEmail(Email.value)){
		form.prepend(worning);
		setTimeout(()=> {
			worning.remove()
		}, 2000)
		return ;
	}

	let td_for_name = document.createElement('td');
	let td_for_email = document.createElement('td');
	let td_for_phone = document.createElement('td');
	let td_for_profession = document.createElement('td');
	
	td_for_name.textContent = Name.value;
	td_for_email.textContent = Email.value;
	td_for_phone.textContent = Phone.value;
	td_for_phone.classList.add("align-right");
	td_for_profession.textContent = Profession.value;
	td_for_phone.classList.add("align-right");

	tr.appendChild(td_for_name);
	tr.appendChild(td_for_email);
	tr.appendChild(td_for_phone);
	tr.appendChild(td_for_profession);

	table.appendChild(tr);
}
