import "./Registro.css";

const Registro = () => {
  return (
    <div className="container">

      <div className="left-side">

        <div className="text-container">
          <h1 id="greetings-title">Olá,</h1>
          <p id="greetings-text">Por favor, registre-se para continuar</p>
        </div>

          <form className="form-container">
            <h1 id="form-title">Registro</h1>

            <input className="teste-style" type="text" placeholder="Nome" onFocus={(e) => e.target.value = ''}/>

            <input className="teste-style" type="text" placeholder="Usuário" onFocus={(e) => e.target.value = ''}/>

            <input className="teste-style" type="text" placeholder="Nascimento" onFocus={(e) => e.target.value = ''}/>

            <input className="teste-style" type="email" placeholder="Email" onFocus={(e) => e.target.value = ''}/>

            <input className="teste-style" type="password" placeholder="Senha" onFocus={(e) => e.target.value = ''}/>

            <input className="teste-style" type="password" placeholder="Confirmar Senha" onFocus={(e) => e.target.value = ''}/>

            <input type="submit" value="Registrar-se" />

            <p>Já possui uma conta? Faça Login</p>
          </form>

      </div>

      <div className="right-side"></div>

    </div>
  );
};

export default Registro;
