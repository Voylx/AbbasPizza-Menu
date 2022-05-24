import React, { useEffect } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";

import menu from "../JSON/menu.json";

export const MenuInfo = () => {
  let type = useParams().type;
  const [searchParams, setSearchParams] = useSearchParams();
  let id = searchParams.get("id");

  const data = menu[type][id];

  useEffect(() => {
    // console.log(data);
    // Object.entries(data).map(([k, v]) => {
    //   k != "image" && console.log(k, v);
    // });
  }, []);

  if (!data) return <Navigate replace to="/notfound" />;
  //
  //
  else
    return (
      <Container fluid="sm" className="my-3">
        <h1 className="m-4">
          {type === "Pizza" && id !== "Half Pizza (2in1)" && type} {id}
        </h1>
        {data.image && (
          <Carousel className="mx-auto col-lg-7 col-md-9 ">
            {data.image.map((v, i) => {
              return (
                <Carousel.Item className="img-wrap" key={i}>
                  <img
                    className=" position-absolute top-0 start-0 w-100 h-100 pizzaimg"
                    src={v}
                    alt={`${id}_${i + 1}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
      </Container>
    );
};
