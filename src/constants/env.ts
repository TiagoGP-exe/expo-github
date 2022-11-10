import Constants from "expo-constants";

export const BASE_URL: string = Constants.manifest?.extra?.API_URL ?? "";
