import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {v4 as uuidv4} from 'uuid';
import LinearProgress from '@material-ui/core/LinearProgress';
import {storage,database} from './Firebase'
import Nav1 from './Components/Nav1';

const useStyles = makeStyles((theme) => ({
    button:{
        backgroundColor:'black',
        fontSize:'20px'
    }
    
  }));
  
function UploadFile() {
    const classes = useStyles();
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const types =['video/mp4','video/webm','video/ogg'];

    const onChange=(e)=>{
        const file = e?.target?.files[0];
        console.log(file);

        if(!file){
            setError('Please select a file');
            setTimeout(()=>{setError(null)},2000)
            return;
        }

        // if(types.indexOf(file.type)==-1)
        // {
        //     setError('Please select a video file');
        //     setTimeout(()=>{setError(null)},2000)
        //     return;
        // }

       

        const id = uuidv4();
        const uploadTask = storage.ref(`/posts/movieUrl/${file.name}`).put(file);

        uploadTask.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');         
        }
        function fn2(error){
            setError(error);
            setTimeout(()=>{
                setError(null)
            },2000);
            setLoading(false)
        }
        async function fn3(){
          setLoading(true);
          uploadTask.snapshot.ref.getDownloadURL().
          then(url=>{
              
             let obj  ={
                  comments:[],
                  likes:[],
                  pId:id,
                  pUrl:url,
                  createdAt:database.getCurrentTimeStamp()

                }

              console.log(obj);
              const db = database
              console.log( "db " ,db);
              database.posts.add(obj).then(docRef=>{
                  
                  })
                  
              }).then((res)=>{
                  
                  setLoading(false)
              }).catch(e=>{
                  
                  setError(e);
                  setTimeout(()=>{
                      setError('')
                  },2000);
                  setLoading(false)
              })

              
             


          } 

        
    }

    return (
        <>
        
        {
            
            error!=null? <Alert severity="error">{error}</Alert>:<>
           
            <input 
            color='primary'
            type='file'
            onChange={onChange}
            id='icon-button-file'
            style={{display:'none'}}
            />
            <label htmlFor='icon-button-file'>

            <Button disabled={loading} variant='outlined' component='span' className={classes.button} 
             color="primary" >
                UPLOAD Movie
            </Button>

            </label>
            {loading?<LinearProgress color='secondary' style={{marginTop:'6%'}} />:<></>}
            </>

        }
        </>
    )
}

export default UploadFile