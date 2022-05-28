import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MenuItem = (props) => {
  const { img, id, value, type } = props;

  return (
    <Row
      as={Link}
      to={`/menu/${type}/${id}`}
      className="border rounded m-1 align-items-center shadow-sm text-black"
    >
      {img && (
        <Col xs={4} md={12}>
          {/* <div className="flex-shrink-0 w-100"> */}
          <div className="img-wrap">
            <Image
              src={img[0]}
              alt={id}
              thumbnail
              rounded
              // fluid
              className="position-absolute top-0 start-0 w-100 h-100 pizzaimg"
            />
          </div>
        </Col>
      )}

      <Col xs={img ? 8 : 12} md={12} className={`pt-md-2 ${!img && "py-3"}`}>
        <div>
          <p className="h3 float-start">{id} </p>
          <p className="h4 text-muted float-end"> {value.Price}</p>
        </div>
      </Col>
      <Col md={12} className="pb-md-5 pt-md-2 d-none d-md-block ">
        <div style={{ height: "5rem" }}>
          <p className="fs-5 float-start text-align-left">{props.children}</p>
        </div>
      </Col>
    </Row>
  );
};
