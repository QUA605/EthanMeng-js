var playname = localStorage.getItem("playerName");

var roomArray = [
	{
		image:src="home.jpg",
		title:'Home', ///0
		text: ' Ethan want to sleep but today is monday',
		choices:[
			{
				text:'Wake up and go to school',
				index:3
			},
			{
				text:'Take a day off',
				index:1
			},
		]
	},
	{
		image:src="home.jpg",
		title:'Home', ///1
		text:"Pamela called Ethan and tells him to get to school now",
		choices:[
			{
				text:'Go to school',
				index:3
			},
			{
				text:'Keep sleeping',
				index:2
			},
		]
	},
	{
		image:src="home.jpg",
		title:'Home', ///2
		text:'Pamela called again and make Ethan repeat.',
		choices:[
			{
				text:'Over',
				index:8
			},
		]
	},
	{
		image:src="school.jpg",
		title:'School', ///3
		text:'First class, Ethan is very tired.',
		choices:[
			{
				text:'Laid down and sleep',
				index:4
			},
		]
	},
	{
		image:src="school.jpg",
		title:'School', ///4
		text:'Ethan wake up and no one besides him, he looked at the time and it is already the third period.',
		choices:[
			{
				text:'Keep Sleeping',
				index:5
			},
			{
				text:'Go to class',
				index:6
			},
			{
				text:'Go to bathroom',
				index:7
			},
			
		]
	},
	{
		image:src="school.jpg",
		title:'School', ///5
		text:'School ends and Ethan have energy now',
		choices:[
			{
				text:'Go to gym',
				index:8
			},
			{
				text:'Go home and play game',
				index:9
			},
		]
	},
	{
		image:src="school.jpg",
		title:'School', ///6
		text:"Ethan watch video for the whole class and class ends",
		choices:[
			{
				text:'Go to gym',
				index:8
			},
			{
				text:'Go home and play game',
				index:9
			},
		]
	},
	{
		image:src="school.jpg",
		title:'School', ///7
		text:"Ethan sit on the toilet and wait for school ends",
		choices:[
			{
				text:'Go to gym',
				index:8
			},
			{
				text:'Go home and play game',
				index:9
			},
		]
	},
	{
		image:src="gym.jpg",
		title:'Gym', ///8
		text:"Ethan is stronger!",
		choices:[
			{
				text:'Go home and take shower',
				index:10
			},
		]
	},
	{
		image:src="home.jpg",
		title:'Home', ///9
		text:"Ethan plays till 4 in the morning and can't wake up again.",
		choices:[
			{
				text:'You failed',
			}
		]

	},
	{
		image:src="home.jpg",
		title:'Home', ///10
		text:'Ethan is tired after shower',
		choices:[
			{
				text:'Order dinner',
				index:11
			},
			{
				text:'Take a break',
				index:12
			},
		]
	},
	{
		image:src="home.jpg",
		title:'Home', ///11
		text:'Ethan ordered dinner and watched a movie till 11 pm',
		choices:[
			{
				text:'Go to sleep',
				index:12
			},
			{
				text:'Play game',
				index:9
			},
		]
	},
	{
		image:src="home.jpg",
		title:'Home', ///12
		text:'Ethan wake up the next day with energy.',
		choices:[
			{
				text:'Success',
			},
		]
	},

]
