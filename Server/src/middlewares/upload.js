const multer=require('multer')

const storage=multer.memoryStorage()

const fileFilter=async(req,res,cb)=>{
    if(file.mimetype==="application/pdf"){
        cb(null,true)
    }else{
        cb(new Error("Only pdf files are allowded"),false)
    }
}

const upload=multer({
     storage,
    fileFilter,
   limits:{fileSize:50*1024*1024},

})

module.exports=upload