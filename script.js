const promoValueEl = document.getElementById("promoAmount");
const phoneValueEl = document.getElementById("fmv");
const deviceCostEl = document.getElementById("deviceCost");
const submitBtn = document.getElementById("calcBtn");
const resetBtn = document.getElementById("resetBtn")

const contractLengthEl = document.getElementById("contract-length");
const contractLengthButtonEl = document.getElementById("contract-length-button");
const dataTermElements = document.querySelectorAll(".data-term")

const totalSavingsEl = document.getElementById("totalSavings");
const monthlyCreditEl = document.getElementById("monthlyCredit");
const monthlyBeforeEl = document.getElementById("monthlyBefore");
const creditAppliedEl = document.getElementById("monthlyDiscount");
const monthlyPayment = document.getElementById("monthlyAfter");

const billCreditEl = document.getElementById("oneTimeCredit");
const remainingPromoEl = document.getElementById("remainingPromo");

function calculateData() {
  const promoValue = Number(promoValueEl.value) || 0;
  const phoneValue = Number(phoneValueEl.value) || 0;
  const deviceCost = Number(deviceCostEl.value) || 0;
  const contractLength = Number(contractLengthEl.textContent);

  const grossSavings = promoValue - phoneValue;
  const monthlyBeforeDis = roundToPenny(deviceCost / contractLength);
  const monthlyPromoDis = roundToPenny(grossSavings / contractLength);
  const monthlyAfterDis = roundToPenny(monthlyBeforeDis - monthlyPromoDis);

  totalSavingsEl.textContent = `$${grossSavings}`;
  monthlyCreditEl.textContent = `$${Number(monthlyPromoDis).toFixed(2)}`;
  monthlyBeforeEl.textContent = `$${Number(monthlyBeforeDis).toFixed(2)}`;
  creditAppliedEl.textContent = `-$${Number(monthlyPromoDis).toFixed(2)}`;
  monthlyPayment.textContent = `$${Number(monthlyAfterDis).toFixed(2)}`;

  billCreditEl.textContent = `$${phoneValue}`;
  remainingPromoEl.textContent = `$${grossSavings}`;
}

function resetDisplay() {
  totalSavingsEl.textContent = `$0.00`;
  monthlyCreditEl.textContent = `$0.00`;
  monthlyBeforeEl.textContent = `$0.00`;
  creditAppliedEl.textContent = `$0.00`;
  monthlyPayment.textContent = `$0.00`;

  billCreditEl.textContent = `$0.00`;
  remainingPromoEl.textContent = `$0.00`;
}

function roundToPenny(num) {
  return Math.round(num * 100) / 100
}

function toggleContractLength() {
  const current = Number(contractLengthEl.textContent);
  const next = current === 24 ? 36 : 24;
  contractLengthEl.textContent = next;
  return next;
}

function updateTermDisplay(term) {
  dataTermElements.forEach(el => {
    el.textContent = term;
  });
}

submitBtn.addEventListener("click", calculateData);
resetBtn.addEventListener("click", resetDisplay);

contractLengthButtonEl.addEventListener("click", () => {
  const term = toggleContractLength();
  updateTermDisplay(term);
  calculateData()
});