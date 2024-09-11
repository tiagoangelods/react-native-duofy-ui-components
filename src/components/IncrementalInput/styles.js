import tw from '../../customTW';
export const getStyles = (props) => {
    const { plusDisabled, minusDisabled, inputDisabled } = props;
    const container = tw `
    flex flex-row rounded-full border border-solid border-brand-black-lighter h-8
    items-center justify-between
  `;
    const input = tw `flex flex-row items-center justify-center grow text-center font-bold p-0 m-0 ${inputDisabled ? 'text-brand-black-light' : 'text-brand-black-primary'}`;
    const incColor = plusDisabled
        ? tw.color(`brand-black-light`)
        : tw.color(`brand-primary`);
    const decColor = minusDisabled
        ? tw.color(`brand-black-light`)
        : tw.color(`brand-black-lighter`);
    return { container, input, incColor, decColor };
};
