const avatarCanvas = document.getElementById("avatar");
const avatarCanvasContext = avatarCanvas.getContext("2d");
const root = document.documentElement;

const paralaxSpeeds = [0.65, 0.4, 0.25, 0.1];

const avatarAnimationSheet = loadImage("images/avatar.png");
const animations =
{
    idle: { row: 0, frames: 8, fps: 4 , scale: 1   },
    walk: { row: 1, frames: 7, fps: 10, scale: 1.075 },
    run:  { row: 2, frames: 7, fps: 14, scale: 1.2 },
};

var pastProgress = 0;
var currentAnimationTag = "idle";

document.addEventListener("scroll", (event) =>
{
    var positionX   = window.scrollX;
    var screenWidth = root.scrollWidth - window.innerWidth;
    var maxWidth    = window.innerWidth - avatarCanvas.offsetWidth;
    var progress    = (positionX / screenWidth) * maxWidth;

    if (progress < pastProgress)
        avatarCanvas.classList.add("face-right");
    else if (progress > pastProgress)
        avatarCanvas.classList.remove("face-right");

    var layerPositions = "";
    for (var i = 0; i < paralaxSpeeds.length; i++)
    {
        if (i > 0)
            layerPositions += ", ";

        layerPositions += (-positionX * paralaxSpeeds[i]) + "px";
    }

    document.body.style.backgroundPositionX = layerPositions;

    avatarCanvas.style.left = progress + "px";
    currentAnimationTag = "walk";

    pastProgress = progress;
});

document.addEventListener("scrollend", (event) =>
{
    currentAnimationTag = "idle";
});

document.addEventListener("keydown", (event) =>
{
    if ((event.key === "ArrowLeft") || (event.key === "ArrowUp"))
    {
        currentAnimationTag = "walk";
    }
    if ((event.key === "ArrowRight") || (event.key === "ArrowDown"))
    {
        currentAnimationTag = "walk";
    }
});

document.addEventListener("keyup", (event) =>
{
    if ((event.key === "ArrowLeft") || (event.key === "ArrowUp"))
    {
        currentAnimationTag = "idle";
    }
    if ((event.key === "ArrowRight") || (event.key === "ArrowDown"))
    {
        currentAnimationTag = "idle";
    }
});

function loadImage(src)
{
    const img = new Image();
    img.src = src;
    return img;
}

function avatarAnimation(totalTimeMs)
{
    let totalTimeSec = totalTimeMs / 1000;
    const currentAnimation = animations[currentAnimationTag];
    const frame = Math.floor(totalTimeSec * currentAnimation.fps)
          % currentAnimation.frames;
    avatarCanvasContext.clearRect(0, 0, avatarCanvas.width, avatarCanvas.height);

    if (avatarAnimationSheet.complete)
    {
        const destinationWidth  = avatarCanvas.width  * currentAnimation.scale;
        const destinationHeight = avatarCanvas.height * currentAnimation.scale;
        const destinationX      = (avatarCanvas.width - destinationWidth) / 2;
        const destinationY      = avatarCanvas.height - destinationHeight;

        avatarCanvasContext.drawImage(
            avatarAnimationSheet,
            frame * avatarCanvas.width,
            currentAnimation.row * avatarCanvas.height,
            avatarCanvas.width,
            avatarCanvas.height,
            destinationX,
            destinationY,
            destinationWidth,
            destinationHeight);
    }

    requestAnimationFrame(avatarAnimation);
}

requestAnimationFrame(avatarAnimation);
