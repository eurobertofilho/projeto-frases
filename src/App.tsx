import { useState } from "react"
import './App.css'

import logo from './assets/logo.png'

export default function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        <button className="category-button">Motivação</button>
        <button className="category-button">Bom dia</button>
      </section>

      <button className="button-frase">Gerar Frase</button>

      <h3 className="text-frase">Frase bem legal aqui</h3>
    </div>
  )
}
