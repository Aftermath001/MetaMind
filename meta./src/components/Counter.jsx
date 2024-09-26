import React, { useState, useEffect } from 'react';
import '../Pages/Home/home.css';

const Counter = () => {
  const [tasks, setTasks] = useState(0);
  const [clients, setClients] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Increment the counter smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) => (prev < 150 ? prev + 1 : prev));
      setClients((prev) => (prev < 300 ? prev + 1 : prev));
      setReviews((prev) => (prev < 120 ? prev + 1 : prev));
    }, 50); // Adjust the speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-item">
        <h2>{tasks}</h2>
        <p>Tasks Completed</p>
      </div>
      <div className="counter-item">
        <h2>{clients}</h2>
        <p>Happy Clients</p>
      </div>
      <div className="counter-item">
        <h2>{reviews}</h2>
        <p>Positive Reviews</p>
      </div>
    </div>
  );
};

export default Counter;
