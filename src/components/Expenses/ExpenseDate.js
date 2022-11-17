import "./ExpenseDate.css";
function ExpenseDate(props) {
  const day = props.dateItem.toLocaleString("en-US", { day: "2-digit" });
  const month = props.dateItem.toLocaleString("en-US", { month: "long" });
  const year = props.dateItem.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
