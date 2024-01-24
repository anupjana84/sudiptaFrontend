import { redirect } from "react-router-dom";

export const checkuserAndAdmin =  () => {
    const user = JSON.parse(localStorage.getItem('userdata'));
   if (user && user.role==="admin") {
    redirect('/admin')
   }
   else if (user && user.role==="user") {
    redirect('/dashboard')

   }else if (!user ) {
    redirect('/')
   
   }
    return null;

}