import tw from '../../customTW';

export const getStyles = ({ variant, customTw }: any) => {
  const getVariant: any = {
    primary: {
      default: '',
      bg: 'bg-brand-primary',
      textColor: 'white',
      shadow: '',
    },
    secondary: {
      default: '',
      bg: 'bg-brand-secondary',
      textColor: 'white',
      shadow: '',
    },
    outline: {
      default: 'border-brand-primary border-solid border',
      bg: 'bg-transparent',
      textColor: 'brand-primary ',
      shadow: '',
    },
    transparent: {
      default: 'border-0',
      bg: 'bg-transparent',
      textColor: 'brand-primary ',
      shadow: '',
    },
    card: {
      default: 'border-0',
      bg: 'bg-white',
      textColor: 'brand-black-primary',
      shadow: 'shadow-lg',
    },
  };

  const base = tw`
    flex rounded-lg h-12 justify-center items-center
    ${getVariant[variant].default}
    ${getVariant[variant].bg}
    ${getVariant[variant].shadow}
    ${customTw}
  `;

  const textColor = getVariant[variant].textColor;

  return { base, textColor };
};
