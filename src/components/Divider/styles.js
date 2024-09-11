import tw from '../../customTW';
export const getStyles = ({ customTw, size }) => {
    const base = tw `
    flex flex-row pt-2 pb-2 items-center font-sans
    ${customTw}
  `;
    const divider = tw `
    flex font-sans grow h-[${size}px] bg-brand-primary-gray-light
  `;
    const dividerText = tw `
    font-sans pl-3 pr-3
  `;
    return { base, divider, dividerText };
};
