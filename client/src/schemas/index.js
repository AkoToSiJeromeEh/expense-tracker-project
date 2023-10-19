import * as yup from "yup";


export const expenseSchema = yup.object().shape({

	expenseAmount : yup.number().positive().integer().required("Required."),
	expenseCategory : yup.string().required("Required.") , 
	expenseDate : yup.string().required("Required.") ,
})

export const reminderSchema = yup.object().shape({
	remindertitle : yup.string().required("Required.") ,
	remindercontent : yup.string().required("Required.") ,
	reminderprice : yup.number().required("Required.") ,
	reminderdate : yup.string().required("Required.")
});



const passwordMatcher = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/;
export const loginSchema = yup.object().shape({
  username: yup.string()
    .required("Required")
    .max(25, 'Username must be at most 25 characters')
    .min(4, 'Username must be at least 4 characters'),
  password: yup.string()
    .required("Required")
    .max(25)
    .min(4, 'Password must be at least 4 characters')
    .matches(passwordMatcher, "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character")
});

export const signupSchema = yup.object().shape({
		
	username: yup.string()
    .required("Required")
    .max(25, 'Username must be at most 25 characters')
    .min(4, 'Username must be at least 4 characters'),
	income: yup.number()
    .required("Required"),
	password: yup.string()
    .required("Required")
    .max(25)
    .min(4, 'Password must be at least 4 characters')
    .matches(passwordMatcher, "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character")

})