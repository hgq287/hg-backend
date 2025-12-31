<script setup>
import { ref, onMounted, computed, reactive } from 'vue';
import { useRouter } from 'vue-router'; 

const authStore = useAuthStore();
const router = useRouter();

const profile = ref(null);
const profileLoading = ref(true);
const profileError = ref(null);
const editMode = ref(false); 
const profileForm = reactive({
    name: '',
    bio: '',
});

const userPosts = ref([]);
const postsLoading = ref(true);

const fetchProfile = async () => {
  console.log('Fetching user profile...');
};


const updateProfile = async () => {
  console.log('Updating user profile...');
};

const fetchUserPosts = async () => {
  console.log('Fetching user posts...');
};

const deletePost = async (postId) => {
   console.log(`Deleting post with ID: ${postId}`);
};

onMounted(() => {
    fetchProfile();
    fetchUserPosts();
});
</script>

<template>
  <div class="py-10">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">
      User Dashboard
    </h1>

    <div class="bg-white shadow-lg rounded-xl p-8 mb-10 border-t-4 border-indigo-500">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold text-gray-800">👤 User Profile (API: GET/PUT /user-profile)</h2>
        <button v-if="!editMode && !profileLoading" @click="editMode = true" class="btn-primary-outline-small">
          Edit Profile
        </button>
      </div>

      <div v-if="profileLoading" class="text-indigo-600 font-medium">Loading profile...</div>
      <div v-else-if="profileError" class="bg-red-50 text-red-700 p-4 rounded-md border border-red-200">{{ profileError }}</div>
      
      <div v-else>
        <dl v-if="!editMode" class="space-y-3">
          <div><dt class="text-sm font-medium text-gray-500">Name</dt><dd class="mt-1 text-lg text-gray-900">{{ profile.name }}</dd></div>
          <div><dt class="text-sm font-medium text-gray-500">Email</dt><dd class="mt-1 text-lg text-gray-900">{{ profile.email }}</dd></div>
          <div><dt class="text-sm font-medium text-gray-500">Bio</dt><dd class="mt-1 text-gray-700 italic">{{ profile.bio || 'Not set.' }}</dd></div>
        </dl>

        <form v-else @submit.prevent="updateProfile" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" v-model="profileForm.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Bio</label>
                <textarea v-model="profileForm.bio" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"></textarea>
            </div>
            <div class="flex space-x-3">
                <button type="submit" class="btn-primary">Save Changes</button>
                <button type="button" @click="editMode = false" class="btn-secondary">Cancel</button>
            </div>
        </form>
      </div>
    </div>

    <div class="bg-white shadow-lg rounded-xl p-8 border-t-4 border-teal-500">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-semibold text-gray-800">📝 My Content (API: /posts)</h2>
        <RouterLink to="/posts/create" class="btn-primary-teal">
          + Create New Post
        </RouterLink>
      </div>

      <div v-if="postsLoading" class="text-teal-600 font-medium p-4">Loading your posts...</div>
      <ul v-else class="divide-y divide-gray-200">
        <li v-for="post in userPosts" :key="post.id" class="py-4 flex items-center justify-between">
            <span class="text-lg font-medium text-gray-800 flex-1">{{ post.title }}</span>
            <div class="flex space-x-3">
                <RouterLink :to="`/posts/edit/${post.id}`" class="text-blue-600 hover:text-blue-800 font-medium">Edit (PUT)</RouterLink>
                <button @click="deletePost(post.id)" class="text-red-600 hover:text-red-800 font-medium">Delete (DELETE)</button>
            </div>
        </li>
        <li v-if="userPosts.length === 0 && !postsLoading" class="py-4 text-center text-gray-500">
            You have no posts.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Thêm các button styles mới */
.btn-primary { @apply px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150; }
.btn-secondary { @apply px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150; }
.btn-primary-teal { @apply px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition duration-150; }
.btn-primary-outline-small { @apply px-3 py-1 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 hover:bg-indigo-50 transition duration-150; }
</style>