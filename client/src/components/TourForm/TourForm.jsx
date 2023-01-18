import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';
import { useFormContext } from '../../hooks/useFormContext';
import FormInputs from './FormInputs';

export default function TourForm() {
  const { tour, title, page, setPage } = useFormContext();
  const { user } = useContext(Context);
  const navigate = useNavigate();
  //console.log('CURRENT TOUR', tour);

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setPage((prev) => (prev < 2 ? prev + 1 : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4000/api/tours`, tour, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      if (res.data) {
        toast.success('Tour created!');
        navigate('/admin/manageTours');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*      <section> <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p></section> */}

      <header>
        <h2>{title[page]}</h2>
        <div className="button-container">
          <button className="button" type="button" onClick={handlePrev}>
            Prev
          </button>

          <button className="button" type="button" onClick={handleNext}>
            Next
          </button>

          <button className="btn-secondary button" type="submit">
            Submit
          </button>
        </div>
      </header>

      <FormInputs />
    </form>
  );
}
