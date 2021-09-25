import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

const API_URL = "https://api.bcovlive.io/v1/vods"

function App() {
  const [key, setKey] = useState(null)
  const [liveJob, setLiveJob] = useState(null)
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date())
  const [response, setResponse] = useState()

  const [keyForm, setKeyForm] = useState("")
  const [liveJobForm, setLiveJobForm] = useState("")


  const updateKey = (e) => {
    setKey(keyForm, setKeyForm(""));
  }
  const updateLiveJob = (e) => {
    setLiveJob(keyForm, setLiveJobForm(""));
  }

  const sendClip = (e) => {
    setEndTime(new Date())

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': key
      }
  }
    const body = {
      "live_job_id": liveJob,
        "outputs":[
          {
            "label": "Test Clip From API",
            "start_time": startTime.getTime(),
            "end_time": endTime.getTime(),
            "credentials": "USER_VIDEOCLOUD_CREDENTIAL_LABEL",
            "videocloud": {
              "video": {
                "name": "Test Clip From API",
                "ingest": {
                  "capture-images": true
                }
            }
          }
        }
      ]
    }
    const res = axios.post(`${API_URL}`, body, config );
    setResponse(res)
  }

  return (
    <div className="App">
      <div className="settings">
      <div id="keySettings" className="setting">
        <div className="">
          <p><b>Current API Key:</b> {key}</p>
        </div>
        <input value={keyForm} onChange={e => setKeyForm(e.target.value)}/> 
        <button style={{marginLeft: '5px'}} onClick={e => updateKey(e)}>Update Key</button>
      </div>
      <div id="liveSettings" className="setting">
        <div className="">
          <p><b>Current Live Job:</b> {liveJob}</p>
        </div>
        <input value={liveJobForm} onChange={e => setLiveJobForm(e.target.value)}/> 
        <button style={{marginLeft: '5px'}} onClick={e => updateLiveJob(e)}>Update Key</button>
      </div>
      </div>

      <div id="times">
        <div className="start">
          <h4 className="time">Start</h4>
          <h3 className="time">{startTime.toTimeString()}</h3>
          <button onClick={(e) => setStartTime(new Date())}>Event Wipe</button>
        </div>
        <div className="end">
          <h4 className="time">End</h4>
          <h3 className="time">{endTime.toTimeString()}</h3>
          <button onClick={(e) => sendClip(e)}>Last Results Clear</button>
        </div>
      </div>
      <div id="response">
        <h3>Response</h3>
        <code>{JSON.stringify(response)}</code>
      </div>
    </div>
  );
}

export default App;


// {
//   "live_job_id":"PUT-LIVE-JOB-ID-HERE",
//     "outputs":[
//       {
//         "label": "60 secs - epoch time",
//         "start_time": 1516652694,
//         "end_time": 1516652754,
//         "credentials": "USER_VIDEOCLOUD_CREDENTIAL_LABEL",
//         "videocloud": {
//           "video": {
//           "name": "One Minute Clip",
//           "tags": ["live", "clip"]
//           },
//             "ingest": {
//             "capture-images": true
//         }
//       }
//     }
//   ]
// }