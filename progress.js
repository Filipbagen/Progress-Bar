const init = () => {
  getProgress()
}

// How long you want the animation to take, in ms
const animationDuration = 1200
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
      el.innerHTML = currentCount + '%'
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
  let percentageDiff = ((compleated / totDays).toFixed(2)) * 100

  const subtitle = document.querySelector('.subtitle')
  const percent = document.querySelector('#percent')

  if (percentageDiff >= 100) {
    percentageDiff = 100
    subtitle.innerHTML = 'Grattis, du är klar! ❤️'
    // Percentage position set
    percent.style.left = 'calc(' + -percentageDiff + '%' + ' - 12pt)'
    document.querySelector('#progressBar').style.backgroundImage = 'linear-gradient(to right, #09b92a, #79d676)'
  } else {
    // Percentage position set
    percent.style.left = 'calc(' + percentageDiff + '%' + ' - 8pt)'
    subtitle.innerHTML = 'Du har klarat ' + compleated + ' dagar och har ' + yearsLeft + ' år kvar!'
  }

  // Progress width set
  document.querySelector('#progressBar').style.width = percentageDiff + '%'

  // Animations
  document.querySelector('#current').animate([
    // keyframes
    { left: '0' },
    { left: 'calc(' + percentageDiff + '%' + ' - 2pt)' }
  ], {
    // timing options
    duration: 1200,
    fill: 'forwards',
    easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
  })

  document.querySelector('#progressBar').animate([
    // keyframes
    { width: '0' },
    { width: percentageDiff + '%' }
  ], {
    // timing options
    duration: 1200,
    fill: 'forwards',
    easing: 'cubic-bezier(0.65, 0, 0.35, 1)'
  })

  percent.innerHTML = percentageDiff + '%'

  // Milestone locations set
  document.querySelector('#foundationYear').style.left = 'calc(' + 100 / 6 + '%' + ' - 2pt)'
  document.querySelector('#abroad').style.left = 'calc(' + 100 / 6 * 4 + '%' + ' - 2pt)'

  runAnimations()
}
