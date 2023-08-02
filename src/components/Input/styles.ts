import tw from '../../customTW';

export const getStyles = ({ onError, isValid, isActive }: any) => {
  const inputContainer = tw`
    font-sans flex flex-col
  `;

  const label = tw`
    font-sans mb-2
  `;

  const caption = tw`
    font-sans mt-2
  `;

  const container = tw`
    font-sans flex flex-row items-center
  `;

  const input = tw`
    font-sans flex-1 h-12 bg-white border-brand-black-lighter border border-solid rounded-lg p-2
    ${onError || !isValid ? 'border-brand-red-dark' : ''}
    ${isActive && isValid && !onError ? 'border-brand-primary' : ''}
  `;

  const icon = tw`
    font-sans absolute right-3
  `;

  return { inputContainer, label, caption, container, input, icon };
};
