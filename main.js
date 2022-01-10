noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
distance = 0;

function setup() {
    canvas = createCanvas(900, 600);
    canvas.position(750, 100);

    video = createCapture(VIDEO);
    video.position(50, 175);

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on("pose", gotResults);
}

function modelLoaded() {
    console.log("MODEL LOADED");
}

function gotResults(results) {
    console.log("Working");
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        distance = Math.floor(leftWristX - rightWristX);

    }
}

function draw() {
    textSize(distance);
    background("#969A97");
    fill("red");
    text('Swastik', noseX, noseY);
}