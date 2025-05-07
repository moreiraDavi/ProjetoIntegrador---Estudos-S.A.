import React, { useState } from "react";

import styles from "./AgendaForm.module.css";''

const AgendaForm = () => {
  const [estado, setEstado] = useState("");
  const [prova, setProva] = useState("");
  const [turno, setTurno] = useState("");
  const [diasEstudo, setDiasEstudo] = useState([]);
  const [duracaoSemanas, setDuracaoSemanas] = useState("3");

  const diasDaSemana = [
    "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
  ];

  const handleDiaToggle = (dia) => {
    setDiasEstudo((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dados = {
      estado,
      prova,
      turno,
      diasEstudo,
      duracaoSemanas,
    };

    const res = await fetch("http://localhost:3001/gerar-rotina", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    const data = await res.json();
    alert("Rotina gerada:\n\n" + data.rotina);
  };

  return (
    <div className="agenda-form">
      <h1>CRIE SUA AGENDA</h1>
      <p>Personalize seu plano de estudos selecionando suas preferências.</p>

      <form onSubmit={handleSubmit}>
        <section>
          <h3>LOCAÇÃO E PROVAS</h3>
          <label>Estado</label>
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="">Selecione seu estado</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
            {/* ... */}
          </select>

          <label>Prova</label>
          <input
            type="text"
            value={prova}
            onChange={(e) => setProva(e.target.value)}
            placeholder="Digite o concurso"
          />
        </section>

        <section>
          <h3>PREFERÊNCIAS DO ESTUDANTE</h3>
          <label>Turno</label>
          <select value={turno} onChange={(e) => setTurno(e.target.value)}>
            <option value="">Selecione o turno</option>
            <option value="Manhã (6:00–12:00)">Manhã</option>
            <option value="Tarde (12:00–18:00)">Tarde</option>
            <option value="Noite (18:00–23:00)">Noite</option>
            <option value="Madrugada (00:00–3:00)">Madrugada</option>
          </select>

          <label>Dias de Estudo</label>
          <div className="dias-checkbox">
            {diasDaSemana.map((dia) => (
              <label key={dia}>
                <input
                  type="checkbox"
                  checked={diasEstudo.includes(dia)}
                  onChange={() => handleDiaToggle(dia)}
                />
                {dia}
              </label>
            ))}
          </div>

          <label>Plano de Duração</label>
          <select
            value={duracaoSemanas}
            onChange={(e) => setDuracaoSemanas(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((semana) => (
              <option key={semana} value={semana}>
                {semana} semanas
              </option>
            ))}
          </select>
        </section>

        <button type="submit">Criar minha Agenda</button>
      </form>
    </div>
  );
};

export default AgendaForm;
