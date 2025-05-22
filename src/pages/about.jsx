import bannerImageAbout from '../assets/image-about.jpg';


export default function About() {
  return (
    <div className="banner-about">
      <img src={bannerImageAbout} class='banner-image-about'alt="bannière à propos du site Kasa "/>
    </div>
  );
}