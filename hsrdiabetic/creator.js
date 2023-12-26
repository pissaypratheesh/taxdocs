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
//{21 Oct, 2022}

const filename = './diabetic.html';

const objects1 = [
   
]  

const objects = [
   // April 2023
   { "{21 Oct, 2022}": 'April 3 2023'},
   { "{HSR/2023/17964}": "April" },

    // May 2023
    { "{21 Oct, 2022}": 'May 3 2023'},
    { "{HSR/2023/17964}": "May" },
  
    // June 2023
    { "{21 Oct, 2022}": 'June 3 2023'},
    { "{HSR/2023/17964}": "June" },
  
    // July 2023
    { "{21 Oct, 2022}": 'July 3 2023'},
    { "{HSR/2023/17964}": "July" },
  
    // August 2023
    { "{21 Oct, 2022}": 'August 3 2023'},
    { "{HSR/2023/17964}": "August" },
    
    // September 2023
    { "{21 Oct, 2022}": 'September 3 2023'},
    { "{HSR/2023/17964}": "September" },
    
    // October 2023
    { "{21 Oct, 2022}": 'October 3 2023'},
    { "{HSR/2023/17964}": "October" },
    
    // November 2023
    { "{21 Oct, 2022}": 'November 3 2023'},
    { "{HSR/2023/17964}": "November" },
    
    // December 2023
    { "{21 Oct, 2022}": 'December 3 2023'},
    { "{HSR/2023/17964}": "December" },
    
    // January 2024
    { "{21 Oct, 2022}": 'January 2024'},
    { "{HSR/2023/17964}": "January 2024" },
  ];

  objects.forEach((obj,i) => {
    if(i % 2 == 0){
      // Call your function here
      const newFilename = replaceKeysInFile(filename, [obj,{ "{HSR/2023/17964}": `HSR/2023/${17964 + i}` }]);
      console.log(`New file created: ${newFilename}`);
    }
  });