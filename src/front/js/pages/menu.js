import React from "react";
import andalogofood from "../../img/anda.png";
import { Link } from "react-router-dom";

export const Menu = () => {

  const menuDay2 = {

    LUNES: [
      { id: "Lunes_1", name: "Opción 1", img: "https://cdn0.recetasgratis.net/es/posts/4/3/6/arroz_con_pollo_al_curry_28634_orig.jpg" },
      { id: "Lunes_2", name: "Opción 2", img: "https://www.nutrioli.com/wp-content/uploads/2016/06/Ensalada-de-lechugas-frutas-y-nuez-de-la-india-2.jpg" },
      { id: "Lunes_3", name: "Opción 3", img: "https://www.lacocinadelila.com/wp-content/uploads/2021/01/albondigas-de-pollo-600x450.jpg" },
    ],
    MARTES: [
      { id: "Martes_1", name: "Opción 1", img: "https://content.elmueble.com/medio/2024/10/03/pollo-a-la-plancha-con-verduras-al-pesto_a53bee68_241003155651_1200x1200.webp" },
      { id: "Martes_2", name: "Opción 2", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg" },
      { id: "Martes_3", name: "Opción 3", img: "https://sinreservas.com.ar/download/multimedia.normal.97a15526e9be66bf.53616e7a61727520283130295f6e6f726d616c2e77656270.webp" },
    ],
    MIÉRCOLES: [
      { id: "Miércoles_1", name: "Opción 1", img: "https://www.deliciosi.com/images/300/378/crema-de-calabaza.jpg" },
      { id: "Miércoles_2", name: "Opción 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrVXtOErESITNnhn9MJMOptSFBKsEPA-9QA&s" },
      { id: "Miércoles_3", name: "Opción 3", img: "https://content.elmueble.com/medio/2024/09/06/arroz-con-verduras_ab2a54ac_240906144446_1200x1200.jpg" },
    ],
    JUEVES: [
      { id: "Jueves_1", name: "Opción 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeL6NmTbnojfQnaiMnYoLpiNqzOYnkNMBQHA&s" },
      { id: "Jueves_2", name: "Opción 2", img: "https://truffle-assets.tastemadecontent.net/cdn-cgi/image/width=360/a2f94f01-742_friedchickensalad_square2.jpg" },
      { id: "Jueves_3", name: "Opción 3", img: "https://www.frutamare.com/wp-content/uploads/2021/04/pasta-a-la-bolonesa.jpg" },
    ],
    VIERNES: [
      { id: "Viernes_1", name: "Opción 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n0A8vIS8MRwnHMZhX-MxS2W_L2b0-6g8Jw&s" },
      { id: "Viernes_2", name: "Opción 2", img: "https://img.freepik.com/fotos-premium/weiner-schnitzel-empanado-casero-papas-fritas-pollo-frito-papas-fritas-estilo-comida-europea_1339-152591.jpg" },
      { id: "Viernes_3", name: "Opción 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpQ3KilaPlZwatN49TzcFTRwbDXQ-VFWsx_tScOJkHuh7zyh8_rIVvc-r72wM6whCNfc&usqp=CAU" },
    ],
    SÁBADO: [
      { id: "Sábado_1", name: "Opción 1", img: "https://cdn0.recetasgratis.net/es/posts/8/9/0/ensalada_de_garbanzos_vegana_59098_600_square.jpg" },
      { id: "Sábado_2", name: "Opción 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnXJcdnE2L04D4PAB0py1DthQJoctIfVfUw&s" },
      { id: "Sábado_3", name: "Opción 3", img: "https://i.pinimg.com/736x/bf/cf/ce/bfcfce36554e902259cbcad00169a51c.jpg" },
    ],
  };


  return (
    <div className="container mt-3">
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center">
            <img src={andalogofood} alt="Anda Food Logo" style={{ width: "50px", height: "50px", marginRight: "10px", "borderRadius": "10px" }} />
          </a>
          <div className="d-flex">
            <button className="btn m-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
            <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title text-primary" id="offcanvasExampleLabel">Lista de Compras</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  Menúes
                </div>
                <div className="mt-auto d-flex justify-content-end">
                <button type="button" class="btn btn-secondary m-1">Cerrar</button>
                <button type="button" class="btn btn-success m-1">Pagar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* El menú */}
      <div className="menudeldia2" style={{ backgroundColor: "rgb(56, 101, 229, 0.3)", borderRadius: "10px", overflow: "hidden", marginTop: "20px", fontFamily: "Mulish, sans-serif" }}>
        <div className="mb-5">
          <h2 className="text-center text-light" style={{ "fontWeight": "bold" }}>MENÚ DE LA SEMANA</h2>
          <div className="row">
            {Object.keys(menuDay2).map((day) => (
              <div key={day} className="col-12 mb-5">

                <h3 className="text-center" style={{ color: "white" }}>{day}</h3>
                <div className="row">
                  {menuDay2[day].map((item) => (
                    <div key={item.id} className="col-12 col-md-4 mb-3">
                      <div className="card h-100 mx-3" style={{ borderRadius: "10px", overflow: "hidden" }}>
                        <div className="position-relative" style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "15px", fontWeight: "bold", textAlign: "center", padding: "10px 0" }}>
                          {item.name}
                        </div>
                        <img src={item.img} className="card-img-top img-fluid" alt={item.name} style={{ objectFit: "cover", height: "300px" }} />
                        <div className="card-body text-center d-flex justify-content-between">
                          <button className="btn w-50 m-1" style={{ backgroundColor: "rgb(56, 101, 229)", color: "white" }}>Comprar</button>
                          <Link to={"/feedback/:theid"}>
                          <button className="btn w-10 m-1" style={{ backgroundColor: "#9b51e0", color: "white" }}>
                            <i className="fa-regular fa-star"></i>
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

