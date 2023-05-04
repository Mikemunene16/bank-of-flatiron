import React,{useState} from "react";

function NewTransaction({onTransactionSubmit}){
    //Declaring the variables 
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")
    const [category, setCategory]=useState("")

    //Defining the submit function that will be called when the form is submitted
    function handleSubmit(e){
        e.preventDefault()

        //Defining the object containing data that will be passed to our json server
        const newTransaction = {
            amount:amount,
            description:description,
            date:date,
            category:category
        }

        //returning fetch function that will POST the data added
        fetch("http://localhost:8001/transactions",{
            method:"POST", 
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTransaction)
        })
        .then(resp => resp.json())
        //calling the submit function that will submit the new transaction
        .then(data => onTransactionSubmit(data))
    }
    return (
        //displaying the form that will add a new transaction
        <form className="addNewTransaction" onSubmit={handleSubmit} id="add Transaction">
            <h2>Add New Transaction</h2>
            <label>Date</label> 
            <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                
            <label>Description</label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            
            <label>Amount</label>
            <input type="text" value={amount} onChange={e => setAmount(e.target.value)}/>
            
            <label>Categories
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    
                    <option>Food</option>
                    <option>Income</option>
                    <option>Fashion</option>
                    <option>Transportation</option>
                    <option>Entertainment</option>
                    <option>Housing</option>
                    
                </select>
            </label>
            <button>Submit</button>

        </form>
    )

}

export default NewTransaction