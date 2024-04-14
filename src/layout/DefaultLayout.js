import React,{useState,useEffect} from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import {useNavigate} from 'react-router-dom';
import useApi from'../services/api_condominio';


const DefaultLayout = () => {

  const api = useApi();
  const navigate = useNavigate();

  const DefaultLayout = () =>{

    const [loading,setLoading] = useState(true);

    useEffect( ()=>{
      const  checkLogin = async() => {
        if(api.getToken()){
          const result = await api.validateToken();
          if(result.error ===''){
            setLoading(false);
          }
          else{
            alert(result.error);
            navigate('/login');
          }
        } 
        else{
          navigate('/login');
        }
      }
      checkLogin();
    },[])
    
  }

  return (
    <div>
      {/* {!loading && */}
      <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      </>
      {/* } */}
    </div>
  )
}

export default DefaultLayout;
