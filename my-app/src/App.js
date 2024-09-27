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
    


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
   );
}
export default App;
