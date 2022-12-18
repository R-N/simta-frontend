import Vue from 'vue'
import Vuex from 'vuex'
import { Module, VuexModule, Mutation, Action, MutationAction, 
	getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

/*
export default new Vuex.Store({
    state: {
        apiKey: null
    },
    getters: {
    },
    mutations: {
        setApiKey(state, apiKey){
            state.apiKey = apiKey
        }
    },
    actions: {
    },
    modules: {
    }
})
*/

const store = new Vuex.Store({
    state: {},
    modules: {}
})

const name = 'mystore'

@Module({
	namespaced: true,
	name,
    store,
    dynamic: true
})
class MyStore extends VuexModule {
    apiKey = null

	@MutationAction({ mutate: ['apiKey'] })
	async setApiKey(apiKey){
		return {
			apiKey: apiKey
		}
	}
}
store.mystore = getModule(MyStore)

export { store, MyStore }
export default store