let grandpraent=document.getElementById("grand-parent");
let parent=document.getElementById("parent");
let child=document.getElementById("child")
grandpraent.addEventListener("click",()=>{
    console.log("grandparent")
})
parent.addEventListener("click",()=>{
    console.log("parent is clicked")
})

child.addEventListener("click",()=>{
    console.log("child is clicked");
})