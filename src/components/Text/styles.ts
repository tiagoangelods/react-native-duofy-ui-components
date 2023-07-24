import tw from '../../customTW';

export const getStyles = ({
  customClasses,
  size,
  weight,
  color,
  opacity,
  brandColor,
}: any) => {
  const base = tw`
    ${customClasses}
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
  `;

  return { base };
};
