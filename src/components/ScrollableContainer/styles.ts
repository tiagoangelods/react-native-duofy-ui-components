import tw from '../../customTW';

export const getStyles = ({ customTw }: any) => {
  const base = tw`
    font-sans flex
    ${customTw}
  `;
  return { base };
};
