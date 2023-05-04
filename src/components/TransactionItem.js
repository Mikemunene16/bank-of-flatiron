import React from "react";


function TransactionItem({amount, category, date, description, id, onDeleteTransaction}){
    //Deleting the transaction by id
    function handleDelete(){
        fetch(`http://localhost:8001/transactions/${id}`, {
            method:"DELETE", 
            headers:{"Content-Type":"application/json"}
        })
        //Calling the delete function
        onDeleteTransaction(id)
      }

    
    return (
        //displaying data in the table
        <tr>  
            <td>{id}</td>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td><button class="deletebutton" style={{float: 'left'}} onClick={handleDelete}><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>   
            
        </tr>
    )
}

export default TransactionItem