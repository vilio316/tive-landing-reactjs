import ReactDOM from "react-dom/client";
import React from "react";
import TivePage from "./index.jsx";
const root= ReactDOM.createRoot(document.getElementById("root"));
    function AppDrop(){
        return(
            <React.StrictMode>
            <TivePage/>
            </React.StrictMode>
        )
        }
root.render(<AppDrop/>);
export default AppDrop;