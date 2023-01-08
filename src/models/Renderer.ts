import { ApiDocItem, ApiToMarkdownInfoMap, ConstructorType } from "../types";
import { RenderingContext } from "./RenderingContext";

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
 * const renderer = new Renderer(apiDocItems, RenderingContext);
  console.log(renderer.render())
 * ```
 */
export class Renderer {
  private readonly _apiDocItems: ApiDocItem[];
  private readonly _RenderingContextConstructor: ConstructorType<
    typeof RenderingContext
  >;

  constructor(
    apiDocItems: ApiDocItem[],
    RenderingContextConstructor: ConstructorType<typeof RenderingContext>
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
    parent?: RenderingContext
  ): string {
    const titleLevel = (parent?.titleLevel ?? 1) + 1;
    const ctx = new this._RenderingContextConstructor(apiDocItem, titleLevel);

    let md = ctx.draw();

    if (apiDocItem.properties) {
      apiDocItem.properties.forEach((property) => {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        md += this._renderApiDocItem(property, ctx);
      });
    }

    return md;
  }
}
