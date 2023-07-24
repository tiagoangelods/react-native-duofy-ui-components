import tw from '../../customTW';

export const getStyles = ({variant}: any) => {
  const getVariant: any = {
    primary: {
      default: '',
      bg: 'bg-brand-primary',
      textColor: 'white',
    },
    secondary: {
      default: '',
      bg: 'bg-brand-secondary',
      textColor: 'white',
    },
    outline: {
      default: 'border-brand-primary border-solid border',
      bg: 'bg-transparent',
      textColor: 'brand-primary ',
    },
    transparent: {
      default: 'border-0',
      bg: 'bg-transparent',
      textColor: 'brand-primary ',
    },
  };

  const base = tw`
    flex rounded-lg h-12 content-center items-center p-3
    ${getVariant[variant].default}
    ${getVariant[variant].bg}
  `;

  const textColor = getVariant[variant].textColor;

  return {base, textColor};
};
