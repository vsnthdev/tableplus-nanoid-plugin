import { customAlphabet } from 'nanoid/non-secure'

var setContent = function (context, nanoid) {
    // Get all the items
    var row = context.clickedRow()
    var col = context.clickedColumn()
    var item = context.currentItem()

    if (row == null || col == null || item == null) {
        context.alert('Error', 'No item clicked')
        return
    }

    if (nanoid == null) {
        context.alert('Error', 'Could not generate Nanoid')
        return
    }

    // Make sure the constant is nil
    row.setConstant(col.name, '')

    // Update row value
    row.update(col.name, nanoid)

    // Add to update queue
    item.addUpdate(row)

    // Notify the change
    context.update()
}

var nanoid = function (context) {
    let customGenerator = customAlphabet(
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        6
    )

    let nanoid = customGenerator()
    setContent(context, nanoid)
}

global.nanoid = nanoid