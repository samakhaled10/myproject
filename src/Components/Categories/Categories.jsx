import axios from "axios";
import Loader from "../Loader/loader";
import { useQuery } from "react-query";
import useAllCategories from "../../CustomHooks/useAllCategories";

 

export default function Categories() {

// function getAllCategories() {
//   return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  
// }

// const {isError , isLoading , data} =useQuery({
//   queryKey:'allCategories',
//   queryFn:getAllCategories
// });

const { isError, isLoading, data } = useAllCategories();

if(isLoading){

    return<> 
     <Loader/>
  
    </>
  }
if(isError){
  return<>
  <h2>grb b3deeen </h2>
  </>
}

return<>
 <div className="container mx-auto ">
      <div className="grid grid-cols-4 gap-4 p-5">
        {data.data.data.map((Categories) =><div key={Categories._id} className="brand rounded-lg bg-blue-200">
          <img src={Categories.image} alt={Categories.name} className="w-full" />
        <h2>{Categories.name}</h2>
      </div>
   )}

</div>
</div>
</>
}

