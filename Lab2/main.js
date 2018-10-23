console.log("OK")
var btn = document.getElementById("test");
btn.addEventListener("click", function(){
    var create = document.createElement("button");
    create.innerHTML = 'Test';
    btn.appendChild(create);
});
