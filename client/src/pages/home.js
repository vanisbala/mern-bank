import React,{ useState } from 'react'
import Cardentry from '../components/cardentry';
function Home(){
  const [newuser, setNewuser] = useState(false)

  function handleNewuser(){
    setNewuser = true;


  }
  function handleExistinguser(){
    setNewuser = false;
    

  }

  return (
    <Cardentry
      txtcolor="black"
      header="West Valley Bank"
      title="Welcome! "
      text="To start your transactions..." 
      body={ 
        <>
          New User ? <button type="submit" className="btn btn-outline-dark btn-sm" value="newuser" onClick={handleNewuser}>Signup</button><br/><br/>
          
          Existing User ? <button type="submit" className="btn btn-outline-dark btn-sm" value="existinguser" onClick={handleExistinguser}>Login</button> 
        </>
      }
      />
  );  
}

export default Home;