export const reducer=(state,action)=>{
    switch(action.type){
        case "success":
            return{
                isloading:false,
                date:action.payload
            }
            case "error":
                return{
                    isloading:true,
                    date:[]
                }
                default:
                    return state;
    }

}
