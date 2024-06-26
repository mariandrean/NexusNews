import "./GalleryNews.css"
import { Link, useNavigate, useLoaderData } from 'react-router-dom';

const GalleryNews = () => {
  const navigate = useNavigate();
  const news = useLoaderData();

  return (
    <>
      <div className="m-10 flex items-center justify-between">
        <h3 className="text-3xl">Tecnología - Últimas noticias</h3>
        <button onClick={() => navigate("/news/add")} className=" inline-flex items-center px-4 py-2 bg-[#EEF0E5] border border-transparent rounded-md font-semibold text-xs text-[#1F1E1E] tracking-widest hover:bg-[#7192A4] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 uppercase">Añadir noticia</button>
      </div>

      <div className="flex-column">
        {news.map((item, index) => (
          <div key={index} className="gallery-news-item justify-between">
            <img className="url-img" src={item.image} alt="Noticia" />
            <div className="news-title-date flex-column ml-5 mr-5">
              <h4 className="text-xl uppercase">{item.title}</h4>
              <p className="date">{item.date.slice(0, 10)}</p>
            </div>
            <Link to={`/news/${item.id}`}>
              <img className="arrow" src="src\assets\Vector.png" alt="Flecha" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryNews;
