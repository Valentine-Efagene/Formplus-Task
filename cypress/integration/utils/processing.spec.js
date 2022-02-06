import { ASCENDING, DESCENDING } from '../../../src/model/order'
import { searchName, sortByDate, sortByOrder } from '../../../src/util/processing'

describe('Processing', () => {
  const data = [
    {
      name: 'Sandra',
      created: '2022-02-01T21:31:04.597696'
    },
    {
      name: 'Kendra',
      created: '2022-01-01T21:31:04.597696'
    },
    {
      name: 'Lora',
      created: '2022-03-01T21:31:04.597696'
    },
    {
      name: 'Anne',
      created: '2022-02-01T21:31:04.597696'
    }
  ]

  it('sorts by ascending order of dates', () => {
    const result = sortByDate(data, ASCENDING)
    expect(result[0].name).to.equal('Kendra')
  })

  it('sorts by descending order of dates', () => {
    const result = sortByDate(data, DESCENDING)
    expect(result[0].name).to.equal('Lora')
  })

  it('sorts in ascending order', () => {
    const result = sortByOrder(data, ASCENDING)
    expect(result[0].name).to.equal('Anne')
  })

  it('sorts in descending order', () => {
    const result = sortByOrder(data, DESCENDING)
    expect(result[0].name).to.equal('Sandra')
  })

  it('searches', () => {
    const result = searchName('dra', data)
    expect(result.length).to.equal(2)
  })
})
