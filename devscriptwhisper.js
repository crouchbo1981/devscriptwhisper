// Create a class named DevScriptWhisper
class DevScriptWhisper {
    constructor() {
        this.scriptLibrary = [];
    }

    // Method: add a script to the script library
    addScript(script) {
        this.scriptLibrary.push(script);
        console.log(`Added "${script}" to the script library.`);
    }

    // Method: remove a script from the script library
    removeScript(script) {
        const index = this.scriptLibrary.indexOf(script);
        if (index !== -1) {
            this.scriptLibrary.splice(index, 1);
            console.log(`Removed "${script}" from the script library.`);
        } else {
            console.log(`"${script}" is not found in the script library.`);
        }
    }

    // Method: list all scripts in the script library
    listScripts() {
        console.log("Scripts in the script library:");
        this.scriptLibrary.forEach(script => {
            console.log(script);
        });
    }
}

// Create an instance of DevScriptWhisper named myDevScriptWhisper
const myDevScriptWhisper = new DevScriptWhisper();

// Add scripts to the script library
myDevScriptWhisper.addScript("Script for data processing");
myDevScriptWhisper.addScript("Utility script for file manipulation");
myDevScriptWhisper.addScript("Script for API integration");

// List all scripts in the script library
myDevScriptWhisper.listScripts();

// Remove a script from the script library
myDevScriptWhisper.removeScript("Utility script for file manipulation");

// List all scripts in the script library after removal
myDevScriptWhisper.listScripts();
