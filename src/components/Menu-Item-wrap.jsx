import { useEffect } from "react";
import { Col } from "react-bootstrap";

import { MenuItem } from "./Menu-Item";

export const MenuItemWrap = (props) => {
  useEffect(() => {
    // console.log({ ...props });
  }, []);

  return (
    <Col md={6} lg={5} className="d-md-block ">
      <MenuItem {...props} />
    </Col>
  );
};
