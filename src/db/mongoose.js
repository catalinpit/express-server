const mongoose = require('mongoose');

mongoose.connect('<your_url>', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
