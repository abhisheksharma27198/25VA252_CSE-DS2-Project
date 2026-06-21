import React from "react";

function Cart({ cart = [] }) {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: "#eaeded", minHeight: "100vh", padding: "20px" }}>

      <h1>🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "8px"
        }}>
          <h2>Your Amazon Cart is empty</h2>
          <p>Add items to get started</p>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>

          {/* LEFT SIDE - ITEMS */}
          <div style={{ flex: 3 }}>
            {cart.map((item, index) => (
              <div key={index} style={{
                display: "flex",
                background: "white",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px"
              }}>

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "120px", marginRight: "20px" }}
                />

                {/* DETAILS */}
                <div style={{ flex: 1 }}>
                  <h3>{item.title}</h3>

                  <p style={{
                    color: "#b12704",
                    fontWeight: "bold",
                    fontSize: "18px"
                  }}>
                    ₹{item.price}
                  </p>

                  {/* STOCK STATUS */}
                  <p style={{
                    color: item.inStock ? "green" : "red",
                    fontWeight: "bold"
                  }}>
                    {item.inStock ? "In Stock ✅" : "Out of Stock ❌"}
                  </p>

                  <p>Free Delivery</p>

                  <button style={{
                    background: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "5px"
                  }}>
                    Remove
                  </button>

                </div>

              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div style={{
            flex: 1,
            background: "white",
            padding: "20px",
            borderRadius: "8px",
            height: "fit-content"
          }}>
            <h2>Subtotal ({cart.length} items)</h2>
            <h2 style={{ color: "#b12704" }}>₹{total}</h2>

            <button style={{
              backgroundColor: "#ffd814",
              border: "none",
              padding: "12px",
              width: "100%",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "10px"
            }}>
              Proceed to Buy
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;
