import React from 'react';
import PageBuilderScaffold from './scaffold/PageBuilderScaffold'

const structure = [
  {
    children: [
      {
        type: "Box",
        options: {
          style: {
            background: "yellow"
          }
        }
      },
      {
        type: "Box",
        options: {
          style: {
            background: "blue"
          }
        }
      }
    ],
    type: "Box",
    options: {
      style: {
        background: "red"
      }
    }
  }
]

const App = (props) => {
 return (
   <div>
    <PageBuilderScaffold
      title="my form"
      structure={structure}/>
   </div>
 ) 
}

export default App;
