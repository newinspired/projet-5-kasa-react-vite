import Banner from '../components/banner.jsx';
import Card from '../components/card.jsx';
import data from '../data/logements.json';
import bannerImage from '../assets/banner-image.png';
import '../styles/main.scss';

export default function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" src={bannerImage} />
      <div className="card-grid">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}  
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}