import PriceTag from "./PriceTag";

type ProductCardProps = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: ProductCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", margin: "10px 0" }}>
      <h2>{title}</h2>
      <p>
        Price: <PriceTag amount={price} />
      </p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}