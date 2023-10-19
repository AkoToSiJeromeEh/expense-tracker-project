import {AiFillLock} from 'react-icons/ai'
import {FaUserLarge} from 'react-icons/fa6'
import {FaMoneyBill} from 'react-icons/fa'
import {signupSchema} from '../schemas'
import { useFormik } from 'formik'
const Signup = () => {
  const onSubmit = (actions) => {
    actions.resetForm();
   console.log('submitted');
}
const {values , handleBlur , handleChange , handleSubmit , errors , touched , isSubmitting } = useFormik({
  initialValues: {
    username: '',
    income: '',
    password: '',
  },
  validationSchema : signupSchema,
  onSubmit,
});
  return (
    <main
    className="login-container-main min-h-screen text-white grid grid-cols-1 place-content-around md:grid-cols-2 md:place-content-start  overflow-hidden md:bg-[#0000003f] backdrop-blur-md "
  >
    <div className=" h-[100vh] hidden md:block p-8">
      <h2 className="text-4xl text-custom-yellow">Sign Up Now</h2>
    </div>
    <div
      className="flex flex-col   text-white justify-around p-8  gap-10 md:gap-6 login-cont"
    >
      <div>
        <h1
          className="expense text-[1.5rem] leading-[1rem] tracking-wider md:text-4xl"
        >
          EXPENSE
        </h1>
        <h1 className="text-[1.5rem] tracker md:text-4xl">TRACKER</h1>
      </div>
      <div className="">
        <p className="text-3xl font-extrabold mb-2">Welcome To Expense Tracker</p>
        <p>have an account ? <strong>Login Now</strong></p>
      </div>

      <div>
        <form
        onSubmit={handleSubmit}
          action=""
          method="post"
          className="flex flex-col gap-10 items-start justify-start w-full"
          id="form"
        >
          <fieldset
            className={errors.username && touched.username ? 'border-2 text-start border-red-500 w-full ps-2 pb-1 rounded-md relative' : 'border-2 text-start border-[#c6b6fb]  w-full ps-2 pb-1 rounded-md relative' }
          >
            <legend className="text-lg tracking-wide">Username</legend>
            <input className="p-3 w-full  outline-none" type="text" name="username" id="username" value={values.username} onBlur={handleBlur} onChange={handleChange} />
            <div
              className="absolute right-0 p-5  -top-3 rounded-sm h-16"
            >
              <FaUserLarge className='text-custom-yellow text-lg'/>
            </div>
          </fieldset>
          {errors.username && touched.username && <p className='font-bold text-red-500'>{errors.username}</p>}
          <fieldset
                className={errors.income && touched.income ? 'border-2 text-start border-red-500 w-full ps-2 pb-1 rounded-md relative' : 'border-2 text-start border-[#c6b6fb]  w-full ps-2 pb-1 rounded-md relative' }
          >
            <legend className="text-lg tracking-wide">Monthly Income</legend>
            <input className="p-3 w-full  outline-none" type="text" name="income" id="income" value={values.income} onChange={handleChange} onBlur={handleBlur} />
            <div
              className="absolute right-0 p-5  -top-3 rounded-sm h-16"
            >
              <FaMoneyBill className='text-custom-yellow text-lg'/>
            </div>
            {errors.income && touched.income && <p className='font-bold text-red-500'>{errors.income}</p>}
          </fieldset>
          <fieldset
             className={errors.password && touched.password ? 'border-2 text-start border-red-500 w-full ps-2 pb-1 rounded-md relative' : 'border-2 text-start border-[#c6b6fb]  w-full ps-2 pb-1 rounded-md relative' }
             >
          
            <legend className="text-lg tracking-wide">Password</legend>
            <input className="p-3 w-full  outline-none" type="password" name="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} />
            <div
              className="absolute right-0 p-5 -top-3 rounded-sm h-16  "
            >
              <AiFillLock className='text-custom-yellow text-2xl '/>
            </div>

          </fieldset>
          {errors.password && touched.password && <p className='font-bold text-red-500'>{errors.password}</p>}

          <button disabled={isSubmitting} className="add-linear-bg-3 p-5 rounded-md w-full" type="submit">
            Sign Up
          </button>
        </form>
        <div className="text-center  mt-5">
          <button>How to Create Account ? <strong>Click Here </strong></button>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Signup