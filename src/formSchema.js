import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required('Name is required')
      .min(2, 'name must be at least 2 characters'),
    size: yup
      .string()
      .required('Size is required ya chump')
      .oneOf(['small', 'medium', 'large'], 'Size is required'),
    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    instructions: yup
        .string()
  })
  
  export default formSchema;