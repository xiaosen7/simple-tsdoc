import { create } from "file-entry-cache";
const cache = create("testCache");

const changedFiles = cache.getUpdatedFiles(["./package.json"]);

cache.reconcile();

console.log(changedFiles);
