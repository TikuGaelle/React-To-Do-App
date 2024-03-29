import Card from "./card";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onClick}> Okay</button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
