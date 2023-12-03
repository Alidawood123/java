

/****************** create variables ******************/
let modelName = "XYZ"; // Set an initial model name
let duration = 0; // Set an initial duration

/****************** helper function ******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = modelName === "XYZ" ? duration * 100 : duration * 213;
    costLabel.innerHTML = totalCost.toFixed(2);
}

/****************** button click logic ******************/
let mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    let targetId = event.target.id;

    if (targetId === "model-button") {
        // Handle Switch Model button click
        let modelText = document.getElementById("model-text");
        modelName = modelName === "XYZ" ? "CPRG" : "XYZ";
        modelText.innerHTML = modelName === "XYZ" ? "Model XYZ" : "Model CPRG";
        recalculate();
    } else if (targetId === "duration-button") {
        // Handle Change Duration button click
        let durationText = document.getElementById("duration-text");
        duration = parseInt(prompt("Enter new duration:")) || 0;
        durationText.innerHTML = duration;
        recalculate();
    }
});

// Initial calculation when the page loads
recalculate();
