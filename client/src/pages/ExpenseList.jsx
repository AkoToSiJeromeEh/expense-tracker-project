
import {FaHamburger} from 'react-icons/fa'
import {BsPencilSquare} from 'react-icons/bs'
import {FaRegLightbulb} from 'react-icons/fa'
import {BiMoneyWithdraw} from 'react-icons/bi'
const ExpenseList = () => {
  return (
    <div className=" text-white  min-h-screen">
      <main className="p-5 flex flex-col gap-10 lg:w-4/5 m-auto md:w-3/4">
        <div className="grid grid-cols-1 gap-5 mt-5 ">
          <div>
            <BiMoneyWithdraw className='inline-block text-custom-yellow align-middle me-2 text-2xl'/>
            <h2 className="text-2xl font-semibold inline-block align-middle">List of Expenses</h2>
          </div>
          <div className="date-cont c-card   p-5 rounded-md min-h-[50vh] overflow-y-scroll">
            <h2 className="text-lg mb-5 text-white font-bold">ALL OF EXPENSES</h2>
            <div className="grid grid-cols-1 overflow-y-scroll h-[50vh] md:grid-cols-2 gap-20">
              <div className="bg-[#00000016]  rounded-t-xl w-full p-5 flex flex-row justify-between items-center h-fit gap-4 relative ">
                <div>
                  <div className="rgb-add rounded-full p-3 w-12 inline-block align-middle ">
                    <FaHamburger className='w-10 text-2xl'/>
                  </div>
                  <div className="inline-block align-middle ms-2">
                    <p className="font-extrabold">Food</p>
                  </div>
                </div>
                <div className="text-end">
                  <p className="font-bold">-1000</p>
                  <span className="text-end font-extrabold text-sm text-secondary"></span>
                </div>
                <div className="absolute -bottom-16 z-20 right-0 left-0 w-full flex ">
                  <a className="bg-red-500 rounded-b-xl   p-5 text-white w-full font-bold">
                    Delete
                  </a>
                </div>
              </div>
              
            </div>
            <div className="fixed z-20 bottom-0 flex items-center justify-center left-0 right-0 mt-2 w-full ">
              <p className="bg-[#00000035] w-full p-5   text-white font-extrabold text-lg ">
                Total : $ 20223
              </p>
            </div>
          </div>

          
        </div>
        <div>
          <div className="mb-5">
           <FaRegLightbulb className='inline-block text-custom-yellow align-middle me-2 text-2xl'/> 
            <h2 className="text-2xl font-semibold inline-block align-middle">List of Reminders</h2>
          </div>
          <div className="c-card   rounded-xl p-5 grid grid-flow-dense lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 h-[50vh] overflow-y-scroll">
            <div className="bg-[#00000016] p-5 h-48 rounded-lg  relative overflow-y-auto">
              <div className="flex flex-row justify-between gap-4">
                <h2 className="font-semibold">
                  <BsPencilSquare
                    className="  text-2xl text-custom-yellow rounded-md inline-block me-2"
                  />
                  Bayad Utang
                </h2>
                <div>
                  <p className="text-green-400">$300</p>
                  <p className="text-white font-semibold">02-08-2003</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <div className="mt-5">
                  <p className="leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, labore?</p>
                </div>
                <div className="absolute -bottom-5 right-0 left-0 w-full flex flex-col">
                  <a className="bg-red-500  p-5 text-white w-full font-bold">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpenseList;
