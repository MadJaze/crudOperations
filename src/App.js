import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/update/update';
import Delete from './components/delete/delete';

function App() {
  return (
    <Router>
      <div className="main" >
        <div>
          <h3>React Crud Operations</h3>
        </div>

        <div style={{ marginTop: 20 }}>
          <Route exact path="/" component={Create} />
      
        </div>


        <div style={{ marginTop: 20 }}>
          <Route path="/read" component={Read} />
    
        </div>


        <Route path="/update/:id" component={Update} />
        <Route path="/delete" component={Delete} />


      </div>



    </Router>
  );
}

export default App;
