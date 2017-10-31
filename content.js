
var elements = document.getElementsByClassName("search-version--type");
while(elements.length > 0){
    elements[0].parentNode.remove();
}

function getElementsByText(str, tag = 'a') {
  return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
}

var proCourses = getElementsByText('guitar pro', 'td');

for (var i = proCourses.length - 1; i >= 0; i--) {
	proCourses[i].parentNode.remove();
}

if(window.location.href == "https://www.ultimate-guitar.com/") {
	window.location.replace("https://www.ultimate-guitar.com/search.php?search_type=title&order=&value=") 
}

document.getElementById("search_bar_simple").innerHTML += '<a href="https://www.ultimate-guitar.com/search.php?search_type=title&order=&value="><div class="left-top-logo"><img class="logo-redirect" src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Music-Guitar-icon.png"></div></a>';

var notFoundElement = document.getElementsByClassName("not_found")[0];
if(notFoundElement) {
	var notFoundText = '<div class="not-found-new"><img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Music-Guitar-icon.png"> <div class="heading-new">Empty list. Start searching for tabs!</div></div>';
	notFoundElement.innerHTML = notFoundText;
}

document.getElementsByClassName("selcurr")[0].parentNode.parentNode.className += " hideFilter";