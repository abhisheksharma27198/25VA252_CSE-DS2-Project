import React, { useState } from "react";

function Home({ cart, setCart }) {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      title: "Gaming Headphones",
      price: 2999,
      oldPrice: 3999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 4500,
      oldPrice: 6000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 1800,
      oldPrice: 2500,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
    },
    {
      id: 4,
      title: "Wireless Mouse",
      price: 1200,
      oldPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300"
    },
    {
      id: 5,
      title: "Laptop",
      price: 55000,
      oldPrice: 65000,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300"
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      price: 2200,
      oldPrice: 3000,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300"
    },
    {
      id: 7,
      title: "Keyboard",
      price: 1500,
      oldPrice: 2200,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300"
    },
    {
      id: 8,
      title: "Mobile Phone",
      price: 15000,
      oldPrice: 20000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300"
    },
    {
      id: 9,
      title: "Backpack",
      price: 999,
      oldPrice: 1500,
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300"
    },
    {
      id: 10,
      title: "DSLR Camera",
      price: 42000,
      oldPrice: 50000,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300"
    },
    {
      id: 11,
      title: "Tablet",
      price: 18999,
      oldPrice: 22999,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300"
    },
    {
      id: 12,
      title: "Monitor",
      price: 12999,
      oldPrice: 15999,
      image:
        "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=300"
    },
    
  ];

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#eaeded", minHeight: "100vh" }}>
      
      {/* Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #f3a847, #ffd814)",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h1>🔥 Great Indian Festival</h1>
        <p>Up to 70% OFF on Electronics</p>

        <img
          src="https://assets.aboutamazon.com/dims4/default/53f8cc1/2147483647/strip/true/crop/1279x720+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F4f%2Fcb%2F24ba704b481fab6ce64071fb9155%2Flead-image-landing-page.jpg"
          alt="Great Indian Festival"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "12px",
            marginTop: "15px"
          }}
        />
      </div>

      {/* Search */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "60%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid gray"
          }}
        />
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          padding: "20px"
        }}
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "contain"
              }}
            />

            <h3>{product.title}</h3>

            <p style={{ color: "#f0c14b" }}>⭐⭐⭐⭐⭐</p>

            <h2 style={{ color: "#b12704" }}>₹{product.price}</h2>

            <p
              style={{
                textDecoration: "line-through",
                color: "gray"
              }}
            >
              ₹{product.oldPrice}
            </p>

            <button
              onClick={() => setCart([...cart, product])}
              style={{
                background: "#ffd814",
                border: "1px solid #fcd200",
                padding: "10px",
                width: "100%",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
