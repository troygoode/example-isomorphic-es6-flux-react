"use strict";

import app from "./app";

let port = process.env.PORT || 3000;

app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});

export {app};
