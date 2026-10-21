document.addEventListener("scroll", (event) =>
{
    const avatar = document.getElementById("avatar");
    var positionY = window.scrollY;
    var max = document.body.scrollHeight;
    var progress = positionY / max;

    avatar.style.left = positionY + "px";
    console.log(avatar);

    console.log(positionY + " / " + max + " = " + progress);
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
