import react from 'react';
import Table from 'react-bootstrap/Table';

export default function TodoList({todoList, markAsDone}) {


  const doneBtnHandler = (id)=> {
markAsDone(id);


  
  }
return(
 

<div>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
     
        </tr>
      </thead>
      <tbody>
        {(todoList|| []).map(function (el,key) {
            return (
                <tr className={el.status=== 2? 'mark-done':''}>
                <td>{key+1}</td>
                <td>{el.todo}</td>
               <button onClick={()=>doneBtnHandler(el.id)} className="btn btn-primary" >
                Done
               </button>
              </tr>

            );

        })}
     
        </tbody>
        </Table>


</div>



);

}