# Reflection

In Sudoku Lab 05, every move meant clearing the board's DOM and rebuilding it by hand. In this lab I only change the input data and React worked out what to re-render with my given description of what the UI should look like for a given state, and the framework handles the DOM updates. That removes a whole class of bugs where the screen and the data disagree, and it is the main point of using a component framework.
