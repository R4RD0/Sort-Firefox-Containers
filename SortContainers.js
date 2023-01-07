const fs = require('fs');
const path = require('path');

const profileLocation = path.join(process.env.APPDATA, 'Mozilla/Firefox/Profiles/');

// Set the selected option to one of: 'name', 'icon', 'color', 'default'
let selectedOption = 'name';
// Set the reverse option to true to reverse the sorting order, or false to keep the default order
let reverse = false;

try {
  // Read the directories in the profile location
  const directories = fs.readdirSync(profileLocation);

  // Find the default profile directory
  const defaultProfile = directories.find((dir) => dir.includes('.default'));
  // Construct the path to the containers.json file
  const containerPath = path.join(profileLocation, defaultProfile, 'containers.json');

  // Read the contents of the file
  const data = fs.readFileSync(containerPath, 'utf8');

  // Parse the JSON data
  const json = JSON.parse(data);

  // Switch default to ID
  if (selectedOption === 'default') {
    selectedOption = 'userContextId';
  }

  // Sort the identities alphabetically by the selected option
  const sortedIdentities = json.identities.sort((a, b) => {
    const valueA = a[selectedOption] ? a[selectedOption].toLowerCase() : '';
    const valueB = b[selectedOption] ? b[selectedOption].toLowerCase() : '';
    if (valueA < valueB) {
      return reverse ? 1 : -1;
    }
    if (valueA > valueB) {
      return reverse ? -1 : 1;
    }
    return 0;
  });

  // Update the json with the sorted identities
  json.identities = sortedIdentities;

  // Write the updated json to the file
  fs.writeFileSync(containerPath, JSON.stringify(json));

  console.log(`Location: ${containerPath}`);
  console.log(`DONE! Containers have been sorted alphabetically by the ${selectedOption} field.`);
} catch (err) {
  console.error(`Error: ${err}`);
}
