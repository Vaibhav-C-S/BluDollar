// import React from "react";
// import Dashboard from "./components/manager_dashboard/Dashboard";
// // import Manager from "./components/manager_dashboard/Manager";

// // import Booking from "./components/Employee-Page/Booking";
// // import Login from "./components/sign-up/Login";

// const App = () => {
//     return (
//         <div>
//             {/* <Login />  */}
//             {/* <Booking />  */}
//             {/* <Manager />  */}
//             <Dashboard />
//         </div>
//     );
// };
// //
// export default App;
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Booking from "./components/Employee-Page/Booking";
// import Dashboard from "./components/manager_dashboard/Dashboard";
import Login from "./components/sign-up/Login";
import Manager from "./components/manager_dashboard/Manager";
import ForApis from "./components/ForApis";
const App = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Dashboard />} /> */}
                <Route path="/" element={<Login />} />

                <Route path="/booking" element={<Booking />} />
                <Route path="/manager" element={<Manager />} />
                <Route path ='/api' element={<ForApis/>}/>
            </Routes>
        </Router>
    );
};

export default App;
