<template>
	<div class="home p-5">
		<div class="row">
			<div class="col-6">
				<div class="d-flex justify-content-between align-items-center">
					<h3>Available Lessons</h3>
					<div>
						<div class="form-inline">
							<button class="btn btn-primary" @click="loadLessons">
								<span>Load Lessons</span>
								<span
									v-if="loading"
									class="mx-2 spinner-border spinner-border-sm"
								></span>
							</button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12" v-for="(lesson, i) of computedLessons" :key="i">
						<div
							class="border px-5 py-2 my-2 d-flex justify-content-between align-items-center"
						>
							<div class="d-flex justify-content-start align-items-center">
								<div class="pt-2 text-capitalize">
									<p>Subject: {{ lesson.topic }}</p>
									<p>Location: {{ lesson.location }}</p>
								</div>
							</div>
							<div>
								<p>Price: £{{ lesson.price }}</p>
							</div>
						</div>
					</div>
					<div v-if="computedLessons.length === 0" class="col-12 text-center">
						No Lessons at this moment
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="d-flex justify-content-between align-items-center">
					<h3>User Info</h3>
					<div>
						<div class="form-inline">
							<button class="btn btn-primary" @click="loadUser">
								<span>Load User Info</span>
								<span
									v-if="loadingUsers"
									class="mx-2 spinner-border spinner-border-sm"
								></span>
							</button>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12" v-if="user">
						<div
							class="border px-5 py-2 my-2 d-flex justify-content-between align-items-center"
						>
							<div class="d-flex justify-content-start align-items-center">
								<div class="pt-2">
									<p>Email: {{ user.email }}</p>
									<p>Password: {{ user.password }}</p>
								</div>
							</div>
						</div>
					</div>
					<div v-if="!user" class="col-12 text-center">
						No user info at this moment
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import {mapMutations, mapGetters} from 'vuex'
import {lessons, user} from '../apis/lessons.js'
export default {
	name: 'Home',
	components: {},
	data() {
		return {
			loading: false,
			loadingUsers: false,
			user: null,
			lessons: []
		}
	},
	mounted() {
		this.lessons = []
	},
	computed: {
		computedLessons() {
			return this.lessons
		}
	},
	methods: {
		...mapMutations(['addLesson', 'clearLessons', 'addToCart']),
		loadLessons: async function() {
			try {
				this.loading = true
				let result = await lessons()
				this.lessons = []
				for (let lesson of result.lessons) {
					this.lessons.push(lesson)
				}
				this.loading = false
			} catch (error) {
				console.log(error.message)
				this.loading = false
			}
		},
		loadUser: async function() {
			try {
				this.loadingUsers = true
				let result = await user()
				this.user = result
				this.loadingUsers = false
			} catch (error) {
				console.log(error.message)
				this.loadingUsers = false
			}
		}
	}
}
</script>
