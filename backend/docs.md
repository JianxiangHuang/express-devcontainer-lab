# Math API Documentation

This API provides mathematical calculations including power, rectangle area & perimeter, and circle measurements.

---

## Calculate Power

**Request Format:** `/math/power/:base/:exponent`
**Request Type:** GET
**Returned Data Format:** JSON

**Description:**
Returns the result of raising a `base` to an `exponent`.
If the optional query parameter `root=true` is included, the response will also include the square root of the base.

**Example Request:** `/math/power/4/2`
**Example Response:**

```json
{
  "result": 16
}
```

**Example Request with Root:** `/math/power/4/2?root=true`
**Example Response with Root:**

```json
{
  "result": 16,
  "root": 2
}
```

---

## Rectangle Area & Perimeter

**Request Format:** `/math/rectangle/:width/:height`
**Request Type:** GET
**Returned Data Format:** JSON

**Description:**
Calculates the area and perimeter of a rectangle based on width and height.

**Example Request:** `/math/rectangle/5/5`
**Example Response:**

```json
{
  "area": 25,
  "perimeter": 20
}
```

---

## Circle Area & Circumference

**Request Format:** `/math/circle/:r`
**Request Type:** GET
**Returned Data Format:** JSON

**Description:**
Calculates the area and circumference of a circle using the radius provided in the URL.

**Example Request:** `/math/circle/1`
**Example Response:**

```json
{
  "area": 3.14,
  "circumference": 6.28
}
```

---

## Notes

* All values must be numeric.
* All required inputs are URL parameters.
* The `root` option is only available for the `/math/power` endpoint and is sent as a **query parameter**.


