// alert("web page working");
$('h2').css("background", "#FFFF00");
var headers = $("h2");
headerText = "<h2>Kotzim</h2>";
for (var i = 0; i < headers.length; i++) {
  var headerText = headerText + '<input type="checkbox">' + headers[i].textContent + "<br>";
}

$("<div></div>").css(
				{"position": "fixed",
				"right": 0,
				"bottom": 0,
				"color": "#fff",
				"z-index": 10000,
				"width": "350px",
				"height":"auto",
				"background": "#b1b1b1",
				"border-radius": "4px",
				"word-wrap": "break-word",
				"padding": "10px"}).appendTo("body").html(headerText);
console.log(headerText);