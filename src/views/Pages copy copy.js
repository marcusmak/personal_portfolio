import React, { Fragment, useEffect } from "react";
// import "./index.css"
import ReactDOM from "react-dom/client";
import { Outlet, BrowserRouter,Routes, Route, Link } from "react-router-dom";
// let container = null;
export function Homepage() {
    // useEffect(
    //     ()=>{
            
    //     },[]
    // )
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="./contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}





const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="*/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};


const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
  );

const About = () => (
  <Fragment>
    <h1>About</h1>
  </Fragment>
  );

const Contact = () => (
  <Fragment>
    <h1>Contact</h1>
  </Fragment>
  );
