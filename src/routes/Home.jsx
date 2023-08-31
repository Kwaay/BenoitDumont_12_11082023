import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UserService from '../../services/User';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Nutriment from '../components/Nutriment';

export default function Home() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      UserService.getOne(id).then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
    }
    fetchUser();
  }, [id]);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <section className="page-container">
        <div className="page-infos">
          <h1>
            Bonjour <span>{user?.userInfos?.firstName}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="page-datas">
          <div className="page-graph">
            <p>Graph</p>
          </div>
          <div className="page-nutriments">
            <Nutriment
              icon="../src/assets/calories-icon.svg"
              content={`${user?.keyData?.calorieCount}kCal`}
              name="Calories"
            ></Nutriment>
            <Nutriment
              icon="../src/assets/protein-icon.svg"
              content={`${user?.keyData?.proteinCount}g`}
              name="Proteines"
            ></Nutriment>
            <Nutriment
              icon="../src/assets/carbs-icon.svg"
              content={`${user?.keyData?.carbohydrateCount}g`}
              name="Glucides"
            ></Nutriment>
            <Nutriment
              icon="../src/assets/fat-icon.svg"
              content={`${user?.keyData?.lipidCount}g`}
              name="Lipides"
            ></Nutriment>
          </div>
        </div>
      </section>
    </div>
  );
}
