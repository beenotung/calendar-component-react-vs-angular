import React, { useState } from 'react'
import './App.scss'
import { binArray } from '@beenotung/tslib/array'

type Day = {
  day: number
  currentMonth: boolean
  selected?: boolean
  disabled?: boolean
}

const weekDays = `SMTWTFS`.split('')
const initDays: Day[] = []
initDays.push({ day: 28, currentMonth: false })
for (let i = 1; i <= 31; i++) {
  initDays.push({ day: i, currentMonth: true, disabled: i >= 15 && i <= 19 })
}
for (let i = 1; i <= 10; i++) {
  initDays.push({ day: i, currentMonth: false })
}

function App() {
  const [days, setDays] = useState<Day[]>(initDays)

  function selectDay(dayToSet: Day) {
    let newDays = days.map(day =>
      day !== dayToSet
        ? day
        : {
            ...day,
            selected: true,
          },
    )
    setDays(newDays)
  }

  return (
    <div className="calendar">
      <div className="flex">
        <div className="grow">March 2021</div>
        <div className="flex">
          <div className="day">{'<'}</div>
          <div className="day">{'>'}</div>
        </div>
      </div>
      <div className="flex">
        {weekDays.map(weekDay => (
          <div className="day">{weekDay}</div>
        ))}
      </div>
      {binArray(days, 7).map(days => (
        <div className="flex">
          {days.map(day => {
            let classList = ['day']
            classList.push(day.currentMonth ? 'text-dark' : 'text-gray')
            if (day.selected) {
              classList.push('selected')
            }
            if (day.disabled) {
              classList.push('disabled')
            }
            return (
              <div
                className={classList.join(' ')}
                onClick={() => selectDay(day)}
              >
                {day.day}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default App
