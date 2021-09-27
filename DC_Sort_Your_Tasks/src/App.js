
import Button from './components/Button';
import Input from './components/Input';
import List from './components/TasksList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './styles/styles';
import useMergesort from './hooks/useMergesort';

function App() {
  const [tasks, setTasks] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selecionadas = useMergesort(tasks);

  function onSubmit(data) {
    setTasks([...tasks, data]);
  }

  return (
    <S.MainContainer>
      <S.Content>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register('task', {
              validate: (value) => !tasks.some((item) => item.task === value) || 'Tarefa já existe!',
              required: 'Campo obrigatório!',
            })}
            placeholder="Task"
            label="Task"
            type="text"
            error={errors.task}
            autoComplete="off"
          />

          <Button>Adicionar</Button>
        </S.Form>

        <List tasks={tasks} deleteTaskCallback={setTasks} />
        <List tasks={selecionadas} deleteTaskCallback={setTasks}/>
      </S.Content>
    </S.MainContainer>
  );
}

export default App;
