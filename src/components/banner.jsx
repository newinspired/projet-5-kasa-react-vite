import '../styles/banner.scss';

const Banner = ({ title = "Chez vous, partout et ailleurs",src, alt = "bannière du site Kasa" }) => {
  return (
    <div className="banner">
      <img src={src} alt={alt} className="banner-image" />
      <div className="banner-overlay">
        <h2 className="banner-title">{title}</h2>
      </div>
    </div>
  );
};

export default Banner;