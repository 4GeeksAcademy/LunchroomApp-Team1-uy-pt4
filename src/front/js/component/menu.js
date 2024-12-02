import React from "react";
import andalogofood from "../../img/anda.png";
import { useNavigate } from "react-router-dom";


export const Menu = () => {

  const navigate = useNavigate();

  const menuDay2 = {

    LUNES: [
      { id: "lunes_1", name: "Opción 1", description:"Platillo de arroz con trozos de pollo y verduras.", img: "https://cdn0.recetasgratis.net/es/posts/4/3/6/arroz_con_pollo_al_curry_28634_orig.jpg", price: "$350" },
      { id: "Lunes_2", name: "Opción 2", description:"Esto es una descripción...", img: "https://www.nutrioli.com/wp-content/uploads/2016/06/Ensalada-de-lechugas-frutas-y-nuez-de-la-india-2.jpg", price: "$350" },
      { id: "lunes_3", name: "Opción 3", description:"Esto es una descripción...", img: "https://www.lacocinadelila.com/wp-content/uploads/2021/01/albondigas-de-pollo-600x450.jpg", price: "$350" },
    ],
    MARTES: [
      { id: "Martes_1", name: "Opción 1", description:"Esto es una descripción...", img: "https://content.elmueble.com/medio/2024/10/03/pollo-a-la-plancha-con-verduras-al-pesto_a53bee68_241003155651_1200x1200.webp", price: "$350" },
      { id: "Martes_2", name: "Opción 2", description:"Esto es una descripción...", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg", price: "$350" },
      { id: "Martes_3", name: "Opción 3", description:"Esto es una descripción...", img: "https://sinreservas.com.ar/download/multimedia.normal.97a15526e9be66bf.53616e7a61727520283130295f6e6f726d616c2e77656270.webp", price: "$350" },
    ],
    MIÉRCOLES: [
      { id: "Miércoles_1", name: "Opción 1", description:"Esto es una descripción...", img: "https://www.deliciosi.com/images/300/378/crema-de-calabaza.jpg", price: "$350" },
      { id: "Miércoles_2", name: "Opción 2", description:"Esto es una descripción...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrVXtOErESITNnhn9MJMOptSFBKsEPA-9QA&s", price: "$300" },
      { id: "Miércoles_3", name: "Opción 3", description:"Esto es una descripción...", img: "https://content.elmueble.com/medio/2024/09/06/arroz-con-verduras_ab2a54ac_240906144446_1200x1200.jpg", price: "$250" },
    ],
    JUEVES: [
      { id: "Jueves_1", name: "Opción 1", description:"Esto es una descripción...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeL6NmTbnojfQnaiMnYoLpiNqzOYnkNMBQHA&s", price: "$350" },
      { id: "Jueves_2", name: "Opción 2", description:"Esto es una descripción...", img: "https://truffle-assets.tastemadecontent.net/cdn-cgi/image/width=360/a2f94f01-742_friedchickensalad_square2.jpg", price: "$350" },
      { id: "Jueves_3", name: "Opción 3", description:"Esto es una descripción...", img: "https://www.frutamare.com/wp-content/uploads/2021/04/pasta-a-la-bolonesa.jpg", price: "$300" },
    ],
    VIERNES: [
      { id: "Viernes_1", name: "Opción 1", description:"Esto es una descripción...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n0A8vIS8MRwnHMZhX-MxS2W_L2b0-6g8Jw&s", price: "$350" },
      { id: "Viernes_2", name: "Opción 2", description:"Esto es una descripción...", img: "https://img.freepik.com/fotos-premium/weiner-schnitzel-empanado-casero-papas-fritas-pollo-frito-papas-fritas-estilo-comida-europea_1339-152591.jpg", price: "$250" },
      { id: "Viernes_3", name: "Opción 3", description:"Esto es una descripción...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpQ3KilaPlZwatN49TzcFTRwbDXQ-VFWsx_tScOJkHuh7zyh8_rIVvc-r72wM6whCNfc&usqp=CAU", price: "$200" },
    ],
    SÁBADO: [
      { id: "Sábado_1", name: "Opción 1", description:"Esto es una descripción...", img: "https://cdn0.recetasgratis.net/es/posts/8/9/0/ensalada_de_garbanzos_vegana_59098_600_square.jpg", price: "$350" },
      { id: "Sábado_2", name: "Opción 2", description:"Esto es una descripción...", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnXJcdnE2L04D4PAB0py1DthQJoctIfVfUw&s", price: "$300" },
      { id: "Sábado_3", name: "Opción 3", description:"Esto es una descripción...", img: "https://i.pinimg.com/736x/bf/cf/ce/bfcfce36554e902259cbcad00169a51c.jpg", price: "$350" },
    ],
  };

  const irAFeedback = (item) => {
    navigate(`/feedback/${item.id}`, { state: item });
  };

  const irAReservaDeLugar = () => {
    navigate("/reservations");
  };


  return (
    <div className="container mt-3">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center">
            <img src={andalogofood} alt="Anda Food Logo" style={{ width: "50px", height: "50px", marginRight: "10px", "borderRadius": "10px" }} />
          </a>
          <div className="flex-direction-column">
            <p><a className="link-opacity-10-hover m-2  " href="#">Déjanos tu comentario</a></p>
            <button className="btn m-1 " type="button" style={{ backgroundColor: "rgb(56, 101, 229)", "color": "white" }}
              onClick={() => irAReservaDeLugar()}
            >
              Reserva de lugar
            </button>
            <button className="btn m-1  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title text-primary" id="offcanvasExampleLabel">Lista de Compras</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>

              </div>
              <div className="offcanvas-body">
                <div>
                  Menúes
                </div>
                <div className="mt-auto d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary m-1">Cerrar</button>
                  <button type="button" className="btn btn-success m-1">Pagar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu del dia */}
      <div className="menudeldia2" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif" }}>
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>MENÚ DE LA SEMANA</h2>
          <div className="row">
            {Object.keys(menuDay2).map((day) => (
              <div key={day} className="col-12 mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(56, 101, 229, 0.5)",
                    borderRadius: "10px",
                    padding: "15px",

                  }}
                >
                  <h3 className="text-center" style={{ color: "white" }}>{day}</h3>
                  <div className="row">
                    {menuDay2[day].map((item) => (
                      <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3">
                        <div
                          className="card mx-auto"
                          style={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            width: "200px",
                            height: "200px",
                            border: "none",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <div
                            className="position-relative"
                            style={{
                              backgroundColor: "rgb(56, 101, 229)",
                              color: "white",
                              fontSize: "14px",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            {item.name}
                          </div>
                          <img
                            src={item.img}
                            className="card-img-top img-fluid"
                            alt={item.name}
                            style={{
                              objectFit: "cover",
                              height: "100px",
                              width: "100%",
                            }}
                          />
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              color: "rgb(56, 101, 229)",
                              textAlign: "center",
                              height: "120px",
                            }}
                          >
                            {item.price}
                          </div>
                          <div className="card-body text-center p-2">
                            <div className="d-flex justify-content-between">
                              <button
                                className="btn "
                                style={{
                                  backgroundColor: "rgb(56, 101, 229)",
                                  color: "white",
                                  fontSize: "12px",
                                  borderRadius: "10px",
                                }}
                              >
                                Comprar
                              </button>
                              <button
                                className="btn"
                                style={{
                                  backgroundColor: "transparent",
                                  fontSize: "20px",
                                }}
                                onClick={() => irAFeedback(item)}
                              >
                                ⭐
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* CARRUSEL OTRAS OPCIONES  */}
      <div className="container mb-1">
        <h1 className="text-center" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif", color: "rgb(56, 101, 229)" }}>
          OTRAS OPCIONES
        </h1>
        <div className="d-flex justify-content-center flex-wrap">

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://i.pinimg.com/736x/cc/8e/3c/cc8e3cb0ff29ae7c19499124dfea1196.jpg"
              alt="Cocacola común"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            /><div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $62</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>


          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://i.pinimg.com/736x/c2/f6/92/c2f692861075c7bbcd97ec594962222d.jpg"
              alt="Cocacola light"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $62</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>


          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://i.pinimg.com/736x/a1/5e/ab/a15eab3e7c4f254c5b0701d007992599.jpg"
              alt="Cocacola zero"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $62</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://molinoagranel.com.uy/wp-content/uploads/2023/06/agua-mineral-salus-600-ml.jpg"
              alt="Agua salus"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $42</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCLdNje1XoCGFCNiRhbZwFq8ZPJaIY6Xf-Q&s"
              alt="Manzanas"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $15 por unidad.</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBy2uSUuJbO0wEsgICk3ovc0utf9QibCkMXw&s"
              alt="Naranjas"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $15 por unidad.</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};
