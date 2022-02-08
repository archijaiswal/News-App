import React,{ useEffect, useState} from "react";
// import {AppBar,Typography,Toolbar} from "@material-ui/core";
import SearchAppBar from "./components/nav";
import NewsCards from "../src/components/NewsCards/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey = '4278cbd9c4eca8383977dbcd1c2bc6252e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {

    const[newsArticles, setNewsArticles ] = useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            // onCommand: ({command}) => {
            //     alert('This execute');
            // }
            onCommand: ({ command,articles }) => {
                if(command === 'newHeadlines'){
                    console.log(articles);
                     setNewsArticles(articles);
                    
                }
            }
        })
    },[])
    return(
        <div>
            {/* <h1>AI News Application</h1> */}
            {/* <AppBar position="sticky" style={{backgroundColor:"transparent"}}>
                <Typography variant="h2" color="white">Live</Typography>

            </AppBar> */}
            <SearchAppBar />
            <br />
            <center>
            <img src="images/1.jpg" alt="." height="250vh" width="300vw"/></center>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;