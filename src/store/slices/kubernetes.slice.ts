import { createSlice } from '@reduxjs/toolkit'
import { IAsyncData, getInitialState } from '../../models'
import { RootState } from '../store'
import { KubernetesProject } from '../../models/kubernetes'
import { addBuilders, kubernetes } from '../effects'

interface KubernetesState extends IAsyncData<KubernetesProject[]> {}

const initialState: KubernetesState = {
  ...getInitialState<KubernetesProject[]>([]),
}

export const kubernetesSlice = createSlice({
  name: 'kubernetes',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    addBuilders(builder, kubernetes.loadProjects)
    builder.addCase(kubernetes.addNewProject.fulfilled, (state, action) => {
      state.data.push(action.payload)
    })
    builder.addCase(kubernetes.updateProject.fulfilled, (state, action) => {
      const index = state.data.findIndex(p => p.id === action.payload.id)
      state.data[index] = action.payload
    })
  },
})

export const selectPost = (state: RootState) => state.kuberenetes

export const reducer = kubernetesSlice.reducer
