// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const ejsMate = require('ejs-mate');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user.js');
// const MongoStore = require('connect-mongo');
// const Listing = require('./models/listing.js');
// const { data: sampleListings } = require('./init/data.js');
// require('dotenv').config();

// // Import routers
// const listingsRouter = require('./routes/listing.js');
// const reviewsRouter = require('./routes/review.js');
// const userRouter = require('./routes/user.js');

// // Set up express app
// const app = express();

// // View engine setup
// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, 'views'));
// app.engine('ejs', ejsMate);

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//     store: MongoStore.create({
//         mongoUrl: process.env.MONGO_URL,
//         ttl: 7 * 24 * 60 * 60 // 7 days in seconds
//     }),
//     secret: process.env.SESSION_SECRET || 'abcd',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         expires: Date.now() + 7 * 24 * 60 * 1000,
//         maxAge: 7 * 24 * 60 * 60 * 1000,
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production'
//     }
// }));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // Connect to MongoDB and initialize data
// const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/ticketsystem";

// async function initializeDatabase() {
//     try {
//         // Check if data already exists
//         const count = await Listing.countDocuments();
//         if (count === 0) {
//             console.log("Initializing database with sample data...");
//             await Listing.deleteMany({});
//             const dataWithOwner = sampleListings.map(obj => ({
//                 ...obj,
//                 owner: process.env.DEFAULT_OWNER_ID || '66ad2082974deee4f6058cb8'
//             }));
//             await Listing.insertMany(dataWithOwner);
//             console.log(`${sampleListings.length} listings inserted`);
            
//             // Create admin user if needed
//             const adminExists = await User.findOne({ username: 'admin' });
//             if (!adminExists) {
//                 const admin = new User({ 
//                     username: 'admin',
//                     email: 'admin@example.com',
//                     role: 'admin'
//                 });
//                 await User.register(admin, process.env.ADMIN_PASSWORD || 'admin123');
//                 console.log('Admin user created');
//             }
//         }
//     } catch (err) {
//         console.error("Database initialization error:", err);
//     }
// }

// // Health check endpoint (required for Render)
// app.get('/health', (req, res) => {
//     res.status(200).json({ status: 'healthy' });
// });

// // Set flash & current user globally
// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currUser = req.user;
//     next();
// });

// // Home Route (Welcome Page)
// app.get('/', (req, res) => {
//     res.render('firstpage');
// });

// // Other routes
// app.use('/listings', listingsRouter);
// app.use('/listings/:id/reviews', reviewsRouter);
// app.use('/', userRouter);

// // Static pages
// app.get('/app-info', (req, res) => {
//     res.render('listings/app-info');
// });
// app.get('/conditions', (req, res) => {
//     res.render('listings/conditions');
// });
// app.get('/about-us', (req, res) => {
//     res.render('listings/about-us');
// });

// // 404 Error Handler
// app.use((req, res, next) => {
//     res.status(404).render('error/404', { title: 'Page Not Found' });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).render('error/500', { title: 'Something Went Wrong' });
// });

// // Start server
// async function startServer() {
//     try {
//         await mongoose.connect(MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ Connected to MongoDB");
        
//         await initializeDatabase();

//         const port = process.env.PORT || 3000;
//         const server = app.listen(port, () => {
//             console.log(`🚀 Server started on port ${port}`);
//         });

//         // Graceful handling of EADDRINUSE error
//         server.on('error', (err) => {
//             if (err.code === 'EADDRINUSE') {
//                 console.error(`❌ Port ${port} is already in use. Please use a different port.`);
//                 process.exit(1);
//             } else {
//                 console.error("❌ Server error:", err);
//                 process.exit(1);
//             }
//         });
//     } catch (err) {
//         console.error("❌ Failed to start server:", err);
//         process.exit(1);
//     }
// }

// startServer();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const MongoStore = require('connect-mongo');
const Listing = require('./models/listing.js');
const { data: sampleListings } = require('./init/data.js');
require('dotenv').config();

// Import routers
const listingsRouter = require('./routes/listing.js');
const reviewsRouter = require('./routes/review.js');
const userRouter = require('./routes/user.js');

// Set up express app
const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
const sessionConfig = {
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        ttl: 7 * 24 * 60 * 60 // 7 days in seconds
    }),
    name: 'session', // Optional: change cookie name for security
    secret: process.env.SESSION_SECRET || 'abcd',
    resave: false,
    saveUninitialized: false,
    cookie: {
        // expires expects a Date, so use new Date(...)
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // Set secure cookies ONLY if running on HTTPS in production
        secure: process.env.NODE_ENV === 'production' && process.env.FORCE_HTTPS === 'true',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax' // if you use HTTPS + cross-site cookies
    }
};

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to MongoDB and initialize data
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/ticketsystem";

async function initializeDatabase() {
    try {
        // Check if data already exists
        const count = await Listing.countDocuments();
        if (count === 0) {
            console.log("Initializing database with sample data...");
            await Listing.deleteMany({});
            const dataWithOwner = sampleListings.map(obj => ({
                ...obj,
                owner: process.env.DEFAULT_OWNER_ID || '66ad2082974deee4f6058cb8'
            }));
            await Listing.insertMany(dataWithOwner);
            console.log(`${sampleListings.length} listings inserted`);

            // Create admin user if needed
            const adminExists = await User.findOne({ username: 'admin' });
            if (!adminExists) {
                const admin = new User({
                    username: 'admin',
                    email: 'admin@example.com',
                    role: 'admin'
                });
                await User.register(admin, process.env.ADMIN_PASSWORD || 'admin123');
                console.log('Admin user created');
            }
        }
    } catch (err) {
        console.error("Database initialization error:", err);
    }
}

// Flash messages and current user middleware
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currUser = req.user;
    next();
});

// Home Route (Welcome Page)
app.get('/', (req, res) => {
    res.render('firstpage');
});

// Other routes
app.use('/listings', listingsRouter);
app.use('/listings/:id/reviews', reviewsRouter);
app.use('/', userRouter);

// Static pages
app.get('/app-info', (req, res) => {
    res.render('listings/app-info');
});
app.get('/conditions', (req, res) => {
    res.render('listings/conditions');
});
app.get('/about-us', (req, res) => {
    res.render('listings/about-us');
});

// 404 Error Handler
app.use((req, res, next) => {
    res.status(404).render('error/404', { title: 'Page Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error/500', { title: 'Something Went Wrong' });
});

// Start server
async function startServer() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB");

        await initializeDatabase();

        const port = process.env.PORT || 3000;
        const server = app.listen(port, () => {
            console.log(`🚀 Server started on port ${port}`);
        });

        // Graceful handling of EADDRINUSE error
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.error(`❌ Port ${port} is already in use. Please use a different port.`);
                process.exit(1);
            } else {
                console.error("❌ Server error:", err);
                process.exit(1);
            }
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err);
        process.exit(1);
    }
}

startServer();
