import React, {useState} from 'react';

const Cart = () => {



    const initialProducts = [
        {
          name: "iPhone 11 Pro ",
          price: 90000,
          count: 0,
        },
        {
          name: "iPhone 11",
          price: 65000,
          count: 0,
        },
        {
          name: "iPhone XR",
          price: 50000,
          count: 0,
        },
        {
          name: "iPhone SE",
          price: 45000,
          count: 0,
        },
        {
          name: "Samsung Galaxy S21",
          price: 70000,
          count: 0,
        },
        {
          name: "Google Pixel 6",
          price: 52000,
          count: 0,
        },
        {
          name: "OnePlus 9 Pro",
          price: 65000,
          count: 0,
        },
        {
          name: "Xiaomi Mi 11",
          price: 40000,
          count: 0,
        },
      ];
      
        const [products, setProducts] = useState(initialProducts);

  const handleIncrease = (index) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, count: product.count + 1 } : product
    );
    setProducts(updatedProducts);
  };

  const handleDecrease = (index) => {
    const updatedProducts = products.map((product, i) =>
      i === index && product.count > 0
        ? { ...product, count: product.count - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.count,
    0
  );

    


  return (
    <div
      className="flex items-center bg-indigo-100 w-screen min-h-screen">
      <div className="container ml-auto mr-auto flex flex-wrap items-start">


        {products.map ((products , index)=>(
          <div key={index} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
              <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">

              <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    {products.name}
                  </h5>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">₹ {products.price}</div>
                  {products.count === 0 ? (
                      <button
                        onClick={() => handleIncrease(index)}
                        className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition duration-300 flex ml-auto"
                      >
                        Add
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleDecrease(index)}
                          className="ml-auto rounded-full bg-red-600 text-white hover:bg-red-800 w-8 h-8 flex justify-center items-center transition duration-300"
                        >
                          -
                        </button>
                        <div className="text-lg text-white font-light mx-4">
                          {products.count}
                        </div>
                        <button
                          onClick={() => handleIncrease(index)}
                          className="rounded-full bg-green-600 text-white hover:bg-green-800 w-8 h-8 flex justify-center items-center transition duration-300"
                        >
                          +
                        </button>
                      </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-full bg-gray-800 text-white text-center py-4 mt-auto rounded-lg">
          <h2 className="text-xl font-bold">Total Price: ₹ {totalPrice}</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;


// {/* <figure className="mb-2">
// <img
//   src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
//   alt="iPhone 11 Pro Max"
//   className="h-64 ml-auto mr-auto"
// />
// </figure> */}






