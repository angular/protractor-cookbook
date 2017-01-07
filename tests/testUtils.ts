import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';
let spawnSync = child_process.spawnSync;

export class TestUtils {
  /**
   * Run a terminal command.
   * @param {string} task
   * @param {string[]} taskArgs arguments to the task
   * @param {Object} options
   */
  static runCommand(task: string, args: string[], options: any): string[] {
    let child = spawnSync(task, args, options);
    return child.output;
  }

  /**
   * Read the file contents and return a list of lines.
   * @param {string} file the file path
   * @returns {string[]} lines of a file
   */
  static getFileLines(filePath: string): string[] {
    let contents = fs.readFileSync(filePath).toString();
    let lines = contents.split('\n');
    return lines;
  }

  /**
   * Check if contents contains a line.
   * @param {string} check
   * @param {string[]} file contents
   * @returns {boolean} if the line exists, return true
   */
  static checkContent(content: string, fileLines: string[]): boolean {
    for (let pos = 0; pos < fileLines.length; pos++) {
      let line = fileLines[pos];
      if (line.indexOf(content) >= 0) {
        return true;
      }
    }
    return false;
  }

  static checkContents(lines: string[], findLines: string[]): boolean {
    let found = true;
    findLines.forEach(line => {
      found = found && TestUtils.checkContent(line, lines);
    });
    if (!found) {
      console.log(lines.join('\n'));
    }
    return found;
  }
}
