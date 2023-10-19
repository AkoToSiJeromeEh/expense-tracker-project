import PropTypes from 'prop-types';
import {FaHamburger} from 'react-icons/fa'
export const ExpenseList = (props) => {

	const {expense , content , categoru} = props
  return (

	<div className="bg-[#00000016]  rounded-t-xl w-full p-5 flex flex-row justify-between items-center h-fit gap-4 relative ">
	<div>
	  <div className="rgb-add rounded-full p-3 w-12 inline-block align-middle ">
		<FaHamburger className='w-10 text-2xl'/>
	  </div>
	  <div className="inline-block align-middle ms-2">
		<p className="font-semibold">{categoru}</p>
	  </div>
	</div>
	<div className="text-end">
	  <p className="font-bold">-{expense}</p>
	  <span className="text-end font-normal text-sm text-secondary">{content}</span>
	</div>
	<div className="absolute -bottom-16 z-20 right-0 left-0 w-full flex ">
	  <a className="bg-red-500 rounded-b-x font-semiboldl   p-5 text-white w-full font-bold">
		Delete
	  </a>
	</div>
  </div>
  )
}


ExpenseList.propTypes = {
	expense: PropTypes.number,
	categoru: PropTypes.string, 
	content: PropTypes.string,
	// deleteReminder: PropTypes.func,
};