"use strict";
//declare variables

const buyAmount = document.getElementById("buyAmount");
const quantityAmount = document.getElementById("quantityAmount");
const soldAmount = document.getElementById("soldAmount");
const inputForm = document.querySelector("form");
const profitTab = document.getElementById("profit-tab");
const lossTab = document.getElementById("loss-tab");
const drawTab = document.getElementById("draw-tab");
const bigLoss = document.getElementById("bigLoss-tab");
const profitAmount = document.getElementById("profitAmount");
const lossAmount = document.getElementById("lossAmount");
const profitPercentage = document.getElementById("profitPercentage");
const lossPercentage = document.getElementById("lossPercentage");
const quantityShare = document.getElementById("quantityShare");

//functions

//1
const submitHandle = function(e){
e.preventDefault();
if(buyAmount.value && quantityAmount.value && soldAmount.value > 0){
  checkProfitLoss(buyAmount.value,soldAmount.value);
}
else{
  alert("Please enter valid input")
}
}

//2
const checkProfitLoss = function(buy,sold){
  if(buy < sold){
    let profitAmount = (sold-buy)*quantityAmount.value
    let profitPercentage = Math.floor((profitAmount/ buy) *100)
    profitTab.style.display="block";
    drawTab.style.display="none";
    lossTab.style.display="none";
    console.log("profit")
    profitResult(profitAmount,profitPercentage)
  }
  else if(buy == sold){
    profitTab.style.display="none";
    drawTab.style.display="block";
    lossTab.style.display="none";
    bigLoss.style.display="none";

    console.log("draw");
  }
  else if(buy > sold){
    let lossAmount = (sold-buy)*quantityAmount.value
    let lossPercentage = Math.floor((lossAmount / sold) *100)
    if(lossPercentage < 50){
    profitTab.style.display="none";
    drawTab.style.display="none";
    lossTab.style.display="block";
    bigLoss.style.display="none";

    console.log("loss")
    lossResult(lossAmount,lossPercentage)
    }
    else{
      profitTab.style.display="none";
      drawTab.style.display="none";
      lossTab.style.display="none";
      bigLoss.style.display="block";
      console.log("Big loss")

    }
  }
}

//3
const profitResult = function(amount,percentage){
  profitAmount.innerText = "₹"+amount;
  profitPercentage.innerText = percentage+"%";
  quantityShare.innerText = quantityAmount.value;
}
const lossResult = function(amount,percentage){
  lossAmount.innerText = "₹"+amount;
  lossPercentage.innerText = percentage+"%";
  quantityShare.innerText = quantityAmount.value;
}


//add event listeners

//1
inputForm.addEventListener("submit", submitHandle);