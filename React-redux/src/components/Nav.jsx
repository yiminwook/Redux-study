import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ol>
          <li><Link>HTML</Link></li>
          <li><Link>CSS</Link></li>
          <li><Link>JavaScript</Link></li>
        </ol>
      </nav>
    </>
  )
}

export default Nav;