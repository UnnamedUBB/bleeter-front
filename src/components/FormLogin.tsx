import {Link } from "react-router-dom";
function FormLogin() {

  return (
    <>
    <div className="content-center ">
      <img className="object-center inline w-40 h-40" src="Logo.svg" alt="Witaj" />

      <h1 className="text-5xl mt-5">Zaloguj się</h1>
      <p className="mt-4">Podaj email oraz hasło aby się zalogować</p>

      <form className="mt-10">
        <input type="email" placeholder="Imie@exampke.com" className="input bg-black rounded-xl text-center h-10 w-80" />
        <p className="text-slate-600">Podaj swój email</p>
        <div className="mt-4"></div>
        <input type="password" placeholder="ExamplePassword" className="input bg-black rounded-xl text-center h-10 w-80" />
        <p className="text-slate-600">Podaj swoje hasło</p>
      </form>
      <Link to="/" className="text-blue-500">
      <button className="btn mt-5 bg-green-600 rounded-xl w-80 h-10 text-black">Zaloguj się</button>
      </Link>
      
      <p className="mt-4">Nie masz konta?</p>

      <Link to="/SignPage" className="text-blue-500">
      <button className="btn mt-5 bg-green-600 rounded-xl w-40 h-10 text-black">Utwórz konto</button>
      </Link>

    </div>
    </>
  )
}

export default FormLogin
