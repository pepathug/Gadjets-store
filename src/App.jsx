import "./index.css";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return <>
    <Header />
    <Catalog />
    <Footer />
  </>;
}

function Header(){

  const time = new Date().getHours();
  const openTime = 9;
  const closeTime = 21;

  let isOpen;

  if(time >= openTime && time <= closeTime) {
    isOpen = true
  }else{
    isOpen = false
  }

  return (
    <header className = "header">
      <h1>Electronical Store</h1>
      <nav className = "nav">
        <ul>
          <li>
            Home
            <a href="#home"></a>
          </li>
          <li>
            Catalog
            <a href="#catalog"></a>
          </li>
          <li>
            About us
            <a href="#aboutUs"></a>
          </li>
          <li>
            Contacts
            <a href="contacts"></a>
          </li>
        </ul>
      </nav>
      <div className = "working-hours">
        {isOpen ? (<p>We are currently Open. Hours: {openTime}:00 - {closeTime}:00</p>) : (<p>We are closed. Open from {openTime}:00 - {closeTime}:00</p>)}
      </div>
    </header>
  )
}

function Catalog() {
  return (
    <main className = "catalog">
      <ul className = "products">
        {productData.map((item) => (
          <Product productObj = {item}  />
        ))}
      {/* <Product 
      name = "Laptop Pro" 
      img="/laptop.png" 
      price ={1200}
      description = "High-performance laptop for professionals."
      />
      <Product 
      name = "Smartphone X" 
      img="/smartphone.png" 
      price ={800} 
      description = "Latest model with stunning display."
      />
      <Product 
      name = "Wireless Headphones" 
      img="/headphones.png" 
      price ={200} 
      description = "Noise-cancelling headphones with great sound quality."
      />
      <Product 
      name = "Smartwatch Z" 
      img="/smartwatch.png" 
      price ={150} 
      description = "Stylish smartwatch with fitness tracking features."
      />
      <Product 
      name = "Gaming Console" 
      img="/console.png" 
      price ={400} 
      description = "Powerful gaming console for endless fun."
      />
      <Product 
      name = "4K TV" 
      img="/tv.png" 
      price ={1000} 
      description = "Ultra HD television with vibrant colors."
      /> */}
      </ul>
    </main>
  )
}

function Product(props) {
  return (
  <li className = {`product ${props.productObj.soldOut ? "sold-out" : ""}`}>
    <img src={props.productObj.photoName} alt ={props.name}></img> 
    <div>
      <h3>{props.productObj.name}</h3>
      <p>{props.productObj.description}</p>
      <span>{props.productObj.soldOut ? "SOLD OUT" : props.productObj.price}</span>
    </div>
  </li>
  );
}

function Footer(){
  return <footer className = "footer">Footer</footer>;
}

export default App;