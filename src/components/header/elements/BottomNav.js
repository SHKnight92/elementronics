import Link from "next/link";
import React from "react";

import Container from "../../other/Container";
import Category from "./Category";

function BottomNav({ containerType }) {
  return (
    <div className="bottom-nav">
      <Container type={containerType}>
        <div className="bottom-nav-wrapper">
            <Category />
          <div className="bottom-nav-links">
            <div className="bottom-nav-links__item">
              <Link href={process.env.PUBLIC_URL + "/delivary"}>
                <a>Delevary</a>
              </Link>
            </div>
            <div className="bottom-nav-links__item">
              <Link href={process.env.PUBLIC_URL + "/help"}>
                <a>Help</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(BottomNav);
