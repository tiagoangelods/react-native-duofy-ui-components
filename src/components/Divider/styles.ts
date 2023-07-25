import tw from '../../customTW';

export const getStyles = ({ customTw, size }: any) => {
  const base = tw`
    flex flex-row pt-2 pb-2 items-center
    ${customTw}
  `;
  const divider = tw`
    flex grow h-[${size}px] bg-brand-primary-gray-light
  `;

  const dividerText = tw`
    pl-3 pr-3
  `;
  return { base, divider, dividerText };
};
