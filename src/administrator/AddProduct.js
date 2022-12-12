import React, { useState } from "react";

const AddProduct = () => {
  const [input, setInput] = useState({
    productName: "",
    productTitle: "",
    description: "",
    price: "",
    details: "",
    size: ""
  });

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input)
  };

  const addProduct = async () => {
    console.log("input:", input);
    await fetch("http://localhost:8080/api/product/post", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setInput({
      productName: "",
      productTitle: "",
      description: "",
      price: "",
      details: "",
    size: ""
  });
  };

  return (
    <div>
      <form>
        <input
          id="standard-productName"
          variant="standard"
          placeholder="Name"
          value={input.productName}
          name="productName"
          onChange={handleChange}
        />
        <input
          id="standard-productTitle"
          variant="standard"
          placeholder="Title"
          value={input.productTitle}
          name="productTitle"
          onChange={handleChange}
        />
        <input
          id="standard-description"
          variant="standard"
          placeholder="Description"
          value={input.description}
          name="description"
          onChange={handleChange}
        />
        <input
          id="standard-price"
          variant="standard"
          placeholder="Price"
          value={input.price}
          name="price"
          onChange={handleChange}
        />
         <input
          id="standard-details"
          variant="standard"
          placeholder="Details"
          value={input.details}
          name="details"
          onChange={handleChange}
        />
         <input
          id="standard-size"
          variant="standard"
          placeholder="Size"
          value={input.size}
          name="size"
          onChange={handleChange}
        />
      </form>
      <button onClick={addProduct}>
          <p>Submit</p>
        </button>
    </div>
  );
};

export default AddProduct;
