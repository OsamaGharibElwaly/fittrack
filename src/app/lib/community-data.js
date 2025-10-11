export const users = {
  "u1": {
    id: "u1",
    name: "Ahmed Samir",
    role: "Personal Trainer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed",
  },
  "u2": {
    id: "u2",
    name: "Sara Mahmoud",
    role: "Nutrition Coach",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
  },
  "u3": {
    id: "u3",
    name: "Mostafa Youssef",
    role: "Powerlifter",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mostafa",
  },
  "u4": {
    id: "u4",
    name: "Lina Adel",
    role: "Yoga Instructor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lina",
  },
};

// Helper to get timestamps (past hours)
const hoursAgo = (h) => Date.now() - h * 60 * 60 * 1000;

export const posts = [
  {
    id: 201,
    authorId: "u1",
    title: "Best way to build muscle without getting injured?",
    content:
      "I train 5 days a week and try to progressively overload, but my joints feel sore sometimes. Any advice to increase strength safely?",
    tags: ["training", "muscle", "recovery"],
    createdAt: hoursAgo(3),
    reactions: { like: 25, helpful: 14, total: 39 },
  },
  {
    id: 202,
    authorId: "u2",
    title: "Is the keto diet good for muscle gain?",
    content:
      "I've heard that keto can reduce gym performance. Is it still possible to gain muscle while staying in ketosis?",
    tags: ["nutrition", "keto", "muscle-gain"],
    createdAt: hoursAgo(8),
    reactions: { like: 19, helpful: 10, total: 29 },
  },
  {
    id: 203,
    authorId: "u4",
    title: "Tips to improve flexibility after workouts",
    content:
      "Does stretching right after a workout actually help? Or is it better to do a separate mobility session?",
    tags: ["mobility", "yoga", "recovery"],
    createdAt: hoursAgo(1),
    reactions: { like: 22, helpful: 7, total: 29 },
  },
  {
    id: 204,
    authorId: "u3",
    title: "Top leg exercises for building strength",
    content:
      "I train squats and deadlifts regularly, but progress feels slow. Any assistance exercises to boost performance?",
    tags: ["strength", "legs", "powerlifting"],
    createdAt: hoursAgo(26),
    reactions: { like: 16, helpful: 6, total: 22 },
  },
];

export const comments = [
  {
    id: "c1",
    postId: 201,
    authorId: "u2",
    content:
      "Try adding a deload week every 6 weeks — it helps your joints recover from heavy loads.",
    createdAt: hoursAgo(2),
    upvotes: 8,
  },
  {
    id: "c2",
    postId: 202,
    authorId: "u3",
    content:
      "Keto can work if you get enough protein and time your workouts well, but expect lower energy at first.",
    createdAt: hoursAgo(5),
    upvotes: 6,
  },
  {
    id: "c3",
    postId: 203,
    authorId: "u1",
    content:
      "Static stretching post-workout is great for cooldowns. For real flexibility gains, add 2 dedicated mobility sessions weekly.",
    createdAt: hoursAgo(0.5),
    upvotes: 9,
  },
  {
    id: "c4",
    postId: 204,
    authorId: "u4",
    content:
      "Try Bulgarian split squats and hip thrusts — they’ll boost your squat and deadlift strength.",
    createdAt: hoursAgo(22),
    upvotes: 4,
  },
];
