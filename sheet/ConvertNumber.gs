function convertNumber() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getActiveRange()
  const chars = [
    ["٠", "۰"],
    ["١", "۱"],
    ["٢", "۲"],
    ["٣", "۳"],
    ["٤", "۴"],
    ["٥", "۵"],
    ["٦", "۶"],
    ["٧", "۷"],
    ["٨", "۸"],
    ["٩", "۹"],
  ]

  for (let row = 1; row <= range.getNumRows(); row++) {

    for (let column = 1; column <= range.getNumColumns(); column++) {

      const cell = range.getCell(row, column)
      let value = cell.getValue()

      for (let index = 0; index < chars.length; index++) {
        value = value.replace(new RegExp('[' + chars[index].join("") + ']', 'g'), index)
      }

      cell.setValue(Number(value))

    }

  }

}
