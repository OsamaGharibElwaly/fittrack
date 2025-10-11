// lib/posts.js
export const DUMMY_USERS = [
  { id: "u1", name: "Sarah Miller" },
  { id: "u2", name: "Alex Johnson" },
  { id: "u3", name: "Emily Carter" },
  { id: "u4", name: "David Lee" },
];

export const POSTS = [
  {
    slug: "strength-training-guide",
    title: "The Ultimate Guide to Strength Training",
    excerpt:
      "Learn the fundamentals of strength training, including proper form, exercise selection, and progression strategies.",
    content: `
      <p>Strength training is essential for building muscle, improving metabolism, and overall health.</p>
      <p>We'll cover fundamentals, proper form, exercise selection, and how to progress safely.</p>
    `,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdjx_DyDmT2pklfHKBn_VpHUlCedo-Nf6u_IZyKo_8t8mWKPPDljMIHKf79cAALRQj73xtjM6pmr_ifEp_syVA0-qGsOiM42HyxiPJUv237FhmsNAg9Dz3VAu7CfRxvqT1J1CmEC0t-KBq-pOTMeKb2zSXmduwc04J4u0oadRaBU1QdgXYEPupYW3kJdR2gBTxMuFjyhyFP3EXIo7WcI_cvcuonmYE6atDyU90ufnJPmXqAQR1cyJ-5p1S6IDLSS4G-o0rW5hQl8cR",
    authorId: "u1",
    date: "2025-09-18",
  },
  {
    slug: "nutrition-tips",
    title: "Fuel Your Workouts: Nutrition Tips for Peak Performance",
    excerpt:
      "Optimize your diet to support your fitness goals with these expert nutrition tips.",
    content: `
      <p>Nutrition drives performance. Focus on protein timing, complex carbs, and hydration.</p>
      <ul><li>Plan pre/post-workout meals</li><li>Stay hydrated</li><li>Track macros sensibly</li></ul>
    `,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdF34LQ8pFEVMrKIM-pfhrkNBI2vpZA-qXy759tWdfd1JgqlhgJTQlfGlzpOlIFeCkYKC2wJ9swrLuo1OeueCEamyHD_YTCztx7HPFo5xRnDsBOW7fw85wjpSZEk_SdTuHzfVLVG3BTDknxRJAe6EnAwjNShAJ-2E-7uJAkpRhayid8WdUWUQbCWJDM3nIue4IhH5GOKWpIDW5s39cCZT2nJeMiFVdY7q7YUe4iqUnideDW-QXJwx3aQz39yftnHr768uCuo9Gj9Kk",
    authorId: "u3",
    date: "2025-09-17",
  },
  {
    slug: "mental-health-and-fitness",
    title: "Mind Over Matter: The Role of Mental Health in Fitness",
    excerpt:
      "Explore the connection between mental well-being and physical fitness, and learn strategies to enhance both.",
    content: `
      <p>Mental health influences consistency and recovery. Add mindfulness, sleep hygiene, and realistic goals.</p>
    `,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCTjg5WJP1SHvnRj5xKzwUczq0rWTsI1BBdHls3HOqtkcJjP6RtJD37mrw1NC27Juv3m-XFesgZ_qVEvSQvrlXXxft3qc4Ipyduu3lRIu8tZVmaZxdjGpDZ3kjMCfPN7I8-Gh73vgZaPkRpriUuXj0qPMgvf_rpo1wasyBjFto1NB1iaLC3okavNd3nb2oDjdfY1QUV57yDHQOtotBDoz-5MjnnTnx-6YhEBFA2ceyUCvN5_xU0HqDNKUwJCwq_6scZyWOM97pqdi9",
    authorId: "u2",
    date: "2025-09-16",
  },
  {
    slug: "home-workouts",
    title: "Home Workouts: Effective Exercises You Can Do Anywhere",
    excerpt:
      "Discover a variety of effective exercises that require minimal equipment and can be done in the comfort of your home.",
    content: `
      <p>Use bodyweight circuits, bands, and tempo work to get strong at home. Focus on form and progression.</p>
    `,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDw9rTyDm5vcKCdlGlo7gwpAkIPzD3qdkBeSUvUVboTUwaPIC-e5CJ4wewgR53cUIzWeP0PJ-y5AO2n-QY-VHPpZkXXilqZGl7OruM06WpKr9s6FxYQtvHUSr4rV0bbWqOtBiyHsAP371Pop1b1f4vYQF3ljR6CwP3hWi2IOA8GOUEHSjIPxnXG01IFx8AorqA3CAPmPr7JMnrGqTIDVVa5pdW8_v-ty8rm-NpDNpVn3pfxTlZfSrcJ2j0t_JGE44SkejzsSwOT_728",
    authorId: "u4",
    date: "2025-09-15",
  },
];

export function getUserById(id) {
  return DUMMY_USERS.find((u) => u.id === id);
}
