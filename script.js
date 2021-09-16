const principalBox = document.querySelector("#principal");
const timesCompoundedBox = document.querySelector("#timesCompounded");
const totalYearsBox = document.querySelector("#numYearsTotal");
const interestRateSlider = document.querySelector("#intRateSlider");
const totalAmtSpan = document.querySelector("#totalAmt");
const compoundInterestSpan = document.querySelector("#compoundInterest");

function computeCompoundInterest(){
  const principal = principalBox.value;
  const timesCompounded = timesCompoundedBox.value;
  const totalYears = totalYearsBox.value;
  const interestRate = interestRateSlider.value;
  const interestRateDecimal = interestRate / 100;
  
  const totalAmount = principal * (Math.pow((1 + (interestRateDecimal / timesCompounded)), (timesCompounded * totalYears)));
  const interest = totalAmount - principal;
  
  totalAmtSpan.textContent = totalAmount;
  compoundInterestSpan.textContent = interest; 
}

principalBox.addEventListener("input", computeCompoundInterest);
timesCompoundedBox.addEventListener("input", computeCompoundInterest);
totalYearsBox.addEventListener("input", computeCompoundInterest);
interestRateSlider.addEventListener("input", computeCompoundInterest);