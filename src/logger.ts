import colors from "picocolors";

interface Options {
  /**
   * @defaultValue false
   */
  silent?: boolean;
}

export function createLogger(options: Options) {
  let { silent } = options;

  return {
    log(msg: any) {
      if (!silent) {
        console.log(msg);
      }
    },
    success(msg: any) {
      this.log(colors.green(msg));
    },
    errorOrLog(value: any, errorMsg: string, logMsg: string) {
      if (value) {
        if (!silent) {
          console.log(logMsg);
        }
      } else {
        throw new Error(errorMsg);
      }
    },
    ifTruthThenLog(value: any, msg: string) {
      if (value) {
        this.log(msg);
      }
    },
    silent(value: any) {
      silent = value;
    },
    usingFile(
      filePath: string | undefined,
      name: string,
      ifUndefinedThenError: boolean = true
    ) {
      if (ifUndefinedThenError) {
        this.errorOrLog(
          filePath,
          `Can't find ${name} file.`,
          `Using ${name} file: ${filePath}.`
        );
      } else {
        this.ifTruthThenLog(filePath, `Using ${name} file: ${filePath}.`);
      }
    },
  };
}

export const logger = createLogger({});
