import React from "react";
import { Container, Row, Col } from "reactstrap";
import useAuth from "../../Hook/useAuth";
import "../../style/Admin-Nav.css";
import { Link, NavLink } from "react-router-dom";
const AdminNav = () => {
  const { currentUser } = useAuth();

  const admin_nav = [
    {
      display: "Dashboard",
      path: "/dashboard",
    },
    {
      display: "All-Products",
      path: "/dashboard-all-products",
    },
    {
      display: "Add-Products",
      path: "/dashboard-add-products",
    },

    {
      display: "Users",
      path: "/dashboard/users",
    },
  ];
  return (
    <>
      <header className="admin_header">
        <div className="admin_nav_top">
          <Container>
            <div className="admin_nav_wrapper_top">
              <div className="logo">
                <Link to='/home'><h2>Bellacasa</h2></Link>
                
              </div>
              <div className="search_box">
                <input type="text" placeholder="search..." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin_nav_top_right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser&& currentUser.photoURL} alt="user" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu_list">
                {admin_nav.map((item, index) => (
                  <li className="admin_menu_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_admin_menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
