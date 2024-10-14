import { StateUpdateDto } from "../../../dtos/state/state.dto"
import prisma from '../models/client';

class StateMachineService {

  async updateDummyObjectState(
    stateUpdate: StateUpdateDto,
    dummyObjectId: number
  ) {
      const stateTo = await this.canUpdateState(stateUpdate, dummyObjectId)
      if(stateTo) {
        const updateState = await this._UpdateState(dummyObjectId, stateTo)
        return updateState
      } else {
        throw new Error(`State transition not found`)
      }
    }
  

  async canUpdateState(stateUpdate: StateUpdateDto, dummyObjectId: number) {
    const dummyObject = await prisma.dummyObject.findUnique({
      where: {
        dummyObjectId: dummyObjectId
      }
    })  

    const transitionGroup = await prisma.stateTransitionGroup.findUnique({
      where: {
        code: stateUpdate.group
      }
    })

    const DummyObjectEvent = await prisma.stateEvent.findUnique({
      where: {
        code: stateUpdate.event
      }
    })

    console.log(dummyObjectId)

    if(!transitionGroup) {
      throw new Error(`State transition group ${stateUpdate.group} not found`)
    }

    if(!dummyObject) {
      throw new Error(`Dummy object ${dummyObjectId} not found`)
    }

    if(!DummyObjectEvent) {
      throw new Error(`Dummy object event ${stateUpdate.event} not found`)
    }

    const stateTransition = await prisma.stateTransition.findUnique({
      where: {
        groupId_eventId_fromId: {
          groupId: transitionGroup.stateTransitionGroupId,
          eventId: DummyObjectEvent.stateEventId,
          fromId: dummyObject.stateId
        }
      },
      select: {
        toId: true,
        eventId: true
      }
    })

    if(!stateTransition) {
      throw new Error(`State transition not found`)
    }

    return stateTransition

  }

  private async _UpdateState(
    dummyObjectId: number,
    stateTo: {
      toId: number
      eventId: number
    }
  ) {

    const dummyObjectUpdated = await prisma.dummyObject.update({
        where: { 
          dummyObjectId
        },
        data: {
          stateId: stateTo.toId,
        }
    })

    const stateHistoryRecord = await prisma.dummyObjectStateHistory.create({
      data: {
        dummyObjectId: dummyObjectUpdated.dummyObjectId,
        stateId: dummyObjectUpdated.stateId,
        eventId: stateTo.eventId
      }
    })

    return stateHistoryRecord
        

}

}

export const stateMachineService = new StateMachineService()