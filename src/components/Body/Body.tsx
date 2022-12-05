import { PlusCircle } from 'phosphor-react';
import * as S from './styles';

import Clipboard from '../../assets/images/Clipboard.svg';

export default function Body() {
  const tarefas = 5;
  const itemTrue = true;

  return (
    <S.Container>
      <S.ContainerWidth>
        <S.Search>
          <S.Input type="text" placeholder="Adicione uma nova tarefa" />
          <S.Button type="submit">
            Criar
            <PlusCircle size={15} />
          </S.Button>
        </S.Search>
        <S.Info>
          <S.TaskCreate>
            Tarefas criadas <span>{tarefas}</span>
          </S.TaskCreate>
          <S.TaskComplete>
            Concluídas
            <span>2 de 5</span>
          </S.TaskComplete>
        </S.Info>
        {itemTrue === true ? (
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
        ) : (
          <h1>vazio</h1>
        )}
      </S.ContainerWidth>
    </S.Container>
  );
}
