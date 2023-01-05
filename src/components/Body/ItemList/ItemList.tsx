/* eslint-disable array-callback-return */
import { Trash } from 'phosphor-react';
import { useState } from 'react';

import * as S from './styles';

export default function ItemList({ data }: any) {
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
        <S.TextContent>{data.title}</S.TextContent>
      </S.ContainerWidth>
      <S.Button>
        <Trash size={22} />
      </S.Button>
    </S.Container>
  );
}
