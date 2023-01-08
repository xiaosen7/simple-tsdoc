import { resolve } from "path";
import {
  tsdoc,
  RenderingContext,
  StandardTagName,
  Annotation,
} from "../../src/";

class CustomRenderingContext extends RenderingContext {
  protected appendTag(
    tagName: StandardTagName,
    value: string | undefined
  ): void {
    if (tagName === "@see") {
      this.append(`👁️[${value?.trim()}](${value?.trim()})`);
      return;
    }

    this.append(`${tagName} ${value ?? ""}`);
  }

  protected appendApiName(name: string): void {
    if (this.titleLevel > 2) {
      // means this is a property api
      this.append(`${"#".repeat(this.titleLevel)} ${name}`);
      return;
    }

    this.append(`${"#".repeat(this.titleLevel)} ${name}`);
    this.append("---------------	");
  }

  protected appendParams(params: Annotation["params"]): void {
    if (params.length === 0) {
      return;
    }

    this.append("| param | description | isOptional | type |", 1);
    this.append("| ----- | ----------- | ---------- | ---- |", 1);

    params.forEach(({ name, description, isOptional, type }) => {
      this.append(`| ${name} | ${description} | ${isOptional} | ${type} |`, 1);
    });

    this.appendLf(1);
  }
}

tsdoc({
  input: [resolve(__dirname, "index.d.ts")],
  output: resolve(__dirname, "out.md"),
  banner: "simple-tsdoc",
  RenderingContextConstructor: CustomRenderingContext,
  silent: true,
}).catch((e) => {
  console.error(e);
});
