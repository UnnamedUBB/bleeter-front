import {Link } from "react-router-dom";
function FormSign() {

  return (
    <>
    <div className="content-center">
      <img className="object-center inline w-40 h-40" src="Logo.svg" alt="Witaj" />

      <h1 className="text-5xl mt-5">Utwórz konto</h1>
      <p className="mt-4">Podaj email oraz hasło aby utworzyć konto</p>

      <form className="mt-10">
        <input type="text" placeholder="Imie i Nazwisko" className="input bg-black rounded-xl text-center h-10 w-80"/>
        <p className="text-slate-600 ">Podaj swoje imie i nazwisko</p>
        <input type="email" placeholder="Imie@exampke.com" className="input bg-black rounded-xl text-center h-10 w-80 mt-4"/>
        <p className="text-slate-600">Podaj swój email</p>
        <div className="mt-4"></div>
        <input type="password" placeholder="ExamplePassword"
               className="input bg-black rounded-xl text-center h-10 w-80"/>
        <p className="text-slate-600">Podaj swoje hasło</p>
      </form>
      <Link to="/LoginPage" className="text-blue-500">
        <button className="btn mt-5 bg-green-600 rounded-xl w-80 h-10 text-black">Utwórz konto</button>
      </Link>

      <p className="mt-4">Masz już konto?</p>

      <Link to="/LoginPage" className="text-blue-500">
      <button className="btn mt-5 bg-green-600 rounded-xl w-40 h-10 text-black">Zaloguj się</button>
      </Link>

    </div>
    </>
  )
}

export default FormSign
