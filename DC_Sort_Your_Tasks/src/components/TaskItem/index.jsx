import React from 'react';
import { FiDelete } from 'react-icons/fi'
import * as S from './styles';

function Card({ task, deleteTask }) {
  return (
    <S.TaskItem>
        <>
          <span>{task}</span>
          <span title="Remover task"><FiDelete size={23} onClick={deleteTask} /></span>
        </>
    </S.TaskItem>
  );
}

export default Card;
