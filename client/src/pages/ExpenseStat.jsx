
import cardImage from '../images/Rectangle 2.png';
import {LuGanttChart} from 'react-icons/lu'
import { useState , useEffect } from 'react';
import {PiPercentLight} from 'react-icons/pi'
const ExpenseStat = () => {

  const [income , setIncome] = useState(20000);
  const [expense , setExpense] = useState(2000);
  const [progress , setProgress] = useState(0);
  const [currentBal , setCurrentBal] = useState(0);
  
  const progressBar = () => {

    const newProgress = (expense / income) * 100;
    const newCurrentBalance = income - expense;
    setCurrentBal(newCurrentBalance);
    setIncome(income => income); 
    setExpense(expense => expense); 
    setProgress( newProgress);

  }
  useEffect(() => {

     progressBar();
  }, [expense, income])
  

  
 
  return (
    <div className=" min-h-screen text-white">
      <main className="p-5 flex flex-col gap-2 md:w-4/5 md:m-auto">
        <div className="mb-3">
          <LuGanttChart className='inline-block text-custom-yellow text-2xl me-2'/>
          <h2 className="text-2xl font-semibold text-start inline-block align-middle">Expense Statistics</h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="p-10 rounded-3xl text-white flex flex-col gap-8 lg:w-[100%] h-[50vh] w-ful bg-add-gradient-3">
            <div className="text-start leading-8 md:leading-10">
              <p className="font-extrabold md:text-2xl md:mb-4">
                Monthly Income Balance
              </p>
              <h2
                className="text-2xl font-extrabold md:text-4xl"
                id="total-bal"
              >${currentBal}</h2>
            </div>
            <div className=" p-1 bg-stone-950 shadow-md shadow-white rounded-full overflow-hidden ">
              <div
                className="bg-add-grad p-1 rounded-full   "
                style={{width : `${progress}%`}}
              ></div>
            </div>
            <p id='warning-error' className='font-bold text-lg' style={{color : progress >= 50 ? '#FF0000' : '#03C988'  }}>{progress} <PiPercentLight className='text-2xl inline-block'/> of your balance is  deducted {progress >= 100 ? 'Poor guy' : ' '}</p>
            <div className="justify-self-center">
              
              <ul className="flex flex-row gap-6  tracking-[0.8rem] md:text-sm md:justify-around ">
                <li className="text-lg">****</li>
                <li className="text-lg">****</li>
                <li className="text-lg">402</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
            <div className="flex flex-col gap-10 c-card   rounded-md p-5">
              <div>
                <h2 className="text-2xl font-semibold text-white ">
                  Top Spending
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 h-[15vh] lg:w-full md:m-auto md:h-[25vh] w-full overflow-y-auto place-content-start">
                <div className="border-2 border-custom-gray rounded-2xl w-full p-5 flex flex-row justify-between items-center">
                  <div>
                    <div className="bg-[#000000] rounded-full p-3 w-12 inline-block align-middle">
                      <img
                        className="w-10"
                        src={cardImage}
                        alt=""
                      />
                    </div>
                    <div className="inline-block align-middle ms-2">
                      <p className="font-extrabold">School</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p className="font-semibold">-1500</p>
                    <span className="text-end font-extrabold text-sm text-secondary">02-08-2003</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-10  c-card rounded-md p-5">
                <div>
                  <h2 className="text-2xl font-semibold text-white ">
                    Newest Spending
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 h-[15vh] lg:w-full md:m-auto md:h-[25vh] w-full overflow-y-auto place-content-start">
                  <div className="border-2 border-custom-gray rounded-2xl w-full p-5 flex flex-row justify-between items-center">
                    <div>
                      <div className="bg-[#000000] rounded-full p-3 w-12 inline-block align-middle">
                        <img
                          className="w-10"
                          src={cardImage}
                          alt=""
                        />
                      </div>
                      <div className="inline-block align-middle ms-2">
                        <p className="font-extrabold">Travel</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="font-semibold">-1000</p>
                      <span className="text-end font-extrabold text-sm text-secondary">02-08-2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpenseStat;
