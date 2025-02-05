const buttonElement = document.querySelector("#turnOnOff");
const imgElement = document.querySelector("#bulb");



function turnOnOff() {
    
  if (imgElement.src.includes("ONbulb")) {

    imgElement.src = "./images/OFFbulb.png";
    document.querySelector("body").bgColor = "whitesmoke";
    buttonElement.innerHTML = "Tourner sur ON";

  } else {

    imgElement.src = "./images/ONbulb.png";
    document.querySelector("body").bgColor = "black";
    buttonElement.innerHTML = "Tourner sur OFF";

  }
}

buttonElement.addEventListener('click', turnOnOff);