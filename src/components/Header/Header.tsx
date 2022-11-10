import * as S from './styles';

import brandSVG from '../../assets/images/brandToDo.svg';

export default function Header() {
  return (
    <S.Header>
      <S.Image src={brandSVG} width="32px" height="82px" />
      <S.Title>
        to<span>do</span>
      </S.Title>
    </S.Header>
  );
}
