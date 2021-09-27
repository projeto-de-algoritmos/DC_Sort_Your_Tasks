import { useState, useEffect, useCallback } from 'react';

function useMergesort(tasks) {
const [selecionadas, setSelecionadas] = useState([]);

const mergeSort = useCallback( () => {
    const half = tasks.length / 2
    if(tasks.length < 2){
      selecionadas([])
      return tasks
    }
    const left = tasks.splice(0, half)
    return merge(mergeSort(left),mergeSort(tasks))
  },
  [tasks],
)
  // function mergeSort(tasks) {
  //   const half = tasks.length / 2
  //   if(tasks.length < 2){
  //     return tasks 
  //   }
  //   const left = tasks.splice(0, half)
  //   return merge(mergeSort(left),mergeSort(tasks))
  // }

    function merge(left, right) {
      let arr = []
      while (left.length && right.length) {
          if (left[0] < right[0]) {
              arr.push(left.shift())  
          } else {
              arr.push(right.shift()) 
          }
      }
      return [ ...arr, ...left, ...right ]
  }
  return tasks;

}
export default useMergesort;
