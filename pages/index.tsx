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
        {/* <div>
          <span>Profile</span>
        </div>

        <div className="bg-white absolute top-4/5 left-0 rounded-3xl w-full p-10">
          <div className="flex justify-between">
            <img
              className="absolute left-1/3 w-20 h-20 rounded-full"
              src="https://img.freepik.com/premium-vector/lion-cute-character-icon-hand-drawn-vector-illustration_101266-15526.jpg"
              alt="avartar"
            />

            <div className="flex-col ">
              <span className="block  text-center text-gray-400">Orders</span>
              <span className="block text-center">340</span>
            </div>
            <div className="flex-col">
              <span className="block text-center text-gray-400">Spend</span>
              <span className="block text-center">$2400</span>
            </div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-lg">Tony Molloy</div>
            <div className="text-gray-300 font-semibold">New York, USA</div>
          </div>
        </div> */}
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
