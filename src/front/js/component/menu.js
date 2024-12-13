import React, { useState, useEffect, useContext } from "react";
import andalogofood from "../../img/anda.png";
import userlogo from "../../img/user.webp";
import "../../styles/shoppingCart.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "/src/front/styles/home.css";
import { CardMenu } from "./cardMenu";
import { CardOption } from "./cardOptions";
import { MenuNavbar } from "./navbarMenu";
import { SelectedMenuData } from "./cardMenu";


export const Menu = () => {

  const { actions, store } = useContext(Context)

  const navigate = useNavigate();


  const [quantity, setQuantity] = useState(1);

  const [spinner, setSpinner] = useState(false);

  const [menus, setMenus] = useState([]);

  const [listCart, setListCart] = useState([]);

  const [showNotification, setShowNotification] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("listCart"));
    if (carritoGuardado) {
      setListCart(carritoGuardado);
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("listCart", JSON.stringify(listCart));
  }, [listCart]);

  const mostrarNotificacion = () => {
    if (!showNotification) {
      console.log("Mostrando notificación...");
      setShowNotification(true);
      setTimeout(() => {
        console.log("Ocultando notificación...");
        setShowNotification(false);
      }, 500);
    }
  };

  const handleClick = (item) => {
    // Check if item already exists in the cart
    const exists = listCart.some((producto) => producto.id === item.id);

    // Update cart state
    setListCart((carritoActual) => {
      if (!exists) {
        return [...carritoActual, item];
      }
      return carritoActual;
    });
  };

  // const handleClick = (item) => {
  //   setListCart((carritoActual) => {
  //       console.log("Carrito actual:", carritoActual);
  //       console.log("Nuevo item:", item);
  //       const existe = carritoActual.some((producto) => producto.id === item.id);
  //       if (!existe) {
  //           return [...carritoActual, item];
  //       }
  //       return carritoActual;
  //   });
  // };

  const handleNotificacion = () => {
    return mostrarNotificacion()
  };


  const handleCompra = async () => {
    if (listCart.length === 0) {
      alert("El carrito está vacío. Por favor, añade productos antes de pagar.");
    } else {
      setSpinner(true)
      setTimeout(() => {
        setSpinner(false)
        irAPayment();
      }, 2000)
    }
  };

  const decrecer = () => {

  };

  const acrecentar = () => {

  };

  useEffect(() => {

    actions.getMenu("Lunes")
    actions.getMenu("Martes")
    actions.getMenu("Miercoles")
    actions.getMenu("Jueves")
    actions.getMenu("Viernes")
    actions.getMenu("Sabado")
    actions.getOptions("CocaCola")
    actions.getOptions("CocaCola Zero")
    actions.getOptions("CocaCola Light")
    actions.getOptions("Agua")
    actions.getOptions("Naranja")
    actions.getOptions("Manzana")
  }, []);



  // const irAFeedback = (item) => {
  //   navigate(`/feedback/${item.id}`, { state: item });
  // };

  const irAReservaDeLugar = () => {
    navigate("/reservations");
  };

  const irAPayment = () => {
    navigate("/payment");
  };

  const handleLogout = () => {
    actions.logout(); 
    navigate("/");
};

  //Sacar el menuNavbar para otro componente.

  const MenuNavbar = (props) => {
    return (
      <nav className="navbar bg-body-tertiary">

        <div className="container-fluid d-flex justify-content-between align-items-center" >

          <div href="#offcanvasScrolling" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasScrolling">

            <button className="btn " style={{ backgroundColor: "transparent", borderColor: "transparent" }}>

              <div className="btn btn-ligth">

                <img src={andalogofood} alt="Anda Food Logo" style={{ width: "50px", height: "50px", marginRight: "10px", "borderRadius": "10px" }} />
              </div>
            </button>
          </div>

          <div className="offcanvas offcanvas-start coloroffcanvas" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"
          >

            {/* imagen user, perfil usuario */}
            <div className="offcanvas-header">
              <div className="d-flex flex-column mx-auto">

                <div className="text-center" >
                  <img className="rounded" src={userlogo} alt="Anda Food Logo" style={{ width: "80px", height: "80px", "borderRadius": "10px" }} />
                </div>

                <h6 className="offcanvas-title text-center" id="offcanvasScrollingLabel">Nombre usuario: Katerine Céspedes</h6>
                <h6 className="offcanvas-title text-center" id="offcanvasScrollingLabel">N° funcionario: 23456</h6>
                <h6 className="offcanvas-title text-center" id="offcanvasScrollingLabel">Correo: katerine@4geeks.com</h6>
              </div>

              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>



            <div className="offcanvas-body d-flex flex-column justify-content-between">
              <div>

                <Link to={"/reservations"} className="custom-link">
                  <div className="feedbacklink my-2">
                    <i class="fa-solid fa-calendar-days me-2" style={{ color: "#ffffff;" }}></i> Reservar lugar</div>
                </Link>

                <Link to={"/form"} className="custom-link customhover">
                  <div className="feedbacklink my-2">
                    <i className="fa-solid fa-envelope me-2" style={{ color: "#ffffff" }}></i>
                    Déjanos tu comentario</div>
                </Link>
              </div>




              <div className="text-end pb-2">
                <button className="logout">Cerrar Sesión <i class="fa-solid fa-right-from-bracket" style={{ color: "#ffffff" }}></i></button>
              </div>

            </div>


          </div>
          {/* fin del offcanvas del logo de ig */}









          {/* El carrito de compras */}

          <div className="shoppingCart d-flex">

            {/* Boton de Carrito */}

            <div className="flex-direction-column">
              {/* <Link to={"/form/:theid"}><p><a className="link-opacity-10-hover m-1  " href="#">Déjanos tu comentario</a></p></Link> */}

              <Link to={"/reservations"} className="custom-link">
                <button className="btn m-1 " type="button" style={{ backgroundColor: "rgb(56, 101, 229)", "color": "white" }}>
                  Reserva de lugar</button>
              </Link>


              <button className="btn m-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTwo" aria-controls="offcanvasTwo" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>

            {/* Ventana */}
            <div
              className="offcanvas offcanvas-end"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex="-1"
              id="offcanvasTwo"
              aria-labelledby="offcanvasTwoLabel"
            >
              {/* Título */}
              <div
                className="offcanvas-header canvasheader"
              >
                <h1 className="text-light"><i className="fa-solid fa-cart-shopping"></i> Carrito</h1>
              </div>

              {/* Body */}
              <div
                className="listCart offcanvas-body position-relative"
              >
                {props.spinner && (
                  <div
                    className="spinner-grow d-flex justify-content-center"
                    role="status"
                    style={{ backgroundColor: "#3865e5" }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}

                {listCart.length === 0 ? (
                  <p>El carrito está vacío.</p>
                ) : (
                  listCart.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items justify-content-evenly"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="foodImage d-flex justify-content-center align-items-center">
                        <img src={item.img} />
                      </div>

                      <div
                        className="foodName d-flex justify-content-center align-items-center"
                        style={{ color: "#3865e5" }}
                      >
                        {item.name}
                      </div>

                      <div
                        className="precioTotal d-flex justify-content-center align-items-center"
                        style={{ color: "#3865e5" }}
                      >
                        {item.price}
                      </div>

                      <div className="cantidad d-flex justify-content-center align-items-center">
                        <span
                          className="menos"
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "white",
                            backgroundColor: "#3865e5",
                            borderRadius: "10%",
                            cursor: "pointer",
                            margin: "0 10px",
                            textAlign: "center",
                          }}
                        >
                          {"<"}
                        </span>
                        <span className="text-center">1</span>
                        <span
                          className="mas"
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "white",
                            backgroundColor: "#3865e5",
                            borderRadius: "10%",
                            cursor: "pointer",
                            margin: "0 10px",
                            textAlign: "center",
                          }}
                        >
                          {">"}
                        </span>
                      </div>
                    </div>
                  ))
                )}

                <div className="btn position-absolute bottom-0 start-0 end-0 d-flex justify-content-between">
                  <button
                    type="button"
                    className="close align-self-start"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    VOLVER
                  </button>
                  <button
                    className="pay align-self-end text-light btn-success"
                    id="process-checkout"
                    onClick={() => handleCompra()}
                  >
                    IR A PAGAR
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </nav >
    )
  };





return (
  <SelectedMenuData.Provider value={{ selectedMenu, listCart, setListCart }}>
    <div className="container mt-3">




      <div>
        <MenuNavbar />
      </div>


      <div className="mb-5">
        <h2 className="text-center" style={{ color: "rgb(56, 101, 229)", padding: "20px" }}> <i class="fa-solid fa-calendar-days"></i> MENÚ SEMANAL</h2>
        <div className="row">
          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Lunes</h2>
              <div className="row">
                {store.menuLunes?.map((menu) => (
                  <CardMenu key={menu.id} menu={menu}
                  //   onClick={() => {
                  //     handleClick(menu);
                  //     handleNotificacion();
                  // }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Martes</h2>
              <div className="row">
                {store.menuMartes?.map((menu) => (
                  <CardMenu key={menu.id} menu={menu} />
                ))}
              </div>
            </div>
          </div>

          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Miércoles</h2>
              <div className="row">
                {store.menuMiercoles?.map((menu) => (
                  <CardMenu key={menu.id} menu={menu} />
                ))}
              </div>
            </div>
          </div>

          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Jueves</h2>
              <div className="row">
                {store.menuJueves?.map((menu) => (
                  <CardMenu key={menu.id} menu={menu} />
                ))}
              </div>
            </div>
          </div>

          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Viernes</h2>
              <div className="row">
                {store.menuViernes?.map((menu) => (
                  <CardMenu key={menu.id} menu={menu} />
                ))}
              </div>
            </div>
          </div>

          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Sábado</h2>
              <div className="row">
                {store.menuSabado?.map((menu) => (
                  <CardMenu key={menu.id} menu={menu} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Otras Opciones*/}
        <div className="container my-4">
          <h1
            className="text-center mb-2"
            style={{
              fontFamily: "Mulish, sans-serif",
              color: "rgb(56, 101, 229)",
            }}
          >
            OTRAS OPCIONES
          </h1>
          <div
            className="menudeldia2 mt-3"
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish, sans-serif",
              backgroundColor: "rgba(56, 101, 229, 0.2)",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-5">
              <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}></h2>
              <div className="d-flex flex-wrap justify-content-center">
                {store.optionCocaCola?.map((option) => (
                  <div className="m-2" style={{ flex: "1 0 auto", maxWidth: "200px" }}>
                    <CardOption key={option.id} option={option} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-4">
          <button
            className="btn"
            onClick={irAPayment}
            style={{
              backgroundColor: "rgb(56, 101, 229)",
              color: "white",
              fontSize: "1rem",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            Ir a Pago
          </button>
        </div> */}
        </div>
      </div>
    </div>
  </SelectedMenuData.Provider>
);
};