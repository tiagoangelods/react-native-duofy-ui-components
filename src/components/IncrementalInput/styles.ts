import tw from '../../customTW';

export const getStyles = () => {
  const container = tw`
    flex flex-row rounded-full border border-solid border-brand-black-lighter p-1
    items-center justify-between
  `;

  const incColor = tw.color(`brand-primary`);
  const decColor = tw.color(`brand-black-lighter`);

  return { container, incColor, decColor };
};
