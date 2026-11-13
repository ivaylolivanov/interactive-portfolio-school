const avatar = document.getElementById("avatar");
const root   = document.documentElement;
var pastProgress = 0;

const paralaxSpeeds = [0.65, 0.4, 0.25, 0.1];

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

    var layerPositions = "";
    for (var i = 0; i < paralaxSpeeds.length; i++)
    {
        if (i > 0)
            layerPositions += ", ";

        layerPositions += (-positionX * paralaxSpeeds[i]) + "px";
    }

    document.body.style.backgroundPositionX = layerPositions;

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
