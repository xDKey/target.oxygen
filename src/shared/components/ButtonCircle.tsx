import styled from 'styled-components';
import { Colors } from '../enums/colors.enum';

type TButtonCircleProps = {
  title: string;
  color: Colors;
};

export default function ButtonCircle({ title, color }: TButtonCircleProps) {
  return <StyledButtonCircle color={color}>{title}</StyledButtonCircle>;
}

const StyledButtonCircle = styled.div`
  background-color: ${(props) => props.color};
`;
