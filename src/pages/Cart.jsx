import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span className="text-green-600 font-semibold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <p className="text-green-600 font-semibold">Total Amount: ${totalAmount}</p>
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in mx-auto">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex justify-between gap-12 items-center w-full mt-5">
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
