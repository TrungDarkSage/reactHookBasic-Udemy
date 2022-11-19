import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (updExpenseData) => {
    const expenseData = {
      // sao chép lại các cặp key - prop của
      // Obj expenseData vào submitHandler
      ...updExpenseData,
      //  và tạo thêm 1 khóa id
      // id: Math.random().toString(),
      id: Math.floor(Math.random() * 1000).toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* prop onSave phải là 1 hàm và hàm được gọi 
      khi có event bên trong component Form (submited)*/}
      <ExpenseForm onSaveExpenseData={() => saveExpenseDataHandler()} />
    </div>
  );
};

export default NewExpense;
