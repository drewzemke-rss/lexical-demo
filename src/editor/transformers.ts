import {
  LINK,
  ORDERED_LIST,
  TEXT_FORMAT_TRANSFORMERS,
  UNORDERED_LIST,
} from "@lexical/markdown";

export const MARKDOWN_TRANSFORMERS = [
  ...TEXT_FORMAT_TRANSFORMERS,
  LINK,
  ORDERED_LIST,
  UNORDERED_LIST,
];
