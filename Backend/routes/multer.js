const multer=require('multer');
const path=require('path');

// This function creates a storage engine which is configured
// using the options provided. It allows you to set where and how the files should be stored.
const up=multer.diskStorage({    destination: function (req, file, cb) {
       if (file.fieldname === 'course_image') {
         cb(null, './public/images');
       } else if (file.fieldname === 'course_video') {
         cb(null, './public/videos');
       }
     },
                                                        // The callback is invoked with null as the first argument (to indicate no error) and
                                                 // the directory path as the second argument.
                                filename:function(req,file,cb)
                                                    {cb(null,Date.now()+"--"+file.originalname)}
                            });
 const upload = multer({ storage: up})
// const vid=multer.diskStorage({ destination:function(req,file,cb){
//                                             cb(null,'./public/videos')
//                                                      },
//                                  filename:function(req,file,cb){
//                                         cb(null,Date.now()+""+file.originalname)
//                                         }
//                             })
// const vidupload=multer({storage:vid})
 module.exports = upload;