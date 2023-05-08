import React, { useState } from "react";
import "./topbar.css";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import { height } from "@mui/system";

function Topbar() {
  return (
    <div className="topbar form-control-lg " style={{ marginBottom: "10px" }}>
      <span className="logo" style={{ color: "DC143C", height: "50px" }}>
      HarvestProfit
      </span>
    </div>
  );
}

// function Topbar(props) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <Nav tabs>
//       <NavItem>
//         <NavLink href="#" active>
//           Link
//         </NavLink>
//       </NavItem>
//       <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//         <DropdownToggle nav caret>
//           Dropdown
//         </DropdownToggle>
//         <DropdownMenu>
//           <DropdownItem header>Header</DropdownItem>
//           <DropdownItem disabled>Action</DropdownItem>
//           <DropdownItem>Another Action</DropdownItem>
//           <DropdownItem divider />
//           <DropdownItem>Another Action</DropdownItem>
//         </DropdownMenu>
//       </Dropdown>
//       <NavItem>
//         <NavLink href="#">Link</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink href="#">Another Link</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink disabled href="#">
//           Disabled Link
//         </NavLink>
//       </NavItem>
//     </Nav>
//   );
// }

export default Topbar;
