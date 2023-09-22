/* eslint-disable no-extend-native */
export * from './components';
export interface Number {
  toCurrency(props: any): string;
}

Number.prototype.toMoney = function (props: any) {
  const {
    style = 'currency',
    currency = 'BRL',
    signDisplay = 'never',
    useGrouping = false,
    ...rest
  } = props;
  const toFormat = Intl.NumberFormat('pt-BR', {
    style,
    currency,
    signDisplay,
    useGrouping,
    ...rest,
  });

  return toFormat.format(this as any);
};
