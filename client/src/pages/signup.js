import Cardentry from "../components/cardentry";
import React from 'react'

function Signup(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
  
    return (
      <Cardentry
        txtcolor="dark"

        bgcolor="light"
        header="Create Account"
        status={status}
        body={show ? 
          <SignupForm setShow={setShow}/> : 
          <SignupMsg setShow={setShow}/>}
      />
    )
  }
  
  function SignupMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>Add another account</button>
    </>);
  }
  
  function SignupForm(props){
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
  
    function handleCreate(){
      console.log(name,email,password);
      const url = `/account/signup/${name}/${email}/${password}`;
      (async () => {
          var res  = await fetch(url);
          var data = await res.json();    
          console.log(data);        
      })();
      props.setShow(false);
    }    
  
    return (<>
  
      Name<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter name" 
        value={name} 
        onChange={e => setName(e.currentTarget.value)} /><br/>
  
      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        value={password} 
        onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
      <button type="submit" 
        className="btn btn-outline-dark" 
        onClick={handleCreate}>Create Account</button>
  
    </>);
  }

  export default Signup;