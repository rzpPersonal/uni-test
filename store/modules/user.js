export default {
	state: {
		userName: "user",
		telephone: "13280993032"
	},
	mutations: {
		updateName(state, name) {
			state.userName = name
		},
		changePhone(state, tel) {
			state.telephone = tel
		}
	},
	actions: {
		update(context, name) {
			context.commit('updateName', name)
		}
	}
}