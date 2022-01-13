import "./App.css";
import DragFileInput from "./components/drag-file-input/DragFileInput";

function App() {
  //use this func to define what to do with the uploaded file
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="box">
      <h2 className="header">Upload component</h2>
      <DragFileInput onFileChange={(files) => onFileChange(files)} />
    </div>
  );
}

export default App;
