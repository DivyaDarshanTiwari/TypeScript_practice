interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//   {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

const fetch_in = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`);
    }
    const data: Todo = await response.json();
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error: ", error.message);
    }
  }
};
