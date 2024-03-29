const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get Profile
apiRouter.get('/profile', (_req, res) => {
  res.send(profile);
});

// Edit Profile
apiRouter.post('/editprofile', (req, res) => {
  console.log("adding preferences");
  console.log(req.body);
  profile = updateProfile(req.body, profile);
  res.send(profile);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let profile = [];

function updateProfile(newProfile, profile) {
    let found = false;
    for (let [i, prevProfile] of profile.entries()) {
      if (newProfile.userName == prevProfile.userName) {
        console.log("profile found");
        profile[i] = newProfile;
        found = true;
        break;
      }
    }
  
    if (!found) {
      console.log("profile not found");
      profile.push(newProfile);
    }
  
    return profile;
  }

