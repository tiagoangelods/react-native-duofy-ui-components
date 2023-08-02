import tw from '../../customTW';

export const getStyles = ({
  customTw,
  size,
  weight,
  color,
  opacity,
  brandColor,
}: any) => {
  const base = tw`
    font-sans
    text-${size?.toLowerCase()}
    font-${weight?.toLowerCase()}
    text-${
      color?.toLowerCase()?.length
        ? `${color?.toLowerCase()}${
            opacity?.toLowerCase()?.length ? `-${opacity?.toLowerCase()}` : ''
          }`
        : brandColor?.toLowerCase()?.length
        ? `brand-${brandColor?.toLowerCase()}-${
            opacity?.toLowerCase()?.length ? opacity?.toLowerCase() : 'primary'
          }`
        : 'brand-black-primary'
    }
    ${customTw}
  `;

  return { base };
};
