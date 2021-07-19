import style from "../Button/Button.module.css" 

const Button = ({ onClick }) => {
    
  return (
  <div className={style.Container}>
      <button type = 'button' onClick = {onClick} className={style.Button} >Load more</button>  
  </div>
  );
  
};

export default Button;