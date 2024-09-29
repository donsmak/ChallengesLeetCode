# LeetCode Challenge: Summary of AllOne Data Structure

## Overview

The `AllOne` class implements a data structure that efficiently manages a collection of keys with their associated frequencies. It allows for incrementing and decrementing the frequency of keys, as well as retrieving the keys with the maximum and minimum frequencies.

## Classes

### DNode

- Represents a node in a doubly linked list.
- **Properties**:
  - `freq`: Frequency of the keys.
  - `keys`: A set of keys associated with this frequency.
  - `prev`: Pointer to the previous `DNode`.
  - `next`: Pointer to the next `DNode`.
- **Constructor**: Initializes the frequency and creates an empty set for keys.

### AllOne

- Manages the collection of keys and their frequencies.
- **Properties**:
  - `head`: Points to the first `DNode`.
  - `tail`: Points to the last `DNode`.
  - `map`: A map that associates each key with its corresponding `DNode`.
- **Constructor**: Initializes the head and tail to `null` and creates an empty map.

## Methods

- `inc(key: string)`: Increments the frequency of the specified key.
- `dec(key: string)`: Decrements the frequency of the specified key.
- `getMaxKey()`: Returns the key with the highest frequency.
- `getMinKey()`: Returns the key with the lowest frequency.
- `removeNode(n: DNode)`: Removes a `DNode` from the linked list.

## Conclusion

The `AllOne` data structure provides an efficient way to manage keys and their frequencies, allowing for quick updates and retrievals of maximum and minimum keys. This implementation is a solution to a challenge on LeetCode.
