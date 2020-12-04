import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmiting = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount
    }
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmiting}>
        <div className='form-control'>
          <label htmlFor='text'>Description</label>
          <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} 
          placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} 
          placeholder='Enter Amount...' />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}
