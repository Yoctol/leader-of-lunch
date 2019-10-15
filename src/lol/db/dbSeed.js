const db = require('knex')(require('./knexfile').development);

async function run_seed(db) {
  try {
    const { Channel, Restaurant, Election, electionOption, User, Vote } = require('./models')(db);
    channel = await new Channel().save({
      key: 'a1'
    })
    restaurant = await channel.restaurants().create({
      name: '漢堡王'
    })
    console.log('run seed 成功')
  } catch (error) {
    console.log(`壞了:${error}`)
  } finally {
    db.destroy( ()=>{ console.log('連線中斷') })
  }
}

run_seed(db)
