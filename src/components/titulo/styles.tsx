import styled from 'styled-components';
import temaLight from '../../themes/light';
import { Props } from './index';
type Theme = typeof temaLight;

export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.theme as Theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`;
