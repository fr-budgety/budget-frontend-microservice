import _ from 'lodash';

/**
 * @description Take an array of objects from expenses, return outgoings, incomes array and balance
 * @param {array} expensesArr 
 * @returns {array} outgoingsArr {array}incomesArr {int} balance
 */
export const balanceCalculation = (expensesArr, startingBalance) =>
{
  let outgoingsArr = [];
  let incomesArr = [];
  let balanceAmount = 0;
  balanceAmount = balanceAmount + +startingBalance;
  let currentExpense = {
    type: '',
    amount: 0,
  }
  expensesArr.map(expense => {
    currentExpense = expense;
    if(currentExpense.type==='expense'){
      balanceAmount = +balanceAmount - +currentExpense.amount;
      outgoingsArr.push(currentExpense);
    }
    if(currentExpense.type==='income'){
      balanceAmount = +balanceAmount + +currentExpense.amount;
      incomesArr.push(currentExpense);
    }
  })
  return {
    outgoingsArr,
    incomesArr,
    balanceAmount
  }
}