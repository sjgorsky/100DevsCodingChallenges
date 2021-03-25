//Create a stopwatch object that has four properties and three methods
let stopwatch = {}
    stopwatch.color='black'
    stopwatch.brand='tag heuer'
    stopwatch.startTime = 0.00
    stopwatch.maxTime=99.99

    stopwatch.runTime= function(){console.log('Running!')}
    stopwatch.stopTime=function(){console.log('Stopping!')}
    stopwatch.resetTime=function(){console.log('Reset!')}