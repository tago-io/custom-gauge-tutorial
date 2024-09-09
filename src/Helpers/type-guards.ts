/**
 * Check if a widget's data item is data from a variable to use as type guard.
 *
 * @param dataItem Data item to check.
 *
 * @returns Whether the widget's data item is from a variable.
 */
function isVariableData(dataItem: WidgetData): dataItem is WidgetVariableData {
  return "data" in dataItem;
}

/**
 * Check if a widget's data item is data from any type of resource to use as type guard.
 *
 * @param dataItem Data item to check.
 *
 * @returns Whether the widget's data item is from any type of resource.
 */
function isResourceData(dataItem: WidgetData): dataItem is WidgetResourceData {
  return "resource" in dataItem;
}

/**
 * Check if a widget's data item is data from a Device resource to use as type guard.
 *
 * @param dataItem Data item to check.
 *
 * @returns Whether the widget's data item is from a Device resource.
 */
function isDeviceData(dataItem: WidgetData): dataItem is WidgetDeviceData {
  return isResourceData(dataItem) && dataItem.resource.type === "device";
}

/**
 * Check if a widget's data item is data from a User resource to use as type guard.
 *
 * @param dataItem Data item to check.
 *
 * @returns Whether the widget's data item is from a User resource.
 */
function isUserData(dataItem: WidgetData): dataItem is WidgetUserData {
  return isResourceData(dataItem) && dataItem.resource.type === "user";
}

export { isVariableData, isResourceData, isDeviceData, isUserData };
