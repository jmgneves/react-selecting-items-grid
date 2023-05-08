import { Side } from "./common/Side";
import { SelectableViewModel } from "./common/ViewModel";

const SelectingGrid = ({ ...props }) => {
  const viewModel: SelectableViewModel = props.viewModel;

  const runAndNotify = (fnToRun: Function, side: Side) => {
    fnToRun(side);
    props.notifyChange();
  };

  return (
    <div className="selecting-grid">
      <div className="buttons" style={{ margin: "2px", padding: "2px" }}>
        <button
          name="select-all-left"
          onClick={() => runAndNotify(viewModel.selectAll, Side.L)}
        >
          Select All Left
        </button>
        <button
          name="deselect-all-left"
          onClick={() => runAndNotify(viewModel.deselectAll, Side.L)}
        >
          Deselect All Left
        </button>
        <button
          name="select-all-right"
          onClick={() => runAndNotify(viewModel.selectAll, Side.R)}
        >
          Select All Right
        </button>
        <button
          name="deselect-all-right"
          onClick={() => runAndNotify(viewModel.deselectAll, Side.R)}
        >
          Deselect All Right
        </button>
        <button
          name="pass-selected-right"
          onClick={() => runAndNotify(viewModel.sendSelected, Side.L)}
        >
          Pass Selected Right{" "}
        </button>
        <button
          name="pass-selected-left"
          onClick={() => runAndNotify(viewModel.sendSelected, Side.R)}
        >
          Pass Selected Left
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          margin: "2px",
        }}
      >
        <div style={{ border: "solid 1px", margin: "2px", padding: "2px" }}>
          {viewModel.leftItems().map((item) => (
            <div
              key={item.id}
              onClick={() => runAndNotify(item.toggleChecked, Side.R)}
              style={{
                backgroundColor: item.isChecked() ? "lightblue" : "white",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div style={{ border: "solid 1px", margin: "2px", padding: "2px" }}>
          {viewModel.rightItems().map((item) => (
            <div
              key={item.id}
              onClick={() => runAndNotify(item.toggleChecked, Side.R)}
              style={{
                backgroundColor: item.isChecked() ? "lightblue" : "white",
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectingGrid;
