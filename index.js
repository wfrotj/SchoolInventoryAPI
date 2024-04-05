import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (_req, res) => {
  res.send("Hello inventory");
});

app.listen(config.PORT, () => {
  console.log(`Connected to port ${config.PORT}`);
});
