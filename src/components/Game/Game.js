import React from "react";
import Button from "../../ui/Button/Button";
import Board from "../Board/Board";
import Header from "../Header/Header";

const Game = ({ title }) => (
  <div className="game_container">
    <Header title={title} />
    <Board />
    <div>
      <Button placeholder="enter" />
      <Button placeholder="reset" />
    </div>
  </div>
);

export default Game;
