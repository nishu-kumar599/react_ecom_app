import { createContext } from "react";

const AddCart = () => {
  const cart = createContext();
  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="row justify-content-center mt-5 px-4">
              <div className="col-sm-4 bg-dark text-center px-4 py-4 rounded-5">
                <h1 className="Item_title text-light ">Brand:Iphone</h1>
                <h5 className="totalItem text-light mt-3">Quantity:6</h5>
                <div className="row mt-4">
                  <div className="col-sm-6 text-right">
                    <span className="text-light border px-3 py-1 rounded-5">
                      +
                    </span>
                  </div>
                  <div className="col-sm-6 text-left">
                    <span className="text-light border px-3 py-1 rounded-5">
                      -
                    </span>
                  </div>
                </div>
                <h6 className="text-light mt-5">Total amount: $500 </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddCart;
