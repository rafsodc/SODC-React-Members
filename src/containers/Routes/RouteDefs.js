import Banner from "../../ReactUI/Banner/Banner";
import RenderRoutes from "./Routes";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import EventPage from "../Event/EventPage";
import Booking from "../Booking/Booking";

/**
 *  Return constant objects for routing.  @Todo In time this will be replaced with api request
 */

const headerRoutes = [
  {
    path: "/",
    key: "APP_HOME",
    title: "Home",
    exact: true,
    component: Landing,
  },
  {
    path: "/booking",
    key: "APP_BOOKING",
    title: "Book Event",
    exact: true,
    component: Booking
  },
  {
    path: "/booking/:id",
    key: "APP_BOOKING_ID",
    title: "Home",
    component: Booking
  },
];

const footerRoutes = [

];

const otherRoutes = [
  {
    path: "/events/:id",
    key: "APP_EVENT_ID",
    title: "Event",
    component: EventPage,
  }
]

const routes = [
  {
    path: "/",
    key: "APP_ROOT",
    component: RenderRoutes,
    routes: headerRoutes.concat(footerRoutes).concat(otherRoutes),
  },

];

const bannerRoutes = [
];

export default routes
export {bannerRoutes, headerRoutes, footerRoutes}