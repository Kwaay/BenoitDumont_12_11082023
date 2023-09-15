import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UserService from '../../services/User';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Nutriment from '../components/Nutriment';
import RBarChart from '../components/RadialBarChart';
import RadarChart from '../components/RadarChart';

export default function Home() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  // const [userSessions, setUserSessions] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const userInfos = await UserService.getOne(id);

      const userPerformances = await UserService.getPerformances(id);
      userInfos.performances = userPerformances;
      setUser(userInfos);
    }
    fetchUserData();
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
            <div className="radar-chart">
              <RadarChart data={user?.performances}></RadarChart>
            </div>
            <div className="radial-bar">
              <h3>Score</h3>
              <RBarChart todayScore={user?.todayScore}></RBarChart>
            </div>
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
