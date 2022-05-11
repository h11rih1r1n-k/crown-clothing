import "./divider.styles.scss";

type DividerTypes = {
  text: string
}

function Divider({ text } : DividerTypes) {
  return (
    <div className="parent-divider">
      <div className="divider-underline"></div>
      <span className="divider-text">{text}</span>
    </div>
  );
}

export default Divider;
