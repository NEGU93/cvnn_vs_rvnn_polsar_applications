export const DATASET_OPTIONS = ["SF-AIRSAR", "SF-R52", "OBER", "BRET"];
export const MODEL_OPTIONS = [
  "cao",
  "own",
  "zhang",
  "haensch",
  "tan",
  "cnn",
  "mlp",
];
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
