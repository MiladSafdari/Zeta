if(window.screen.width < 1024){
    window.alert("this is Disktop Site");
    window.location.replace("./error.html");git 
}
function websiteVisits(response){
    document.querySelector("#visits").textContent=response.value;
}