import styled from '@emotion/styled';

// TODO use DS tokens
export interface StyledDivProps {
  direction?: 'column' | 'row';
  gap?: string;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start';
  width?: 'hug-content' | 'fit-parent';
  height?: 'hug-content' | 'fit-parent'
}

export const StyledDiv = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  gap: ${({ gap }) => gap || '0'};
  width: ${({ width }) => width === 'fit-parent' ? '100%' : 'auto'};
  height: ${({ height }) => height === 'fit-parent' ? '100%' : 'auto'};
`;
