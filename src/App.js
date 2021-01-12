import logo from './logo.svg';
import './App.css';

function App() {

  const postData = async()=>{
    try {
      let result = await fetch('https://webhook.site/ade24327-78ec-45b1-85f5-2bc2722deac2',{
        method: 'post',
        mode: 'no-cors',
        headers:{
          'Accept': 'application/json',
          'content-type': 'application/json',
          //'authorization': 'Bearer YOUR_JWT_TOKEN_HERE',
        },
        body: JSON.stringify({
          key1: 'Emeka was here'
        })
      });

      console.log('Result:', result)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='App-header'>
      <button onClick={postData}>tap to make a post request</button>
    </div>
  );
}

export default App;
