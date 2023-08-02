import tw from '../../customTW';

export const getStyles = ({ customTw }: any) => {
  const base = tw`
    flex bg-transparent font-sans
    ${customTw}
  `;
  return { base };
};
