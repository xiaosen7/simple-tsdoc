import { ApiDocItem, Renderer, RenderAction, RenderActionApi } from "../types";
import * as utils from "../utils";
import { customTagsMap } from "../customTags";
import { callCustomTagRenderAction } from "./helpers";
import * as model from "@microsoft/api-extractor-model";
import { formatDocNode } from "../shared";
import { I18n } from "i18n";

const defaultTagRenderActions: Record<string, RenderAction> = {
  "@example": (api) => {
    const { payload, i18n } = api;
    if (utils.isObject(payload)) {
      api.appendMd(`\n${i18n.__("examples")}：\n` + payload.description + `\n`);
    }
  },
};

const renderTypeParameters: RenderAction = (api) => {
  const {
    apiDocItem: { apiItem },
    appendMd,
    i18n,
  } = api;

  if (
    apiItem instanceof model.ApiFunction ||
    apiItem instanceof model.ApiMethod
  ) {
    if (apiItem.parameters.length === 0) {
      return;
    }

    const parametersContent = apiItem.parameters
      .map((parameter) => {
        const { name, isOptional } = parameter;
        const parameterType = parameter.parameterTypeExcerpt.text;
        let description;
        if (parameter.tsdocParamBlock) {
          description = formatDocNode(parameter.tsdocParamBlock.content);
        }

        return `\n- ${name}(${parameterType}, ${
          isOptional ? i18n.__("optional") : i18n.__("necessary")
        }) ${description ?? ""}\n`;
      })
      .join("\n");

    appendMd(`\n${i18n.__("parameters")}：\n${parametersContent}\n`);
  }
};

const renderParams: RenderAction = (api) => {
  const { annotation, i18n } = api;

  api.appendMd(
    `\n${i18n.__("parameters")}：\n${annotation
      .params!.map(({ name, description }) => {
        return `- ${name} ${description}`;
      })
      .join("\n")}\n`
  );
};

const renderDescription: RenderAction = (api) => {
  api.appendMd(
    `\n${api.i18n.__("description")}：${api.annotation.description}\n`
  );
};

const renderReturns: RenderAction = (api) => {
  api.appendMd(`\n${api.i18n.__("returns")}：${api.annotation.returns}\n`);
};

const renderDeprecated: RenderAction = (api) => {
  api.appendMd(`\n${api.i18n.__("returns")}：${api.annotation.returns}\n`);
};

const renderModifierTags: RenderAction = (api) => {
  api.appendMd(`\n${api.payload}\n`);
};

const renderKind: RenderAction = (api) => {
  api.appendMd(`\n${api.i18n.__("kind")}：${api.apiDocItem.kind.toString()}\n`);
};

export function renderApiDomItem(
  apiDocItem: ApiDocItem,
  renderers: Renderer[],
  titleLevel: number,
  i18n: I18n,
  appendMd?: (content: string) => any
) {
  const { annotation, apiItem } = apiDocItem;
  const baseApi: RenderActionApi = {
    apiDocItem,
    payload: null,
    annotation,
    appendMd: null as any,
    i18n,
  };

  if (appendMd) {
    // means this is property apiDocItem
    appendMd(`\n${"#".repeat(titleLevel)} ${apiDocItem.name}\n`);

    baseApi.appendMd = appendMd;
  } else {
    let pendingMd = [`\n${"#".repeat(titleLevel)} ${apiDocItem.name}\n`];

    renderers.push({
      render: () => pendingMd.join("\n"),
      apiDocItem,
    });

    baseApi.appendMd = (content: string) => pendingMd.push(content);
  }

  // render description
  if (utils.isValidString(annotation.description)) {
    renderDescription(baseApi);
  }

  // render kind
  renderKind(baseApi);

  // render tags
  annotation.tags.forEach((tag) => {
    if (customTagsMap.has(tag.name)) {
      callCustomTagRenderAction(customTagsMap.get(tag.name)!, baseApi, tag);
    } else {
      if (tag.name in defaultTagRenderActions) {
        defaultTagRenderActions[tag.name]({
          ...baseApi,
          payload: tag,
        });
      }
    }
  });

  // render modifierTags
  if (utils.isValidArray(annotation.modifierTags)) {
    annotation.modifierTags!.forEach((tagName) => {
      if (customTagsMap.has(tagName)) {
        callCustomTagRenderAction(customTagsMap.get(tagName)!, baseApi, null);
      } else {
        renderModifierTags({
          ...baseApi,
          payload: tagName,
        });
      }
    });
  }

  // render params
  if (
    apiItem instanceof model.ApiFunction ||
    apiItem instanceof model.ApiMethod
  ) {
    renderTypeParameters(baseApi);
  } else if (utils.isValidArray(annotation.params)) {
    renderParams(baseApi);
  }

  // render returns
  if (utils.isValidString(annotation.returns)) {
    renderReturns(baseApi);
  }

  // render deprecated
  if (utils.isValidString(annotation.deprecated)) {
    renderDeprecated(baseApi);
  }

  // render properties
  if (utils.isValidArray(apiDocItem.properties)) {
    apiDocItem.properties?.forEach((propertyApiDocItem) => {
      renderApiDomItem(
        propertyApiDocItem,
        renderers,
        titleLevel + 1,
        i18n,
        baseApi.appendMd
      );
    });
  }
}
