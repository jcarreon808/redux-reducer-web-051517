export function manageFriends(state = {
  friends:[],
}, action){
  switch(action.type){
    case "ADD_FRIEND":
     state = {
       friends:[...state.friends, action.friend]
     }
     break;
    case "REMOVE_FRIEND":
      const friends = state.friends.filter((friend)=>friend.id !== action.id)
      state ={
        friends:friends
      }
    break;
  }

  return state;
}
