import clubs from './clubs.js';
import leagues from './leagues.js';
import players from './players.js';
import tables from './tables.js';
import schedules from './schedules.js';
import accounts from './accounts.js';
import products from './products.js'

function route(app) {
    app.use('/clubs', clubs);
    app.use('/leagues', leagues);
    app.use('/players', players);
    app.use('/tables', tables);
    app.use('/schedules', schedules);
    app.use('/accounts', accounts);
    app.use('/products', products);
}
export default route;