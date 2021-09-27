import React from 'react';
import TaskItem from '../TaskItem';
import * as S from './styles';

function List({ tasks, deleteTaskCallback}) {
  const removeTask = (taskToRemove) => deleteTaskCallback(tasks.filter((task) => task.task !== taskToRemove));

  return (
    <S.ListContainer>
      <S.List>
        {tasks.map((item) => (
          <TaskItem key={item.task} {...item} deleteTask={() => removeTask(item.task)} />
        ))}
      </S.List>
    </S.ListContainer>
  );
}

export default List;
