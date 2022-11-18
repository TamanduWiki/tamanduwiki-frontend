import styled from '@emotion/styled';

// TODO use DS tokens
export interface StyledDivProps {
  direction?: 'column' | 'row';
  gap?: string;
  margin?: string;
  padding?: string;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start';
  width?: 'hug-content' | 'fit-parent';
  height?: 'hug-content' | 'fit-parent';
  backgroundColor?: 'transparent' | "white";
  borderRadius?: 'none' | 'md';
}

export const StyledDiv = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  gap: ${({ gap }) => gap || '0'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  width: ${({ width }) => width === 'fit-parent' ? '100%' : 'auto'};
  height: ${({ height }) => height === 'fit-parent' ? '100%' : 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius === 'md' ? "8px" : "0px"};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;
