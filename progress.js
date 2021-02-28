const init = () => {
  getProgress()
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
  document.querySelector('#percent').style.left = 'calc(' + percentageDiff + '%' + ' - 11pt)'

  document.querySelector('.progressBar').style.width = percentageDiff + '%'
  document.querySelector('.subtitle').innerHTML = 'Du har klarat ' + compleated + ' dagar och har ' + yearsLeft + ' år kvar!'
}
