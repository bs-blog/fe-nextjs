Feature('screenshoot: e2e')

const screenSizes = [
  [1920, 1080],
  [800, 600],
  [414, 736], //iphone7+
  [320, 568] //iphone5
]

const taskList = [
  // -=-=-=-=-=-=-=-=-=-=-=-= coupon
  { url: '/', name: 'Home' },
  { url: '/storys/-LCssjVnvA9rLu9idsMB', name: 'StoryDetailId' },
  { url: '/categorys/-LL55K9LiNZeXRVmuQMQ', name: 'StorysOfCategory' }
]

taskList.forEach(async task => {
  screenSizes.forEach(async ([w, h]) => {
    Scenario(`screenshoot ${task.name} ${w}x${h}`, function*(I) {
      I.amOnPage(task.url)
      I.wait(2)
      I.resizeWindow(w, h)
      I.saveScreenshot(`screenshoot_${task.name}_${w}x${h}.png`)
    })
  })
})
