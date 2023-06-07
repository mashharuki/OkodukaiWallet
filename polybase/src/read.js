
import { Polybase } from "@polybase/client";

// DB name
const nameSpace = "okozukai-mashharuki"

const db = new Polybase({
  defaultNamespace: nameSpace,
});

// read
const data = await db.collection("OkozukaiDB")
  .where("id", "==", "0xf71831F75970d515826890C37EC224474bc3c360")
  .sort("date", "desc")
  .get();

console.log(`read data: ${JSON.stringify(data.toJSON())}`)