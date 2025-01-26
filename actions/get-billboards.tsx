import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;
const BILLBOARD_ID = process.env.DEFAULT_BILLBOARD_ID;
const getBillboards = async (): Promise<Billboard> => {
  const res = await fetch(`${URL}/${BILLBOARD_ID}`);
  return res.json();
};

export default getBillboards;
