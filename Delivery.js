//DELIVERY TASK SCHEDULER


// 1️- BRUTE FORCE IMPLEMENTATION


/**
 * Check if selected tasks overlap
 * We compare each task with every other task.
 * If any overlap exists -> return false.
 */
function isNonOverlapping(selectedTasks) {
  for (let i = 0; i < selectedTasks.length; i++) {
    for (let j = i + 1; j < selectedTasks.length; j++) {

      // Two tasks overlap if:
      // taskA.end > taskB.start AND taskB.end > taskA.start
      if (
        selectedTasks[i].end > selectedTasks[j].start &&
        selectedTasks[j].end > selectedTasks[i].start
      ) {
        return false; // Overlap found
      }
    }
  }
  return true; // No overlap
}


/**
 * Brute force solution:
 * - Generate ALL possible subsets (2^n)
 * - Check which subset is valid
 * - Keep track of the largest valid subset
 */
function bruteForceMaxTasks(tasks) {

  const n = tasks.length;
  let maxCount = 0;

  // Loop over all subsets using bitmask
  for (let mask = 0; mask < (1 << n); mask++) {

    const subset = [];

    // Build subset from bitmask
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(tasks[i]);
      }
    }

    // Check if subset has no overlapping tasks
    if (isNonOverlapping(subset)) {
      maxCount = Math.max(maxCount, subset.length);
    }
  }

  return maxCount;
}



// 2️- GREEDY IMPLEMENTATION (OPTIMAL SOLUTION)


/**
 * Greedy Algorithm:
 * Step 1: Sort tasks by earliest ending time
 * Step 2: Always pick the first compatible task
 * 
 * Why it works?
 * Choosing earliest finishing task leaves more room
 * for future tasks.
 */
function greedyMaxTasks(tasks) {

  // Clone and sort by end time
  const sorted = [...tasks].sort((a, b) => a.end - b.end);

  let count = 0;
  let lastEndTime = -Infinity;

  for (let task of sorted) {

    // If current task starts after previous one ends
    if (task.start >= lastEndTime) {
      count++;
      lastEndTime = task.end;
    }
  }

  return count;
}


// 3️-RANDOM TASK GENERATOR


/**
 * Generate random tasks
 * @param {number} n - number of tasks
 */
function generateTasks(n) {

  const tasks = [];

  for (let i = 0; i < n; i++) {

    // Random start time
    const start = Math.floor(Math.random() * 100000);

    // Random duration between 1 and 50
    const duration = Math.floor(Math.random() * 50) + 1;

    tasks.push({
      start: start,
      end: start + duration
    });
  }

  return tasks;
}



// 4️-TEST WITH PROVIDED SAMPLE INPUT


const sampleTasks = [
  { start: 1, end: 3 },
  { start: 2, end: 5 },
  { start: 4, end: 6 },
  { start: 6, end: 7 },
  { start: 5, end: 9 },
  { start: 8, end: 10 }
];

console.log("========== SAMPLE TEST ==========");
console.log("Brute Force Result:", bruteForceMaxTasks(sampleTasks));
console.log("Greedy Result:", greedyMaxTasks(sampleTasks));
// Expected result: 4



// 5️-PERFORMANCE TEST (Large Input)


console.log("\n========== PERFORMANCE TEST ==========");

const largeTasks = generateTasks(10000);

// Measure Greedy execution time
console.time("Greedy Time (10,000 tasks)");
greedyMaxTasks(largeTasks);
console.timeEnd("Greedy Time (10,000 tasks)");


// WARNING: DO NOT RUN brute force on 10,000 tasks
// It will freeze your machine due to exponential growth
/*
console.time("Brute Force Time");
bruteForceMaxTasks(largeTasks);
console.timeEnd("Brute Force Time");
*/



// 6️-Testing the (EDGE CASES)


console.log("\n========== STRESS TESTS ==========");

// Case 1: All overlapping
const overlapping = [
  { start: 1, end: 10 },
  { start: 2, end: 9 },
  { start: 3, end: 8 },
  { start: 4, end: 7 }
];

// Case 2: All non-overlapping
const nonOverlapping = [
  { start: 1, end: 2 },
  { start: 3, end: 4 },
  { start: 5, end: 6 },
  { start: 7, end: 8 }
];

// Case 3: Same start time
const sameStart = [
  { start: 1, end: 3 },
  { start: 1, end: 2 },
  { start: 1, end: 4 }
];

console.log("All Overlapping:", greedyMaxTasks(overlapping));       // Expected: 1
console.log("All Non-Overlapping:", greedyMaxTasks(nonOverlapping)); // Expected: 4
console.log("Same Start Time:", greedyMaxTasks(sameStart));          // Expected: 1



/*Short Analysis (Answer Section)
Which algorithm is faster for large inputs and why?
The Greedy algorithm is significantly faster because it runs in O(n log n) time due to sorting.
The brute-force solution runs in O(2ⁿ) time, which grows exponentially and becomes unusable even for n > 25.


Which algorithm is easier to maintain and scale?
The greedy solution is easier to maintain and scale because:
Code is shorter and cleaner
No combinatorial explosion
Works efficiently in real-time systems


Memory Trade-Offs?
Both use O(n) memory.
However:
Brute force temporarily stores many subsets
Greedy only stores sorted tasks and a few variables
Greedy is more memory efficient in practice.
*/