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
        <div className="bg-blue-500 m-auto w-2/3 mt-5 text-white p-2 text-center rounded-lg">
          CheckOut
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
};

export default Home;
