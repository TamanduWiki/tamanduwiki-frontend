import { ThemeBorderRadiusOption } from '@/styles/theme/borderRadius';
import { ThemeSpacingOption } from '@/styles/theme/spacing';
import styled from '@emotion/styled';

// TODO use DS tokens
export interface StyledDivProps {
  direction?: 'column' | 'row';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'baseline' | 'center' | 'flex-end' | 'flex-start';
  width?: 'hug-content' | 'fit-parent';
  height?: 'hug-content' | 'fit-parent';
  backgroundColor?: 'transparent' | "white";
  borderRadius?: ThemeBorderRadiusOption;
  gap?: ThemeSpacingOption;
  padding?: ThemeSpacingOption;
  margin?: ThemeSpacingOption;
}

export const StyledDiv = styled.div<StyledDivProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  width: ${({ width }) => width === 'fit-parent' ? '100%' : 'auto'};
  height: ${({ height }) => height === 'fit-parent' ? '100%' : 'auto'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  gap: ${({ theme, gap }) => gap ? theme.spacing[gap] : '0'};
  margin: ${({ theme, margin }) => margin ? theme.spacing[margin] : '0'};
  padding: ${({ theme, padding }) => padding ? theme.spacing[padding] : '0'};
  border-radius: ${({ theme, borderRadius }) => theme.borderRadius[borderRadius]};
`;
