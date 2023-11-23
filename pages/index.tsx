import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-200 py-10 px-10 grid gap-10">
      <div className="bg-white p-5 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-400 space-y-2">Grey Chair</span>
          <span className="font-semibold">$170</span>
        </div>
        <div className="flex justify-between border-b-orange-50 border-dashed">
          <span className="text-gray-400 space-y-2">Tooly Table</span>
          <span className="font-semibold">$800</span>
        </div>
        <div className="flex justify-between mt-3 pt-3 border-t-2 border-dashed">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$970</span>
        </div>
        <div className="bg-blue-400 m-auto w-2/3 mt-5 text-white p-2 text-center rounded-lg">
          CheckOut
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="relative -top-5 bg-white rounded-3xl p-10">
          <div className="flex relative -top-20 justify-between items-end">
            {/* <img
              className="absolute left-1/3 w-20 h-20 rounded-full"
              src="https://img.freepik.com/premium-vector/lion-cute-character-icon-hand-drawn-vector-illustration_101266-15526.jpg"
              alt="avartar"
            /> */}

            <div className="flex-col ">
              <span className="block  text-center text-gray-400">Orders</span>
              <span className="block text-center">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full " />
            <div className="flex-col">
              <span className="block text-center text-gray-400">Spend</span>
              <span className="block text-center">$2400</span>
            </div>
          </div>
          <div className="text-center relative -mt-14 -mb-10">
            <div className="font-semibold text-lg">Tony Molloy</div>
            <div className="text-gray-300 font-semibold">New York, USA</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex justify-between">
          <span>←</span>
          <span>
            <span className="m-5">⭐️ 4.9</span>
            <span className="p-1 shadow-md rounded-lg">💗</span>
          </span>
        </div>
        <img
          src="https://res.cloudinary.com/castlery/image/private/b_rgb:FFFFFF,c_fit,f_auto,q_auto,w_1000/v1650364659/crusader/variants/41960009/Vincent-Chair-Walnut-Angle.jpg"
          alt="chair"
        />
        <div>
          <div className="font-semibold">Swoon Lounge</div>
          <div className="text-sm text-gray-300">Chaire</div>
          <div className="flex justify-between">
            <span>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </span>
            <span>
              <span className="bg-blue-100 w-10 h-10 px-2 py-1 rounded-md">
                {" "}
                -{" "}
              </span>
              <span className="m-2"> 1 </span>
              <span className="bg-blue-100 w-10 h-10 px-2 py-1 rounded-md">
                {" "}
                +{" "}
              </span>
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-2xl">$450</span>
            <div className="inline-block bg-blue-500 w-1/2 rounded-lg text-center p-2 text-white">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
