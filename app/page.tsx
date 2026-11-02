import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <Greeting name="Rubi" />

      <div style={{ maxWidth: "420px" }}>
        <ProductCard title="Wireless Mouse" price={25} inStock={true} />
        <ProductCard title="Mechanical Keyboard" price={75} inStock={false} />
      </div>
    </main>
  );
}