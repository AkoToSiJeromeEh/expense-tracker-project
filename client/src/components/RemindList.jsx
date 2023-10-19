import PropTypes from 'prop-types';
import {BsPencilSquare} from 'react-icons/bs'
const List = (props) => {
	const {title , price , date , content , deleteReminder} = props
	
  return (
	<div className="bg-[#00000016] p-5 h-48 rounded-lg  relative overflow-y-auto">
	<div className="flex flex-row justify-between gap-4">
	  <h2 className="font-semibold">
		<BsPencilSquare
		  className="  text-2xl text-custom-yellow rounded-md inline-block me-2"
		/>
		{title}
	  </h2>
	  <div>
		<p className="text-green-400">${price}</p>
		<p className="text-white font-semibold">{new Date(date).toLocaleDateString()}</p>
	  </div>
	</div>
	<div className="flex flex-col justify-between gap-8">
	  <div className="mt-5">
		<p className="leading-6">{content }</p>
	  </div>
	  <div className="absolute -bottom-5 right-0 left-0 w-full flex flex-col">
		<button onClick={() => deleteReminder()} className="bg-red-500  p-5 text-white w-full font-bold">
		  Delete
		</button>
	  </div>
	</div>
  </div>
  )
}

export default List
List.propTypes = {
	title: PropTypes.string,  
	price: PropTypes.number,
	date: PropTypes.string, 
	content: PropTypes.string,
	deleteReminder: PropTypes.func,
  };
  