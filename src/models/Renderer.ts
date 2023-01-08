import { ApiDocItem, ApiToMarkdownInfoMap, ConstructorType } from "../types";
import { IRenderingContext } from "./IRenderingContext";

/**
 * Render {@link ApiDocItem} to get {@link ApiToMarkdownInfoMap}.
 * 
 * @example
 * 
 * ```ts
 * const result = await generateApiJson({
      entry: resolve(__dirname, "assets", "index.d.ts"),
    });
  const apiDocItems = getApiDocItems(result.apiJsonFilePath, {
      docNodeFormatter: new DocNodeFormatter(),
  });
  result.clean();
 * const renderer = new Renderer(apiDocItems, IRenderingContext);
  console.log(renderer.render())
 * ```
 */
export class Renderer {
  private readonly _apiDocItems: ApiDocItem[];
  private readonly _RenderingContextConstructor: ConstructorType<
    typeof IRenderingContext
  >;

  constructor(
    apiDocItems: ApiDocItem[],
    RenderingContextConstructor: ConstructorType<typeof IRenderingContext>
  ) {
    this._apiDocItems = apiDocItems;
    this._RenderingContextConstructor = RenderingContextConstructor;
  }

  render(): ApiToMarkdownInfoMap {
    const apiNameInfo: ApiToMarkdownInfoMap = new Map();

    this._apiDocItems.forEach((apiDocItem) => {
      const md = this._renderApiDocItem(apiDocItem);
      apiNameInfo.set(apiDocItem.name, { md, apiDocItem });
    });

    return apiNameInfo;
  }

  private _renderApiDocItem(
    apiDocItem: ApiDocItem,
    parent?: IRenderingContext
  ): string {
    const titleLevel = (parent?.titleLevel ?? 2) + 1; // beginning is 3
    const ctx = new this._RenderingContextConstructor(apiDocItem, titleLevel);

    let md = ctx.draw();

    if (apiDocItem.properties) {
      apiDocItem.properties.forEach((property) => {
        md += this._renderApiDocItem(property, ctx);
      });
    }

    return md;
  }
}
