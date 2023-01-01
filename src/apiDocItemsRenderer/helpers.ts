import * as types from "../types";

export function callCustomTagRenderAction(
  customTag: types.CustomTag,
  baseApi: types.RenderActionApi,
  tagPayload: types.Annotation["tags"][number] | null
) {
  const renderAction = customTag.renderAction;

  if (typeof renderAction === "function") {
    renderAction({
      ...baseApi,
      payload: tagPayload,
    });
  }
}
