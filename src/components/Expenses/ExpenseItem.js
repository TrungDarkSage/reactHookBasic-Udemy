import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // với arr có 2 đối số đc trả về từ hàm useState
  const [title, setTitle] = useState(props.title);
  // func click
  const clickHandler = () => {
    setTitle("Updated !!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {/* với prop là tham số, props.date có thể hiểu là 
      lấy cái dc truyền vào ( ở đây là cụm date, title, amount)
      đến từ nơi gọi hàm này là Expense . date , rồi gán cho 
      dateItem */}
      <ExpenseDate dateItem={props.date} />
      <div className="expense-item__description">
        {/* h2 đã được nhận 1 giá trị có thể onClick */}
        <h2 className="expense-item_h2">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update title 😁</button>
    </Card>
  );
}

export default ExpenseItem;
