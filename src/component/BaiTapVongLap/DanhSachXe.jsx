import React from "react";
import xeDo from "./img/xe_do.webp";
import xeXanh from "./img/xeXanh.jpg";
import xeVang from "./img/xeVang.webp";
import xeSupra from "./img/supra.webp"
export default function DanhSachXe() {
  let mangSP = [
    {
      id: 1,
      tenSP: "Lamborghini",
      inFormation: "the fastest car in the world!",
      path: xeDo,
    },
    {
      id: 2,
      tenSP: "BMW",
      inFormation: "the greatest car in the world!",
      path: xeVang,
    },
    {
      id: 3,
      tenSP: "Maserati",
      inFormation: "the most beautiful car in the wolrd!",
      path: xeXanh,
    },
    {
      id: 4,
      tenSP: "Supra",
      inFormation: "The super fast car in the world!",
      path: xeSupra,
    },
  ];

  return <div className="container row mx-auto">
    {mangSP.map((item, idx) => {
      return (
        <div className="col-md-4" key={idx}>
          <img src={item.path} alt={idx} className="w-100" style={{ height: "400px" }}></img>
          <h3>{item.tenSP}</h3>
          <p>{item.inFormation}</p>
        </div>
      );
    })};
  
    </div>
}
