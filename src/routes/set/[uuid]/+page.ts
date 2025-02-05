import type { PageLoad } from "./$types";
import type { RasShamraTablet } from "./columns";
import { fetchSet, getPropertyValueByLabel } from "@digitalculture/ochre-sdk";

export const load: PageLoad = async ({ params }) => {
  const data = await fetchSet(params.uuid);

  let set: Array<RasShamraTablet> | null = null;
  if (data?.set) {
    set = data.set.items.spatialUnits.map((item) => {
      const objectType = getPropertyValueByLabel(
        item.properties,
        "Object type",
      );
      const museumNumber = getPropertyValueByLabel(
        item.properties,
        "Museum Number",
      );
      const fullTeoFindspot = getPropertyValueByLabel(
        item.properties,
        "Full TEO Findspot",
      );
      const script = getPropertyValueByLabel(item.properties, "Script");
      const language = getPropertyValueByLabel(item.properties, "Language");
      const size = getPropertyValueByLabel(item.properties, "Size");

      return {
        name: item.identification.label,
        objectType: objectType ?? "",
        museumNumber: museumNumber ?? "",
        fullTeoFindspot: fullTeoFindspot ?? "",
        script: script ?? "",
        language: language ?? "",
        size: size ?? "",
      };
    });
  }

  const projectName = data?.metadata.description ?? "";
  const itemName = data?.set.identification.label ?? "";

  return {
    set,
    title: `${projectName} - ${itemName}`,
  };
};
