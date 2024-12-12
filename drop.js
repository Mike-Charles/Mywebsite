// document.getElementById("menubutton").addEventListener("click", () => {
//     const menu = document.getElementById("menuList");
//     if(menu.style.display === "block"){
//         menu.style.display = "none";
//     }
//     else{
//         menu.style.display = "block";
//     }
// });

document.getElementById("menubutton");
document.getElementById("menuList");
document.getElementById("SearchBox");
document.getElementById("containerr")

menuList.style.display = "none";
menubutton.addEventListener("click", () => {
    if(menuList.style.display === "block"){
        menuList.style.display = "none";
        SearchBox.style.marginTop = "-3px"
        containerr.style.height = "20vh"
    }else{
        menuList.style.display = "block";
        
        SearchBox.style.marginTop = "118px"
        containerr.style.height = "46vh"
    }
});