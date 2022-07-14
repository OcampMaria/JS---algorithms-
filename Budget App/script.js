// hamburger menu
$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  });
  
  //   end menu / start budget form
  
  const amountInput = document.querySelector("#number");
  const addForm = document.querySelector("#addForm");
  const budgetAmount = document.querySelector("#budgetAmount");
  const balanceAmount = document.querySelector("#balanceAmount");
  
  const getBudgetAmount = (amount) => {
    if (!amount) {
      amountInput.style.border = "1px solid #b80c09";
      amountInput.placeholder = "input can not be empty";
      amountInput.style.color = "#b80c09";
      setTimeout(() => {
        amountInput.style.color = "#495057";
        amountInput.style.border = "1px solid gray";
      }, 3000);
    } else {
      budgetAmount.innerText = amount;
      balanceAmount.innerText = amount;
      // expenseForm.style.display = "none";
      // editForm.style.display = "none";
      amountInput.value = "";
    }
  };
  
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(amountInput.value);
  });
  1;
  // End BudgetInput form / start Expense List.
  const expForm = document.getElementById("expForm");
  let expName = document.getElementById("expName");
  let expNumber = document.getElementById("expNumber");
  
  let id = 0;
  let details = [];
  
  function addExpenses(name, number) {
    if (!name.length || !number.length) {
      expName.style.border = "1px solid #b80c09";
      expName.placeholder = "input can not be empty";
      expName.style.color = "#b80c09";
  
      expNumber.style.border = "1px solid #b80c09";
      expNumber.placeholder = "input can not be empty";
      expNumber.style.color = "#b80c09";
  
      setTimeout(() => {
        expName.style.color = "#495057";
        expName.style.border = "1px solid gray";
        expName.placeholder = "input can not be empty";
  
        expNumber.placeholder = "input can not be empty";
        expNumber.style.border = "1px solid gray";
        expNumber.style.color = "#495057";
      }, 3000);
    } else {
      const userExp = {
        id: id,
        name: name,
        number: parseInt(number),
      };
      details.push(userExp);
      console.log(details);
      displayExp(details);
      id++;
      expName.value = "";
      expNumber.value = "";
    }
  }
  
  expForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addExpenses(expName.value, expNumber.value);
  });
  
  // display expenses
  
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");
  const simulador = document.getElementById("simulador");
  
  function displayExp(details) {
    details.forEach((details) => {
      const div = document.createElement("div");
      div.innerHTML = `
      
      <h2> Expenses Summary </h2>
      <h3> Name: ${details.name}</h3> 
      <h3> Amount: ${details.number}</h3> 
      `;
  
      simulador.append(div);
      console.log("done append");
    });
    calcExpenses();
  }
  
  
  const expensesAmount = document.getElementById("expensesAmount");
  function calcExpenses() {
    let totalExp = 0;
    for (i = 0; i < details.length; i++) {
      totalExp = details[i].number + totalExp;
    }
    expensesAmount.innerText=totalExp;
    updateBalance();
  }
  
  function updateBalance() {
    balanceAmount.innerText =
      parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
  }
  