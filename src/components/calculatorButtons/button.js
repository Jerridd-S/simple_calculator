const Button = props => {
  const { btnText, val, setVal, onClickHandler } = props;
  return (
    <button
      onClick={onClickHandler}
      type="button"
      className={`btn btn-outline-dark`}
    >
      {btnText}
    </button>
  );
};

export default Button;
