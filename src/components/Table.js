import React from "react";
import TransactionItem from "./TransactionItem";

function Table({transactions, onDeleteTransaction, onUpdateTransaction,sortByCategory, sortByDescription}) {


    // Displaying the transactions from the json server
    const displayTransactions = transactions.map(transaction => {
        //returning each entry of the transactions to the TransactionItem Component
       return <TransactionItem key={transaction.id} id = {transaction.id} amount = {transaction.amount} category = {transaction.category} date = {transaction.date} description = {transaction.description} onDeleteTransaction = {onDeleteTransaction} onUpdateTransaction = {onUpdateTransaction}/>
    })

    return (
        //displaying the table
        <div>
            
            <table id="home">
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Category<button className="buttonCategory" onClick={sortByCategory} style={{float: 'right'}}><i class="fa fa-sort"></i></button>{/*Button that will handle sorting by category*/}</th>
                    <th>Description<button className="buttonDescription" onClick={sortByDescription} style={{float: 'right'}}><i class="fa fa-sort"></i></button>{/*Button that will handle sorting by description*/}</th>
                    <th>Amount</th>
                    <th>Delete</th>
                   
                </tr>
                {/*Calling the function that will display the data*/}
                {displayTransactions}      
            </table>    
        </div>
    );
}

export default Table;