import { execaCommand } from "execa";
import fg from "fast-glob";

async function main() {
  const examples = await fg(["*"], {
    onlyDirectories: true,
    cwd: "./examples",
  });

  const tasks = examples.map((x) =>
    execaCommand(`pnpm build:example ${x}`, {
      stdout: "inherit",
    })
  );

  await Promise.all(tasks);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
