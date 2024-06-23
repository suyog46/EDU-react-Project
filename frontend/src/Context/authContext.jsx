import React, { createContext, useEffect, useState,} from 'react'
import axios from 'axios';

 export const AuthContext=createContext();

function authContext({children}) {

  const [auth, setAuth]=useState(false);
  const [loginfo,setLoginfo]=useState({
                                  name:"",
                                  usertype:"",
                                  email:"",
                                  uid:"",    
                                  imagepath:"" ,                       
  })
  // useEffect(()=>{
  //   const savedauth=localStorage.getItem('auth');        //here we get the local storage
  //   const imagepath=localStorage.getItem('imagepath');
  //   const email=localStorage.getItem('email');
  //   const usertype=localStorage.getItem('usertype');
  //   const name=localStorage.getItem('name');
  //   const uid=localStorage.getItem('uid')
  //   if(savedauth){
  //     setAuth(true) 
  //     setImagepath(imagepath)
  //     setLoginfo({
  //       name:name,
  //       usertype:usertype,
  //       email:email,
  //       uid:uid,
  //       imagepath:imagepath,
  //     })
      

  //   }
  //   else{
  //     setAuth(false);
  //     setImagepath("");
      
  //   }

  //  },[]);

  // useEffect(()=>{
  //const login=(Auth,imagepath,email,usertype,uname,uid)=>{
    const [categoryData, setCategoryData] = useState({});

    const fetchTeacher= async (id)=>{
      try {
        const res = await axios.post("http://localhost:3000/teacherdet", { cid:id });
        return res.data.data; 
      } catch (error) {
        console.error(`Error fetching category data for ${cid}:`, error);
        return 0;
      }
    }
    useEffect(() => 
      {
    
  
      const fetchData = async () => {
        try {
          const programmingCount = await fetchCategoryData("programming");
          const othersCount = await fetchCategoryData("others");
          const BusinessCount = await fetchCategoryData("business");
          const ArtCount = await fetchCategoryData("art");
          const LanguagesCount = await fetchCategoryData("languages");
          const PoliticsCount = await fetchCategoryData("politics");

          setCategoryData({
            programming: programmingCount,
            others: othersCount,
            politics:PoliticsCount,
            art:ArtCount,
            business:BusinessCount,
            languages:LanguagesCount
          });
        
        } catch (error) {
          console.log("there is a error",error);
        }
      };
      const fetchCategoryData = async (catdata) => {
        try {
          const res = await axios.post("http://localhost:3000/catdet", { cat: catdata });
          return res.data.data.count; 
        } catch (error) {
          console.error(`Error fetching category data for ${catdata}:`, error);
          return 0;
        }
      };
  console.log("state",categoryData);
      fetchData();
    }, []);
   
   
    const login= async (Auth)=>{
      setAuth(Auth); 
      console.log("value after function is hit",Auth);
      const token=localStorage.getItem("token_id");
      console.log(token);
      const res=await axios.post("http://localhost:3000/userinfo", {}, {
        headers: {
          'Authorization': `Bearer ${token}` // Use 'token' instead of 't_id'
         
        }
      }).then((res)=>{
        console.log(res.data);
        const na=res.data.imagepath;
        console.log(na);
        setLoginfo({
          name:res.data.username,
          usertype:res.data.usertype,
          email:res.data.email,
          uid:res.data.uid,
          imagepath:na,
        }
        )
        console.log(loginfo);
      })

        // setImagepath(imagepath);     //lookout at these two  setauth and setimagepath again ...cause useEffect le nai kam gari sakyo ta
        // localStorage.setItem("auth",Auth);               //here we set the local storage
        // localStorage.setItem("path",imagepath)
        // localStorage.setItem("usertype",usertype)
        // localStorage.setItem("name",uname)
        // localStorage.setItem("email",email)
        // localStorage.setItem("uid",uid)
// console.log("value after login function is hit ",usertype,email);
  }
// })
  const logout=()=>{
    setAuth(false);
    console.log("logged out");
    localStorage.removeItem("auth");
  }

  const token=localStorage.getItem("token_id");
  const context={auth,setAuth,login,logout,loginfo,setLoginfo,token,categoryData,fetchTeacher}
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default authContext;