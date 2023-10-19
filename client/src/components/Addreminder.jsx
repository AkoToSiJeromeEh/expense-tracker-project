import { useFormik } from "formik";
import { reminderSchema } from "../schemas";
import { BsCalendar2Date } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";

const Addreminder = () => {
  const onSubmit = (actions) => {
    actions.resetForm();
    console.log("submitted");
  };
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      reminderid: "",
      remindertitle: "",
      remindercontent: "",
      reminderprice: "",
      reminderdate: "",
    },
    validationSchema: reminderSchema,
    onSubmit,
  });
  return (
    <div className="self-start w-[70%] mx-auto">
      <form
      onSubmit={handleSubmit}
        action="/addreminder"
        method="post"
        className="flex flex-col gap-8 items-start justify-start w-full"
      >
        <input type="number" name="reminderid" hidden value={values.reminderid} />
        <div className="text-center w-full">
          <p className="text-4xl mb-5">Add Reminder</p>
          <input
           className={errors.remindertitle && touched.remindertitle ?  'border-2 border-red-500 bg-white p-6 rounded-full w-64 add-exp-input text-center text-black' : 'bg-white p-6 rounded-full w-64 add-exp-input text-center text-black'}
            type="text"
            placeholder="Title"
            name="remindertitle"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.remindertitle}
          />
            {errors.remindertitle && touched.remindertitle && <p className='font-bold text-red-500'>{errors.remindertitle}</p>}
        </div>
        <fieldset  className={errors.remindercontent && touched.remindercontent ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
          <legend className="text-lg tracking-wide">Content</legend>
          <input
            className="p-3 w-full "
            type="text"
            name="remindercontent"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.remindercontent}
          />
          <div className="absolute right-0 p-5 bg-[#00000022] -top-3 rounded-sm h-16">
            <TfiWrite className="text-custom-yellow text-2xl" />
          </div>
        </fieldset>

        {errors.remindercontent && touched.remindercontent && <p className='font-bold text-red-500'>{errors.remindercontent}</p>}

        <fieldset className={errors.reminderprice && touched.reminderprice ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative' } >
          <legend className="text-lg tracking-wide">Price</legend>
          <input
            className="p-3 w-full"
            type="text"
            name="reminderprice"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.reminderprice}
          />
          <div className="absolute right-0 p-5 bg-[#00000022] -top-3 rounded-sm h-16">
            <CiMoneyBill className="text-custom-yellow text-2xl" />
          </div>
        </fieldset>
        {errors.reminderprice && touched.reminderprice && <p className='font-bold text-red-500'>{errors.reminderprice}</p>}
        <fieldset className={errors.reminderdate && touched.reminderdate ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
          <legend className="text-lg tracking-wide">Date</legend>
          <input
            className="p-3 w-full"
            type="date"
            name="reminderdate"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.reminderdate}
          />
          <div className="absolute right-0 p-5 bg-[#00000022] -top-3 rounded-sm h-16">
            <BsCalendar2Date className="text-custom-yellow text-2xl" />
          </div>
        </fieldset>
        {errors.reminderdate && touched.reminderdate && <p className='font-bold text-red-500'>{errors.reminderdate}</p>}
        <p className="text-green-500 font-semibold" id="successRemind"></p>
        <button disabled={isSubmitting} className="p-4 w-full text-white text-lg rounded-md rgb-add">
          Save
        </button>
      </form>
    </div>
  );
};

export default Addreminder;
