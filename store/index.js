import Vuex from "vuex"

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                    return new Promise((resolve, reject) => {
                        vuexContext.commit("setPosts",
                            [
                              { id: "1", title: "First post", previewText: "This is our first post", thumbnail: "-"},
                              { id: "2", title: "Second post", previewText: "This is our second post", thumbnail: "-"}
                            ]
                        )
                        resolve();
                    });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore;