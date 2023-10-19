import { TbCategory } from 'react-icons/tb';
import   {BsCalendar2Date } from 'react-icons/bs';
import { useFormik } from 'formik';
import {expenseSchema} from '../schemas'
const Addexpense = () => {

  const onSubmit = (actions) => {
      actions.resetForm();
     console.log('submitted');
  }
  const {values , handleBlur , handleChange , handleSubmit , errors , touched , isSubmitting } = useFormik({
    initialValues: {
      expenseId: '',
      expenseAmount: '',
      expenseCategory: '',
      expenseDate: '',
    },
    validationSchema : expenseSchema,
    onSubmit,
  });



  return (
    <div className="self-start w-[70%] mx-auto">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-8 items-start justify-start w-full"
      >
        <div className="text-center w-full">
          <p className="text-4xl mb-5">Add Expenses</p>
          <input
            className={errors.expenseAmount && touched.expenseAmount ?  'border-2 border-red-500 bg-white p-6 rounded-full w-64 add-exp-input text-center text-black' : 'bg-white p-6 rounded-full w-64 add-exp-input text-center text-black'}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.expenseAmount}
            placeholder="0"
            name="expenseAmount" 
          />
          {errors.expenseAmount && touched.expenseAmount && <p className='font-bold text-red-500'>{errors.expenseAmount}</p>}
        </div>
        <fieldset className={errors.expenseDate && touched.expenseDate ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
          <legend className="text-lg tracking-wide">Category</legend>
          <input
            className= 'p-3 w-full outline-none'
            type="text"
            name="expenseCategory" 
            value={values.expenseCategory}
            onChange={handleChange}
            onBlur={handleBlur}   
          />

          <div className="absolute right-0 p-5 bg-[#0000003a] -top-3 rounded-sm h-16">
            <TbCategory className='text-custom-yellow text-2xl' />
          </div>
        </fieldset>
        {errors.expenseCategory && touched.expenseCategory && <p className='font-bold text-red-500'>{errors.expenseCategory}</p>}
        <fieldset className={errors.expenseDate && touched.expenseDate ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
          <legend className="text-lg tracking-wide">Today</legend>
          <input
            className='p-3 w-full outline-none' 
            type="date"
            name="expenseDate"
            value={values.expenseDate}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        
          <div className="absolute right-0 p-5 bg-[#0000003a] -top-3 rounded-sm h-16">
            <BsCalendar2Date className='text-custom-yellow text-2xl' />
          </div>
        </fieldset>
        {errors.expenseDate && touched.expenseDate && <p className='font-bold text-red-500'>{errors.expenseDate}</p>}
        <p className="text-green-500 font-bold w-full text-center" id="successInsert"></p>
        <button disabled={isSubmitting}  type="submit" className="p-4 w-full add-exp-btn text-white text-lg rounded-md rgb-add">
          Save
        </button>
      </form>
    </div>
  );
};

export default Addexpense;
