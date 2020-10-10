// const NodeCache = require( "node-cache" );
// const myCache = new NodeCache();

// function nodecache(start){
 
//     if(!!start){
//         obj = { UserID: start }
//         myCache.set( "myKey", obj )
//         // return 0;
       
//         console.log("saving process",start)
//         let value2 = myCache.get( "myKey" )
//         console.log(value2);
//     }
//     else{
//        let value = myCache.get( "myKey" )
//         console.log("success myKey ------------->",value)
//         return(req,res,next) =>{
//             req.params.UserID = value ? value.UserID : null;
//             console.log("reeq data node cache")
//             (req,res,next)
//         }
//     }
  
// }
// module.exports = nodecache;