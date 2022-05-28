import React from "react";
import { Stack, Row } from "react-bootstrap";

import { MenuItemWrap } from "./Menu-Item-wrap";

export const MenuList = ({ items, type }) => {
  return (
    <Stack gap={3} className="">
      <Row className="flex-wrap flex-md-nowrap overflow-auto align-items-center ">
        {Object.entries(items).map(([key, value]) => {
          return (
            <MenuItemWrap
              img={value.image}
              id={key}
              value={value}
              type={type}
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
            </MenuItemWrap>
          );
        })}
      </Row>
    </Stack>
  );
};
