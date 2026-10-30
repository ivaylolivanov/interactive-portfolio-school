const avatar = document.getElementById("avatar");
const root   = document.documentElement;
var pastProgress = 0;

document.addEventListener("scroll", (event) =>
{
    var positionX   = window.scrollX;
    var screenWidth = root.scrollWidth - window.innerWidth;
    var maxWidth    = window.innerWidth - avatar.offsetWidth;
    var progress    = (positionX / screenWidth) * maxWidth;

    if (progress < pastProgress)
        avatar.classList.remove("face-right");
    else if (progress > pastProgress)
        avatar.classList.add("face-right");

    avatar.style.left = progress + "px";

    pastProgress = progress;
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
