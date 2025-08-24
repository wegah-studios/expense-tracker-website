import { FAQ } from "@/types/common";
import { readFileSync } from "fs";
import { join } from "path";

const loadFaqs = (): FAQ[] => {
  const servicesPath = join(process.cwd(), "src/data/faqs.json");
  return JSON.parse(readFileSync(servicesPath, "utf-8"));
};

export default loadFaqs;
