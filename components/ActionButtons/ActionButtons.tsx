import "./ActionButtons.css";

interface IActionButtons {
  hasChanges: boolean;
  onUndo: () => void;
}

export default function ActionButtons({ hasChanges, onUndo }: IActionButtons) {
  return (
    <div className="actionButtons">
      <button 
        type="button" 
        onClick={onUndo}
        className={`button undo ${!hasChanges ? "disabled" : ""}`} 
      >
        Undo
      </button>
      <button className="button save">
        Save
      </button>
    </div>
  );
}
