import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ItemList from './ItemList/ItemList';
import * as S from './styles';

import Clipboard from '../../assets/images/Clipboard.svg';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export default function Body() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [arrayTasks, setArrayTasks] = useState<Task[]>([]);

  function handleCreateNewTask() {
    if (!newTaskTitle || /^\s*$/.test(newTaskTitle)) return;

    const id = uuid();

    const newTask = {
      id,
      title: newTaskTitle,
      isComplete: false,
    };

    setArrayTasks([...arrayTasks, newTask]);
    setNewTaskTitle('');
  }

  function handleDeleteTask(id: string) {
    console.log('entrou aqui');

    const newArray = arrayTasks.filter(task => task.id !== id);
    setArrayTasks(newArray);
  }

  return (
    <S.Container>
      <S.ContainerWidth>
        <S.Search>
          <S.Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={e => setNewTaskTitle(e.target.value)}
          />
          <S.Button type="submit" onClick={() => handleCreateNewTask()}>
            Criar
            <PlusCircle size={15} />
          </S.Button>
        </S.Search>
        <S.Info>
          <S.TaskCreate>
            Tarefas criadas <span>{arrayTasks.length}</span>
          </S.TaskCreate>
          <S.TaskComplete>
            Concluídas
            <span>2 de {arrayTasks.length}</span>
          </S.TaskComplete>
        </S.Info>
        {arrayTasks.length > 0 ? (
          arrayTasks.map(task => (
            <ItemList
              key={task.id}
              data={task}
              handleDeleteTask={() => handleDeleteTask}
            />
          ))
        ) : (
          <S.TaskListVoid>
            <div>
              <div className="alignIcon">
                <S.Image src={Clipboard} alt="Clipboard" />
              </div>

              <div className="settinStyle">
                <div>Você ainda não tem tarefas cadastradas</div>
                <div>Crie tarefas e organize seus itens a fazer</div>
              </div>
            </div>
          </S.TaskListVoid>
        )}
      </S.ContainerWidth>
    </S.Container>
  );
}
