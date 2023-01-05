/* eslint-disable array-callback-return */
import { Trash } from 'phosphor-react';
import { useState } from 'react';

import * as S from './styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface handleDeleteTaskProps {
  data: any;
  handleDeleteTask: (id: string) => void;
}

export default function ItemList({
  data,
  handleDeleteTask,
}: handleDeleteTaskProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <S.Container>
      <S.ContainerWidth>
        <S.InputCheckbox
          type="checkbox"
          name="readCheckbox"
          id="readCheckbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        <S.TextContent className={completed ? 'completedTask' : ''}>
          {data.title}
        </S.TextContent>
      </S.ContainerWidth>
      <S.Button onClick={() => handleDeleteTask(data.id)}>
        <Trash size={22} />
      </S.Button>
    </S.Container>
  );
}
