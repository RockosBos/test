import React, {useState} from 'react';

const NewGoal = (props) => {
	const [userText, setUserText] = useState(''); 

	const addGoalHandler = (event) => {
		event.preventDefault();

		const newGoal = {
			id: Math.random().toString(),
			text: userText
		};
		setUserText('');
		props.onAddGoal(newGoal);
	};

	const textChangeHandler = event => {
		setUserText(event.target.value);
	};
	

	return <form className="new-goal" onSubmit={addGoalHandler}>
		<input type="text" value={userText} onChange={textChangeHandler}/>
		<button type="submit">Add Goal</button>
	</form>
};

export default NewGoal;