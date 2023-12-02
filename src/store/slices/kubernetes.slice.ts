import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAsyncData, getInitialState } from '../../models'
import { RootState } from '../store'
import { IDeployment, ISecret, IVolumeClaim, KubernetesProject } from '../../models/kubernetes'
import { addBuilders, kubernetesEffect } from '../effects'

interface State extends IAsyncData<KubernetesProject[]> {}

const initialState: State = {
  ...getInitialState<KubernetesProject[]>([]),
}

export const slice = createSlice({
  name: 'kubernetes',
  initialState: initialState,
  reducers: {
    addDeployment: (state, action: PayloadAction<{ id: number; deployment: IDeployment }>) => {
      const index = findProject(state, action.payload.id)
      state.data[index].deployment.push(action.payload.deployment)
    },
    updateDeployment: (state, action: PayloadAction<{ id: number; deployment: IDeployment; index: number }>) => {
      const index = findProject(state, action.payload.id)
      state.data[index].deployment[action.payload.index] = action.payload.deployment
    },
    addSecret: (state, action: PayloadAction<{ id: number; secret: ISecret }>) => {
      const index = findProject(state, action.payload.id)
      state.data[index].secrets.push(action.payload.secret)
    },
    updateSecret: (state, action: PayloadAction<{ id: number; secret: ISecret; index: number }>) => {
      const index = findProject(state, action.payload.id)
      state.data[index].secrets[action.payload.index] = action.payload.secret
    },
    addVolume: (state, action: PayloadAction<{ id: number; volume: IVolumeClaim }>) => {
      const index = findProject(state, action.payload.id)
      state.data[index].volumeClaims.push(action.payload.volume)
    },
    updateVolume: (state, action: PayloadAction<{ id: number; volume: IVolumeClaim; index: number }>) => {
      const index = findProject(state, action.payload.id)
      state.data[index].volumeClaims[action.payload.index] = action.payload.volume
    },
  },
  extraReducers: builder => {
    addBuilders(builder, kubernetesEffect.loadProjects)
    builder.addCase(kubernetesEffect.addNewProject.fulfilled, (state, action) => {
      state.data.push(action.payload)
    })
    builder.addCase(kubernetesEffect.updateProject.fulfilled, (state, action) => {
      const index = state.data.findIndex(p => p.id === action.payload.id)
      state.data[index] = action.payload
    })
  },
})

export const { addDeployment, updateDeployment, addSecret, updateSecret, addVolume, updateVolume } = slice.actions

export const select = (state: RootState) => state.kuberenetes

export const reducer = slice.reducer

function findProject(state: State, id: number) {
  return state.data.findIndex(p => p.id === id)
}
