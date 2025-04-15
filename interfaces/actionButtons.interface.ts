export interface IActionButtons {
  hasChanges: boolean;
  onUndo: () => void;
  onSave: () => void;
}
