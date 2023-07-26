import tw from '../../customTW';

export const getStyles = ({ customTw }: any) => {
  const overlay = tw`
    flex grow bg-brand-black-lightest
  `;
  const base = tw`
    flex flex-col absolute p-3 bottom-0 bg-white w-[100%] rounded-t-4 shadow-lg
    ${customTw}
  `;

  const title = tw`
    flex grow flex-row items-center justify-between
  `;
  return { overlay, base, title };
};
