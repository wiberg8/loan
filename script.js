// document.addEventListener("onload", function(event){
//     console.log("doc load")
// })

// Function to update interest value display
function updateInterestValue(value) {
    document.getElementById('interestValue').textContent = value;
}

// Function to update investment return value display
function investReturnPerMonthValue(value) {
    document.getElementById('investReturnPerMonthValue').textContent = value;
}

// Function to handle form submission
document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();

    mySecond();
});

function mySecond() {
    const estateValue = parseFloat(document.getElementById('estateValue').value);
    const startLoan = parseFloat(document.getElementById('startLoan').value);
    const mortgagePerMonth = parseFloat(document.getElementById('mortgagePerMonth').value);
    const intrest = parseFloat(document.getElementById('interestPerMonth').value);
    const investPerMonth = parseFloat(document.getElementById('investPerMonth').value);
    const investReturnPerMonth = parseFloat(document.getElementById('investReturnPerMonth').value);
    
    let currentLoan = startLoan;
    let totalInvestment = 0;
    let months = 0;
    let totalIntrestPaid = 0;
    let investProfit = 0;

    while (currentLoan - totalInvestment > 0) {
    // while ((currentLoan - totalInvestment) > estateValue / 2) {
    // while (currentLoan - totalInvestment > startLoan / 2) {
        totalIntrestPaid += ((intrest / 100) * currentLoan) / 12;
        currentLoan -= mortgagePerMonth;
        totalInvestment += investPerMonth;
        let prevTotalInvestment = totalInvestment;
        totalInvestment *=  1 + investReturnPerMonth / 100 / 12;
        investProfit += totalInvestment - prevTotalInvestment;
        months++;

        if (months > 3000) {
            break;
        }
    }

    const resultsDiv = document.getElementById('results');
    var prints = [
        {
            name: "startLoan",
            value: startLoan,
            fixed: false
        },
        {
            name: "currentLoan",
            value: currentLoan,
            fixed: false
        },
        {
            name: "totalInvestment",
            value: totalInvestment,
            fixed: true
        },
        {
            name: "totalInvestmentProfit",
            value: investProfit,
            fixed: true
        },
        {
            name: "months",
            value: months,
            fixed: false
        },
        {
            name: "years",
            value: months / 12,
            fixed: true
        },
        {
            name: "totalIntrestPaid",
            value: totalIntrestPaid,
            fixed: false
        },
        {
            name: "totalAfterTaxDeduction",
            value: totalIntrestPaid * 0.7,
            fixed: false
        },
        {
            name: "intrestPaidByMonthWithoutTax",
            value: totalIntrestPaid * 0.7 / months,
            fixed: false
        },
        {
            name: "mortagePaid",
            value: mortgagePerMonth * months,
            fixed: false
        },
    ];
    let innerHtml = "";
    for(var i = 0; i < prints.length; i++){
        var x = prints[i];
        innerHtml += createP(x.name, x.value);
    }

    resultsDiv.innerHTML = innerHtml;
}

function calculate(profit) {
    const p = profit / 30;
    return p * 22;
}

function createP(name, value, fixed) {
    if(fixed === true){
        return `<p>${name}: ${formatNumber(value).toFixed(2)}</p> \n`;    
    }
    return `<p>${name}: ${formatNumber(value)}</p> \n`;
}

// Function to format numbers with thousands separators
function formatNumber(number) {
    return number.toLocaleString("sv-SE");
}

function updateInterestValue(value) {
    document.getElementById('interestValue').textContent = value;
}


function investReturnPerMonthValue(value) {
    document.getElementById('investReturnPerMonthValue').textContent = value;
}
