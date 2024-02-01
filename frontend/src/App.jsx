import { useEffect, useState } from 'react';
import contractABI from './utils/abi.json';
import {ethers} from 'ethers';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [entitiesName, setEntitiesName] = useState('')
  const [entitiesAge, setEntitiesAge] = useState('')

  const contractAddress = '0xF248e7686A629ce7cC5515e28d8b4E31bed40B93';
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" }); 
  }


const setEntityAge = async () =>  {
  // Renamed function
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    try {
      const transaction = await contract.updateAge(age);
      await transaction.wait();
      alert('Age updated')
      setAge('')

    } catch (err) {
      console.error("Error:", err);
    }
  }
}

const setEntityName = async () =>  {
  // Renamed function
  if (typeof window.ethereum !== "undefined") {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    try {
      const transaction = await contract.updateName(name);
      await transaction.wait();
      alert('name updated')
      setAge('')

    } catch (err) {
      console.error("Error:", err);
    }
  }
}


  async function getEntityDetails() {
    // Renamed function
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getEntityDetails();
        setEntitiesName(transaction.toString().split(',')[0]);
        setEntitiesAge(transaction.toString().split(',')[1]);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  useEffect(() => {
    getEntityDetails()
  }, [setAge, setName])

  return (
    <div className='w-full h-screen flex flex-col bg-lime-200 gap-y-6'>
      <div className='mx-auto'>
          <div>
            <h4 className='text-slate-400'>name:</h4>
            <h4>{entitiesName && entitiesName}</h4>
          </div>
          <div >
            <h4 className='text-slate-400'>Age:</h4>
            <h4>{entitiesAge && entitiesAge}</h4>
          </div>
      </div>
      <div className='p-5 rounded-md bg-white flex flex-col mx-auto'>
        <div className=''>
            <input 
              type="text" 
              className='placeholder-slate-300'
              placeholder='eg. manoah'
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
            <button onClick={setEntityName} className='text-white bg-black p-2'>set name</button>
        </div>
        <div className='text'>
            <input 
              type="text" 
              className='placeholder-slate-300'
              placeholder='eg. 25'
              value={age}
              onChange={(e) => {setAge(e.target.value)}}
            />
            <button onClick={setEntityAge} className='text-white bg-black p-2'>set Age</button>
        </div>
      </div>
    </div>
  )
}

export default App
