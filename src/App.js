import './App.css';
import { useEffect, useState } from 'react';

import api from './services/api';

function App() {
  const [users, setUsers] = useState([])
  const headers = [
    "ID",
    "Name",
    "Email",
    "Gender",
    "Status"
  ]
  useEffect(() => {
    getData()
  }, [])

  const getData= async()=>{
    const response = await api.users.getUsers()
    if(response.success){
      const activeUsers = response.filter(user=>user.status === 'active')
      setUsers(activeUsers)
      console.log(activeUsers)
      console.log(Object.keys(activeUsers[0]))

    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <p>
         Usuarios activos
        </p>
        
        <table>
          <tr>
            {
              headers.map(i=>(
                <th>{i}</th>  
              ))
            }
          </tr>
          {
            users?.map(user=>(
              <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              </tr> 
            ))
          }
          
        </table>

      </header>
    </div>
  );
}

export default App;
