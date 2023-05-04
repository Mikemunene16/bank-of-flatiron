// import React, { useState, useEffect } from "react"
import React, {useState, useEffect} from 'react';
// import data from './db.json'
import Table from './Table';
import Header from './Header';
import NewTransaction from './NewTransaction';

function Transactions() {
    const [transactions, setTransactions] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(()=> {
        fetch('http://localhost:8001/transactions')
        .then((resp) => resp.json())
        .then((data) => {
            setTransactions(data)
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) return <h3>Loading...</h3>


  //Adding the new transaction to the data
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }

  //Fetching the data that is searched using the description
  const fetchDescription = (search) => {
    const fetchResults = transactions.filter(transaction => transaction.description === search)
    setTransactions(fetchResults)   
  }

  //Deleting out transaction
  const handleDeleteTransaction = (deletedTransaction) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== deletedTransaction));
  }
  //Sorting the transactions by category
  function sortByCategory() {
    const sortedTransactions = [...transactions].sort((a, b) => a.category.localeCompare(b.category));
    setTransactions(sortedTransactions);
  }
  //Sorting the transactions by description
  function sortByDescription() {
    const sortedTransactions = [...transactions].sort((a, b) => a.description.localeCompare(b.description));
    setTransactions(sortedTransactions);
  }
  

    return (
        <div>
            {/* <Table transactions={transactions}/> */}
            <Header getDescription = {fetchDescription}/>
            <Table transactions = {transactions} onDeleteTransaction={handleDeleteTransaction} sortByCategory = {sortByCategory} sortByDescription={sortByDescription}/>
            <NewTransaction onTransactionSubmit={handleAddTransaction}/>
        </div>
    )

    // return <button onClick={handleClick}>Click to Fetch!</button>
}

export default Transactions;