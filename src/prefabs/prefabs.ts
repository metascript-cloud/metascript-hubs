// important

import { MediaLoaderParams } from "../inflators/media-loader";
import { EntityCreateParams } from "../entity";
import { CameraPrefab, CubeMediaFramePrefab } from "../prefabs/camera-tool";
import { MediaPrefab } from "../prefabs/media";
import { EntityDef } from "../utils/jsx-entity";
import { EntityPrefab } from "./entity";
import { DuckPrefab } from "./duck";

type CameraPrefabT = () => EntityDef;
type EntityPrefabT = (params : EntityCreateParams) => EntityDef;
type CubeMediaPrefabT = () => EntityDef;
type MediaPrefabT = (params: MediaLoaderParams) => EntityDef;

type Permission =
  | "spawn_camera"
  | "spawn_and_move_media"
  | "update_hub"
  | "pin_objects"
  | "spawn_emoji"
  | "amplify_audio"
  | "fly"
  | "voice_chat"
  | "spawn_drawing"
  | "tweet"
  | "kick_users"
  | "mute_users";

export type PrefabDefinition = {
  permission?: Permission;
  template: CameraPrefabT | CubeMediaPrefabT | MediaPrefabT | EntityPrefabT;
};

export type PrefabName = "camera" | "cube" | "media" | "duck" | "entity";

export const prefabs = new Map<PrefabName, PrefabDefinition>();
prefabs.set("camera", { permission: "spawn_camera", template: CameraPrefab });
prefabs.set("cube", { permission: "spawn_and_move_media", template: CubeMediaFramePrefab });
prefabs.set("media", { permission: "spawn_and_move_media", template: MediaPrefab });
prefabs.set("duck", { permission: "spawn_and_move_media", template: DuckPrefab });
prefabs.set("entity", { template: EntityPrefab });