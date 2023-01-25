import { Contacts, TourCard } from '../../components/export';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './_Tours.scss';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { CardActionArea } from '@mui/material';

export default function Tours() {
  const { t } = useTranslation();
  const [tourData, setTourData] = useState([]);

  const { type } = useParams();

  //Get all the Tours data and check for the status
  const loadToursData = async () => {
    const allTours = await axios.get(`/api/tours`);
    if (allTours.status === 200) {
      setTourData(allTours.data.data);
    } else {
      console.error('Something went wrong');
    }
  };

  //Get the Tours data according to the type of the tour and check for the status
  const loadToursDataByType = async () => {
    const filteredToursByType = await axios.get(`/api/tours/category/${type}`);
    if (filteredToursByType.status === 200) {
      setTourData(filteredToursByType.data.tour);
    } else {
      console.error('Something went wrong');
    }
  };

  //During the first load of the page, load all the tours data or by type

  useEffect(() => {
    if (type) {
      loadToursDataByType();
      window.scrollTo(0, 0);
    } else {
      loadToursData();
      window.scrollTo(0, 0); // add this line to scroll to the top when you render your components
    }
  }, [type]);

  return (
    <div className="container1">
      <div className="container2" style={{ overflow: 'hidden' }}>
        <div
          style={{ position: 'relative', zIndex: '2' }}
          className={`leftSide ${type === 'hiking' ? 'img-hiking' : ''} ${
            type === 'safari' ? 'img-safari' : ''
          } ${type === 'local' ? 'img-coffee' : ''}`}
        >
          <div className="insideLeft">
            <div className="tourPara">
              {!type && (
                <div className="overlay moreOpaque">
                  <h2>{t('ourTours')}</h2>
                  <p className="conditionalText">{t('ourToursText')}</p>
                </div>
              )}

              {type === 'hiking' && (
                <div className="overlay moreOpaque">
                  <h2>{t('hikingTours')}</h2>
                  <p className="conditionalText">{t('ourToursText')}</p>
                </div>
              )}

              {type === 'safari' && (
                <div className="overlay">
                  <h2>{t('safariTours')}</h2>
                  <p className="conditionalText">{t('safariToursText')}</p>
                </div>
              )}

              {type === 'local' && (
                <div className="overlay moreOpaque2">
                  <h2>{t('localTours')}</h2>
                  <p className="conditionalText">{t('localToursText')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Container className="rightSide rightSideTours">
          <div
            className="background-Squiggly"
            style={{ position: 'absolute', left: '50%', height: '100vh', width: '50%' }}
          >
            <img
              src={require('../../assets/inkySpot.png')}
              style={{ width: '20em', top: '-50px', right: '-40px', position: 'relative' }}
              alt=""
            ></img>
            <img
              src={require('../../assets/inkySpot.png')}
              style={{
                position: 'relative',
                width: '20em',
                bottom: '-35em',
                right: '-15em',
                zIndex: '-1',
              }}
              alt=""
            ></img>
          </div>
          <Grid
            sx={{ position: 'relative', zIndex: '3' }}
            className="gridRight"
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            {tourData.map((tour) => {
              return (
                <Grid item xs={12} sm={7} md={5.5} lg={5.5} margin="0.2em" key={tour._id}>
                  <CardActionArea>
                    <TourCard
                      mainImg={tour.imgCover}
                      days={tour.days}
                      name={tour.name}
                      tour={tour.name}
                      subtitle={tour.subtitle}
                      difficulty={tour.difficulty}
                      scenery={tour.scenery}
                      id={tour._id}
                    />
                  </CardActionArea>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <Contacts />
    </div>
  );
}
