import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !description || !category) {
      setError("Preencha todos os campos.");
      return;
    }
    addTask(value, description, category);
    setValue("");
    setDescription("");
    setCategory("");
    setError("");
    setSuccessMessage("Tarefa criada com sucesso!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className='task-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite o título'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <textarea
          rows="5"
          maxLength="500"
          placeholder='Digite a descrição'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Pessoal">Atividades Pessoais</option>
          <option value="Trabalho">Atividades do Trabalho</option>
          <option value="Estudo">Atividades de Estudos</option>
        </select>
        <div>
          <button type="submit">Criar tarefa</button>
          
        </div>
        <div className='error'>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
