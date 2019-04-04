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
/**
 * @description Returns an array of object with all expenses categories and the amount of every category expenses
 * 
 * @param {object} expenses 
 * @param {object} categories 
 * @returns {array} resultCompleted
 */

export const setCategoriesDetail = (expenses, categories) =>{
  let categoriesArray = []
  //Execute only if isn't empty filteredExpenses array
  if(!_.isEmpty(expenses) && !_.isEmpty(categories)){      
    //Set an array with all categories even duplicates categoriesArray
    expenses.forEach(element => {
      categories.forEach(category=>{
        if (category._id === element.category){
          categoriesArray.push({
            category: category.name,
            amount:element.amount
        })
        }
      })
    });
    //Array with no duplicates category
    let result = [];
    //Array of objects with categories and amount
    let resultCompleted = []
    categoriesArray.forEach((item)=>{
      //If is not already present in resultCompleted
      if(result.indexOf(item.category)<0){
        //Push the entire array inside resultCompleted
        result.push(item.category)
        resultCompleted.push({category: item.category, amount: item.amount})
      } else {
        //If it is already present loop resultCompleted to find the category object and sum the current item amount
       let amount = item.amount
        resultCompleted.map(result => {
          if(result.category === item.category){
            result.amount = (+result.amount + +amount).toString();
          }
        })
      }
    })
     return resultCompleted;
  }

}