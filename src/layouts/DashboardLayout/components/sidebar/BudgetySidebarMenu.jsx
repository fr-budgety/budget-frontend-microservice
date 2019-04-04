import React, { Component } from "react";
import Accounts from "../../../../images/menu/accounts.png";
import Categories from "../../../../images/menu/categories.png";
import Dashboard from "../../../../images/menu/dashboard.png";
import Expenses from "../../../../images/menu/expenses.png";
import BudgetySidebarButton from "./BudgetySidebarButton";

class BudgetySidebarMenu extends Component {
  render() {
    return (
      <div className="BudgetySidebarMenu">
        <BudgetySidebarButton icon={Dashboard} text="Dashboard" link="/dashboard" name="dashboard"/>
        <BudgetySidebarButton icon={Accounts} text="Accounts" link="/accounts" name="accounts"/>
        <BudgetySidebarButton icon={Expenses} text="Expenses" link="/expenses" name="expenses"/>
        <BudgetySidebarButton icon={Categories} text="Categories" link="/categories" name="categories"/>
      </div>
    );
  }
}

export default BudgetySidebarMenu;
