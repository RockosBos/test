import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';

function App() {
	const [courseGoals, setCourseGoals] = useState([
		{id: 'cg1', text: 'Finish the course'},
		{id: 'cg2', text: 'Learn all about the main course topic'},
		{id: 'cg3', text: 'Help other students in the course'},
	]);

	const addNewGoalHandler = newGoal => {
		setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
	}

  return (
    <div className="App">
      <h2>Course Goals</h2>
	  <NewGoal onAddGoal={addNewGoalHandler} />
	  <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
