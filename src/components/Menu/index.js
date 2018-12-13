import React from 'react';

const Menu = () => {
  return (
    <div>
      <nav id="menu">
        <ul>
          <li>
            <a className="link1 active" href="#">
              Alunos Habilitados
            </a>
          </li>
          <li>
            <a href="#">Retidos</a>
          </li>
          <li>
            <a href="#">Aprovados</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;