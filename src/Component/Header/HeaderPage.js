import { useNavigate } from "react-router-dom";
import "../../Component/Header/Header.css";
import { FiShoppingCart } from "react-icons/fi";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";
const HeaderPage = () => {
  const addToCart = useContext(CartContext);

  const NumberOfItemCart = addToCart.items.reduce((currentValue, items) => {
    return currentValue + items.amount;
  }, 0);
  const navigate = useNavigate();

  const changeProduct = () => {
    navigate({ pathname: "Dashboard" }, { replace: false });
  };
  const cartSubmit = () => {
    navigate({ pathname: "Dashboard/AddToCart" }, { replace: false });
  };

  const onChangePage = () => {
    navigate({ pathname: "/Dashboard" }, { replace: false });
  };
  const onChangeHandle = () => {
    navigate({ pathname: "/Dashboard" }, { replace: false });
  };

  return (
    <>
      <header>
        <section className=" header-section bg-dark">
          <div className="container py-2">
            <div className="wrapper">
              <div className="row align-items-sm-center">
                <div className="col-sm-7">
                  <h1
                    className="heading site_logo text-light"
                    onClick={onChangeHandle}
                  >
                    E-com
                  </h1>
                </div>
                <div className="col-sm-5 cart_images text-light ">
                  <div className="row align-items-sm-center">
                    <div className="col-sm-3">
                      <button
                        className="fw-semibold rounded-2 px-3 py-2"
                        onClick={changeProduct}
                      >
                        Product
                      </button>
                    </div>
                    <div className="col-sm-3">
                      <button className="fw-semibold rounded-2 px-3 py-2">
                        Logout
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <div className="box add_to_cart_button">
                        <button
                          className="fw-semibold rounded-2 px-1 py-2"
                          onClick={cartSubmit}
                        >
                          <FiShoppingCart
                            onClick={onChangePage}
                          ></FiShoppingCart>
                          Your cart
                          <span className="bg-black text-light rounded-5 cartTotal">
                            {NumberOfItemCart}
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
export default HeaderPage;
