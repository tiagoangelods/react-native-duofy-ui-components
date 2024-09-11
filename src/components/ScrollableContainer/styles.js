import tw from '../../customTW';
export const getStyles = ({ customTw }) => {
    const base = tw `
    font-sans flex
    ${customTw}
  `;
    return { base };
};
