import Axios from "axios";
import { useQuery } from "react-query";
import {FaRegLightbulb} from 'react-icons/fa'
import {BiMoneyWithdraw} from 'react-icons/bi'
import RemindList from '../components/RemindList'
import {ExpenseList as ExpenseLists} from '../components/ExpenseList'
import ToggleState from '../hooks/ToggleState'


const ExpenseList = () => {

  const [isTrue, toggle] = ToggleState();


  const fetchReminderList = () => {

    return Axios.get('http://localhost:3000/api/reminders')
  }
  const fetchExpenseList = () => {

     return Axios.get('http://localhost:3000/api/expenses/expenses')
  }
  const deleteReminderList = async (id) => {
    await Axios.delete(`http://localhost:3000/api/reminders/deleteReminder/${id}`);
    toggle(true);
    setTimeout(() => {
      toggle(false);
      refetchReminders();
    }, 3000);
  };
  
  
  const {
    isLoading: isRemindersLoading,
    data: remindersData,
    isFetching: isRemindersFetching,
    refetch: refetchReminders,
  } = useQuery('reminders', fetchReminderList, {
    cacheTime: 5000,
    staleTime: 30000,
  });
  
  const {
    isLoading: isExpensesLoading,
    data: expensesData,
    isFetching: isExpensesFetching,
    refetch: refetchExpenses,
  } = useQuery('expenses', fetchExpenseList, {
    cacheTime: 5000,
    staleTime: 30000,
  });
  

  
  return (
     
    isExpensesLoading || isExpensesFetching && isRemindersFetching || isRemindersLoading ? (
          <div>
            <h1>Reminder Loading...</h1>
          </div>
       ) : (
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

              {
                expensesData?.data.map((expense) => {
                     
                  return (
                     <div key={expense._id}>
                        <ExpenseLists 
                        expense={expense.expense}
                        content={expense.content}
                        categorum={expense.category}
                        />
                     </div>
                  )
                })
              }
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
      
          <div className="c-card   rounded-xl p-5 grid grid-flow-dense lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1 h-[50vh] overflow-y-scroll relative">
          <p className="text-green-500 font-semibold text-lg absolute right-0 p-5">{isTrue ? 'Delete Sucessfully : Reloading...' : null}</p>
          {
            remindersData?.data.map((reminder) => {

               return (

                 <div  key={reminder._id}>
                  <RemindList 
                    title={reminder.title}
                    price = {reminder.price}
                    date = {reminder.date}
                    content = {reminder.content}
                    deleteReminder={() => deleteReminderList(reminder._id)}
                   />
                 </div>

               )
            })
          }
          </div>
        </div>
      </main>
    </div>
       )
     
  );
};

export default ExpenseList;
