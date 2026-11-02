type PriceTagProps = {
  amount: number;
};

export default function PriceTag({ amount }: PriceTagProps) {
  return <span>${amount.toFixed(2)}</span>;
}