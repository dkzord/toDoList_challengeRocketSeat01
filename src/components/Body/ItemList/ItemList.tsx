import { Trash } from 'phosphor-react';
import { useState } from 'react';

import * as S from './styles';

export default function ItemList() {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleCheckbox() {
    setIsCompleted(!isCompleted);
  }

  return (
    <S.Container>
      <S.ContainerWidth>
        <S.InputCheckbox
          type="checkbox"
          name="readCheckbox"
          id="readCheckbox"
          readOnly
          onClick={() => handleCheckbox}
        />
        <S.TextContent>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </S.TextContent>
      </S.ContainerWidth>
      <S.Button>
        <Trash size={22} />
      </S.Button>
    </S.Container>
  );
}
