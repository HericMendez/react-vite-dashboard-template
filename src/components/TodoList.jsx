
const ToDoList = () => {
  // Itens hard-coded
  const tasks = [
    { id: 1, text: "Sidebar retrátil", completed: true },
    { id: 2, text: "Ícones de user e dark mode no header", completed: true },

    { id: 3, text: "Tela de Login", completed: true },
    { id: 4, text: "Autenticação de login/rotas protegidas", completed: true },
    { id: 5, text: "Dark Mode", completed: false },
    { id: 6, text: "User settings salvas no localstorage", completed: false },
    { id: 7, text: "Componente de tabela", completed: true },
    { id: 8, text: "Busca na tabela (local)", completed: true },
    { id: 9, text: "Tela de Overview", completed: false },
    { id: 10, text: "Integração com mock api", completed: false },
    { id: 11, text: "Configurar caminhos absolutos", completed: false },
    {
      id: 12,
      text: "Corrigir bug de redirecionamento em login/logout",
      completed: true,
    },
  ];


  return (
    <div className="todo-list">
      <h2>Template To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}

          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
