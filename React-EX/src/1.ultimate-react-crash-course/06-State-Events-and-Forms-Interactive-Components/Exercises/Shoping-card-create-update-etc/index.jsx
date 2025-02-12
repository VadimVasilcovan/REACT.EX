import { useState } from "react";
import "./index.css";
import Button from "./UI/button";
const cardList = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
    inStock: true,
  },
];
export default function MiniShopingApp() {
  const [product, setProduct] = useState([]);
  const [addToFavorite, setAddToFavorite] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const [showMenuFavorites, setShowMenuFavotites] = useState(false)

  function handleShowMenu(){
    setShowMenu(!showMenu)
  } 

  function handleShowFavorites (){
    setShowMenuFavotites(!showMenuFavorites)
  }

  function handleAddToFavorite (productItem){
    setAddToFavorite((f) => [...f, productItem])
  }
  return (
    <div className="shoping-app-main-div">
      {showMenu && <div className="shoping-app-secondary-div">
        <CreateUpdateProducts setProduct={setProduct} />
      </div>}
      <div className="shoping-app-secondary-div">
        <DisplayListProducts product={product}  handleShowMenu={handleShowMenu} handleShowFavorites={handleShowFavorites} handleAddToFavorite={handleAddToFavorite}/>
      </div>
      {showMenuFavorites && <div className="shoping-app-secondary-div">
        <ListFavoriteProducts addToFavorite={addToFavorite} />
      </div>}
    </div>
  );
}

function CreateUpdateProducts({ setProduct }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescript, setProductDescript] = useState("");
  const [productInStock, setProductInStock] = useState(true);

  function SubmitProduct(e) {
    e.preventDefault();
    if ((productName, productPrice, productDescript)) {
      const id = crypto.randomUUID();
      const newProduct = {
        id,
        name: productName,
        price: productPrice,
        description: productDescript,
        inStock: productInStock,
      };
      setProduct((p) => [...p, newProduct]);
      setProductName("");
      setProductPrice("");
      setProductDescript("");
    }
  }

  return (
    <>
      <p>Create or update the product </p>
      <form onSubmit={SubmitProduct}>
        <label>product Name</label>
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label>product price</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(Number(e.target.value))}
        />
        <label>product description</label>
        <input
          value={productDescript}
          onChange={(e) => setProductDescript(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </>
  );
}

function DisplayListProducts({ product,  handleShowMenu, handleShowFavorites, handleAddToFavorite}) {
  return (
    <div>
      <p>The list of products</p>
      <Button onClick={handleShowMenu}>Add a product</Button>
      <Button onClick={handleShowFavorites}>Wish List</Button>
      {product.map((products) => (
        <ProductCard products={products} key={products.id} handleAddToFavorite={handleAddToFavorite} />
      ))}
    </div>
  );
}

function ProductCard({ products, handleAddToFavorite }) {
  return (
    <div className="product-card">
      <h3>{products.name}</h3>
      <p>
        <strong>Price:</strong> ${products.price}
      </p>
      <p>
        <strong>Description:</strong> {products.description}
      </p>
      <p>
        <strong>Availability:</strong>{" "}
        {products.inStock ? "In Stock ✅" : "Out of Stock ❌"}
      </p>
      <Button onClick={() => handleAddToFavorite(products)}>Add to favorites</Button>
    </div>
  );
}

function ListFavoriteProducts({addToFavorite}) {
  return (<>
  <p>The favorite products</p>
  {addToFavorite.map((products) => (
        <ProductCard products={products} key={products.id} />
      ))}
    
  </>)
}
