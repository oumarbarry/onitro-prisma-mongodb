import { schedule } from 'node-cron'

const CRON_SCHEDULE = '* */55 * * *'

export default defineNitroPlugin(() => {
  schedule(
    CRON_SCHEDULE,
    () => { console.log('Running a job at America/New_York timezone') },
    { scheduled: true, timezone: 'America/New_York' },
  )
})
