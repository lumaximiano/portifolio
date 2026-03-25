import styled from 'styled-components';
import { P } from '../../components/Paragrafo/styles';
import temaLight from '../../themes/light';

type Theme = typeof temaLight;

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size: 10px;
  font-wight: bold;
  background-color: ${(props) => (props.theme as Theme).corFundoBotao};
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;
