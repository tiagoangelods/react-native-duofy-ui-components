import tw from '../../customTW';

export const getStyles = ({ customTw }: any) => {
  const base = tw`
    flex
    bg-transparent
    ${customTw}
  `;
  return { base };
};
