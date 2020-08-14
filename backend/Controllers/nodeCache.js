// const NodeCache = require( "node-cache" );
// const myCache = new NodeCache();

// function nodecache(start){
 
//     if(!!start){
//         obj = { UserID: start };
//         myCache.set( "myKey", obj );
    
//         // value = myCache.get( "myKey" );
//         // console.log("success 0",value);
//     }
//     else{
//        let value = myCache.get( "myKey" );
//         console.log("success 0",value);
//         return(req,res,next) =>{
//             req.params.UserID = value ? value.UserID : null;
//             console.log("reeq data node cache",req.params);
//             (req,res,next);
//         }
//     }
  
// }
// module.exports = nodecache;