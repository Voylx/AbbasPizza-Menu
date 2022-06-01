import React from "react";
import { Container, Row } from "react-bootstrap";

import { MenuList } from "../components/Menu-List";
import { MenuItem } from "../components/Menu-Item";

import menu_J from "../JSON/menu.json";

const { Pizza, Appetizer, ...menu } = menu_J;

// console.log(Pizza, Appetizer, menu);

export const Home = () => {
  return (
    <Container fluid className="my-3">
      <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
        <h1 className="text-start ms-5">Pizza</h1>
        <MenuList items={Pizza} type="Pizza" />
        <h1 className="text-start ms-5 my-2">Appetizer</h1>
        <MenuList items={Appetizer} type="Appetizer" />
      </div>
      <div className="col-md-10 col-lg-9 mx-auto">
        <Row className="py-md-3">
          {Object.entries(menu).map(([k, v]) => {
            return (
              <div key={k} className="col-md-6 col-lg-4">
                <h1 className="text-start ms-5">{k}</h1>
                {Object.entries(v).map(([key, value]) => {
                  return (
                    <MenuItem
                      img={value.image}
                      id={key}
                      value={value}
                      type={k}
                      key={key}
                    >
                      {value.ingredient
                        ? value.ingredient.EN.join(", ")
                        : value.Detail &&
                          value.Detail.map((string, i) => (
                            <React.Fragment key={i}>
                              {string}
                              <br />
                            </React.Fragment>
                          ))}
                    </MenuItem>
                  );
                })}
              </div>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};
