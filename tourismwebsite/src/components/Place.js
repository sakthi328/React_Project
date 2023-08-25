import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Place(){
    return(
<div>
<div className="text-center mt-5">
  <h4>Tourist Place To Tamil Nadu</h4>
  <h4>Here Are The Top Places To Visit In Tamil Nadu In 2023</h4>
</div>

<div className="container mt-5 district">
  <ul className=" row row-cols-5 text-center  list-unstyled  ">
    <li>
      <Link className=" text-decoration-none  fw-medium" to="#chennai">
        Chennai
      </Link>
    </li>
    <li>
      <Link
        className=" text-decoration-none fw-medium "
        to="#kodaikanal"
      >
        Kodaikanal
      </Link>
    </li>
    <li>
      <Link className=" text-decoration-none fw-medium " to="#madurai">
        Madurai
      </Link>
    </li>
    <li>
      <Link
        className=" text-decoration-none fw-medium "
        to="#kumbakonam"
      >
        Kumbakonam
      </Link>
    </li>
    <li>
      <Link className=" text-decoration-none fw-medium " to="#theni">
        Theni
      </Link>
    </li>
    <li>
      <Link
        className=" text-decoration-none fw-medium "
        to="#rameshwaram"
      >
        Rameshwaram
      </Link>
    </li>
    <li>
      <Link className=" text-decoration-none fw-medium " to="#Ooty">
        Ooty
      </Link>
    </li>
    <li>
      <Link
        className=" text-decoration-none fw-medium "
        to="#kaniyakumari"
      >
        Kanyakumari
      </Link>
    </li>
    <li>
      <Link className=" text-decoration-none fw-medium " to="#yarcaud">
        Yarcaud
      </Link>
    </li>
    <li>
      <Link
        className=" text-decoration-none fw-medium "
        to="#hogenakkal"
      >
        Hogenakkal
      </Link>
    </li>
  </ul>
</div>
</div>
)
}
export default Place;