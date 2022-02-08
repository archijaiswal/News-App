import { makeStyles } from "@material-ui/core";

export default makeStyles(
    {
        
        card: {
         
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '45vh',
            padding: '10%',
            borderRadius: 10,
            color: 'white',
          },
          infoCard: {
            display: 'flex', flexDirection: 'column', textAlign: 'center',
          },
          // container: {
          //   padding: '0 5%', width: '100%', margin: '0'
          // },
        container:{
            padding: '2 2%',
            width: '100%',
            margin: '0',
            backgroundColor: 'white',
            borderRadius: '5px'

        },
        normal: {
            color: 'red',
            height: '100%',
            width: '100%',

          },
          d:{
        width: '80%',
    margin: 'auto'} 
}

    
);