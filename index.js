const express = require("express");
const app = express();
const profileRoutes = require("./src/routes/profile-routes");
const quizRoutes = require("./src/routes/quiz-routes");
const areaRoutes = require("./src/routes/area-routes");
const keyRoutes = require("./src/routes/key-routes");
const path = require('path');
require("./src/db/mongoose");

app.use(express.json());
app.use(profileRoutes);
app.use(quizRoutes);
app.use(areaRoutes);
app.use(keyRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});

if(process.env.NODE_ENV === 'production') {
	
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}