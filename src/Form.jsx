import React, { useState } from 'react'
import './App.css'

function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmed] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function checkErrors(e){
        setErrorMessage("");
        e.preventDefault();
        
        if(name.length == 0){
            setErrorMessage(errorMessage => errorMessage + "Անունը պետք է գրված լինի: ");
        }
        if(surname.length == 0){
            setErrorMessage(errorMessage => errorMessage + "Ազգանունը պետք է գրված լինի: ");
        }
        if(!email.includes("@")){
            setErrorMessage(errorMessage => errorMessage + "Էլ․ հասցեն պետք է պարունակի @: ");
        }
        if(age <= 0){
            setErrorMessage(errorMessage => errorMessage + "Տարիքը պետք է մեծ լինի 0-ից: ");
        }
        if(password.length < 8){
            setErrorMessage(errorMessage => errorMessage + "Գաղտնաբառը պետք է բաղկացած լինի առնվազն 8 նիշից: ");
        }
        if(password != confirmedPassword){
            setErrorMessage(errorMessage => errorMessage + "Գաղտնաբառերը պետք է նույնը լինեն: ");
        }

        if(errorMessage.length == 0){
            setErrorMessage(errorMessage => errorMessage + "Դուք հաջողությամբ գրանցվեցիք։");
        }
    }

  return (
    <div id="content">
        <form onSubmit={checkErrors}>
            <div id="nameAndSurname">
                <div>
                    <label htmlFor="name">Անուն</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => {setName(e.target.value)}} style={{marginRight: "10px"}} />
                </div>

                <div>
                    <label htmlFor="surname">Ազգանուն</label>
                    <input type="text" name="surname" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                </div>
            </div>

            <label htmlFor="email">Էլ․ Հասցե</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="age">Տարիք</label>
            <input type="number" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} />

            <p>Սեռ</p>
            <div id="gender">
                <input type="radio" name="gender" id="female" defaultChecked={true} />
                <label htmlFor="female">Իգական</label>
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Արական</label>
            </div>

            <label htmlFor="password">Գաղտնաբառ</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="confirmedPassword">Կրկնել Գաղտնաբառը</label>
            <input type="password" name="confirmedPassword" id="confirmedPassword" value={confirmedPassword} onChange={(e) => setConfirmed(e.target.value)} />

            <button>Գրանցվել</button>
        </form>
        <p>{errorMessage}</p>
    </div>
  )
}

export default Form