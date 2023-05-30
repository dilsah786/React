
import './App.css';
import ShoppingList from './component/button.js'




let MyButton =()=>{
  return(
    <button >I am a Button</button>
    
  );
}






 
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  
  }
  

  


function App() {
  return (
    <> 
    <div className="App">
      <h1>hello</h1>
      <MyButton/>
      <h1>{user.name}</h1>

<img className='avatar'
src={user.imageUrl} alt={'image of '+ user.name}/>      
    </div>
    <ShoppingList/>
    </>
  );
}

export default App;
