import PropTypes from 'prop-types';
import {FaHamburger} from 'react-icons/fa'
export const ExpenseList = (props) => {

	const {expense , date , category , deleteExpense} = props
  return (

	<div className="bg-[#00000016]  rounded-t-xl w-full p-5 flex flex-row justify-between items-center h-fit gap-4 relative ">
	<div>
	  <div className="rgb-add rounded-full p-3 w-12 inline-block align-middle ">
		<FaHamburger className='w-10 text-2xl'/>
	  </div>
	  <div className="inline-block align-middle ms-2">
		<p className="font-semibold">{category}</p>
	  </div>
	</div>
	<div className="text-end">
	  <p className="font-bold">-{expense}</p>
	  <span className="text-end font-normal text-sm text-secondary">{new Date(date).toLocaleDateString()}</span>
	</div>
	<div className="absolute -bottom-16 z-20 right-0 left-0 w-full flex ">
	  <button onClick={() => deleteExpense()} className="bg-red-500 rounded-b-x font-semiboldl   p-5 text-white w-full font-bold">
		Delete
	  </button>
	</div>
  </div>
  )
}


ExpenseList.propTypes = {
	expense: PropTypes.number,
	category: PropTypes.string, 
	date: PropTypes.string,
	deleteExpense : PropTypes.func
	// deleteReminder: PropTypes.func,
};