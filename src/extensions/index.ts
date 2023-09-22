/* eslint-disable no-extend-native */
interface Number {
  toCurrency(props: any): string;
}

Number.prototype.toCurrency = function (props: any) {
  const {
    style = 'currency',
    currency = 'BRL',
    signDisplay = 'never',
    useGrouping = false,
    locale = 'pt-BR',
    ...rest
  } = props;
  const toFormat = Intl.NumberFormat(locale, {
    style,
    currency,
    signDisplay,
    useGrouping,
    ...rest,
  });

  return toFormat.format(this as any);
};
