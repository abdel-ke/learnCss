// document.querySelectorAll('.panel').addEventListener('click', () => {
// 	alert("im here");
// });

document.querySelectorAll(".panel").forEach((occurence) => {
  occurence.addEventListener("click", (e) => {
    // console.log("A link was clicked");
	// alert(e);
	e.style.flex = 5;
  });
});
