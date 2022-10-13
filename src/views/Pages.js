import doubleDownArrow from "../assets/img/double-down-arrow.png";
import VerticalNav from "../utils/Vertical-navigation-bar"

import { createRef, useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
  useNavigate,
  Navigate,
  NavLink,
  redirect

} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
// import { Container, Navbar, Nav } from 'react-bootstrap'
import Greetings from '../components/Greetings';
import About_me from '../components/About_me';
import Contact_me from '../components/Contact_me';
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/pages.css'
import Projects from "../components/Projects";
const root_url = (url) => "/personal_portfolio" + url;
const routes = [
  { path: '/', name: 'Home', element: <Greetings />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About_me />, nodeRef: createRef() },
  { path: '/projects', name: 'Projects', element: <Projects />, nodeRef: createRef() },
  // { path: '/skills', name: 'Contact', element: <Contact_me />, nodeRef: createRef()},
  { path: '/contact', name: 'Contact', element: <Contact_me />, nodeRef: createRef() },
]
if (window.location.pathname == root_url('')) {
  window.location.href = root_url('/');
}
const router = createBrowserRouter([
  {
    path: root_url(''),
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : root_url(route.path),
      element: route.element,
    })),
  },
  {
    path: "*",
    element: <Navigate to='/personal_portfolio/' />
  }
])
function Example() {


  const location = useLocation()
  const navigate = useNavigate()
  const currentOutlet = useOutlet()



  const findRef = () => (routes.find((route) => root_url(route.path) === location.pathname)).nodeRef;
  const [nodeRef, setNodeRef] = useState(findRef() ?? {});
  const [currentPage, setCurrentPage] = useState(location.pathname);
  const currentPageNo = useRef(0);
  const updateDir = useRef("DOWN");
  const [show, setShow] = useState(true);


  function el(event) {
    console.log("on scroll");
    onScrollEvent(event);
  }
  let removeEl = () => {
    window.removeEventListener("wheel", el);
    console.log("remove wheel event listener");
    
  }
  let addEl = () => {
    console.log("add wheel event listener");
    window.addEventListener("wheel", el,{once:true});
    // window.addEventListener("wheel", el);
  }


  let touchstartY = 0
  let touchendY = 0

  function checkDirection() {
    if (touchendY < touchstartY) changePage("next")
    if (touchendY > touchstartY) changePage("prev")    
  }



  var functionLock = false;
  let count = useRef(0);
 
  const onScrollEvent = function (e) {
    // console.log("onscroll");
    console.log("count:" + ++count.current + "\t" + functionLock);
    // console.log(e.deltaY);
    if (!(functionLock) && e.deltaY) {
      functionLock = true;
      removeEl();
      changePage(e.deltaY > 0?"next":"prev");
      setTimeout(()=>{
        functionLock = false;
        addEl();
      },1500);
    }
  }

  const changePage = (page) => {

    if (page == "next" && currentPageNo.current < routes.length - 1) {
      currentPageNo.current += 1;
      updateDir.current = "DOWN"
    }else if(page == "prev" && currentPageNo.current > 0){
      currentPageNo.current -= 1;
      updateDir.current = "UP"
    }
    setCurrentPage(root_url(routes[currentPageNo.current].path));
    console.log('' + currentPageNo.current + "\t" + routes[currentPageNo.current].path);
  }

  var once = useRef(false);
  
  useEffect(
    () => {
      if (!(once.current)) {
        console.warn('addEl: '+ count.current)
        addEl();

        document.addEventListener('touchend', e => {
          touchendY = e.changedTouches[0].screenY
          checkDirection()
        });
        document.addEventListener('touchstart', e => {
          touchstartY = e.changedTouches[0].screenY
        });

        once.current = true;
      } else{
        navigate(currentPage);
      }
      // return removeEl;
    }
    , [currentPage])
    






  useEffect(() => {
    setNodeRef(findRef());
    if (show && location.pathname != root_url('')){
      setShow(false);
    }
    if (!show && location.pathname == root_url('')){
      setShow(true);
      // updateDir.current = "DOWN";
    }
    
    let route = routes.find((route)=> root_url(route.path) === location.pathname);
    currentPageNo.current = routes.indexOf(route);

  }, [location]);

  return (
    <>
        {/* <div>
          <div className="mx-auto">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                // as={NavLink}
                to={root_url(route.path)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end
              >
                {route.name}
              </NavLink>
            ))}
          </div>
        </div> */}

        {/* <NavLink to={root_url('')}> Home </NavLink> */}
        <div className="side-nav">
          <div>
            <VerticalNav routes={routes} currentPageNo={currentPageNo}></VerticalNav>
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode='out-in'>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              // timeout={300}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames={updateDir.current + " fade"}
            // unmountOnExit
            >
              {(state) => (
                <div ref={nodeRef} className="page">
                  {currentOutlet}
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>
          {show ?
            <div className="scroll-indicator animatedDown">
              <p>scroll down</p>
              <img src={doubleDownArrow} />
            </div> : null
          }
        </div>
      </>
    );
  
}

const Pages = () => <RouterProvider router={router} />;

export default Pages;

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<RouterProvider router={router} />)
