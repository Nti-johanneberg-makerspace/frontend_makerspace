import { useEffect } from 'react';
import { textState } from '../App';
import { useRecoilState } from 'recoil';


const Api = () => {
  const [_, setText] = useRecoilState(textState);
  const apirequest = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8787/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"uuid": localStorage.getItem('uuid')}),
      });
      const json = await response.json();
      if (json === "No valid uuid"){
        localStorage.setItem('uuid', "");
        window.location.reload();
      }
      else{
      console.log("Data successfully fetched");
      setText(json)}
    } 
    catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    apirequest();
  }, [])
}

export default Api;