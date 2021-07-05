.film-card__switch {
    position: relative;
    display: inline-block;
    width: 72px;
    height: 21px;
  }
  
  .film-card__switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .film-card__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F9F9F9;
    box-shadow: 0 0 1px #000000;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 30px;
  }
  
  .film-card__slider:before {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 9px;
    position: absolute;
    content: "Сохранить";
    left: 10px;
    bottom: 6px;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .film-card__slider {
    background-color: #FF3055;
  }
  
  
  input:checked + .film-card__slider:before {
    content: "";
  }