import * as snap from "@farcaster/snap-hono";
import { Hono } from "hono";

const app = new Hono();

snap.registerSnapHandler(app, async (c) => {
  return c.json({
    version: "2.0",
    title: "Frontier Tower Duelist Arena",
    ui: {
      elements: {
        title: { type: "text", props: { content: "Duelist Arena", weight: "bold" } },
        taser: {
          type: "button",
          props: { label: "Taser", variant: "primary" },
          on: { press: { action: "submit", params: { target: "https://taser-duelist-neynar.host.neynar.app/" } } }
        },
        knife: {
          type: "button",
          props: { label: "Knife", variant: "primary" },
          on: { press: { action: "submit", params: { target: "https://taser-duelist-neynar.host.neynar.app/" } } }
        }
      },
      stack: ["title", "taser", "knife"]
    }
  });
});

export default app;
