document.addEventListener('DOMContentLoaded', displayForm);
function displayForm()
	{
		var theButton = document.getElementById('post_status_button');
		theButton.onclick = function() {
			document.getElementById('post_status').style.display = "block";
	}
}