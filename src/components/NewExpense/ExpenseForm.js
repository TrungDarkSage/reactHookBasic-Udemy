import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = (props) => {
  // a.Dùng 3 state riêng biệt, react đủ thông minh để
  // phân biệt từng state trong từng thành phần
  const [updTitle, setupdTitle] = useState("");
  const [updAmount, setupdAmount] = useState("");
  const [updDate, setupdDate] = useState("");

  // // b.Dùng 1 state trả về 1 Obj để gom 3 state lại
  // // Vì cơ bản khi input đều phải nhập cả 3
  // const [userInput, setUserInput] = useState({
  //   updTitle: "",
  //   updAmount: "",
  //   updDate: "",
  // });

  const titleChangeHandler = function (event) {
    // console.log(event.target.value);

    // a.Xảy ra event thì thực thi hàm chuyển '' thành value
    setupdTitle(event.target.value);

    // // b1. Event thì thực thi nhưng phải ...userInput để
    // // 2 giá trị dưới là amount và date ko mất đi
    // // Cách này ko an toàn vì state sau phụ thuộc state trc
    // setUserInput({
    //   ...userInput,
    //   updTitle: event.target.value,
    // });

    // // b2. Event thì thực thi nhưng an toàn hơn vì ...prev
    // // đảm bảo rằng state này sẽ luôn là mới nhất
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     updTitle: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = function (event) {
    setupdAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   updAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     updAmount: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = function (event) {
    setupdDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   updDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     updDate: event.target.value,
    //   };
    // });
  };
  const submitHandler = (event) => {
    // Với mặc định là mỗi khi event click btn thì reload page
    // prevenDefault sẽ ngăn mặc định trên
    event.preventDefault();
    const expenseData = {
      title: updTitle,
      amount: updAmount,
      // hàm này chuyển str date được input thành date
      date: new Date(updDate),
    };

    // thực thi hàm saveExHandler với expenseData là đối số
    props.onSaveExpenseData(expenseData);

    // Lưu được data thì set input trở lại ''
    setupdTitle("");
    setupdAmount("");
    setupdDate("");
  };
  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            // với value này input sẽ có giá trị mặc định ''
            // sau event submit thì có giá trị upd
            // cuối cùng là set lại thành ''
            value={updTitle}
            className="new-expense__control input"
            onChange={(event) => titleChangeHandler(event)}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amout</label>
          <input
            type="number"
            value={updAmount}
            min="0.01"
            step="0.01"
            className="new-expense__control input"
            onChange={(event) => amountChangeHandler(event)}
          />
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            value={updDate}
            min="2019-01-01"
            max="2023-12-31"
            className="new-expense__control input"
            onChange={(event) => dateChangeHandler(event)}
          />
        </div>
        <div className="new-expense__actions">
          {/* Đối với type submit thì form có thể nghe 
            được event submit => thêm onSubmit cho form 
            vẫn được thậm chí tốt hơn !!!*/}
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
