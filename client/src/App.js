import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/header/header';

class App extends React.Component {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  render(){
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;