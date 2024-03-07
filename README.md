# Dharosh

Dharosh is an npm package providing a rich set of utility functions and third-party libraries for JavaScript development. It includes functionalities such as toast notifications, date handling, selected data tables, and number formatting.

## Features

- **Utility Functions:** Dharosh offers numerous utility functions for simplifying common tasks in JavaScript development.
- **Toast Notifications:** Integrated toast notification functionality for displaying user-friendly messages or alerts.
- **Date Handling:** Robust date handling capabilities for managing dates and times effectively.
- **Selected Data Tables:** Efficiently display and interact with selected data using the provided data table component.
- **Number Formatting:** Functions for formatting numbers according to various standards and requirements.

## Installation

To install Dharosh and its dependencies, use npm:

````bash
npm install dharosh


# Usage

You can import specific functionalities directly into your JavaScript project:

```javascript
// Importing toast notification functionality
const { showToast } = require('dharosh/toast');

// Importing date handling functions
const { formatDate } = require('dharosh/date');

// Importing selected data table component
const { SelectedDataTable } = require('dharosh/selected-datatable');

// Importing number formatting functions
const { formatNumber } = require('dharosh/number');

// Example usage
showToast('Hello, world!');
const formattedDate = formatDate(new Date());
````

# Contributing

Contributions to Dharosh are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

# License

Dharosh is licensed under the MIT License.

# Credits

Dharosh utilizes various third-party libraries for its functionalities. Special thanks to the authors and contributors of these libraries:

- **Toast Library:** [[Link to Toast Library](https://www.npmjs.com/package/react-hot-toast)]
