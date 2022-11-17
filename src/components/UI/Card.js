import "./Card.css";
function Card(props) {
  // Prop này ko đcược xem như thuộc tính hay đơn giản là ko
  // dùng trong hàm bao bọc này, đây là 1 prop đặc biệt
  // tích hợp sẵn trong React
  // giá trị của props.children sẽ là nội dung ở giữa 2 thẻ đóng mở

  // phải khai báo việc dùng class
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
