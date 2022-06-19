import React,{useState,useEffect} from 'react'
import logo from './images/logo.svg'
import rightPic from './images/picture.svg'
import './Setting.css';

export default function Setting() {
    const[urlResponse,setUrlResponse]=useState([])
    const[userInput,setUserInput] = useState("")
    const[isAppIdPresent,setIsAppIdPresent] = useState("")
    const Url ='https://my-json-server.typicode.com/Prochnost55/mockJSONApi/appId'
    
    useEffect(()=>{
        fetch(Url)
        .then((response)=>response.json())  
        .then((data) => setUrlResponse(data));
    },[])

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const result = urlResponse.some(obj=>obj.id===userInput)?"Success":"Failure"
        setIsAppIdPresent(result)  
    }
    const handleInput=(e)=>{
        setUserInput(parseInt(e.target.value))
    }
  return (
    <div className="settings">
        <div className="titleLogo">
            <img className='logo'alt ="logo" src={logo}></img>
        </div>
        <div className="main">
            <div className="bodySection">
                <h3 className="firstHeading">Adding live chat on your wordpress website is as easy as it gets.</h3>
                <h4 className="subheading">Leverage the chatbot {`&`} live chat to interact with your website visitor and customers 24/7 by following these steps:</h4>
                <div className="container">
                    <div className="leftContainer">
                        <ul className="listPara1">
                            <li><a className="loginLink" href="https://dashboard.kommunicate.io/login" target='_blank'rel="noreferrer">Login&nbsp;</a> 
                            to your kommunicate app and navigate to the 
                            <a className="loginLink" href="https://dashboard.kommunicate.io/login?referrer=/settings/install"target='_blank'rel="noreferrer">&nbsp;setting-{`>`} install</a> section and copy the APP_ID to update below</li>
                        </ul>
                        <div className="formContainer">
                            <form action="" onSubmit={handleFormSubmit}>
                                <div className="inputArea">
                                    <div className='inputLabel'>Enter your APP_ID to enable chat-based support in your product</div>
                                    <input type="Number" className="userInput" onChange={handleInput}
                                    value ={userInput}
                                    required
                                    placeholder='APP_ID' />
                                </div>
                                <div className="updateButtonDiv">
                                    <button type ="submit"className ="updateButton">Save changes</button>
                                        {isAppIdPresent==="Success"?(
                                            <p className='success'>
                                                Changes saved successfully
                                            </p>
                                        ): isAppIdPresent==="Failure"?
                                        (
                                            <p className="failure">
                                                Invalid App ID
                                            </p>  
                                        ):""
                                        }   
                                </div>
                            </form>
                        </div>
                        <ul className="listPara2">
                            <li>Voila! Live chat is now active on your website.</li>
                            <li>Open the website, refresh it and check out the chat plugin. You will find it in the bottom-right corner.</li>
                            <li>You might need to clear cache if your using any cache plugin to see your updates.</li>
                        </ul>
                    </div>
                    <div className="rightContainer">
                        <div className="pictureContainer">
                            <img src={rightPic} alt="a window background" className="picture" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="footerSection">
                <p className='footerText'>For support, please contact us via chat on our website or reach out to <a href="https://www.kommunicate.io/" target="_blank"rel="noreferrer" >support@kommunicate.io.</a></p>
            </div>
        </div>
    </div>
  )
}
