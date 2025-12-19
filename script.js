const promoValueEl = document.getElementById("promoAmount");
const phoneValueEl = document.getElementById("fmv");
const deviceCostEl = document.getElementById("deviceCost");
const submitBtn = document.getElementById("calcBtn");

const totalSavingsEl = document.getElementById("totalSavings");
const monthlyCreditEl = document.getElementById("monthlyCredit");
const monthlyBeforeEl = document.getElementById("monthlyBefore");
const creditAppliedEl = document.getElementById("monthlyDiscount");
const monthlyPayment = document.getElementById("monthlyAfter");

const billCreditEl = document.getElementById("oneTimeCredit");
const remainingPromoEl = document.getElementById("remainingPromo");

function calculateData() {
    const promoValue = promoValueEl.value;
    const phoneValue = phoneValueEl.value;
    const deviceCost = deviceCostEl.value;

    const grossSavings = promoValue - phoneValue;
    const monthlyBeforeDis = roundToPenny(deviceCost / 24);
    const monthlyPromoDis = roundToPenny(grossSavings / 24);
    const monthlyAfterDis = roundToPenny(monthlyBeforeDis - monthlyPromoDis);

    totalSavingsEl.textContent = `$${grossSavings}`;
    monthlyCreditEl.textContent = `$${Number(monthlyPromoDis).toFixed(2)}`;
    monthlyBeforeEl.textContent = `$${Number(monthlyBeforeDis).toFixed(2)}`;
    creditAppliedEl.textContent = `-$${Number(monthlyPromoDis).toFixed(2)}`;
    monthlyPayment.textContent = `$${Number(monthlyAfterDis).toFixed(2)}`;

    billCreditEl.textContent = `$${phoneValue}`;
    remainingPromoEl.textContent = `$${grossSavings}`;
}

function roundToPenny(num) {
    return Math.round(num * 100) / 100
}

submitBtn.addEventListener("click", calculateData)