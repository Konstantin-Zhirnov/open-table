## Food Ordering Test

Thank you for accepting our coding challenge. Please take as much time as required to give us a good indication of your coding strengths, as your application will provide many topics of conversation in the next interview stage.

## The Assignment

Today you're going to build an app to create food orders. The app will display information of the user, the available resturants, and will allow the user create and customize their food order.

## Technology Requirements

- Please do not use class based react components. Use hooks and other modern features as necessary
- If you feel the need to use a global state management library, Redux is preferred
- Correct use of semantic HTML and accessibility is encouraged
- Feel free to use modern browser APIs
- Please refrain from using 3rd party component and styling libraries
- Use the Fetch API for data transfer between client and server
- Feel free to use scss, styled-components, etc.
- Write clean code

## Part 1 - Requirements & Acceptance Criteria

UI

- The Name and Location of the user must rendered
- The available restaurants to choose food from must be rendered
- The menu of the currently chosen restaurant must be rendered
  - The Menu should show the name and price of each item
- The current order of the user must be rendered
  - The Order should show the name and quantity of each food item
- Items in the menu and order components must always be visible.

BEHAVIOR

- The User can only order from one resturant at a time
- The User can click on an item in the menu to add to their order
- The total should update as the user makes changes to their order
- checking out should trigger an alert that says "Order submitted" and clears the current order

### Data Fetching

The data required to build your UI can be retrieved using the `FETCH` constants provided in App.tsx

---

## Part 2 - Enhancments

UI

- The User should be able to remove items from the order

BEHAVIOR

- The User must be able to remove a food item from their order
  - if they have multiple of one item, remove one at a time
- The User should only be able to choose resturants they have permissions for
- if a user does not have a permissions to a resturant, the resturant should appear as disabled

### Permissions

The configuration for the User contains a field called `permissionList`. This is an array of strings denoting what permissions this user has.

Each resturants has a field called `access`; this field corresponds to the list of permissions for a user. If the access string of a resturant appears in the `permissionList`, that user has access to that restaurant.

---

## Part 3 - More Enhancements

UI

- The Menu and Order should always be the same height. They must also fill the available space.
- The total cost and checkout button must anchored to the bottom of the page.
- Add a timer next to the checkout button. Have it countdown from 1 minute to 0. When it times out, trigger an alert that says "Session expired" and clear the current order.

BEHAVIOR

- The user can only order a max of 2 of any item
- The user can only be allowed to checkout if they have ordered at least 3 items
