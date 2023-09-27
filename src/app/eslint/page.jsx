import DynamicHeader from "@/components/DynamicHeader";
import { ESLint } from "eslint";

const Page = async () => {
  async function getData() {
    const res = await fetch("http://localhost:3000/api/lint");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const runEslintAndGetErrors = async () => {
    const eslint = new ESLint();
    try {
      const results = await eslint.lintFiles(["src/**/*.{js,jsx}"]);

      const allErrors = results.reduce((errors, result) => {
        return errors.concat({
          errors: result.messages,
          errorPath: result.filePath,
        });
      }, []);
      fetch("http://localhost:3000/api/lint", {
        method: "POST",
        body: JSON.stringify(allErrors),
      });
    } catch (error) {
      console.error("Error running ESLint:", error);
    }
  };
  runEslintAndGetErrors();
  const data = await getData();
  return (
    <div>
      Error Page
      <DynamicHeader data={data} />
    </div>
  );
};

export default Page;
