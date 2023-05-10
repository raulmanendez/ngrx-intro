import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Student : {}
};

const pluralNames = {  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
