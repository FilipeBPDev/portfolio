import { NavLink } from "react-router-dom";

export default function Navbar() {
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute(
        "data-theme",
        current === "dark" ? "light" : "dark"
      );
      console.log(document.documentElement.getAttribute('data-theme'));

}

{/* [JS] toggleTheme() → altera data-theme no <html>
     ↓
[HTML] <html data-theme="dark"> ou "light"
     ↓
[CSS] [data-theme='dark'] muda variáveis
     ↓
[Estilo] body usa var(--color-bg) → muda aparência*/}

return (
<nav className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/sobre">Sobre</NavLink>
    <NavLink to="/projetos">Projetos</NavLink>
    <NavLink to="/contato">Contato</NavLink>

    {/*botão apra alterar tema*/}
    <button onClick={toggleTheme} className="theme-toggle">
      Tema
    </button>

</nav>
);
}
