import "../Header/Header.css";
import { useNavigate } from "react-router-dom";
import CartContext from "../Store/CartContext";
import { useContext } from "react";

const Header = (props) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const changeProduct = () => {
    navigate({ pathname: "Product" }, { replace: false });
  };
  const cartSubmit = () => {
    navigate({ pathname: "/Product/AddCart" }, { replace: false });
  };

  return (
    <>
      <header>
        <section className=" header-section bg-dark">
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="heading text-light">E-com</h1>
                </div>
                <div className="col-sm-6 cart_images text-light ">
                  <div className="row">
                    <div className="col-sm-4">
                      <button onClick={changeProduct}>Product</button>
                    </div>
                    <div className="col-sm-4">
                      <button>Logout</button>
                    </div>
                    <div className="col-sm-4">
                      <div className="box add_to_cart_button">
                        <button onClick={cartSubmit}>
                          <img src={require("./images.png")} alt="cartimage" />
                          &nbsp; Your cart &nbsp;
                          <span className="bg-black text-light rounded-5 px-3 py-2">
                            {cartItems.length}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default Header;
