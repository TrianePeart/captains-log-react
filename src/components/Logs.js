import {useEffect, useState} from "react"
import Log from "./Log"
import axios from "axios"

function Logs(){
    const [logs, setLogs] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${API}/logs`);
            setLogs(response.data);
        };
        fetchData();
    }, []);
    

  return (
    <div className="Logs">
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>

    </div>
  );
}
 //Axios goes here
export default Logs;