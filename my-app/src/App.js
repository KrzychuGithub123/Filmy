import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<form>
  <div class="mb-3">
    <label for="film" class="form-label">Tytuł filmu</label>
    <input type="text" class="form-control" id="film" />
  </div>
  <div id="Rodzajfilmu" class="form-text">Wybierz rodzaj filmu</div>
  <input  type="password"  class="form-controll" id="exampleInputPassword1"      ></input>
  <select class="form-select" aria-label="Default select example">
  <option selected>Rodzaj</option>
  <option value="1"></option>
  <option value="2">Komedia</option>
  <option value="3">Obyczajowy</option>
  <option value="4">Sensacyjny</option>
  <option value="5">Horror</option>
</select>
<div><button type="submit" class="btn btn-primary">Submit</button></div>
</form>
</div>
   );
}
export default App;