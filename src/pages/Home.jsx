import { useState } from "react";

const Home = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [displayDays, setDisplayDays] = useState();
  const [displayMonths, setDisplayMonths] = useState();
  const [displayYears, setDisplayYears] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const currentYear = today.getFullYear();
    if (
      year > currentYear ||
      year < 1600 ||
      month <= 0 ||
      month > 12 ||
      day <= 0 ||
      day > 31
    ) {
      setDay("");
      setMonth("");
      setYear("");
      setDisplayDays(undefined);
      setDisplayMonths(undefined);
      setDisplayYears(undefined);
      return;
    }
    const birthDate = new Date(`${year}-${month}-${day}`);
    const ageInDays =
      Math.floor((today - birthDate) / (1000 * 60 * 60 * 24)) - 8;
    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = (ageInDays % 365) % 30;

    setDisplayDays(days);
    setDisplayMonths(months);
    setDisplayYears(years);
  };

  return (
    <>
      {displayDays === 0 && displayMonths === 0 ? (
        <h1 className="birthday">🥳 HAPPY BIRTHDAY 🥳</h1>
      ) : null}
      <main className="main-container">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="day">day</label>
          <input
            id="day"
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="DD"
            required
          />
          <label className="month" htmlFor="month">
            month
          </label>
          <input
            id="month"
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="MM"
            required
          />
          <label className="year" htmlFor="year">
            year
          </label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="YYYY"
            required
          />
          <button>
            <img src="icon-arrow.svg" alt="button" />
          </button>
        </form>
        <div className="bottom-section">
          <h1>
            <span>{displayYears ? displayYears : "--"}</span>
            {`${displayYears === 1 ? "year" : "years"}`}
          </h1>
          <h1>
            <span>
              {displayMonths >= 0 || displayMonths <= 12 ? displayMonths : "--"}
            </span>
            {`${displayMonths === 1 ? "month" : "months"}`}
          </h1>
          <h1>
            <span> {displayDays >= 0 ? displayDays : "--"} </span>
            {`${displayDays === 1 ? "day" : "days"}`}
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
