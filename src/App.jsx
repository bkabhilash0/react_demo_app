import "./App.css";
import Todo from "./components/Todo";

function App() {
  // const phonebook = {
  //   fullName:"Someone",
  //   contact: 939393,
  //   email: "someone@gmai.com"
  // }

  // const {fullName,email} = phonebook;

  // console.log(fullName)
  const fruits = ["apple","orange"]
  console.log(fruits);
  console.log(fruits.push("berries"))
  console.log(fruits)
  console.log([...fruits,"watermelon"])
  return (
    <>
    <div className="container">
      {/* <h1 className="">Counter App</h1>
      <Counter/> */}
      <Todo/>
    </div>
        {/* <Layout >
          <h1>Counter Component</h1>
          <p>Sample</p>
        </Layout> */}

    </>
  );
}

export default App;
