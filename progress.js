const init = () => {
  getProgress()
}

// How long you want the animation to take, in ms
const animationDuration = 2000
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration)
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * (2 - t)

// The animation function, which takes an Element
const animateCountUp = el => {
  let frame = 0
  const countTo = parseInt(el.innerHTML, 10)
  // Start the animation running 60 times per second
  const counter = setInterval(() => {
    frame++
    // Calculate our progress as a value between 0 and 1
    // Pass that value to our easing function to get our
    // progress on a curve
    const progress = easeOutQuad(frame / totalFrames)
    // Use the progress value to calculate the current count
    const currentCount = Math.round(countTo * progress)

    // If the current count has changed, update the element
    if (parseInt(el.innerHTML, 10) !== currentCount) {
      el.innerHTML = currentCount
    }

    // If we’ve reached our last frame, stop the animation
    if (frame === totalFrames) {
      clearInterval(counter)
    }
  }, frameDuration)
}

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
  const countupEls = document.querySelectorAll('#percent')
  countupEls.forEach(animateCountUp)
}

const getProgress = () => {
  // Get start and end date
  const startDate = new Date('09/09/2019')
  const endDate = new Date('06/06/2025')

  // Calculate the difference between the dates
  const totDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)

  // Calculate compleated days
  const compleated = Math.floor(((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))

  // Calculate the days left
  const daysLeft = Math.floor(totDays - compleated)

  // Calculate the years left
  const yearsLeft = (daysLeft / 365).toFixed(1)

  // Calculate percentage compleated
  const percentageDiff = ((compleated / totDays).toFixed(2)) * 100

  document.querySelector('#current').style.left = 'calc(' + percentageDiff + '%' + ' - 2pt)'
  document.querySelector('#foundationYear').style.left = '16.67%'
  document.querySelector('#abroad').style.left = '66.67%'

  document.querySelector('#percent').innerHTML = percentageDiff + '%'

  // Percentage position set
  document.querySelector('#percent').style.left = 'calc(' + percentageDiff + '%' + ' - 11pt)'

  // Progress width set
  document.querySelector('.progressBar').style.width = percentageDiff + '%'
  document.querySelector('.subtitle').innerHTML = 'Du har klarat ' + compleated + ' dagar och har ' + yearsLeft + ' år kvar!'

  runAnimations()
}
