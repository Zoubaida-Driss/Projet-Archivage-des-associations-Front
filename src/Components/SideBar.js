import React from 'react'

const SideBar = () => {
  return (
    <div>
<div className="sidebar">
            {/*
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    */}
            <div className="sidebar-wrapper">
              <div className="logo">
                <a href="javascript:void(0)" className="simple-text logo-mini">
                  logo
                </a>
                <a href="javascript:void(0)" className="simple-text logo-normal">
                  AssociaList
                </a>
              </div>
              <ul className="nav">
                <li>
                  <a href="./dashboard.html">
                    <i className="tim-icons icon-chart-pie-36" />
                    <p>Dashboard</p>
                  </a>
                </li>
                <li>
                  <a href="./icons.html">
                    <i className="tim-icons icon-atom" />
                    <p>Icons</p>
                  </a>
                </li>
                <li>
                  <a href="./map.html">
                    <i className="tim-icons icon-pin" />
                    <p>Maps</p>
                  </a>
                </li>
                <li>
                  <a href="./notifications.html">
                    <i className="tim-icons icon-bell-55" />
                    <p>Notifications</p>
                  </a>
                </li>
                <li>
                  <a href="./user.html">
                    <i className="tim-icons icon-single-02" />
                    <p>User Profile</p>
                  </a>
                </li>
                <li className="active ">
                  <a href="./tables.html">
                    <i className="tim-icons icon-puzzle-10" />
                    <p>Table List</p>
                  </a>
                </li>
                <li>
                  <a href="./typography.html">
                    <i className="tim-icons icon-align-center" />
                    <p>Typography</p>
                  </a>
                </li>
                <li>
                  <a href="./rtl.html">
                    <i className="tim-icons icon-world" />
                    <p>RTL Support</p>
                  </a>
                </li>
                <li className="active-pro">
                  <a href="./upgrade.html">
                    <i className="tim-icons icon-spaceship" />
                    <p>Upgrade to PRO</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

    </div>
  )
}

export default SideBar