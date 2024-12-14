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


  const handleNotificacion = () => {
    return mostrarNotificacion()
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

  const irAReservaDeLugar = () => {
    navigate("/reservations");
  };


  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };

  //Sacar el menuNavbar para otro componente.


  return (
    <SelectedMenuData.Provider value={{ selectedMenu, listCart, setListCart }}>
      <div className="container mt-3">
        <MenuNavbar />

        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)", padding: "20px" }}>
            <i className="fa-solid fa-calendar-days"></i> MENÚ SEMANAL
          </h2>
          <div className="row">
            {/* Itera sobre cada día */}
            {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map((day) => (
              <div
                key={day}
                className="menudeldia2 mt-3"
                style={{
                  marginBottom: "20px",
                  fontFamily: "Mulish, sans-serif",
                  backgroundColor: "rgba(56, 101, 229, 0.2)",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>{day}</h2>
                <div className="row">
                  {store[`menu${day}`]?.map((menu) => (
                    <CardMenu key={menu.id} menu={menu} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="container my-4">
            <h1 className="text-center mb-2" style={{ fontFamily: "Mulish, sans-serif", color: "rgb(56, 101, 229)" }}>
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
              <div className="d-flex flex-wrap justify-content-center">
                {store.optionCocaCola.map((option) => (
                  <div key={option.id} className="m-2" style={{ flex: "1 0 auto", maxWidth: "200px" }}>
                    <CardOption option={option} />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </SelectedMenuData.Provider>
  );}
