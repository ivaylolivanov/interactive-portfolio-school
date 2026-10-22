const avatar = document.getElementById("avatar");

document.addEventListener("scroll", (event) =>
{
    var positionY = window.scrollY;
    var maxHeight = document.body.scrollHeight - window.innerHeight;
    var maxWidth  = window.innerWidth - avatar.offsetWidth;
    var progress  = (positionY / maxHeight) * maxWidth;

    avatar.style.left = progress + "px";
});

document.addEventListener("keydown", (event) =>
{
    if ((event.key === "ArrowLeft") || (event.key === "ArrowUp"))
    {
        console.log("Go left");
    }
    if ((event.key === "ArrowRight") || (event.key === "ArrowDown"))
    {
        console.log("Go right");
    }
});
