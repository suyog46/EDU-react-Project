const multer=require('multer');
const path=require('path');

// This function creates a storage engine which is configured
// using the options provided. It allows you to set where and how the files should be stored.
const up=multer.diskStorage({    destination: function (req, file, cb) {
  console.log("eta xu")
  console.log(file);
       if (file.fieldname === 'course_image') {
        console.log("image vayo");
         cb(null, './public/images');
       } else if (file.fieldname === 'course_video') {
        console.log("video vayo");

         cb(null, './public/videos');
       }
       else{
                  cb(null,'./public/pimages');

       }
       
     },
                                                        // The callback is invoked with null as the first argument (to indicate no error) and
                                                 // the directory path as the second argument.
                                filename:function(req,file,cb)
                                                    {cb(null,Date.now()+"--"+file.originalname)}
                            });
 const upload = multer({ storage: up})

 module.exports = upload;