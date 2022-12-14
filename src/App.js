import "./App.css";
import Button from "./component/Button";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="container">
        <h1>Buttons</h1>
        <div className="flex">
          <div className="label">
            <p>{`<Button />`}</p>
            <Button />
          </div>
          <div className="label">
            <p>{`<Button variant="outline"/>`}</p>
            <Button variant="outline" />
          </div>
          <div className="label">
            <p>{`<Button variant="text"/>`}</p>
            <Button variant="text" />
          </div>
        </div>

        <div className="flex">
          <div className="label">
            <p>{`<Button disabledShadow />`}</p>
            <Button disabledShadow />
          </div>
        </div>

        <div className="flex">
          <div className="label">
            <p>{`<Button disabled />`}</p>
            <Button disabled />
          </div>
          <div className="label">
            <p>{`<Button variant="text" disabled />`}</p>
            <Button disabled variant="text" />
          </div>
        </div>

        <div className="flex">
          <div>
            <p>{`<Button startIcon="shopping_cart" />`}</p>
            <Button startIcon="shopping_cart" color="primary" />
          </div>
          <div>
            <p>{`<Button endIcon="arrow-forward" />`}</p>
            <Button endIcon="arrow_forward" color="primary" />
          </div>
        </div>

        <div className="flex">
          <div>
            <p>{`<Button size="sm" />`}</p>
            <Button size="sm" />
          </div>
          <div>
            <p>{`<Button size="md" />`}</p>
            <Button size="md" />
          </div>
          <div>
            <p>{`<Button size="lg" />`}</p>
            <Button size="lg" />
          </div>
        </div>

        <div className="flex">
          <div>
            <p>{`<Button color="default" />`}</p>
            <Button color="default" />
          </div>
          <div>
            <p>{`<Button color="primary" />`}</p>
            <Button color="primary" />
          </div>
          <div>
            <p>{`<Button color="secondary" />`}</p>
            <Button color="secondary" />
          </div>
          <div>
            <p>{`<Button color="danger" />`}</p>
            <Button color="danger" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
