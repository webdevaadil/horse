import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/login"/>
            <Route exact path="/register"/>
            <Route exact path="/forgetpassord"/>
            <Route exact path="/passwordreset"/>
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App;
