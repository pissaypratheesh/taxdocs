const fs = require('fs');

function replaceKeysInFile(filename, objects) {
  console.log("🚀 ~ file: creator.js:4 ~ replaceKeysInFile ~ objects:", objects)
  // Read the file
  const content = fs.readFileSync(filename, 'utf8');
  
  // Replace keys with values in the content
  let updatedContent = content;
  objects.forEach(obj => {
    obj && Object.entries(obj).forEach(([key, value]) => {
      updatedContent = updatedContent.replace(new RegExp(key, 'g'), value);
    });
  });
  
  
  // Create a new file with the updated content and hash
  const newFilename = `${filename.replace(".html","")}-${Object.values(objects[0])[0]}.html`;
  fs.writeFileSync(newFilename, updatedContent);
  
  return newFilename;
}


const filename = './driver.html';
const objects = [
    // May 2023
    { "{Apr 2023}": 'May 2023'},
    { "{April}": "May" },
  
    // June 2023
    { "{Apr 2023}": 'June 2023'},
    { "{April}": "June" },
  
    // July 2023
    { "{Apr 2023}": 'July 2023'},
    { "{April}": "July" },
  
    // August 2023
    { "{Apr 2023}": 'August 2023'},
    { "{April}": "August" },
    
    // September 2023
    { "{Apr 2023}": 'September 2023'},
    { "{April}": "September" },
    
    // October 2023
    { "{Apr 2023}": 'October 2023'},
    { "{April}": "October" },
    
    // November 2023
    { "{Apr 2023}": 'November 2023'},
    { "{April}": "November" },
    
    // December 2023
    { "{Apr 2023}": 'December 2023'},
    { "{April}": "December" },
    
    // January 2024
    { "{Apr 2023}": 'January 2024'},
    { "{April}": "January" },
  ];

  objects.forEach((obj,i) => {
    if(i % 2 == 0){
    // Call your function here
    const newFilename = replaceKeysInFile(filename, [obj, objects[i+1]]);
    console.log(`New file created: ${newFilename}`);
    }
  });