import "./Item.css";

function Item() {
  return (
    <div className="i-item">
      <div className="i-photo"></div>
      <div className="-iname">
        <h3>Unisex Short Sleeve T-Shirt</h3>
      </div>
      <div className="i-prace">
        <p>$10 - $24</p>
        <p className="mini">Minimum: 24</p>
      </div>
    </div>
  );
}

export default Item;
