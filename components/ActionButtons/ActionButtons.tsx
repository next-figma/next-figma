import "./ActionButtons.css";
import { IActionButtons } from "@/interfaces/actionButtons.interface";

export default function ActionButtons({ hasChanges, onUndo, onSave }: IActionButtons) {
  return (
    <div className="actionButtons">
      <button 
        type="button" 
        onClick={onUndo}
        disabled={!hasChanges}
        className={`button ${!hasChanges ? "disabled" : ""}`}
      >
        Undo
      </button>
      <button
        type="button" 
        onClick={onSave}
        disabled={!hasChanges}
        className={`button ${!hasChanges ? "disabled" : ""}`}
      >
        Save
      </button>
    </div>
  );
}
