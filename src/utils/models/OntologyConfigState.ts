import { OntologySettings } from "@/API/controllers/ontology-settings-api";

export interface OntologyConfigState {
  ontology: OntologySettings[];
  ont: any[];
  tagsConf: any[];
}
