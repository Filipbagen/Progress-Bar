const init = () => {
  getProgress()
}

const getProgress = () => {
  // Get start and end date
  const startDate = new Date('09/09/2019')
  const endDate = new Date('06/06/2025')

  // Calculate the difference between the dates
  const totDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  console.log('Total days in university: ' + totDays)

  // Calculate compleated days
  const compleated = ((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)).toFixed(1)
  console.log('Days compleated: ' + compleated)

  // Calculate the days left
  const daysLeft = totDays - compleated

  // Calculate percentage compleated
  const percentageDiff = ((compleated / totDays).toFixed(2)) * 100

  const percent = document.querySelector('.progressBar').style.width = percentageDiff + '%'
  document.querySelector('.text').innerHTML = 'Du har gått ' + percent + ' av universitetet. Heja heja'
  document.querySelector('.text2').innerHTML = 'Du har ' + daysLeft + ' dagar kvar vilket är ' + (daysLeft / 365).toFixed(1) + ' år'
}
