import * as React from "react"
import TestComponent from "../TestComponent";
import SetupInitialPage from "../Setup/SetupInitialPage";

// DashboardMain.js
/*
    Encapsulates main functionality of landing dashboard for users who have logged in. May need to rework file structure
*/

const Pane1 = (props) => {
    return (
        <div>
            <h1>First Pane</h1>
            <div>
                <button onClick={() => props.history.push('/')}>Back To Start</button>
            </div>
        </div>
    )
}

const Pane2 = (props) => {
    return (
        <div>
            <h1>Second Pane</h1>
            <div>
                <button onClick={() => props.history.push('/setup/initial')}>Setup Initial Page</button>
            </div>
        </div>
    )
}

const SplitPane = (props) => {
    return (
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}

const Dashboard = (props) => {
    return (
        <SplitPane left={<Pane1 />} right={<Pane2 />}/>
    );
}
export default Dashboard