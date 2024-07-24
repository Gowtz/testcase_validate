import Table, { URL } from "./Components/Table";

function App() {
  const add_data = async () => {
    await fetch(`${URL}/init`);
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-evenly items-center bg-primaryBG text-white">
        <div className="search flex items-center ">
          <input
            type="text"
            name="serchbar"
            className="rounded-l-md py-2 w-96 text-black px-5 text-2xl"
          />
          <div className="button px-3  rounded-r-md  bg-pink-500 h-full flex items-center">
            <img src="/searchbar.svg" alt="" />
          </div>
          <div
            className="adddata px-5 py-2 bg-secondaryBG mx-10 rounded-md cursor-pointer "
            onClick={() => add_data()}
          >
            Add Sample Data
          </div>
        </div>
        <div className="testcase_table">
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
