import StaticDataService from "./staticDataServices";

export default async function fetStaticData(path : string) {
  try {
    const url = path;
    const api = new StaticDataService();
    return await api.request(url);
  } catch (error) {
    throw error;
  }
}