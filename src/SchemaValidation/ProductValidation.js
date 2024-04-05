import * as yup from 'yup';

export const ProductValidation = yup.object().shape({
  title: yup.string().required().min(3),
  price: yup.number().required().min(1),
  stock:yup.number().required().min(1),
  description:yup.string().required().min(10),
  category: yup.string().required("Category is required!"), 
  //  image:yup
  //       .mixed()
  //       .required("A file is required")
  //       .test(
  //         "fileSize",
  //         "File too large",
  //         value => value && value.size <= 160*1024
  //       )
  //       .test(
  //         "fileFormat",
  //         "Unsupported Format",
  //         value => value && [
  //           "image/jpg",
  //           "image/jpeg",
          
  //           "image/png"
  //         ].includes(value.type)
  //       )
  // myFile: yup.mixed().required('required')
  // .test('fileFormat', 'Only PDF files are allowed', value => {
  //   if (value) {
  //     const supportedFormats = ['jpg','png','jpeg'];
  //     return supportedFormats.includes(value.name.split('.').pop());
  //   }
  //   return true;
  // })
  // .test('fileSize', 'File size must be less than 1MB', value => {
  //   if (value) {
  //     return value.size >=1024*1024;
  //   }
  //   return true;
  // }),



  
  
});


