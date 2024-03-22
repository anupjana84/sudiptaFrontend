import * as yup from 'yup';

export const ProductValidation = yup.object().shape({
  title: yup.string().required().min(3),
  price: yup.number().required().min(1),
  stock:yup.number().required().min(1),
  description:yup.string().required().min(10)


  
  
});


