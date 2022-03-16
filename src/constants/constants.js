export const DATASET_OPTIONS = [
  "Flevoland",
  "SF-AIRSAR",
  "SF-R52",
  "OBER",
  "BRET",
];
export const MODEL_OPTIONS = [
  "fcnn",
  "cao",
  "own",
  "zhang",
  "haensch",
  "tan",
  "cnn",
  "mlp",
];
export const INPUT_OPTIONS = ["coherency", "pauli"];

export const DATASET_METHOD_OPTIONS = [
  "random",
  "separate",
  "single_separated_image",
];
export const BALANCE_OPTIONS = ["none", "loss", "dataset"];
export const HTML_FILES_NAMES = [
  "box-test-acc.html",
  "box-test-avg-acc.html",
  "hist-test-acc.html",
  "hist-test-avg-acc.html",
  "plot-val-acc.html",
];
export const PNG_FILES_NAMES = ["ground_truth.png", "PauliRGB.png"];
