import { database } from '../shared/data.mjs'

class Application {
    constructor(factory) {
        this.table = factory.createTable()
    }

    initialize() {
        this.table.render(database)
    }
}


void async function() {
    const path = globalThis.window ? 'browser' : 'console'
    const { default: ViewFactory } = await import(`../plataforms/${path}/index.mjs`)


}()