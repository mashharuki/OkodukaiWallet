import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { FactoryCreated } from "../generated/FactoryManager/FactoryManager"

export function createFactoryCreatedEvent(
  factoryId: BigInt,
  factoryAddress: Address
): FactoryCreated {
  let factoryCreatedEvent = changetype<FactoryCreated>(newMockEvent())

  factoryCreatedEvent.parameters = new Array()

  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "factoryId",
      ethereum.Value.fromUnsignedBigInt(factoryId)
    )
  )
  factoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "factoryAddress",
      ethereum.Value.fromAddress(factoryAddress)
    )
  )

  return factoryCreatedEvent
}
