import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/Context";
import { useFormContext } from "../../hooks/useFormContext";
import FormInputs from "./FormInputs";
import "./_TourForm.scss";

export default function TourForm() {
  const { tour, title, page, setPage } = useFormContext();
  const { user } = useContext(Context);
  const navigate = useNavigate();
  //console.log('CURRENT TOUR', tour);

  const handlePrev = () => {
    /*  setTour((prev) => ({ ...prev, ...newData })); */
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = (newData) => {
    /*     setTour((prev) => ({ ...prev, ...newData })); */
    setPage((prev) => (prev < 2 ? prev + 1 : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/tours`, tour, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      toast.success("Tour created!");
      navigate("/admin/manageTours");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="planTrip container">
      <form onSubmit={handleSubmit} className="form2">
        {/*      <section> <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p></section> */}

        <header className="head2">
          {/* <div className="numContainer" style={{display:"flex", flexDirection:"row"}}>
          <div className={title[page] === "createTour" ? "generalNum display-one" : "generalNum one1"}>1</div>
          <div className="two">2</div>
          <div className="three">3</div>
        </div> */}
          <h2>{title[page]}</h2>
          <div className="buttonDiv">
            <div className="buttonNextPrev">
              <button className="button" type="button" onClick={handlePrev}>
                Prev
              </button>
              <button className="button" type="button" onClick={handleNext}>
                Next
              </button>
            </div>
            <div className="btnSub">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </header>

        <FormInputs />
      </form>
    </div>
  );
}
