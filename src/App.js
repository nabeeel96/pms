import React,{createContext} from "react"
import Main from "./Pages/Main";
import {ConfigureStore} from "./Redux/Store";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

const store = ConfigureStore()


function App() {

    return(
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>
    )
}

export default App
