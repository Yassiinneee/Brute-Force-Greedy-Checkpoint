# 📦 Brute Force vs Greedy Algorithms – Delivery Task Scheduler

A professional implementation and comparison of **Brute Force** and **Greedy** algorithms for solving the **Delivery Task Scheduling** problem. This project demonstrates the trade-offs between exhaustive search and optimal greedy strategies while analyzing performance, scalability, and algorithmic complexity.

---

# 📑 Table of Contents

- Overview
- Problem Statement
- Objectives
- Project Structure
- Algorithm Implementations
- Features
- Complexity Analysis
- Performance Evaluation
- Edge Case Testing
- Installation
- Usage
- Sample Output
- Key Takeaways
- Future Improvements
- Technologies Used
- Author

---

# 📖 Overview

Scheduling independent delivery tasks without overlapping time intervals is a classical optimization problem commonly known as the **Activity Selection Problem**.

This project provides two different approaches:

- **Brute Force Algorithm**
- **Greedy Algorithm**

Both algorithms solve the same problem but with dramatically different computational costs, making this checkpoint an excellent demonstration of algorithm design and optimization techniques.

---

# 🎯 Problem Statement

Given a list of delivery tasks represented by:

```javascript
{
    start: Number,
    end: Number
}
```

Determine the **maximum number of non-overlapping tasks** that can be completed.

Example:

| Task | Start | End |
|------|------:|----:|
| A | 1 | 3 |
| B | 2 | 5 |
| C | 4 | 6 |
| D | 6 | 7 |
| E | 5 | 9 |
| F | 8 | 10 |

Expected Result:

```
Maximum Tasks = 4
```

---

# 🎯 Objectives

The project demonstrates:

- Exhaustive search using Brute Force
- Greedy optimization strategy
- Time complexity comparison
- Space complexity analysis
- Performance benchmarking
- Stress testing
- Edge case validation

---

# 📂 Project Structure

```
Brute-Force-Greedy-Checkpoint-main
│
├── Delivery.js
├── Code execution.png
└── README.md
```

---

# ⚙️ Algorithm Implementations

## 1. Brute Force Approach

The brute force solution explores **every possible subset** of tasks.

### Steps

1. Generate all possible task combinations using bitmasking.
2. Check whether selected tasks overlap.
3. Keep the largest valid subset.

### Characteristics

- Exhaustive search
- Guaranteed optimal solution
- Exponential runtime
- Suitable only for small datasets

---

## 2. Greedy Approach

The greedy solution uses the classic **Earliest Finish Time First** strategy.

### Steps

1. Sort tasks by ending time.
2. Select the earliest finishing compatible task.
3. Continue selecting compatible tasks.

### Why It Works

Choosing the activity that finishes first always leaves the largest remaining time interval available for future tasks.

This is the optimal strategy for the Activity Selection Problem.

---

# ✨ Features

- Clean JavaScript implementation
- Well-commented source code
- Brute Force solution
- Optimal Greedy solution
- Random task generator
- Performance benchmarking
- Sample test execution
- Multiple edge case validations
- Complexity analysis included

---

# 📊 Complexity Analysis

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Brute Force | O(2ⁿ × n²) | O(n) |
| Greedy | O(n log n) | O(n) |

---

## Brute Force

Advantages

- Always finds the optimal solution
- Easy to understand
- Useful for verification

Disadvantages

- Exponential complexity
- Extremely slow for large inputs
- Poor scalability

---

## Greedy

Advantages

- Fast
- Efficient
- Scalable
- Optimal for this problem
- Suitable for real-world scheduling

Disadvantages

- Requires proof of correctness
- Greedy strategies are not universally optimal for every optimization problem

---

# 🚀 Performance Evaluation

The project generates **10,000 random delivery tasks** to evaluate scalability.

### Greedy Performance

```javascript
console.time("Greedy Time");
greedyMaxTasks(tasks);
console.timeEnd("Greedy Time");
```

Execution completes almost instantly thanks to its **O(n log n)** complexity.

---

### Brute Force Performance

Brute Force is intentionally **not executed** on 10,000 tasks because:

- Number of subsets:

```
2^10000
```

This is computationally infeasible and would effectively never finish on conventional hardware.

---

# 🧪 Edge Case Testing

The implementation validates several important scenarios.

## All Tasks Overlap

```
Expected Result: 1
```

Only one task can be selected.

---

## No Tasks Overlap

```
Expected Result: All Tasks
```

Every task can be scheduled.

---

## Same Start Time

Tasks begin simultaneously.

The greedy algorithm correctly selects the earliest finishing task.

---

# 💻 Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd Brute-Force-Greedy-Checkpoint-main
```

No external dependencies are required.

---

# ▶️ Usage

Run the program with Node.js:

```bash
node Delivery.js
```

---

# 📋 Sample Output

```
========== SAMPLE TEST ==========

Brute Force Result: 4

Greedy Result: 4

========== PERFORMANCE TEST ==========

Greedy Time (10,000 tasks): XX ms

========== STRESS TESTS ==========

All Overlapping: 1

All Non-Overlapping: 4

Same Start Time: 1
```

---

# 📈 Key Takeaways

### Brute Force

✔ Guarantees the optimal solution

✔ Excellent for learning and correctness verification

✖ Not practical for large datasets

---

### Greedy

✔ Optimal for the Activity Selection Problem

✔ Fast and memory efficient

✔ Suitable for production-scale scheduling systems

✔ Handles thousands of tasks efficiently

---

# 🔮 Future Improvements

Potential enhancements include:

- Weighted Activity Selection
- Dynamic Programming implementation
- Interactive task input
- Graphical schedule visualization
- Unit testing with Jest
- Benchmark comparison charts
- CSV/JSON task import and export
- Command-line interface (CLI)

---

# 🛠 Technologies Used

- JavaScript (ES6+)
- Node.js
- Greedy Algorithms
- Brute Force Algorithms
- Bitmasking
- Performance Benchmarking

---

# 👨‍💻 Author

*Yassine Kalthoum*

**Brute Force & Greedy Algorithms Checkpoint**

Developed as part of an algorithmic programming checkpoint to demonstrate:

- Algorithm design
- Optimization strategies
- Complexity analysis
- Performance benchmarking
- Software engineering best practices

---

# 📚 Learning Outcomes

After completing this project, you should be able to:

- Differentiate Brute Force and Greedy strategies.
- Analyze algorithmic time and space complexity.
- Understand why greedy solutions can outperform exhaustive search.
- Implement efficient scheduling algorithms.
- Benchmark algorithm performance on large datasets.
- Recognize scalability trade-offs in real-world software systems.

---

## ⭐ Conclusion

This project highlights one of the most fundamental lessons in algorithm design: while exhaustive search guarantees correctness, it often becomes impractical as input size grows. By leveraging the Greedy strategy, the scheduler achieves the same optimal result for this problem with dramatically better performance, making it suitable for real-world delivery scheduling and resource allocation scenarios.
