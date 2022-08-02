/*
Modeling a bank account
Write a program that creates an account object with the following characteristics:
*/

//A name property set to "Alex".
//A balance property set to 0.
//A credit method adding the (positive or negative) value passed as an argument to the account balance.
//A describe method returning the account description.
//Use this object to show its description, crediting 250, debiting 80, then show its description again.

let bankAccount = {
  name: "Alex",
  balance: 0,
  
  amount(){
    this.creditAmount = +prompt("Enter credit amount")
    this.debitAmount = +prompt("Enter debit amount")
  },

  credit() {
    return this.creditAmount
  },
  
  debit() {
    return this.debitAmount
  },

  updateBalance() {
    return this.balance + this.creditAmount - this.debitAmount;
  },

  describe() {
    return `${
      this.name
    } was credited with ${this.credit()} dollars on Sunday. He spent ${this.debit()} dollars on shoes at Walmart. His balance is now ${this.updateBalance()} dollars`;
  }
};

//Use this object to show its description, crediting 250, debiting 80, then show its description again.