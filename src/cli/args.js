const parseArgs = () => {
    const args = process.argv.slice(2); // pomijamy pierwsze dwa elementy (node, script path)
    const result = [];
  
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i].replace(/^--/, ''); // usuń '--' z początku
      const value = args[i + 1];
      result.push(`${key} is ${value}`);
    }
  
    console.log(result.join(', '));
  };
  
  parseArgs();
  