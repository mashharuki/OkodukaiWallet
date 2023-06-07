import { Polybase } from "@polybase/client";

// DB name
const nameSpace = "okozukai-mashharuki"

const db = new Polybase({
  defaultNamespace: nameSpace,
});

// scheme
await db.applySchema(`
  @public
  collection OkozukaiDB {
    id: string;
    type: string;
    tokenAddr: string;
    to: string;
    amount: string;
    factory: string;
    status: string;
    date: string;

    @index(id, [date, desc]);

    constructor (
      sender: string,
      type: string,
      tokenAddr: string,
      to: string,
      amount: string,
      factory: string,
      status: string,
      date: string
    ) {
      this.id = sender;
      this.type = type;
      this.tokenAddr = tokenAddr;
      this.to = to;
      this.amount = amount;
      this.factory = factory;
      this.status = status;
      this.date = date;
    }
  }
`,
  `${nameSpace}`
); 

// your-namespace is optional if you have defined a default namespace

// insert (sample)
// await db.collection("City").create(["new-york", "New York"]); 

// read
const data = await db.collection("OkozukaiDB").get();

console.log(`read data: ${JSON.stringify(data.toJSON())}`)