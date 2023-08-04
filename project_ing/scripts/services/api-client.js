//http / https call
import URL from '../utils/constants.js';
export async function makeNetworkCall(){
    try{
        const promise = await fetch(URL);    //block if not async ?   //as event loop calls it and ___ uh async -_-
        const object=await promise.json();  //block
        return object;
    }
    catch(err){
        console.log('some problem in API call ', err);
        throw err; 
    }

    
    //const promise = fetch(URL);    //assign to thread  
    //console.log('promise is ', promise);
    //promise.then(response=>{
    //  console.log('response is ', response);
      //  const promise2=response.json()    //deserialization
        //promise2.then(data=>console.log("Data is ",data)).catch(e=>console.log('JSON parse error is ', e))
    //}).catch(err=>{
    //    console.log('error is ', err);
    //})
    //const data=(await promise).json("https://gist.github.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0.js");
    //console.log('data is ', data);
    //fetch();
}
export default makeNetworkCall;
