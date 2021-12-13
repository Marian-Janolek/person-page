import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="productList">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => (
          <Product img={product.img} link={product.link} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
