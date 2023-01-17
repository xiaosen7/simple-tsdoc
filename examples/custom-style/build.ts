import { resolve } from "path";
import {
  IRenderingContext,
  StandardTagName,
  Annotation,
  emit,
  getMarkdownInfoMap,
} from "../../";

class CustomRenderingContext extends IRenderingContext {
  protected appendTag(
    tagName: StandardTagName,
    value: string | undefined
  ): void {
    if (tagName === "@see") {
      this.append(`👁️[${value?.trim()}](${value?.trim()})`);
      return;
    }

    this.append(`**${tagName}** ${value ?? ""}`);
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

getMarkdownInfoMap({
  entry: resolve(__dirname, "index.d.ts"),
  RenderingContextConstructor: CustomRenderingContext,
})
  .then((apiInfoMap) =>
    emit({
      multiple: true,
      apiInfoMap,
      output: resolve(__dirname, "out"),
    })
  )
  .catch((e) => {
    console.error(e);
  });
