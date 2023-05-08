import { useEffect, useState } from "react";
import SelectingGrid from "./SelectingGrid";
import { SelectableViewModel } from "./common/ViewModel";
import { selectableMockedDataAsync } from "./common/mockedData";

const SelectingGridContainer = () => {
  const [selectableViewModel, setSelectableViewModel] =
    useState<SelectableViewModel>(new SelectableViewModel([]));

  useEffect(() => {
    selectableMockedDataAsync().then((data) =>
      setSelectableViewModel(new SelectableViewModel(data))
    );
  }, []);

  return (
    <div className="selecting-grid-container">
      <SelectingGrid
        viewModel={selectableViewModel}
        notifyChange={() => setSelectableViewModel({ ...selectableViewModel })}
      />
    </div>
  );
};

export default SelectingGridContainer;
