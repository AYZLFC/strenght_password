import { useState, useEffect } from "react";

function Password(props) {
  const [strength, setStrength] = useState("Weak")
  const {password, setButtonDisabled } = props

  useEffect(()=>{
    //console.log(password.length)
    if (password.length > 2 && password.length < 7) {
        setStrength("Medium")
        setButtonDisabled(false)
    }
    else if (password.length>6){
        setStrength("Strong")
        setButtonDisabled(false)
    }
    else{
        setStrength("Weak")
        setButtonDisabled(true)
    }
    
  },[password,setButtonDisabled])
    
  return (
    <div className="Password">
        <p>{strength} Password</p>
    </div>
  );
}

export default Password;