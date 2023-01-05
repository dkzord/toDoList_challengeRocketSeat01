/* eslint-disable array-callback-return */
import { Trash } from 'phosphor-react';

import * as S from './styles';
import { IItemProps } from './typing';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface taskProps {
  data: IItemProps;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export default function ItemList({
  data,
  deleteTask,
  completeTask,
}: taskProps) {
  function handleDeleteTask(id: string) {
    deleteTask(id);
  }

  function handleCompleteTask(id: string) {
    completeTask(id);
  }

  return (
    <S.Container>
      <S.ContainerWidth>
        <S.InputCheckbox
          type="checkbox"
          name="readCheckbox"
          id="readCheckbox"
          checked={data.isComplete}
          onChange={() => handleCompleteTask(data.id)}
        />
        <S.TextContent className={data.isComplete ? 'completedTask' : ''}>
          {data.title}
        </S.TextContent>
      </S.ContainerWidth>
      <S.Button onClick={() => handleDeleteTask(data.id)}>
        <Trash size={22} />
      </S.Button>
    </S.Container>
  );
}
