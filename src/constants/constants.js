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
export const DTYPE_OPTIONS = [
  "complex",
  "real_imag",
  "amplitude_phase",
  "amplitude_only",
  "real_only",
];
export const LIBRARY_OPTIONS = ["cvnn", "tensorflow"];
export const DATASET_MODE_OPTIONS = ["coh", "k"];
export const DATASET_METHOD_OPTIONS = [
  "random",
  "separate",
  "single_separated_image",
];
export const BALANCE_OPTIONS = ["none", "loss", "dataset"];
export const HTML_FILES_NAMES = [
  "box-test-acc",
  "box-test-avg-acc",
  "hist-test-acc",
  "hist-test-avg-acc",
  "plot-val-acc",
];
