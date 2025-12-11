import React, { useState, useEffect } from "react";


const Main = () => {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const dishesPerPage = 6;

  useEffect(() => {
    fetch("/Dishes.json")
      .then((res) => res.json())
      .then((data) => setDishes(data))
      .catch((err) => console.error("Failed to load dishes:", err));
  }, []);

  const filteredDishes = dishes
    .filter((dish) =>
      category === "all" ? true : dish.category.toLowerCase() === category
    )
    .filter((dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase())
    );

  const totalPages = Math.ceil(filteredDishes.length / dishesPerPage);
  const indexOfLastDish = currentPage * dishesPerPage;
  const indexOfFirstDish = indexOfLastDish - dishesPerPage;
  const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="Main">
      <div className="main-header">
        <h2>Main Dishes</h2>

        <div className="filters">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1); 
            }}
          >
            <option value="all">Filter </option>
            <option value="food">Food</option>
            <option value="pastry">Pastry</option>
            <option value="drink">Drinks</option>
          </select>
        </div>
      </div>

      <div className="dishes-grid">
        {currentDishes.length > 0 ? (
          currentDishes.map((dish) => (
            <div key={dish.id} className="card">
              <img src={dish.image} alt={dish.name} />
              <div className="info">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span className="price">₦{dish.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No dishes found.</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)}>&lt;</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)}>&gt;</button>
      </div>
    </div>
  );
};

export default Main;
