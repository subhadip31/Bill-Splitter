const billAmountInput = document.querySelector("#bill-amount");
const numberOfPeopleInput = document.querySelector(".people-number");
const numberOfPeopleContainer = document.querySelector('.people-container')
const customTipInput = document.querySelector(".custom-tip");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const eachPersonBillOutput = document.querySelector(".each-person-bill span");
const totalBillOutput = document.querySelector(".total span");
const tipAmountOutput = document.querySelector(".tip-amount span");
const tipsContainer = document.querySelector(".tip-container");
const resetBtn = document.querySelector(".reset-btn");

let tipPercentage = 0;

generateBillBtn.addEventListener("click", () => {
  const billAmount = Math.round(parseInt(billAmountInput.value));
  const numberOfPeople = Math.round(parseInt(numberOfPeopleInput.value));

  const tipAmount = billAmount * (tipPercentage / 100);

  const totalBill = billAmount + tipAmount;

  const eachPersonBill = totalBill / numberOfPeople;

  tipAmountOutput.innerText = `₹${tipAmount}`;
  totalBillOutput.innerText = `₹${totalBill}`;
  eachPersonBillOutput.innerText = `₹${eachPersonBill}`;

  resetBtn.disabled = false;
});

tipsContainer.addEventListener("click", (e) => {
  if (tipsContainer.classList.contains("disabled")) return;
  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((tip) => {
      tip.classList.remove("selected");
    });
    e.target.classList.add("selected");
    tipPercentage = parseInt(e.target.innerText);
    customTipInput.value = "";
  }
});

customTipInput.addEventListener("input", () => {
  tipPercentage = parseInt(customTipInput.value);
  [...tipsContainer.children].forEach((tip) => {
    tip.classList.remove("selected");
  });
});

resetBtn.addEventListener("click", () => {
  tipPercentage = 0;
  numberOfPeopleInput.value = "";
  billAmountInput.value = "";
  customTipInput.value = "";
  [...tipsContainer.children].forEach((tip) => {
    tip.classList.remove("selected");
  });
  tipAmountOutput.innerText = "";
  totalBillOutput.innerText = "";
  eachPersonBillOutput.innerText = "";
  resetBtn.disabled = true;
  generateBillBtn.disabled = true;
});

billAmountInput.addEventListener("input", () => {
  if (billAmountInput.value) {
    customTipInput.disabled = false;
    numberOfPeopleContainer.classList.remove('disabled')
    numberOfPeopleInput.disabled = false;
    tipsContainer.classList.remove('disabled')
  } else {
    customTipInput.disabled = true;
    numberOfPeopleInput.disabled = true;
    numberOfPeopleContainer.classList.add('disabled')
    tipsContainer.classList.add('disabled')
  }
});

numberOfPeopleInput.addEventListener('input', ()=>{
    if (numberOfPeopleInput.value) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})
