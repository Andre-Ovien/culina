import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Featured = () => {
  const [dishes, setDishes] = useState([]);
  const [page, setPage] = useState(0);
  const dishesPerPage = 3; 

  useEffect(() => {
    fetch("/Featured.json")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error("Failed to load featured dishes:", err));
  }, []);

  const handleNext = () => {
    if ((page + 1) * dishesPerPage < dishes.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const start = page * dishesPerPage;
  const end = start + dishesPerPage;
  const visibleDishes = dishes.slice(start, end);
  
  const navigate = useNavigate()

  const handleClick=()=>{
    navigate('/category')
  }

  return (
    <section className="Featured">
      <div className="container">
            <h2>Featured Dishes</h2>
            <p>Our top picks just for you</p>

            <div className="dishes">
            {visibleDishes.map((dish) => (
                <div key={dish.id} className="card">
                <img src={dish.image} alt={dish.name} loading="lazy" />
                <div className="info">
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <span className="price">₦{dish.price}</span>
                </div>
                </div>
            ))}
            </div>

            <div className="pagination-btns">
              <button onClick={handlePrev} disabled={page === 0}>‹</button>
              <button onClick={handleNext} disabled={end >= dishes.length}>›</button>
            </div>
            <div className="more">
                <button onClick={handleClick}>See More</button>
            </div>
      </div>
    </section>
  );
};

export default Featured;
