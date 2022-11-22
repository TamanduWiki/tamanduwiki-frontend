export type ThemeBorderRadiusOption = 'xs' | 'sm' | 'md' | 'circle';

export type ThemeBorderRadius = { [key in ThemeBorderRadiusOption]: string };

export const borderRadius: ThemeBorderRadius = {
  xs:     '4px',
  sm:     '8px',
  md:     '16px',
  circle: '50%',
};
