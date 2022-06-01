import { Col } from "react-bootstrap";

import { MenuItem } from "./Menu-Item";

export const MenuItemWrap = (props) => {
  return (
    <Col md={6} lg={5} xxl={4} className="d-md-block ">
      <MenuItem {...props} />
    </Col>
  );
};
