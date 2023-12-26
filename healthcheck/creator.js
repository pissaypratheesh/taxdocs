const fs = require('fs');

function replaceKeysInFile(filename, objects) {
  // Read the file
  const content = fs.readFileSync(filename, 'utf8');
  
  // Replace keys with values in the content
  let updatedContent = content;
  objects.forEach(obj => {
    Object.entries(obj).forEach(([key, value]) => {
      updatedContent = updatedContent.replace(new RegExp(key, 'g'), value);
    });
  });
  
  
  // Create a new file with the updated content and hash
  const newFilename = `${filename.replace(".html","")}-${Object.values(objects[0])[0]}.html`;
  fs.writeFileSync(newFilename, updatedContent);
  
  return newFilename;
}


const filename = './healthcheckup.html';

const objects1 = [
    // May 2023
    { "{Dec 07, 2022}": 'April 3 2023'},
    { "{Time: 03:30PM}": "April" },
]  

const objects = [
    // May 2023
    { "{Dec 07, 2022}": 'May 3 2023'},
    { "{Time: 03:30PM}": "May" },
  
    // June 2023
    { "{Dec 07, 2022}": 'June 3 2023'},
    { "{Time: 03:30PM}": "June" },
  
    // July 2023
    { "{Dec 07, 2022}": 'July 3 2023'},
    { "{Time: 03:30PM}": "July" },
  
    // August 2023
    { "{Dec 07, 2022}": 'August 3 2023'},
    { "{Time: 03:30PM}": "August" },
    
    // September 2023
    { "{Dec 07, 2022}": 'September 3 2023'},
    { "{Time: 03:30PM}": "September" },
    
    // October 2023
    { "{Dec 07, 2022}": 'October 3 2023'},
    { "{Time: 03:30PM}": "October" },
    
    // November 2023
    { "{Dec 07, 2022}": 'November 3 2023'},
    { "{Time: 03:30PM}": "November" },
    
    // December 2023
    { "{Dec 07, 2022}": 'December 3 2023'},
    { "{Time: 03:30PM}": "December" },
    
    // January 2024
    { "{Dec 07, 2022}": 'January 2024'},
    { "{Time: 03:30PM}": "January 2024" },
  ];

  objects1.forEach((obj,i) => {
    if(i % 2 == 0){
      // Call your function here
      const newFilename = replaceKeysInFile(filename, [obj,{ "{Time: 03:30PM}": "Time: 06:30PM" }]);
      console.log(`New file created: ${newFilename}`);
    }
  });