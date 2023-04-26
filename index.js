import('website-scraper')
  .then((module) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question('Enter the URL to scrape: ', (websiteUrl) => {
      readline.close();
      const scrape = module.default;
      scrape({
          urls: [websiteUrl],
          urlFilter: function (url) {
              return url.indexOf(websiteUrl) === 0;
          },
          recursive: true,
          maxDepth: 50,
          prettifyUrls: true,
          filenameGenerator: 'bySiteStructure',
          directory: './node-website'
      }).then((data) => {
          console.log("Entire website successfully downloaded");
      }).catch((err) => {
          console.log("An error occurred", err);
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });

