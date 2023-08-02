import tw from '../../customTW';

export const getStyles = ({ customTw }: any) => {
  const base = tw`
    flex
    ${customTw}
  `;
  return { base };
};
